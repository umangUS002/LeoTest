import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import EventModal from '../components/EventModal';

function Events() {

    const { events } = useContext(AppContext)

    const [completedEvents, setCompletedEvents] = useState([]);
    const [upcomingEvents, setUpcomingEvents] = useState([]);

    const [modalOpen, setModalOpen] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState(null);

    const getAllEvents = async () => {
        const upcoming = events.filter((event) => event.status === 'Upcoming');
        const completed = events.filter((event) => event.status === 'Completed');
        setUpcomingEvents(upcoming);
        setCompletedEvents(completed);
    };

    useEffect(() => {
        getAllEvents()
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [events]);

    return (

        <div className='flex flex-col items-center mt-10 px-4'>

            <motion.h1
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-6xl max-sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#00FFF0] via-[#3ABEFF] to-[#5F85FF]"
            >
                Events
            </motion.h1>

            <div className='mt-10 px-4 w-full max-w-7xl md:px-20 bg-primary rounded-lg pt-10 pb-10 shadow-lg shadow-text1/30'>
                <motion.h1
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className='text-3xl md:text-4xl mb-6'>Upcoming</motion.h1>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-10 max-sm:gap-4'>
                    {upcomingEvents.map((event, index) => (
                        <motion.div
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            key={index} className="bg-white/10 p-4 rounded-lg shadow-md text-white transform transition duration-300 hover:scale-105">
                            <img src={event.image} alt={event.name} className='w-full h-60 md:h-80 object-cover rounded-md mb-2' />
                            <div className='flex justify-between align-center items-center'>
                                <h2 className='text-lg font-bold px-1 max-sm:px-1'>{event.name}</h2>
                                <p className='text-gray-300 text-sm'>{event.date}</p>
                            </div>
                            <p className='text-sm mb-1 mt-2 max-sm:px-1'>
                                {event.description.split(" ").slice(0, 15).join(" ")}{event.description.split(" ").length > 15 && "..."}
                            </p>                            <div className='text-xs mt-3 flex justify-between max-sm:px-1'>
                                <p className='text-gray-300'>{event.venue}</p>
                                <span className='text-green-400'>{event.status}</span>
                            </div>
                            <button onClick={() => { setSelectedEvent(event); setModalOpen(true); }} className="cursor-pointer mt-4 w-full bg-gradient-to-r from-green-600 to-green-400 text-white py-2 px-4 rounded-md hover:from-green-400 hover:to-green-600 transition duration-300 font-semibold">
                                Register
                            </button>

                        </motion.div>
                    ))}
                </div>
            </div>

            <EventModal
                modalOpen={modalOpen}
                selectedEvent={selectedEvent}
                setModalOpen={setModalOpen}
            />

            <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className='mt-10 w-full max-w-7xl px-1 md:px-20 mt-20 bg-primary rounded-lg pt-10 pb-10 shadow-lg shadow-text1/30'
            >
                <motion.h1 className='text-3xl md:text-4xl mb-6 text-left max-sm:text-center'>Completed</motion.h1>
                <div className='grid grid-cols-2 md:grid-cols-3 gap-10 max-sm:gap-3'>
                    {completedEvents.map((event, index) => (
                        <motion.div
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.2 }}
                            key={index} className="bg-white/10 p-4 max-sm:p-1 max-sm:pb-3 max-sm:mb-3 rounded-lg shadow-md text-white transform transition duration-300 hover:scale-105">
                            <img src={event.image} alt={event.name} className='w-full h-60 md:h-80 object-cover rounded-md mb-2' />
                            <div className='flex justify-between align-center items-center'>
                                <h2 className='text-lg font-bold px-1 max-sm:px-1'>{event.name}</h2>
                                <p className='text-gray-300 text-sm'>{event.date}</p>
                            </div>
                            <p className='text-sm mb-1 mt-2 max-sm:px-1'>
                                {event.description.split(" ").slice(0, 15).join(" ")}{event.description.split(" ").length > 15 && "..."}
                            </p>                            <div className='text-xs mt-3 max-sm:flex-col flex justify-between max-sm:px-1'>
                                <p className='text-gray-300'>{event.venue}</p>
                                <span className='text-red-400 max-sm:pt-1'>{event.status}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

        </div>
    );
}

export default Events;
