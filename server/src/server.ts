import express, { Request, Response } from "express";
import "dotenv/config";
import http from "http";
import cors from "cors";
import { sendEmailVerification } from "./nodemailer";
import ShortUniqueId from "short-unique-id";
import brcypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors());

const serveHttp = http.createServer(app);

app.use(express.json());

app.post("/sendEmailVerification", async (req: Request, res: Response) => {
  try {
    const { name, email } = req.body;
    const uid = new ShortUniqueId({ length: 10 });
    const token = uid();
    await sendEmailVerification(email, name, token).catch(console.error);
    const encryptedToken = await brcypt.hash(token, 10);
    return res.status(200).json({
      status: true,
      msg: `Email sent to ${email}`,
      token: encryptedToken,
    });
  } catch (error: any) {
    console.error(error.message);
    return res.status(500).json({
      status: false,
      msg: error.message,
    });
  }
});

app.post("/generateSession", async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const hashedPassword = await brcypt.hash(password, 10);

    const sessionToken = jwt.sign(
      { email, hashedPassword },
      process.env.JWT_SECRET!,
      {
        expiresIn: "1d",
      },
    );
    
    return res.status(200).json({
      status: true,
      msg: "The session has been generate",
      session: sessionToken,
    });
  } catch (error: any) {
    console.error(error.message);
    return res.status(500).json({
      status: false,
      msg: error.message,
    });
  }
});

app.post("/authSession", async (req: Request, res: Response) => {
  try {
    const sessionToken: string | undefined = req.headers.authorization
    const decode = jwt.verify(sessionToken!, process.env.JWT_SECRET!)
    return res.status(200).json({ status: true, session: decode })
  } catch (error) {
    return res.json({ status: false, msg: 'Expired or invalid token' })
  }
});

serveHttp.listen(process.env.PORT, () =>
  console.log(`Server started on port ${process.env.PORT}`),
);
