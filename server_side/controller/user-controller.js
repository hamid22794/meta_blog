import User from "../model/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Token from "../model/token.js";

export const signUp = async (request, response) => {
  try {
    const hashedPassword = await bcrypt.hash(request.body.password, 10);
    const user = {
      username: request.body.username,
      email: request.body.email,
      password: hashedPassword,
    };
    const newUser = new User(user);
    await newUser.save();
    response.status(200).json({ msg: "User Created Successfully" });
  } catch {
    response.status(500).json({ msg: "Error in creating user" });
  }
};

export const loginUser = async (request, response) => {
  const ACCESS_SECRET_KEY =
    "b64c6abd26fc679237957dad649c488be298e976512a13634b50f4adf73f93c7b439629dd398d50d138e150dee565d64a4e872a58affd32a8d731238a433a386";
  const REFRESH_SECRET_KEY =
    "0479f26b4c1eb50b33553d626af79b7ebbf19a0d90c96dac4eab0b961c9cd0e615b3c9bec3afaaea2ebe60ae54bddcead8dea1aa6bd251a398c319b1a2c0f4a7";

  let user = await User.findOne({ username: request.body.username });
  if (user==false) {
    return response.status(400).json({ msg: "User not found" });
  }
  try {
    let match = await bcrypt.compare(
      request.body.password,
      user.password
    );
    if (match == true) {
      const accessToken = jwt.sign(user.toJSON(), ACCESS_SECRET_KEY, {
        expiresIn: "15m",
      });
      const refreshToken = jwt.sign(user.toJSON(), REFRESH_SECRET_KEY);
      const newToken = new Token({ token: refreshToken });
      await newToken.save();
      return response.status(200).json({
        accessToken: accessToken,
        refreshToken: refreshToken,
        userData: user,
      });
    } else {
      return response.status(400).json({
        msg: "Incorrect Password",
      });
    }
  } catch (error) {
    return response.status(500).json({
      msg: "Incorrect username or password",
    });
  }
};

/* bcrypt
    .hash(request.body.password, 10)
    .then((hashedPassword) => {
      const user = new User({
        username: request.body.username,
        email: request.body.email,
        password: hashedPassword,
      });

      user.save().then((result) => {
          response.status(201).send({
            message: "User Created Successfully",
            result,
          });
        })
        .catch((error) => {
          response.status(500).send({
            message: "Error creating user",
            error,
          });
        });
    })
    .catch((e) => {
      response.status(500).send({
        message: "Password was not hashed successfully",
        e,
      });
    }); */
