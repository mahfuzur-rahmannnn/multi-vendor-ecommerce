const express = require("express");
const path = require("path");
const router = express.Router();
const { upload } = require("../multer");
const User = require("../model/user");
const ErrorHandler = require("../utils/ErrorHandler");
const fs = require("fs");

router.post("/create-user", upload.single("file"), async (req, res, next) => {
  const { name, email, password } = req.body;
  const userEmail = await User.findOne({ email });

  if (userEmail) {
    const filename = req.file.filename;
    const filePath = `uploads/${filename}`;
    fs.unlink(filePath, (err) => {
      if (err) {
        console.log(err);
        res.status(500).json({ message: "Error deleting file" });
      } else {
        res.json({ message: "File deleted successfully" });
      }
    });
    return next(new ErrorHandler("User already exist", 400));
  }

  const filename = req.file.filename;
  const fileUrl = path.join(filename);
  const user = {
    name: name,
    email: email,
    password: password,
    avatar: fileUrl,
  };

  const newUser = await User.create(user);
  res.status(201).json({
    success: true,
    newUser,
  });

  console.log(user);
});

module.exports = router;
