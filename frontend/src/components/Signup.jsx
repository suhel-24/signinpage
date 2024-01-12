import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      // Send a POST request to your signup endpoint
      const response = await axios.post("http://localhost:4000/signup", {
        email: email,
        password: password,
      });

      // Handle the response as needed
      console.log("Signup successful", response.data);

      // Redirect to the home page or login page after successful signup
      navigate('/', { state: { email: email } });
    } catch (error) {
      // Handle errors
      setError("there is a error please check")
      console.error("Signup failed", error);
    }
  };

  return (
    <>
      <div className="flex flex-col justify-center min-h-screen overflow-hidden overflow-y-hidden">
        <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl overflow-hidden overflow-y-hidden">
          <h1 className="text-3xl font-semibold text-center text-purple-700">Sign Up</h1>
          <form className="mt-6" onSubmit={handleSignup}>
            <div className="mb-2">
              <label htmlFor="email" className="block text-sm font-semibold text-gray-800">
                Email
              </label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40" />
            </div>
            <div className="mb-2">
              <label htmlFor="password" className="block text-sm font-semibold text-gray-800">
                Password
              </label>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40" />
            </div>
            {error && (
              <div className="text-red-500 text-xl mt-2 absolute">
                {error}
                {alert("wrong credemtials")}
              </div>
            )}
            <div className="mt-6">
              <button type="submit" className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
