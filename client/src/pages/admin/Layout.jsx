import React from 'react'
import { assets } from '../../assets/assets'
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { useAppContext } from '../../context/AppContext';
import { motion } from 'framer-motion';
import LeftSideBar from '../../components/admin/LeftSideBar';

function Layout() {

  const {setToken, axios} = useAppContext();
  const navigate = useNavigate()

    const logout = async() => {
        localStorage.removeItem('token');
        axios.defaults.headers.common['Authorization'] = null;
        setToken(null);
        navigate('/');
  }

  return (
    <>
      <div className='flex items-center justify-between py-2 h-[70px] px-4 sm:px-12 border-b border-text1'>
        <Link className='flex gap-2 items-center text-text1' to='/'>
            <motion.img whileHover={{scale: 1.05}} src={assets.leologo} alt="" className='h-8 max-sm:h-6'/>
            <motion.p whileHover={{scale: 1.05}} className='font-bold text-4xl max-sm:text-2xl bg-clip-text bg-gradient-to-r from-[#00FFF0] via-[#3ABEFF] to-[#5F85FF]'>LEO</motion.p>
        </Link>
        <button onClick={logout}  className='text-sm px-4 md:px-8  py-2 bg-text1 text-white rounded-full cursor-pointer'>Logout</button>
      </div>
      <div className='flex h-[calc(100vh-70px)]'>
          <LeftSideBar/>
          <div className='flex-1 overflow-auto min-h-full'>
            <Outlet/>
          </div>
      </div>
    </>
  )
}

export default Layout
