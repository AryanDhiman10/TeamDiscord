import { db } from "@/lib/db";
import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";

export const currentProfile = async () => {

  const session = await getServerSession(options);

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