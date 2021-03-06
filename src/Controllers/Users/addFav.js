module.exports = async (req, res) => {
 const itemId = req.body.itemId;
 const favList = res.user.favList;
 try {
  if (favList.includes(itemId)) {
   return res.status(400).json("Error: already added");
  }
  res.user.favList.push(itemId);
  const updatedUser = await res.user.save();
  res.status(201).json(updatedUser);
 } catch (e) {
  res.status(400).json(e.message);
 }
};
