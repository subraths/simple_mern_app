import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./components/Layout";
import Feed, { action, loader as feedLoader } from "./pages/Feed";
import Home from "./pages/Home";
import Post, { loader as postLoader } from "./pages/Post";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="feed"
          element={<Feed />}
          loader={feedLoader}
          action={action}
        />
        <Route path="feed/:id" element={<Post />} loader={postLoader} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
