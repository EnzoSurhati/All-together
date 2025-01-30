require("dotenv").config();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

router.use(express.json());

router.post("/", async (req, res, next) => {
  const { email, password } = req.body;
  try {
    console.log("inside try");
   const user = await prisma.user.findMany({
    where: {email},
   });
    if (!user) {
      return res.status(401).json({ message: "Not Authorized" });
    }
    const matchingUser = await bcrypt.compare(password, user[0].password);
    if (matchingUser) {
      const token = jwt.sign(
        { email, id: user.id },
        process.env.JWT_SECRET || "secret"
      );
      return res.json({ token });
    }
  } catch (error) {
    res.status(404).json({message: "Something went wrong. Try again!", error });
  }
});

module.exports = router;
