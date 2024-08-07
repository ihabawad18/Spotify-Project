import React from "react";
import Artists from "../Screens/User/Artists/Artists";
import Layout from "../Components/Layout/Layout";
import SingleArtist from "../Screens/User/SingleArtist/SingleArtist";
import Profile from "../Screens/User/Profile/Profile";

const UserRoutes = [
  {
    path: "/artists",
    element: (
      <Layout>
        <Artists />
      </Layout>
    ),
  },
  {
    path: "/artist/:id",
    element: (
      <Layout>
        <SingleArtist />
      </Layout>
    ),
  },
  {
    path: "/profile",
    element: (
      <Layout>
        <Profile />
      </Layout>
    ),
  },
];

export default UserRoutes;
