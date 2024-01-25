import { db } from "@/lib/db";
import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";
import { NextApiRequest, NextApiResponse } from "next";

export const currentProfilePages = async (req: NextApiRequest, res: NextApiResponse) => {

  const session = await getServerSession(req, res, options);

  if (!session) {
    return null;
  }

  const { user } = session;

  const profile = await db.profile.findUnique({
    where: {
      userId: user.id
    }
  });

  return profile;
};