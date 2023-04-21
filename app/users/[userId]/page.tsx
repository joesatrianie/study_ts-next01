import getUser from "@/app/lib/getUser";
import getUserPost from "@/app/lib/getUserPost";
import { Suspense } from "react";
import UserPosts from "./components/UserPosts";

type Params = {
  params: {
    userId: string;
  };
};

export default async function UserPage({ params: { userId } }: Params) {
  const userData: Promise<User> = getUser(userId);
  const userPostData: Promise<User[]> = getUserPost(userId);
  //   const [user, userPosts] = await Promise.all([userData, userPostData]);

  const user = await userData;

  return (
    <>
      <h2>{user.name}</h2>
      <br />
      <Suspense fallback={<h2>Loading....</h2>}>
        <UserPosts promise={userPostData} />
      </Suspense>
    </>
  );
}
