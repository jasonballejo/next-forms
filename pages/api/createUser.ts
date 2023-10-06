import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/prisma/client";

type userProps = {
  name: string;
  number: string;
  email: string;
  address: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const user: userProps = JSON.parse(req.body);
    if (req.method === "POST") {
      //Check for name
      if (!user.name.length) {
        return res
          .status(500)
          .json({ message: "Please do not leave this empty" });
      }
      try {
        const data = await prisma.user.create({
          data: {
            name: user.name,
            number: user.number,
            email: user.email,
            address: user.address,
          },
        });
        res.status(200).json(data);
      } catch (error) {
        return res.status(500).json({ message: "Error creating a new post" });
      }
    }
  } catch (error) {
    return res.status(500).json(error);
  }
}
