import { useSession } from "next-auth/react";

export const currentUser = () => {
  var { data: session } = useSession();
  
  if(!session) return null;
  
  const { user } = session;
  
  return user;
};