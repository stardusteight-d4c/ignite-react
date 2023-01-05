import express, { Request, Response } from "express";
import "dotenv/config";
import http from "http";
import cors from "cors";
import { sendEmailVerification } from "./nodemailer";
import ShortUniqueId from "short-unique-id";
import brcypt from "bcrypt";

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

serveHttp.listen(process.env.PORT, () =>
  console.log(`Server started on port ${process.env.PORT}`),
);
