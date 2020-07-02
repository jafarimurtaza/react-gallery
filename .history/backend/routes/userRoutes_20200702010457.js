import express from 'express';
import User from '../models/userModel';

const router = express.Router();

router.get("/api/users/createadmin", async (req, res ) => {
      try
      {
      const user = new User({
            name: 'Murtaza',
            email: 'codebymurtaza@gmail.com',
            password: '1234',
            isAdmin: true
      })
      const newUser = await user.save();
      res.send(user);

      } catch (error) {
            res.send({msg: error.message})
      }

})