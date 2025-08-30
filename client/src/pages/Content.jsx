import React, { useState, useEffect, useContext } from 'react'
import { motion } from 'framer-motion'
import Modal from '../components/Modal'
import { AppContext } from '../context/AppContext'

function Content() {

    const { allContent } = useContext(AppContext)

    const [content, setContent] = useState([])

    const [modalOpen, setModalOpen] = useState(false);
    const [selectedBlog, setSelectedBlog] = useState(null);

    const [filter, setFilter] = useState('Post')

    const getContent = async () => {
        const contents = allContent.filter((content) => content.type === `${filter}`)
        setContent(contents)
    };

    useEffect(() => {
        if (allContent.length > 0) {
            getContent();
        }
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [filter, allContent]);

    return (
        <div className='flex flex-col hero-background  items-center pt-40 max-sm:pt-20 pb-15 px-6 '>
            <motion.h1
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-7xl max-sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#00FFF0] via-[#3ABEFF] to-[#5F85FF]"
            >
                Our Content
            </motion.h1>

            <div className="mt-8 flex gap-4 flex-wrap justify-center">
                {['Post', 'Blog', 'Video'].map((type) => (
                    <button
                        key={type}
                        onClick={() => setFilter(type)}
                        className={`px-6 py-2 rounded-lg font-semibold border transition duration-300 ${filter === type
                            ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-white shadow-md'
                            : 'bg-white/10 border-white/20 text-white hover:bg-white/20'
                            }`}
                    >
                        {type === 'Post' ? 'Posts' : type === 'Blog' ? 'Blogs' : 'Videos'}
                    </button>
                ))}
            </div>

            {filter === 'Blog' ? (
                <div className='mt-6 md:mb-20 mb-0  w-full max-w-7xl px-4 md:px-10 bg-transparent rounded-lg pt-5 pb-4 shadow-lg shadow-text1/30'>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-6 max-sm:gap-4'>
                        {content.map((event, index) => (
                            <motion.div
                                initial={{ opacity: 0, y: 60 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                key={index} className="bg-white/10 p-4 max-sm:p-1 max-sm:pb-3 max-sm:mb-3 rounded-lg shadow-md text-white transform transition duration-300 hover:scale-105">
                                <img src={event.image} alt={event.name} className='w-full h-60 md:h-80 object-cover rounded-md mb-2' />
                                <h2 className='text-lg font-bold max-sm:px-1'>{event.title}</h2>
                                <div className='text-xs mt-3 flex justify-between max-sm:px-1'>
                                    <p className='text-gray-300'>{event.date}</p>
                                    <span className='text-green-400'>{event.type}</span>
                                </div>
                                <button onClick={() => { setSelectedBlog(event); setModalOpen(true); }} className="mt-4 max-sm:mx-1 w-[30%] max-sm:w-[40%] bg-gradient-to-r from-cyan-400 to-blue-500 text-white py-1 px-2 rounded-md hover:from-cyan-500 hover:to-blue-600 transition duration-300 font-semibold">
                                    Read
                                </button>
                            </motion.div>
                        ))}
                    </div>
                    <Modal
                        modalOpen={modalOpen}
                        selectedBlog={selectedBlog}
                        setModalOpen={setModalOpen}
                    />
                </div>
            ) : (filter === 'Post' ? (
                <div className='mt-10 mb-20 w-full max-w-7xl px-4 md:px-10 bg-transparent rounded-lg pt-5 pb-5 shadow-lg shadow-text1/30'>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-10 max-sm:gap-4'>
                        {content.map((event, index) => (
                            <motion.div
                                initial={{ opacity: 0, y: 60 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                key={index} className="bg-white/10 p-4 max-sm:p-1 max-sm:mb-3 rounded-lg shadow-md text-white transform transition duration-300 hover:scale-105">
                                <img src={event.image} alt={event.name} className='w-full h-60 md:h-80 object-cover rounded-md mb-2' />
                                <h2 className='text-lg font-bold max-sm:px-1'>{event.title}</h2>
                                <p className='text-sm mt-2 text-gray-300 max-sm:px-1'>Work Credit - {event.workCredit}</p>
                                <div className='text-xs mt-0 mb-2 flex justify-between max-sm:px-1'>
                                    <p className='text-gray-300'>{event.date}</p>
                                    <span className='text-green-400'>{event.type}</span>
                                </div>
                                <a className='text-violet-400 cursor-pointer max-sm:px-1' href={event.instaLink}>Link</a>
                            </motion.div>
                        ))}
                    </div>
                </div>
            ) : (
                <div className='mt-10 mb-20 w-full max-w-7xl px-3 md:px-10 bg-transparent rounded-lg pt-5 pb-4 shadow-lg shadow-text1/30'>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-10 max-sm:gap-8'>
                        {content.map((event, index) => (
                            <motion.div
                                initial={{ opacity: 0, y: 60 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                key={index} className="bg-white/10 p-4 max-sm:p-2 rounded-lg shadow-md text-white transform transition duration-300 hover:scale-105">
                                <img src={event.image} alt={event.name} className='w-full h-30 md:h-40 object-cover rounded-md mb-2' />
                                <h2 className='text-lg font-bold'>{event.name}</h2>
                                <p className='text-sm mb-1 mt-2'>{event.description.split(" ").slice(0, 20).join(" ") + "..."}</p>
                                <p className='text-sm mt-2 text-gray-300'>Work Credit - {event.workCredit}</p>
                                <div className='text-xs mt-0 flex justify-between mb-2'>
                                    <p className='text-gray-300'>{event.date}</p>
                                    <span className='text-green-400'>{event.type}</span>
                                </div>
                                <a className='text-red-400 cursor-pointer' href={event.instaLink}>Link</a>
                            </motion.div>
                        ))}
                    </div>
                </div>
            ))}

        </div>
    )
}

export default Content
