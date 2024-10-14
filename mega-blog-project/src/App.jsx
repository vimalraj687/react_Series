import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import authservice from "./appwrite/authwrite";
import { login, logout } from "./store/authSlice";
import { Footer, Header } from "./appwrite/component";
const App = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authservice
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  }, []);

  return !loading ? (
    <>
      <div className="min-h-screen flex flex-wrap content-between bg-gray-400">
        <div className="w-full block">
          <Header />
          <main>Todo {/* <Outlet/> */}</main>
          <Footer />
        </div>
      </div>
    </>
  ) : null;
};

export default App;
