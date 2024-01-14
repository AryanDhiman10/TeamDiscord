// initial-profile.tsx
import { db } from "@/lib/db";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";

export const initialProfile = async () => {

  const session = await getServerSession(options);

  if (!session) {
    return redirect("/api/auth/signin");
  }

  const { user } = session;

  const profile = await db.profile.findUnique({
    where: {
      userId: user.id
    }
  });

  if (profile) {
    return profile;
  }

  const newProfile = await db.profile.create({
    data: {
      userId: user.id,
      name: user.name,
      imageUrl: user.image,
      email: user.email
    }
  });

  return newProfile;
};
