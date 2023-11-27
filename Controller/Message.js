import MessageModel from "../Model/Message.js";
export const sendMessage = async (req, res) => {
  const data = req.body;
  try {
    const createNewMessage = await MessageModel.create({
      data: {
        name: data?.payload?.name,
        subject: data?.payload?.subject,
        email: data?.payload?.email,
        mobile: data?.payload?.mobile,
        message: data?.payload?.message,
      },
    });

    res.status(200).json({
      result: createNewMessage,
    });
  } catch (error) {
    console.log(error);
  }
};
