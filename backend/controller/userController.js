import User from "../models/userModel.js";

const authUser = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.password) === password) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      username: user.username,
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
};

const registerUser = async (req, res) => {
  const { name, email, username, password } = req.body;

  if (!name || !username || !email || !password) {
    return res.status(422).json({ error: "pleasae add all the fields" });
  }

  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  const user = await User.create({
    name,
    username,
    email,
    password,
  });

  if (user) {
    return res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      username: user.username,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
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

export { authUser, registerUser, updateUser, deleteUser };
