import React from "react";
import { Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import Dashoard from "./pages/Dashoard";
import Login from "./pages/Login";
import Home from "./pages/Home";
import { useDispatch, useSelector } from "react-redux";
import Notfound from "./pages/Notfound";
import { setData } from "./helpers/redux/slices/notificationSlice";
import { useEffect } from "react";
import axios from "axios";

const RouteApp = () => {
  const isLoggedIn = useSelector((state) => state.auth.accessToken);
  const isNeedToFetchNotification = useSelector(
    (state) => state.notification.requestUpdateNotification
  );
  const dispatch = useDispatch();

  const notificationsData = {
    notifications: [
      {
        id: 1,
        title: "New Message",
        message: "You have a new message from John.",
        lastMessageDate: "2023-09-16T15:45:00Z",
        read: false,
      },
      {
        id: 2,
        title: "Friend Request",
        message: "You have a new friend request from Sarah.",
        lastMessageDate: "2023-09-15T15:45:00Z",
        read: false,
      },
      {
        id: 3,
        title: "Event Reminder",
        message: "Don't forget about the event tomorrow!",
        lastMessageDate: "2023-09-14T15:45:00Z",
        read: false,
      },
    ],
  };

  const fetchNotifications = async () => {
    try {
      // const response = await fetch("/public/mock/notification.json");
      // console.log(response);
      const response = notificationsData;
      // console.log(response)
      dispatch(
        setData({
          items: response.notifications,
          requestUpdateNotification: false,
        })
      );
    } catch (e) {
    } finally {
    }
  };

  useEffect(() => {
    if (!isNeedToFetchNotification) return;
    fetchNotifications();
  }, [isNeedToFetchNotification]);

  useEffect(() => {
    fetchNotifications();
  }, []);

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route
          exact
          path="*"
          element={
            <Notfound
              title="401 Unauthorized"
              body="Access Not Allowed: Please log in or register with an account that has access permissions."
            />
          }
        />

        {isLoggedIn ? (
          <>
            <Route exact path="/dashboard" element={<Dashoard />} />
          </>
        ) : (
          <>
            <Route
              exact
              path="*"
              element={
                <Notfound
                  title="401 Unauthorized"
                  body="Access Not Allowed: Please log in or register with an account that has access permissions."
                />
              }
            />
          </>
        )}
      </Routes>
    </>
  );
};

export default RouteApp;
