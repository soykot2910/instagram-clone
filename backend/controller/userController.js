import jwt from "jsonwebtoken";
import User from "../models/userModel.js";
import bcrypt from "bcryptjs";

const addUser = async (req, res) => {
  const { name, username, email, password } = req.body;

  if (!name || !username || !email || !password) {
    return res.status(422).json({ error: "pleasae add all the fields" });
  }

  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  bcrypt.hash(password, 12).then((hashPassword) => {
    const user = User.create({
      name,
      username,
      email,
      password: hashPassword,
    });
    if (user) {
      return res.status(201).json({ msg: "user created successfully" });
    } else {
      res.status(400);
      throw new Error("Invalid user data");
    }
  });
};

const getUser = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(422).json({ error: "please add email or passord" });
  }

  try {
    let user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({
        error: "User not exists",
      });
    }

    bcrypt.compare(password, user.password).then((doMatch) => {
      if (doMatch) {
        const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
        res.json({ token });
      } else {
        return res.status(401).json({ error: "Invalid email or password" });
      }
    });
  } catch (err) {
    throw new Error("Error");
  }
};

const updateUser = async (req, res) => {
  const user = await User.findById(req.params.id);

  if (user) {
    user.name = req.body.name || user.name;
    user.username = req.body.username || user.username;
    user.email = req.body.email || user.email;
    user.password = req.body.password || user.password;
    const updateUserData = await user.save();
    res.json({
      _id: updateUserData._id,
      name: updateUserData.name,
      username: updateUserData.username,
      email: updateUserData.email,
      password: updateUserData.password,
    });
  } else {
    res.status(400);
    throw new Error("User not found");
  }
};

const getUsers = async (req, res) => {
  const users = await User.find({});
  res.json(users);
};

const deleteUser = async (req, res) => {
  const user = await User.findById(req.params.id);

  if (user) {
    await user.remove();
    res.json({ message: "User remvoed" });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
};

export { addUser, getUser, getUsers, updateUser, deleteUser };
