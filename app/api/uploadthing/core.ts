import { getServerSession } from "next-auth";
import { createUploadthing, type FileRouter } from "uploadthing/next";
 
const f = createUploadthing();

const handleAuth = async () => {
  const session = await getServerSession();

  if(!session) throw new Error("Unauthorized");
  
  const { user } = session;
  return user.id;
}
 
export const ourFileRouter = {
  serverImage: f({ image: { maxFileSize: "4MB", maxFileCount: 1 } })
    .middleware(() => handleAuth() )
    .onUploadComplete(() => {}),
    messageFile: f(['image', "pdf"])
    .middleware(() => handleAuth() )
    .onUploadComplete(() => {}),
} satisfies FileRouter;
 
export type OurFileRouter = typeof ourFileRouter;