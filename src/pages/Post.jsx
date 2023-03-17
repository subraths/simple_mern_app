import { Suspense } from "react";
import { Await, defer, useLoaderData } from "react-router-dom";
import { getPost } from "../api";

export async function loader(obj) {
  return defer({ post: getPost(obj.params.id) });
}

export default function Post() {
  const loader = useLoaderData();
  return (
    <div>
      <h2>your post</h2>
      <Suspense fallback={<span>loading...</span>}>
        <Await resolve={loader.post}>
          {(post) => {
            return (
              <div key={post._id}>
                <h3>{post.title}</h3>
                <p>{post.content}</p>
              </div>
            );
          }}
        </Await>
      </Suspense>
    </div>
  );
}
