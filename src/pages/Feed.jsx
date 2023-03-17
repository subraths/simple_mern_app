import { Suspense, useState } from "react";
import {
  Await,
  defer,
  Form,
  Link,
  useActionData,
  useLoaderData,
} from "react-router-dom";
import { createPost, getFeed } from "../api";

export async function loader() {
  return defer({ posts: getFeed() });
}

export async function action(obj) {
  const formData = await obj.request.formData();
  const title = formData.get("title");
  const content = formData.get("content");
  try {
    const data = await createPost({ title, content });
    return data;
  } catch (err) {
    return { error: err.message };
  }
}

export default function Feed() {
  const loader = useLoaderData();
  const actionData = useActionData();
  console.log(actionData?.message);
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal((prev) => !prev);
  };

  return (
    <>
      <h2>Feed</h2>
      <Suspense fallback={<span>Loading...</span>}>
        <Await resolve={loader.posts}>
          {(posts) => {
            return posts.map((post) => (
              <Link to={post._id} key={post._id}>
                <h3>{post.title}</h3>
                <p>{post.content}</p>
              </Link>
            ));
          }}
        </Await>
      </Suspense>
      <button onClick={toggleModal}>add post</button>
      {modal && (
        <Form action="/feed" method="post" onSubmit={toggleModal}>
          <h2>Add post</h2>
          <input type="text" name="title" placeholder="title" />
          <input type="text" name="content" placeholder="content" />
          <button type="submit">Add new post</button>
        </Form>
      )}
    </>
  );
}
