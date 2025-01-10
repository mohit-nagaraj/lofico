import jwt from 'jsonwebtoken';

export const createToken = (_id) => {
    const jwtkey = process.env.JWT_SECRET;
    return jwt.sign({ _id }, jwtkey, { expiresIn: '1d' });
}

export const authenticateToken = (req, res, next) => {  
    const jwtkey = process.env.JWT_SECRET;
    
    const authHeader = req.headers['authorization'];  
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) return res.sendStatus(401); 

    jwt.verify(token, jwtkey, (err, user) => {  
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });  
}  