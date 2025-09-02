import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";

const MMeventModal = ({ modalOpen, selectedEvent, setModalOpen }) => {
    const [mmContestant, setmmContestant] = useState({
        name: "", email: "", branch: "", phone: "", teamName: "", teamId: "", batch: "", name2: "", phone2: "", email2: "", name3: "", phone3: "", email3: ""  
    });

    const [isLoading, setIsLoading] = useState(false);
    const [isRegistered, setIsRegistered] = useState(false);

    if (!modalOpen || !selectedEvent) return null;

    const onClose = () => { setModalOpen(false); setIsRegistered(false); };
    const handleChange = (e) => { setmmContestant({ ...mmContestant, [e.target.name]: e.target.value }); };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {

            const { data } = await axios.post("/api/mmRegistrations/register", mmContestant);

            if (data.success) {
                toast.success("Registration Successful!");
                setmmContestant({ name: "", email: "", branch: "", phone: "", teamName: "", teamId: "", batch: "", name2: "", phone2: "", email2: "", name3: "", phone3: "", email3: ""});
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
            <div className="relative w-full max-w-6xl rounded-2xl bg-gradient-to-b from-slate-900 to-slate-800 p-6 shadow-2xl border border-slate-700">

                {/* Close button */}
                <button
                    onClick={() => setModalOpen(false)}
                    className="cursor-pointer absolute top-4 right-4 text-slate-400 hover:text-white transition"
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
                            <p className="mt-1">Brace yourselves for the return of "Murder Mystery 2025", the most anticipated event of the year, hosted by the Leo Club! After last year's massive success, this thrilling contest is back, now even more captivating and mysterious. Teams of 3-4 detectives will work together to solve complex riddles, traverse hidden locations, and uncover the final mystery. With unexpected twists and intense moments, it's your chance to rise as Pantheon's ultimate detective. Seize this opportunity to claim the title of master sleuth. "Murder Mystery 2024" is waiting for you—are you ready to solve the mystery? </p>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-cyan-400">Rules & Regulations</h3>
                            <ul className="list-disc list-inside mt-1 space-y-1">
                                <li>Teams must consist of 3-4 members, with one team leader responsible for communication.</li>
                                <li>Participants must present their ID cards for verification before the event begins.</li>
                                <li>Ensure you thoroughly read the rule book and comply with all event regulations.</li>
                                <li>Participants should show respect to the event organizers and wait patiently for their turn to receive clues, which will be provided on a first-come, first-serve basis.</li>
                                <li>In case of any disputes or issues, the decision of the Leo Club will be final and must be accepted by all participants.</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-cyan-400">Contact</h3>
                            <p className="mt-1">
                                <ol>
                                    <li>Umang -7645879981</li>
                                    <li>Hera - 9162178573</li>
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
                            <p className="text-slate-300">Meet you on 5th September</p>
                            <p className="text-slate-300">Join our community for updates:</p>
                            <div className="flex flex-col gap-3">
                                <a href="https://chat.whatsapp.com/HKAHHMo74a3FN4fq0tB1Ij?mode=ems_copy_c" target="_blank" rel="noopener noreferrer" className="w-full rounded-lg bg-green-500/20 text-green-400 px-4 py-2 font-medium hover:bg-green-500/30 transition" > Join Event WhatsApp Group </a>
                                <a href="https://www.instagram.com/leoclub_bitmesra?igsh=MTZ4enBodXQycjNwcA==" target="_blank" rel="noopener noreferrer" className="w-full rounded-lg bg-pink-500/20 text-pink-400 px-4 py-2 font-medium hover:bg-pink-500/30 transition" > Event updates on Instagram Page </a>
                            </div>
                        </div>) : (
                        <form className="space-y-4 max-h-[70vh] max-sm:overflow-y-auto pr-2" onSubmit={handleSubmit}>
                            <input type="text" name="name" placeholder="Team Leader Name" value={mmContestant.name} onChange={handleChange} required className="w-full rounded-lg bg-slate-800 px-4 py-2 text-white placeholder-slate-400 border border-slate-700 focus:border-cyan-400 focus:ring focus:ring-cyan-400/50" />
                            <input type="email" name="email" placeholder="Team Leader Email" value={mmContestant.email} onChange={handleChange} required className="w-full rounded-lg bg-slate-800 px-4 py-2 text-white placeholder-slate-400 border border-slate-700 focus:border-cyan-400 focus:ring focus:ring-cyan-400/50" />
                            <input type="text" name="branch" placeholder="Team Leader Branch" value={mmContestant.branch} onChange={handleChange} className="w-full rounded-lg bg-slate-800 px-4 py-2 text-white placeholder-slate-400 border border-slate-700 focus:border-cyan-400 focus:ring focus:ring-cyan-400/50" />
                            <input type="tel" name="phone" placeholder="Team Leader Whatsapp Number" value={mmContestant.phone} onChange={handleChange} className="w-full rounded-lg bg-slate-800 px-4 py-2 text-white placeholder-slate-400 border border-slate-700 focus:border-cyan-400 focus:ring focus:ring-cyan-400/50" />
                            <input type="text" name="batch" placeholder="Team Leader Batch" value={mmContestant.batch} onChange={handleChange} className="w-full rounded-lg bg-slate-800 px-4 py-2 text-white placeholder-slate-400 border border-slate-700 focus:border-cyan-400 focus:ring focus:ring-cyan-400/50" />

                            <input type="text" name="teamName" placeholder="Team Name" value={mmContestant.teamName} onChange={handleChange} className="w-full rounded-lg bg-slate-800 px-4 py-2 text-white placeholder-slate-400 border border-slate-700 focus:border-cyan-400 focus:ring focus:ring-cyan-400/50" />
                            <input type="text" name="teamId" placeholder="Team Id (Pantheon Team ID) - Optional" value={mmContestant.teamId} onChange={handleChange} className="w-full rounded-lg bg-slate-800 px-4 py-2 text-white placeholder-slate-400 border border-slate-700 focus:border-cyan-400 focus:ring focus:ring-cyan-400/50" />

                            <input type="text" name="name2" placeholder="Member 2 Name" value={mmContestant.name2} onChange={handleChange} required className="w-full rounded-lg bg-slate-800 px-4 py-2 text-white placeholder-slate-400 border border-slate-700 focus:border-cyan-400 focus:ring focus:ring-cyan-400/50" />
                            <input type="email" name="email2" placeholder="Member 2 Email" value={mmContestant.email2} onChange={handleChange} required className="w-full rounded-lg bg-slate-800 px-4 py-2 text-white placeholder-slate-400 border border-slate-700 focus:border-cyan-400 focus:ring focus:ring-cyan-400/50" />
                            <input type="tel" name="phone2" placeholder="Member 2 Whatsapp Number" value={mmContestant.phone2} onChange={handleChange} className="w-full rounded-lg bg-slate-800 px-4 py-2 text-white placeholder-slate-400 border border-slate-700 focus:border-cyan-400 focus:ring focus:ring-cyan-400/50" />

                            <input type="text" name="name3" placeholder="Member 3 Name" value={mmContestant.name3} onChange={handleChange} required className="w-full rounded-lg bg-slate-800 px-4 py-2 text-white placeholder-slate-400 border border-slate-700 focus:border-cyan-400 focus:ring focus:ring-cyan-400/50" />
                            <input type="email" name="email3" placeholder="Member 3 Email" value={mmContestant.email3} onChange={handleChange} required className="w-full rounded-lg bg-slate-800 px-4 py-2 text-white placeholder-slate-400 border border-slate-700 focus:border-cyan-400 focus:ring focus:ring-cyan-400/50" />
                            <input type="tel" name="phone3" placeholder="Member 3 Whatsapp Number" value={mmContestant.phone3} onChange={handleChange} className="hidden w-full rounded-lg bg-slate-800 px-4 py-2 text-white placeholder-slate-400 border border-slate-700 focus:border-cyan-400 focus:ring focus:ring-cyan-400/50" />

                            <button type="submit" disabled={isLoading} className="w-full mt-4 rounded-lg bg-gradient-to-r from-green-400 via-cyan-400 to-blue-500 py-2 font-semibold text-white shadow-lg hover:scale-105 hover:shadow-cyan-500/40 transition disabled:opacity-50">
                                {isLoading ? "Submitting..." : "Submit Registration"}
                            </button>
                        </form>)}
                    </div>
                </div>
            </div>
        </div>);
};

export default MMeventModal;
