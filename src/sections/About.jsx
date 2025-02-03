import React, { useEffect } from 'react'
import aboutimg from '../assets/images/about.jpg'
import { useDarkMode } from '../components/DarkModeContext'
import AOS from 'aos'
import 'aos/dist/aos.css'


const About = () => {

    useEffect (() => {
      AOS.init({
        offset: 200,
        duration: 1000,
        easing: 'ease-in-sine',
        delay: 100,
      })
    }, [])

    const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <section id='about' className={`${darkMode ? 'dark bg-black' : 'light bg-transparent'} w-[95%] m-auto lg:px-28 px-10 py-20 rounded-xl flex justify-center items-center gap-7`}>
      
    </section>
  )
}

export default About