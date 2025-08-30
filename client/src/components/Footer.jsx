import React from 'react'
import { assets } from '../assets/assets'
import { motion } from 'motion/react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className='px-6 md:px-16 lg:px-24 xl:px-32 md:pt-5 text-sm border-text1 border-t text-gray-500 z-99 bg-primary relative '>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className='flex max-sm:flex-col flex-wrap justify-between items-start gap-8 pb-6 pt-6 border-borderColor border-b'>
                <div>

                    <Link className='flex gap-2 items-center text-text1' to='/'>
                        <motion.img whileHover={{ scale: 1.05 }} src={assets.Logo} alt="" className='h-8 max-sm:h-6' />
                        <motion.p whileHover={{ scale: 1.05 }} className='custom-font font-bold text-4xl max-sm:text-2xl bg-clip-text bg-gradient-to-r from-[#00FFF0] via-[#3ABEFF] to-[#5F85FF]'>LEO</motion.p>
                    </Link>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className='max-w-80 mt-3 text-white text-lg'>
                        Where Leadership meets a Cause.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className='flex items-center gap-3 mt-6'>
                        <a href="#"><img src={assets.facebook_logo} className='w-5 h-5' alt="" /></a>
                        <a href="https://www.instagram.com/leoclub_bitmesra?igsh=MTZ4enBodXQycjNwcA=="><img src={assets.instagram_logo} className='w-5 h-5' alt="" /></a>
                        <a href="#"><img src={assets.twitter_logo} className='w-5 h-5' alt="" /></a>
                        <a href="/"><img src={assets.gmail_logo} className='w-5 h-5' alt="" /></a>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className='flex flex-wrap gap-38 max-sm:gap-10'>
                    <div>
                        <h2 className='text-base font-medium text-text1 uppercase'>Quick Links</h2>
                        <ul className='mt-3 flex flex-col gap-1.5 text-lg'>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/events">Events</Link></li>
                            <li><Link to="/team">Team</Link></li>
                            <li><Link to="/">About Us</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h2 className='text-base font-medium text-text1 uppercase'>Resources</h2>
                        <ul className='mt-3 flex flex-col gap-1.5 text-lg'>
                            <li><Link to="/gallery">Gallery</Link></li>
                            <li><Link to="/content">Content</Link></li>
                            <li><Link to="/">Join Us</Link></li>
                            <li><Link to="/admin">Admin Login</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h2 className='text-base font-medium text-text1 uppercase'>Contact Us</h2>
                        <ul className='mt-3 flex flex-col gap-1.5 text-lg'>
                            <li>Birla Institute of Technology</li>
                            <li>leoclub@bitmesra.ac.in</li>
                            <li>Umang Srivastava - 7645878981</li>
                            <li>Hera Siddique - 9162178573</li>
                        </ul>
                    </div>
                </motion.div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className='flex flex-col md:flex-row gap-2 items-center justify-between py-5'>
                <p>© {new Date().getFullYear()} LEO Club - All rights reserved.</p>
                <p>Birla Institute of Technology, Mesra</p>
            </motion.div>

        </motion.div>
    )
}

export default Footer
