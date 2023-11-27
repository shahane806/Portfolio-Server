import mongoose from "mongoose";
//create userSchema
const MessageSchema = mongoose.Schema({
  data: {
    name: { type: String, required: false },
    subject: { type: String, required: false },
    email: { type: String, required: false },
    mobile: { type: String, required: false },
    message: { type: Number, required: false },
  },

  MessageSend: { type: Date, default: Date.now },
});

//create MessageModel

export default mongoose.model("MessageModel", MessageSchema);
