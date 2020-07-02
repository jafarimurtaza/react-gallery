import express from 'express';
import User from '../models/'
const router = express.Router();

router.get("/api/users/createadmin", async (req, res ) => {
      const user = new User({

      })
})