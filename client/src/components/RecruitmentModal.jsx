import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";

const RecruitmentModal = ({ recruitmentModal, setRecruitmentModal }) => {
  const [recruit, setRecruit] = useState({
    name: "",
    roll: "",
    email: "",
    phone: "",
    branch: "",
    batch: "",
    gender: "",
    subTeam: "",
    achievements: "",
    samples: null, // file
    ques1: "",
    ques2: "",
    ques3: "",
    ques4: "",
    query: ""
  });

  const [image, setImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);

  if (!recruitmentModal) return null;

  const onClose = () => {
    setRecruitmentModal(false);
    setIsRegistered(false);
  };

  const handleChange = (e) => {
    setRecruit({ ...recruit, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setRecruit({ ...recruit, samples: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const formData = new FormData();
      formData.append('recruit', JSON.stringify(recruit));  // ✅ correct object
      formData.append('image', image);
      const { data } = await axios.post(
        "/api/registrations/registerRecruit",
        formData
      );

      if (data.success) {
        toast.success("Recruitment Registration Successful!");
        setRecruit({
          name: "",
          roll: "",
          email: "",
          phone: "",
          branch: "",
          batch: "",
          gender: "",
          subTeam: "",
          achievements: "",
          samples: null,
          ques1: "",
          ques2: "",
          ques3: "",
          ques4: "",
          query: ""
        });
        setIsRegistered(true);
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
    <div className="fixed inset-0 z-[100] flex items-start justify-center bg-black/70 backdrop-blur-sm px-4 py-6 overflow-y-auto">
      <div className="relative w-full max-w-4xl rounded-2xl bg-gradient-to-b from-slate-900 to-slate-800 p-6 shadow-2xl border border-slate-700">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="cursor-pointer absolute top-4 right-4 text-slate-400 hover:text-white transition"
        >
          ✕
        </button>

        {/* Title */}
        <h2 className="text-2xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-4 mt-5">
          Leo Club Recruitment 2025
        </h2>

        {/* Status */}
        <span className="inline-block mb-10 md:text-center mb-6 text-sm px-3 py-1 rounded-full bg-green-500/20 text-green-400">
          Applications Open
        </span>

        {isRegistered ? (
          <div className="text-center space-y-4 min-h-50vh text-center align-center justify-center">
            <h3 className="text-lg font-semibold text-green-400">
              You are successfully registered!
            </h3>
            <p className="text-slate-300">
              We’ll reach out to you soon with further updates.
            </p>
            <p className="text-slate-300">Join our community for updates:</p>
            <div className="flex flex-col gap-3">
              <a href="https://chat.whatsapp.com/K2glS4ioXd7BgcQ1dLvijH?mode=wwt" target="_blank" rel="noopener noreferrer" className="w-full rounded-lg bg-green-500/20 text-green-400 px-4 py-2 font-medium hover:bg-green-500/30 transition" > Leo'25 Recruitment Group </a>
              <a href="https://www.instagram.com/leoclub_bitmesra?igsh=MTZ4enBodXQycjNwcA==" target="_blank" rel="noopener noreferrer" className="w-full rounded-lg bg-pink-500/20 text-pink-400 px-4 py-2 font-medium hover:bg-pink-500/30 transition" > Recruitment Updates on Instagram Page </a>
            </div>
          </div>
        ) : (
          <form
            className="space-y-6 max-h-[120vh] overflow-y-auto pr-2"
            onSubmit={handleSubmit}
          >
            {/* Grid for basic details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { id: "name", label: "Full Name", type: "text" },
                { id: "roll", label: "Roll Number", type: "text" },
                { id: "email", label: "Email", type: "email" },
                { id: "phone", label: "Phone Number", type: "tel" },
                { id: "branch", label: "Branch", type: "text" },
                { id: "batch", label: "Batch (e.g. K25)", type: "text" },
                { id: "gender", label: "Gender", type: "text" },
              ].map((field) => (
                <div key={field.id}>
                  <label
                    htmlFor={field.id}
                    className="block text-sm font-medium text-slate-300 mb-1"
                  >
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    id={field.id}
                    name={field.id}
                    value={recruit[field.id]}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 rounded-lg border border-slate-700 bg-slate-800/60 text-slate-100 
                               placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 
                               hover:border-slate-400 transition"
                    placeholder={`Enter your ${field.label.toLowerCase()}`}
                  />
                </div>
              ))}

              {/* Sub-Team Dropdown */}
              <div>
                <label
                  htmlFor="subTeam"
                  className="block text-sm font-medium text-slate-300 mb-1"
                >
                  Preferred Sub-Team
                </label>
                <select
                  id="subTeam"
                  name="subTeam"
                  value={recruit.subTeam}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 rounded-lg border border-slate-700 bg-slate-800/60 text-slate-100 
                             focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 hover:border-slate-400 transition"
                >
                  <option value="">Select a team</option>
                  <option value="Graphic Designing">Design</option>
                  <option value="Video Editing">Video Editing</option>
                  <option value="Web Development">Web Development</option>
                </select>
              </div>
            </div>

            {/* Achievements */}
            <div>
              <label
                htmlFor="achievements"
                className="block text-sm font-medium text-slate-300 mb-1"
              >
                Achievements <span className="text-green-500">(optional)</span>
              </label>
              <textarea
                id="achievements"
                name="achievements"
                value={recruit.achievements}
                onChange={handleChange}
                rows={3}
                className="w-full px-3 py-2 rounded-lg border border-slate-700 bg-slate-800/60 text-slate-100 
                           placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 
                           hover:border-slate-400 transition"
                placeholder="List any achievements..."
              />
            </div>

            {/* File Upload */}
            <div>
              <label
                htmlFor="samples"
                className="block text-sm font-medium text-slate-300 mb-1"
              >
                Upload Samples of your work (pdf,images upto 10MB) - <span className="text-green-500">optional</span>
              </label>
              <input
                type="file"
                id="samples"
                name="samples"
                onChange={(e) => setImage(e.target.files[0])}
                className="w-full px-3 py-2 rounded-lg border border-slate-700 bg-slate-800/60 text-slate-100 
                           focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 hover:border-slate-400 transition file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:bg-cyan-500 file:text-white file:cursor-pointer"
              />
            </div>

            {/* Questions */}
            <div className="space-y-4">
              {[
                { id: "ques1", label: "Q1: Why do you want to join the LEO Club?", rows: 2 },
                { id: "ques2", label: "Q2: Describe a situation where you worked in a team to achieve something. What was your role?", rows: 2 },
                { id: "ques3", label: "Q3: How do you think you can contribute to the club’s social and cultural initiatives?", rows: 2 },
                { id: "ques4", label: "Q4: Suggest one small initiative that the club can take to positively impact society/college.", rows: 2 },
                { id: "query", label: "Any queries regarding the recruitment process: (optional)", rows: 2 },
              ].map((field) => (
                <div key={field.id}>
                  <label
                    htmlFor={field.id}
                    className="block text-sm font-medium text-slate-300 mb-1"
                  >
                    {field.label}
                  </label>
                  <textarea
                    id={field.id}
                    name={field.id}
                    value={recruit[field.id]}
                    onChange={handleChange}
                    rows={field.rows}
                    required
                    className="w-full px-3 py-2 rounded-lg border border-slate-700 bg-slate-800/60 text-slate-100 
                               placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 
                               hover:border-slate-400 transition"
                  />
                </div>
              ))}
            </div>

            <div className="flex flex-col ">
              <p className="text-slate-300">In case of any queries, contact:</p>
              <div className="flex flex-col mt-2">
                <p className="text-slate-300 text-sm">Umang : 7645878981</p>
                <p className="text-slate-300 text-sm">Hera : 9162178573</p>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="cursor-pointer w-full mt-4 rounded-lg bg-gradient-to-r from-green-400 via-cyan-400 to-blue-500 py-2 font-semibold text-white shadow-lg hover:shadow-cyan-500/40 transition disabled:opacity-50"
            >
              {isLoading ? "Submitting..." : "Submit Application"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default RecruitmentModal;
