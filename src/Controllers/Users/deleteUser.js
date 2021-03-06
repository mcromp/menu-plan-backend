const UserModel = require("../../Models/user.model");
const Calendar = require("../../Models/calendar.model");

module.exports = async (req, res) => {
 try {
  await Calendar.deleteMany({ userId: req.body.id }).exec();
  const deletedUser = await UserModel.findByIdAndDelete(req.body.id);
  if (!deletedUser) {
   return res.status(400).json({ error: "User not found" });
  }
  res.status(200).json(deletedUser);
 } catch (e) {
  res.status(500).json(e.message);
 }
};
