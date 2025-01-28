import validator from "validator";
import bcrypt from "bcryptjs";
import { User } from "../models/userModel.js";
import { createToken } from "../utils/jwt.js";
import jwt from "jsonwebtoken"
import { EmailConfig } from "../models/EmailConfig.js";
import nodemailer from "nodemailer";

export const createUser = async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({ message: "Please fill all fields" });
  }
  if (validator.isEmail(email) === false) {
    return res.status(400).json({ message: "Invalid email" });
  }
  if (validator.isStrongPassword(password) === false) {
    return res.status(400).json({ message: "Password is not strong enough" });
  }
  try {
    let existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const user = await User.create({ name, email, password: hashedPassword });
    const token = createToken(user._id);

    res
      .status(201)
      .json({ id: user._id, name: user.name, email: user.email, token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};


export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: "Please fill all fields" });
  }
  if (validator.isEmail(email) === false) {
    return res.status(400).json({ message: "Invalid email" });
  }
  try {
    let user = await User.findOne({
      email,
    });
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    const isMatch = await bcrypt.compare(password, user.password); // No change needed here
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    const token = createToken(user._id);
    res.json({ id: user._id, name: user.name, email: user.email, token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};


export const findOneUser = async (req, res) => {
  const id = req.params.userId;
  try {
    const user = await User.findById(id);
    res.json({
      id: user._id,
      name: user.name,
      email: user.email,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

export const findAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};


export const googleAuth = async(req, res) => {
  try {

    if (!req.user) {
      return res.status(400).json({ message: "User authentication failed." });
    }

    const { googleId, name, email } = req.user;

    let existingUser = await User.findOne({ googleId}).lean();
    console.log("Existing User Found: ", existingUser);

    if (!existingUser) {
      existingUser = new User({
        googleId, 
        name,
        email,
      });

      await existingUser.save();
    }
    const token = createToken(existingUser._id);

    req.session.user = existingUser;

    res.status(200).json({
      id: existingUser._id,
      name: existingUser.name,
      email: existingUser.email,
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Server Failed"
    });
  }
}


// forgotPassword Route
export const forgotPassword = async(req,res) => {
  const {email} = req.body;
  try {
    const user = await User.findOne({ email }).exec();
    if(!user){
      return res.status(404).json({
        message: "User not found"
      })
    }


   const emailConfig = await EmailConfig.findOne();
   if(!emailConfig){
    return res.status(500).json({ message: "Email configuration not found" });
   }
   
    const { service, user: emailUser, password, clientUrl } = emailConfig;

    const resetToken = jwt.sign({id: user._id}, process.env.JWT_SECRET, {
      expiresIn: "1h"
    })

    user.resetPasswordToken = resetToken;
    user.resetPasswordExpires = Date.now() + 3600000; 
    await user.save();

    const transporter = nodemailer.createTransport({
      service,
      auth: {
        user: emailUser, 
        pass: password, 
      },
    });

    const resetUrl = `${clientUrl}/reset-password?token=${resetToken}`;
    const mailOptions = {
      from: emailUser,
      to: email,
      subject: "Password Reset Request",
      html: `
        <h1>Password Reset Request</h1>
        <p>Click the link below to reset your password. This link is valid for 1 hour.</p>
        <a href="${resetUrl}">Reset Password</a>
      `,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Password reset email sent" });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Internal Server error"
    })
  }

}