import { React, useEffect } from "react";
//google-auth
import { GoogleOAuthProvider } from "@react-oauth/google";

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
import Profile from "./Components/Profile/Profile";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch]);

  return (
    <GoogleOAuthProvider clientId="1088162561582-l5hgmi4qvv457nfjlbmfpt2g262v6gds.apps.googleusercontent.com">
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="addpost" element={<Form />} />
          <Route path="editpost/:currentId" element={<Form />} />
          <Route path="viewpost/:currentId" element={<Onepost />} />
          <Route path="myprofile/:currentId" element={<Profile />} />
        </Route>
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </GoogleOAuthProvider>
  );
}

export default App;
