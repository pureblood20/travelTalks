import Auth from "../Models/auth.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const signIn = async (req, res) => {
  try {
    const { password, email } = req.body;
    const existingUser = await Auth.findOne({ email });

    if (!existingUser) return res.status(404).json({ error: "No users found" });

    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );

    if (!isPasswordCorrect)
      return res.status(404).json({ error: "Wrong password" });

    const token = jwt.sign(
      { email: existingUser.email, id: existingUser._id },
      "secrectKey",
      { expiresIn: "1h" }
    );

    res.status(201).json({ result: existingUser, token });
  } catch (error) {
    console.log("error in sign in", error);
  }
};

export const signUp = async (req, res) => {
  try {
    const { email, password, confirmPassword, firstName, lastName } = req.body;

    const existingUser = await Auth.findOne({ email });

    if (existingUser)
      return res.status(404).json({ error: "User already exist" });

    if (confirmPassword !== password)
      return res.status(404).json({ error: "password doesnt match" });

    const hashPassword = await bcrypt.hash(password, 12);

    const result = await Auth.create({
      email,
      password: hashPassword,
      name: `${firstName} ${lastName}`,
    });

    const token = jwt.sign(
      { email: result.email, id: result._id },
      "secrectKey",
      { expiresIn: "1h" }
    );

    res.status(201).json({ result: result, token });
  } catch (error) {
    console.log("error in sign up", error);
  }
};

export const getMyProfile = async (req, res) => {
  try {
    const { id: _id } = req.params;
    console.log("feasaaf");
    const mypro = await Auth.findOne(_id);
    res.json(mypro);
  } catch (error) {
    console.log(error);
  }
};
