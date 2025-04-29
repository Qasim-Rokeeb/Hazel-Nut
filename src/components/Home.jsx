
import React from 'react'
import HomeImg from '../assets/homeImg.png'
import {motion} from 'framer-motion'

const container = (delay) =>({
  hidden: {x: -100, opacity: 0},
  visible : {x:0, opacity:1,
  transition : {delay: delay, duration:0.5 }
,}
})


const Home = () => {
  return (
    <div className='mt-20'>
    <div className='md:flex items-center justify-between'>
        <div className='flex  flex-col items-center justify-center lg:items-start'>
            <motion.h1
            variants={container(0.2)}
            initial='hidden'
            animate='visible'
            className='font-bold text-4xl md:text-7xl'>Discover <br />Essence Of Hazelnuts</motion.h1> 
            <motion.p  
            variants={container(0.4)}
            initial='hidden'
            animate='visible'
            className='my-5'>Nutty Delights - excellence, best sellers & cultivating the finest hazelnuts</motion.p>
            <motion.div
            variants={container(0.6)}
            initial='hidden'
            animate='visible'
            className='flex gap-5'>
            <button className='py-3 px-5 text-xs md:text-sm bg-white hover:border hover:border-white hover:bg-brandBg hover:text-white text-brandBg rounded-full font-bold'> BUY HAZELNUTS</button>
            <button className='py-3 px-5 text-xs md:text-sm border bg-transparent hover:bg-white hover:text-brandBg text-white rounded-full font-bold'> BUY ALMONDS</button>
            </motion.div>
        </div>
        <div>
            <motion.img
            initial ={{x: 100, opacity: 0}}
            animate={{x:0, opacity:1, transition:{ delay: 0.8, duration: 0.5}}}
            src={HomeImg} alt="" />
        </div>
    </div>
    </div>
  )
}

export default Home