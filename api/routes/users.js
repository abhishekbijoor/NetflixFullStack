const router = require("express").Router();
const User = require("../Models/Users");
const CryptoJS = require("crypto-js");
const verify = require("../verifyToken");
//Update
router.put("/:id", verify, async (req, res) => {
    console.log(req.user.id);
  if (req.user.id === req.params.id || req.user.isAdmin) {
    if (req.body.password) {
      req.body.password = CryptoJS.AES.encrypt(
        req.body.password,
        process.env.SECRET_KEY
      ).toString();
    }
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        }
      );
      res.status(200).json(updatedUser);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("You can update only your account");
  }
});

module.exports = router;
//Delete
//GET
//GET ALL
//GET USER STATS
