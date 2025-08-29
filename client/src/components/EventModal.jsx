import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";

const EventModal = ({ modalOpen, selectedEvent, setModalOpen }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    branch: "",
    phone: "",
    teamName: "",
    batch: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false); // ✅ new state

  if (!modalOpen || !selectedEvent) return null;

  const onClose = () => {
    setModalOpen(false);
    setIsRegistered(false); // ✅ reset modal state on close
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { data } = await axios.post("/api/registrations/register", {
        ...formData,
        eventId: selectedEvent._id,
      });

      if (data.success) {
        toast.success("Registration Successful!");
        setFormData({
          name: "",
          email: "",
          branch: "",
          phone: "",
          teamName: "",
          batch: "",
        });
        setIsRegistered(true); // ✅ switch to success view
      } else {
        toast.error(data.message || "Failed to register");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm px-4">
      <div className="relative w-full max-w-lg rounded-2xl bg-gradient-to-b from-slate-900 to-slate-800 p-6 shadow-2xl border border-slate-700">
        
        {/* Close button */}
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-slate-400 hover:text-white transition"
        >
          ✕
        </button>

        {/* Title */}
        <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
          {selectedEvent.name}
        </h2>

        {/* Status */}
        <span
          className={`inline-block mt-1 mb-4 text-sm px-3 py-1 rounded-full ${
            selectedEvent.status === "Upcoming"
              ? "bg-green-500/20 text-green-400"
              : selectedEvent.status === "Ongoing"
              ? "bg-yellow-500/20 text-yellow-400"
              : "bg-red-500/20 text-red-400"
          }`}
        >
          {selectedEvent.status}
        </span>

        {/* ✅ Success View */}
        {isRegistered ? (
          <div className="text-center space-y-4">
            <h3 className="text-lg font-semibold text-green-400">You are successfully registered!</h3>
            <p className="text-slate-300">Join our community for updates:</p>
            <div className="flex flex-col gap-3">
              <a
                href="https://chat.whatsapp.com/J1ydniCk9JR1Tngwr6ZQA8?mode=ems_copy_h_c" // ✅ replace with real WhatsApp link
                target="_blank"
                rel="noopener noreferrer"
                className="w-full rounded-lg bg-green-500/20 text-green-400 px-4 py-2 font-medium hover:bg-green-500/30 transition"
              >
                Join Event WhatsApp Group
              </a>
              <a
                href="https://www.instagram.com/leoclub_bitmesra?igsh=MTZ4enBodXQycjNwcA==" // ✅ replace with your Insta page
                target="_blank"
                rel="noopener noreferrer"
                className="w-full rounded-lg bg-pink-500/20 text-pink-400 px-4 py-2 font-medium hover:bg-pink-500/30 transition"
              >
                Event updates on Instagram Page
              </a>
            </div>
          </div>
        ) : (
          /* ✅ Registration Form */
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full rounded-lg bg-slate-800 px-4 py-2 text-white placeholder-slate-400 border border-slate-700 focus:border-cyan-400 focus:ring focus:ring-cyan-400/50"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full rounded-lg bg-slate-800 px-4 py-2 text-white placeholder-slate-400 border border-slate-700 focus:border-cyan-400 focus:ring focus:ring-cyan-400/50"
            />
            <input
              type="text"
              name="branch"
              placeholder="Branch"
              value={formData.branch}
              onChange={handleChange}
              className="w-full rounded-lg bg-slate-800 px-4 py-2 text-white placeholder-slate-400 border border-slate-700 focus:border-cyan-400 focus:ring focus:ring-cyan-400/50"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Whatsapp Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full rounded-lg bg-slate-800 px-4 py-2 text-white placeholder-slate-400 border border-slate-700 focus:border-cyan-400 focus:ring focus:ring-cyan-400/50"
            />
            <input
              type="text"
              name="teamName"
              placeholder="Team Name (leave blank if individual)"
              value={formData.teamName}
              onChange={handleChange}
              className="w-full rounded-lg bg-slate-800 px-4 py-2 text-white placeholder-slate-400 border border-slate-700 focus:border-cyan-400 focus:ring focus:ring-cyan-400/50"
            />
            <input
              type="text"
              name="batch"
              placeholder="Batch"
              value={formData.batch}
              onChange={handleChange}
              className="w-full rounded-lg bg-slate-800 px-4 py-2 text-white placeholder-slate-400 border border-slate-700 focus:border-cyan-400 focus:ring focus:ring-cyan-400/50"
            />

            <button
              type="submit"
              disabled={isLoading}
              className="w-full mt-4 rounded-lg bg-gradient-to-r from-green-400 via-cyan-400 to-blue-500 py-2 font-semibold text-white shadow-lg hover:scale-105 hover:shadow-cyan-500/40 transition disabled:opacity-50"
            >
              {isLoading ? "Submitting..." : "Submit Registration"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default EventModal;
