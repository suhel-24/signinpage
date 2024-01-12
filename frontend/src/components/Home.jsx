// Home.js

import { useLocation } from "react-router-dom";

const Home = () => {
  const location = useLocation();
  const email = location.state?.email || "Guest"; // Default to 'Guest' if email is not available

  return (
    <div>
      <h1>Welcome to the Home page</h1>
      <p>Email: {email}</p>
    </div>
  );
};

export default Home;
