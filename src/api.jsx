export async function getFeed() {
  const res = await fetch("http://localhost:5000/feed/posts");
  const data = await res.json();
  if (!res.ok) {
    throw {
      message: data.message,
      status: data.status,
    };
  }
  return data.posts;
}

export async function createPost(postData) {
  const res = await fetch("http://localhost:5000/feed/posts", {
    method: "post",
    body: JSON.stringify(postData),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();
  if (res.status !== 201) {
    throw {
      message: data.message,
      status: data.status,
    };
  }
  return data;
}

export async function getPost(id) {
  const res = await fetch(`http://localhost:5000/feed/post/${id}`);
  const data = await res.json();
  return data.post;
}
