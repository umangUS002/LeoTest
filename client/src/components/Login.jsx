import React, { useContext, useState, useRef } from 'react';
import { AppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';

function Login() {
  const { setToken, axios, toast } = useContext(AppContext);
  const navigate = useNavigate();

  console.log({ axios, setToken, toast }); 

  const [email, setEmail] = useState('leoclubbitmesra@gmail.com');
  const [password, setPassword] = useState('leoclub2025');
  const modalRef = useRef(null);

  const handleSubmit = async (e) => {
  e.preventDefault();
  console.log("Login form submitted");

  try {
    const { data } = await axios.post('/api/admin/login', { email, password });
    console.log("API Response:", data);

    if (data.success) {
      setToken(data.token);
      localStorage.setItem('token', data.token);
      axios.defaults.headers.common['Authorization'] = data.token;
      toast.success("Login successful");
      navigate('/admin'); // or any route you want
    } else {
      toast.error(data.message || "Login failed");
    }
  } catch (error) {
    console.error("Login error:", error.response?.data || error.message);
    toast.error(error.response?.data?.message || "Something went wrong");
  }
};

  const handleBackdropClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      navigate('/');
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden backdrop-blur-xl bg-primary"
      onClick={handleBackdropClick}
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-sm p-8 mx-4 border border-primary/30 shadow-xl shadow-primary/15 rounded-lg bg-white/10 text-center"
      >
        {/* Close Button */}
        <button
          onClick={() => navigate('/')}
          className="absolute top-2 right-3 text-white text-lg font-bold hover:text-red-400 transition"
          aria-label="Close"
        >
          &times;
        </button>

        <h1 className="text-3xl font-bold text-text1 mb-2">
          <span className="text-white/80 mr-1">Admin</span>Login
        </h1>
        <p className="text-white/70 text-sm mb-8">
          Enter your credentials to access the admin panel
        </p>

        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-y-6 text-white text-left">
          <div className="flex flex-col">
            <label className="text-sm mb-1">Email</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              required
              placeholder="Your Email Id"
              className="border-b-2 border-white/30 bg-transparent p-2 outline-none text-white placeholder:text-white/50"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm mb-1">Password</label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              required
              placeholder="Your Password"
              className="border-b-2 border-white/30 bg-transparent p-2 outline-none text-white placeholder:text-white/50"
            />
          </div>

          <button
            type="submit"
            className="cursor-pointer w-full py-3 font-medium bg-text1 text-white rounded hover:bg-primary/90 transition-all"
          >
            Login
          </button>

        </form>
      </div>
    </div>
  );
}

export default Login;
