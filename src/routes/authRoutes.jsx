import Layout from "../Components/Layout/Layout";
import Login from "../Screens/Auth/Login/Login";
import SpotifyCallback from "../Screens/Auth/SpotifyCallback/SpotifyCallback";

const AuthRoutes = [
  {
    path: "/login",
    element: (
      <Layout>
        <Login />
      </Layout>
    ),
  },
  {
    path: "/callback",
    element: (
      <Layout>
        <SpotifyCallback />
      </Layout>
    ),
  },
];

export default AuthRoutes;
