import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import EventModal from '../components/EventModal';
import { eventsData } from '../assets/assets';

function Events() {
  const [event, setEvent] = useState([]);
  const [filter, setFilter] = useState('Pantheon');
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  // Set initial data and filter based on selected type
  useEffect(() => {
    const filtered = eventsData.filter((event) => event.type === filter);
    setEvent(filtered);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [filter]);

  return (
    <div className="flex flex-col hero-background items-center pt-40 max-sm:pt-20 pb-30 px-4">

      <motion.h1
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-7xl max-sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#00FFF0] via-[#3ABEFF] to-[#5F85FF]"
      >
        Events
      </motion.h1>

      {/* Filter Buttons */}
      <div className="mt-8 flex gap-4 max-sm:gap-3 flex-wrap justify-center">
        {['Pantheon', 'Bitotsav', 'Deepotsav', 'Social Events'].map((type) => (
          <button
            key={type}
            onClick={() => setFilter(type)}
            className={`px-6 max-sm:px-1 max-sm:text-xs py-2 rounded-lg font-semibold border transition duration-300 ${filter === type
              ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-white shadow-md'
              : 'bg-white/10 border-white/20 text-white hover:bg-white/20'
              }`}
          >
            {type}
          </button>
        ))}
      </div>

      <div className="mt-10 max-sm:pt-5 px-4 w-full max-w-7xl md:px-20 bg-primary rounded-lg pt-10 pb-10 max-sm:pb-5 shadow-lg shadow-text1/30">
        <div className="flex flex-col gap-15">
          {event.map((event, index) => (
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              key={index}
              className="bg-white/10 p-4 rounded-lg shadow-md md:flex gap-5 md:gap-10 text-white transform transition duration-300 "
            >
              <div className='md:w-1/2 w-full hover:scale-105'>
                <img src={event.image} alt={event.name} className="w-full h-80 md:h-150 object-cover rounded-md mb-2" />
              </div>
              <div className='flex flex-col justify-between mx-auto gap-2 md:gap-5'>
                <div className="flex flex-col justify-between items-center">
                  <h2 className="text-4xl max-sm:text-3xl font-bold px-1 max-sm:px-1">{event.name}</h2>
                  <p className="text-gray-300 text-lg">{event.Date}</p>
                </div>
                <p className="text-lg mb-1 mt-2 max-sm:px-1">
                  {event.description.split(" ").slice(0, 15).join(" ")}{event.description.split(" ").length > 15 && "..."}
                </p>
                <div className="text-lg mt-3 flex -pb-100 justify-between max-sm:px-1">
                  <p className="text-gray-300">Venue : {event.Venue}</p>
                  <span className="text-green-400">Team Size : {event.teamSize}</span>
                </div>
                {event.status === 'Upcoming' ? (
                  <button
                    onClick={() => { setSelectedEvent(event); setModalOpen(true); }}
                    className=" -mt-10 cursor-pointer mt-4 w-full bg-gradient-to-r from-green-600 to-green-400 text-white py-2 px-4 rounded-md hover:from-green-400 hover:to-green-600 transition duration-300 font-semibold"
                  >
                    Register
                  </button>
                ) : ("")}

              </div>

            </motion.div>
          ))}
        </div>
      </div>

    </div>
  );
}

export default Events;
