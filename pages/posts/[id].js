import { useRouter } from "next/router";

const Post = () => {
  const router = useRouter();
  return (
    <div>
      <h1>{router.query.id}</h1>
    </div>
  );
};

export default Post;
