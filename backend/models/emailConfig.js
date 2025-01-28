import mongoose from "mongoose";

const emailConfigSchema = new mongoose.Schema({
  service: 
  { type: String, 
    required: true 
  }, 
  user: { 
    type: String, 
    required: true 
 }, 
  password: { 
    type: String, 
    required: true 
}, 
  clientUrl: { 
    type: String, 
    required: true 
}, 
});

const EmailConfig = mongoose.model("EmailConfig", emailConfigSchema);

export { EmailConfig };
