import { response } from "express";
import User from "../model/user.js";
import bcrypt from "bcrypt";

export const signUp = async (request, response) => {
  bcrypt
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
    });





    
  /* try {
    const user = await new User(request.body)
    user.save()
    response.status(200).json({msg:'User Signed Up successfully'})
  } catch (error) {
    response.status(500).json(error)
  } */
};
