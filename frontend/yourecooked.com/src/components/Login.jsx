"use client";
import React, { useState } from "react";
  
export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(false); // State to toggle between Login and SignUp

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignUp) {
      // Handle Sign Up logic
      console.log("Signing up with", { email, password });
    } else {
      // Handle Login logic
      console.log("Logging in with", { email, password });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-violet-500 to-blue-500">
    <div className="absolute top-0 left-0 w-48 h-48 bg-purple-300 rounded-full opacity-30 -z-10"></div>
     <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h1 className="text-3xl font-mono font-bold text-blue-600 text-center mb-6">You’re Cooked</h1>
        
        {/* Toggle between Login and SignUp */}
        <div className="text-center mb-4">
          <button
            className={`px-4 py-2 ${!isSignUp ? "font-bold font-mono text-violet-500" : "font-bold font-mono text-gray-500"} hover:underline`}
            onClick={() => setIsSignUp(false)}
          >
            Login
          </button>
          <span className="mx-2">|</span>
          <button
            className={`px-4 py-2 ${isSignUp ? "font-bold font-mono text-blue-500" : "font-bold font-mono text-gray-500"} hover:underline`}
            onClick={() => setIsSignUp(true)}
          >
            Sign Up
          </button>
        </div>
        
        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              className="mt-1 p-2 w-full border border-gray-300 rounded-md bg-violet-50" // Background color added here
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-semibold text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              className="mt-1 p-2 w-full border border-gray-300 rounded-md bg-violet-50" // Background color added here
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* If it's Sign Up, add a "Confirm Password" field */}
          {isSignUp && (
            <div>
              <label htmlFor="confirm-password" className="block text-sm font-semibold text-gray-700">Confirm Password</label>
              <input
                type="password"
                id="confirm-password"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md bg-violet-50" // Background color added here
                required
              />
            </div>
          )}

          <button
            type="submit"
            className="w-full py-2 bg-gradient-to-br from-violet-500 to-blue-500 text-white rounded-md hover:bg-gradient-to-br from-violet-500 to-blue-500"
          >
            <div className={`font-bold ${isSignUp ? "text-lg font-mono" : "text-lg font-mono"}`}>
            {isSignUp ? "Sign Up" : "Login"}
            </div>
          </button>
        </form>
      </div>
    </div>
  );
};


