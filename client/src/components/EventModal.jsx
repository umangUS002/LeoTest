import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";

const EventModal = ({ modalOpen, selectedEvent, setModalOpen }) => {
  const [contestant, setcontestant] = useState({
    name: "", email: "", branch: "", phone: "", teamName: "", batch: "", gender: "", degree: "", caption: "", reason: "",
  });

  const [image, setImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);

  if (!modalOpen || !selectedEvent) return null;

  const onClose = () => { setModalOpen(false); setIsRegistered(false); };
  const handleChange = (e) => { setcontestant({ ...contestant, [e.target.name]: e.target.value }); };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const formData = new FormData();
      formData.append('contestant', JSON.stringify(contestant));  // ✅ correct object
      formData.append('image', image);

      const { data } = await axios.post("/api/registrations/register", formData, {
  headers: { "Content-Type": "multipart/form-data" },
});

      if (data.success) {
        toast.success("Registration Successful!");
        setcontestant({ name: "", email: "", branch: "", phone: "", teamName: "", batch: "", gender: "", degree: "", caption: "", reason: "", });
        setImage(null); setIsRegistered(true);
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
      <div className="relative w-full max-w-6xl rounded-2xl bg-gradient-to-b from-slate-900 to-slate-800 p-6 shadow-2xl border border-slate-700">

        {/* Close button */}
        <button
          onClick={() => setModalOpen(false)}
          className="absolute top-4 right-4 text-slate-400 hover:text-white transition"
        >
          ✕
        </button>

        {/* Title */}
        <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-2">
          {selectedEvent.name}
        </h2>

        {/* Status */}
        <span
          className={`inline-block mb-6 text-sm px-3 py-1 rounded-full ${selectedEvent.status === "Upcoming"
            ? "bg-green-500/20 text-green-400"
            : selectedEvent.status === "Ongoing"
              ? "bg-yellow-500/20 text-yellow-400"
              : "bg-red-500/20 text-red-400"
            }`}
        >
          {selectedEvent.status}
        </span>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* LEFT SIDE – Event Details */}
          <div className="space-y-6 text-slate-300">
            <div>
              <h3 className="text-lg font-semibold text-cyan-400">Description</h3>
              <p className="mt-1">Contestants must walk on the ramp with a partner, showcasing sheer grace and confidence. Participants are expected to present a fashionable display, and they will be judged based on their walk. After elimination, the selected contestants will face the panel of judges and participate in a questionnaire round to ace the event. </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-cyan-400">Theme</h3>
              <h4>Threads of Time</h4>
              <p className="mt-1">A celebration of fashion, expression, and individuality — where every outfit is more than fabric, it is a story. From ancient charm to modern aesthetics, this theme weaves together journeys across eras, letting the past and the future meet in one defining moment of elegance and identity.</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-cyan-400">Rules & Regulations</h3>
              <ul className="list-disc list-inside mt-1 space-y-1">
                <li>Dress must symbolise the theme.</li>
                <li>There will be two rounds of shortlisting and one final round.</li>
                <li>The first round of shortlisting will be based on a picture and caption, along with the number of impressions on their pictures.</li>
                <li>For the second round of shortlisting, candidates who have successfully passed the first round will be evaluated based on their walk, talk, and confidence. The final decision will be made by the club seniors/judges.</li>
                <li>The final round will be held on 7th September and will be judged by our guest judges.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-cyan-400">Theme</h3>
              <h4>Threads of Time</h4>
              <p className="mt-1">
                <ol>
                  <li>Manish - 9608402237</li>
                  <li>Nandni - 9973437400</li>
                  <li>Sanu - 8544349672</li>
                </ol>
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-cyan-400">Deadline</h3>
              <p className="mt-1">4th September, 6:00 PM </p>
            </div>

          </div>

          {/* RIGHT SIDE – Registration Form */}
          <div> {isRegistered ? (
            <div className="text-center space-y-4">
              <h3 className="text-lg font-semibold text-green-400">You are successfully registered!</h3>
              <p className="text-slate-300">Join our community for updates:</p>
              <div className="flex flex-col gap-3">
                <a href="https://chat.whatsapp.com/J1ydniCk9JR1Tngwr6ZQA8?mode=ems_copy_h_c" target="_blank" rel="noopener noreferrer" className="w-full rounded-lg bg-green-500/20 text-green-400 px-4 py-2 font-medium hover:bg-green-500/30 transition" > Join Event WhatsApp Group </a>
                <a href="https://www.instagram.com/leoclub_bitmesra?igsh=MTZ4enBodXQycjNwcA==" target="_blank" rel="noopener noreferrer" className="w-full rounded-lg bg-pink-500/20 text-pink-400 px-4 py-2 font-medium hover:bg-pink-500/30 transition" > Event updates on Instagram Page </a>
              </div>
            </div>) : (
            <form className="space-y-4 max-h-[70vh] max-sm:overflow-y-auto pr-2" onSubmit={handleSubmit}>
              <input type="text" name="name" placeholder="Full Name" value={contestant.name} onChange={handleChange} required className="w-full rounded-lg bg-slate-800 px-4 py-2 text-white placeholder-slate-400 border border-slate-700 focus:border-cyan-400 focus:ring focus:ring-cyan-400/50" />
              <input type="email" name="email" placeholder="Email" value={contestant.email} onChange={handleChange} required className="w-full rounded-lg bg-slate-800 px-4 py-2 text-white placeholder-slate-400 border border-slate-700 focus:border-cyan-400 focus:ring focus:ring-cyan-400/50" />
              <input type="text" name="branch" placeholder="Branch" value={contestant.branch} onChange={handleChange} className="w-full rounded-lg bg-slate-800 px-4 py-2 text-white placeholder-slate-400 border border-slate-700 focus:border-cyan-400 focus:ring focus:ring-cyan-400/50" />
              <input type="tel" name="phone" placeholder="Whatsapp Number" value={contestant.phone} onChange={handleChange} className="w-full rounded-lg bg-slate-800 px-4 py-2 text-white placeholder-slate-400 border border-slate-700 focus:border-cyan-400 focus:ring focus:ring-cyan-400/50" />
              <input type="text" name="teamName" placeholder="Team Name (leave blank if individual)" value={contestant.teamName} onChange={handleChange} className="w-full rounded-lg bg-slate-800 px-4 py-2 text-white placeholder-slate-400 border border-slate-700 focus:border-cyan-400 focus:ring focus:ring-cyan-400/50" />
              <input type="text" name="gender" placeholder="Gender" value={contestant.gender} onChange={handleChange} className="w-full rounded-lg bg-slate-800 px-4 py-2 text-white placeholder-slate-400 border border-slate-700 focus:border-cyan-400 focus:ring focus:ring-cyan-400/50" />
              <input type="text" name="batch" placeholder="Batch" value={contestant.batch} onChange={handleChange} className="w-full rounded-lg bg-slate-800 px-4 py-2 text-white placeholder-slate-400 border border-slate-700 focus:border-cyan-400 focus:ring focus:ring-cyan-400/50" />
              <input type="text" name="degree" placeholder="Degree (Masters/Bachelors)" value={contestant.degree} onChange={handleChange} className="w-full rounded-lg bg-slate-800 px-4 py-2 text-white placeholder-slate-400 border border-slate-700 focus:border-cyan-400 focus:ring focus:ring-cyan-400/50" />
              <input type="file" accept="image/*" onChange={(e) => setImage(e.target.files[0])} className="w-full rounded-lg bg-slate-800 px-4 py-2 text-white border border-slate-700 focus:border-cyan-400 focus:ring focus:ring-cyan-400/50" />
              <input type="text" name="caption" placeholder="Caption" value={contestant.caption} onChange={handleChange} className="w-full rounded-lg bg-slate-800 px-4 py-2 text-white placeholder-slate-400 border border-slate-700 focus:border-cyan-400 focus:ring focus:ring-cyan-400/50" />
              <input type="text" name="reason" placeholder="Why do you want to become Mr./Miss Pantheon'25?" value={contestant.reason} onChange={handleChange} className="w-full rounded-lg bg-slate-800 px-4 py-2 text-white placeholder-slate-400 border border-slate-700 focus:border-cyan-400 focus:ring focus:ring-cyan-400/50" />
              <button type="submit" disabled={isLoading} className="w-full mt-4 rounded-lg bg-gradient-to-r from-green-400 via-cyan-400 to-blue-500 py-2 font-semibold text-white shadow-lg hover:scale-105 hover:shadow-cyan-500/40 transition disabled:opacity-50">
                {isLoading ? "Submitting..." : "Submit Registration"}
              </button>
            </form>)}
          </div>
        </div>
      </div>
    </div>);
};

export default EventModal;
