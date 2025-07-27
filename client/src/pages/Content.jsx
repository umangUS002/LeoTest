import React, { useState, useEffect, useContext } from 'react'
import { motion } from 'framer-motion'
import Modal from '../components/Modal'
import { AppContext } from '../context/AppContext'

function Content() {

    const { allContent } = useContext(AppContext)

    const [blogs, setBlogs] = useState([])
    const [videos, setVideos] = useState([])
    const [posts, setPosts] = useState([])

    const [modalOpen, setModalOpen] = useState(false);
    const [selectedBlog, setSelectedBlog] = useState(null);


    const getContent = async () => {
        const blogs = allContent.filter((content) => content.type === 'Blog')
        const videos = allContent.filter((content) => content.type === 'Video')
        const posts = allContent.filter((content) => content.type === 'Post')
        setBlogs(blogs)
        setVideos(videos)
        setPosts(posts)
    };

    useEffect(() => {
        getContent();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [allContent]);

    return (
        <div className='flex flex-col items-center mt-10 px-4 '>
            <motion.h1
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-6xl max-sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#00FFF0] via-[#3ABEFF] to-[#5F85FF]"
            >
                Our Content
            </motion.h1>

            <div className='mt-6 mb-20 w-full max-w-7xl px-4 md:px-20 bg-primary rounded-lg pt-10 pb-10 shadow-lg shadow-text1/30'>
                <motion.h1
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className='text-3xl md:text-4xl mb-4 max-sm:text-center'>Blogs</motion.h1>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-6 max-sm:gap-4'>
                    {blogs.map((event, index) => (
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
            </div>

            <Modal
                modalOpen={modalOpen}
                selectedBlog={selectedBlog}
                setModalOpen={setModalOpen}
            />

            <div className='mt-10 mb-20 w-full max-w-7xl px-6 md:px-20 bg-primary rounded-lg pt-10 pb-10 shadow-lg shadow-text1/30'>
                <motion.h1
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className='text-3xl md:text-4xl mb-4 max-sm:text-center'>Videos</motion.h1>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-10 max-sm:gap-8'>
                    {videos.map((event, index) => (
                        <motion.div
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            key={index} className="bg-white/10 p-4 max-sm:p-2 rounded-lg shadow-md text-white transform transition duration-300 hover:scale-105">
                            <img src={event.image} alt={event.name} className='w-full h-30 md:h-40 object-cover rounded-md mb-2' />
                            <h2 className='text-lg font-bold'>{event.name}</h2>
                            <p className='text-sm mb-1 mt-2'>{event.description}</p>
                            <p className='text-sm mt-2 text-gray-300'>Work Credit - {event.workCredit}</p>
                            <div className='text-xs mt-0 flex justify-between mb-2'>
                                <p className='text-gray-300'>{event.date}</p>
                                <span className='text-green-400'>{event.type}</span>
                            </div>
                            <a className='text-red-400 cursor-pointer' href={event.link}>Link</a>
                        </motion.div>
                    ))}
                </div>
            </div>

            <div className='mt-10 mb-20 w-full max-w-7xl px-1 md:px-20 bg-primary rounded-lg pt-10 pb-10 shadow-lg shadow-text1/30'>
                <motion.h1
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className='text-3xl md:text-4xl mb-4 max-sm:text-center'>Posts</motion.h1>
                <div className='grid grid-cols-2 md:grid-cols-3 gap-10 max-sm:gap-4'>
                    {posts.map((event, index) => (
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
                            <a className='text-violet-400 cursor-pointer max-sm:px-1' href={event.link}>Link</a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Content
