import React from 'react'
import { assets } from '../assets/assets';
import { motion } from 'framer-motion';

function EventModal({ modalOpen, selectedEvent, setModalOpen }) {
    if (!modalOpen || !selectedEvent) return null;

    return (
        <div className="max-sm:mt-10 fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center overflow-y-auto max-h-screen p-4">
            <div className="bg-white/10 w-full max-w-6xl rounded-lg shadow-lg flex flex-col md:flex-row relative overflow-y-auto max-h-[90vh] md:h-[80vh]">

                <button
                    onClick={() => setModalOpen(false)}
                    className="absolute top-3 right-3 max-sm:right-5 text-gray-500 hover:text-red-500 text-xl"
                >
                    &times;
                </button>

                <div className="md:w-1/2 w-full flex justify-center items-center p-4 md:p-0 ">
                    <img
                        src={selectedEvent.image}
                        alt={selectedEvent.name}
                        className="w-full h-auto max-h-[70vh] object-contain"
                    />
                </div>

                <div className="max-sm:pl-4 max-sm:pb-4 pr-10 pt-0 md:pt-10 md:w-1/2">
                    <h2 className="text-2xl font-bold mb-0">{selectedEvent.name}</h2>
                    <p className="text-green-400 text-sm mb-4">{selectedEvent.status}</p>
                    <p className="text-gray-400">{selectedEvent.description}</p>

                    <div className='mt-3'>
                        <p>Venue : {selectedEvent.venue}</p>
                        <p>Team Size : {selectedEvent.teamSize}</p>
                        <p>Date : {selectedEvent.date}</p>
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            className='flex items-center gap-3 mt-3'>
                            <a href={selectedEvent.link}><img src={assets.facebook_logo} className='w-5 h-5' alt="" /></a>
                            <a href="#"><img src={assets.instagram_logo} className='w-5 h-5' alt="" /></a>
                            <a href="#"><img src={assets.twitter_logo} className='w-5 h-5' alt="" /></a>
                            <a href="#"><img src={assets.gmail_logo} className='w-5 h-5' alt="" /></a>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EventModal;
