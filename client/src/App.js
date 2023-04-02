import { React, useEffect } from "react";
//routes
import { Route, Routes } from "react-router-dom";
//hooks
import { useDispatch } from "react-redux";
import { getAllPosts } from "./store/posts/post.action";
//components
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Form from "./Components/Form/Form";
import Onepost from "./Components/Home/Posts/Post/Onepost/Onepost";
import Auth from "./Components/Auth/Auth";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="addpost" element={<Form />} />
          <Route path="editpost/:currentId" element={<Form />} />
          <Route path="viewpost/:currentId" element={<Onepost />} />
        </Route>
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </>
  );
}

export default App;
