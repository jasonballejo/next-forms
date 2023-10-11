import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/prisma/client";

export default async function GET(req: NextApiRequest, res: NextApiResponse) {
  try {
    // Get prisma to fetch the posts
    const data = await prisma.user.findMany();
    debugger;
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json(error);
  }
}
