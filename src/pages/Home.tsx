import React from 'react';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { LuSend } from "react-icons/lu";
import { FaMapPin } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";






const Home = () => {
    return ( 
      <div>
          <header className='flex justify-center gap-x-3 mt-10 border border-black w-5/12 m-auto rounded-[2.5rem] py-3'>
            <Navbar />
          </header>

          <section className='flex justify-center my-20 text-center'>
            <div>
              <div className="flex flex-col items-center justify-center gap-2">
                <h1 className='text-3xl font-semibold'>Mohamed Ahmed</h1>
                <div className='flex flex-row'>
                  <FaMapPin className="text-red-500 " />
                  <p className="text-lg text-gray-600">Based in Minnesota</p>
                </div>
                  
              </div>
              
              <div>
                <h1 className='text-7xl font-bold'>FULLSTACK <br /> DEVELOPER 
                  <span className='p-5'>
                    <Button className='py-7 px-7 rounded-[2.5rem] text-lg'> <LuSend /> Contact Me </Button>
                  </span> 
                </h1>
              </div> 
        
              <div className="flex justify-center gap-4">
                <a
                  href="https://www.linkedin.com/in/mohamed-ahmed-0998041b3/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center border border-black h-14 w-14 rounded-full bg-transparent hover:bg-blue-500 hover:text-white hover:border-none transition-all duration-300"
                >
                  <FaLinkedinIn className="h-8 w-8" />
                </a>
                <a
                  href="https://github.com/Amohamed24"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center border border-black h-14 w-14 rounded-full bg-transparent hover:bg-gray-800 hover:text-white hover:border-none transition-all duration-300"
                >
                  <FiGithub className="h-8 w-8" />
                </a>
              </div>
            </div>
          </section>

          <section className="flex flex-col justify-center text-center">
            <h1 className="text-4xl mt-10 font-semibold my-10">About Me</h1>

            <p className="w-3/4 lg:w-1/2 m-auto mt-2 text-lg leading-relaxed">
              I'm a <strong>Full-Stack Developer</strong> who thrives on turning complex challenges into elegant, 
              user-friendly solutions. Over the years, I've built dynamic applications that streamline workflows 
              and deliver exceptional user experiences. With expertise in technologies like <strong>React</strong>, 
              <strong>Node.js</strong>, <strong>PostgreSQL</strong>, and <strong>MongoDB</strong>, I combine technical 
              excellence with creativity to create impactful projects.
            </p>

            <p className="w-3/4 lg:w-1/2 m-auto mt-4 text-lg leading-relaxed">
              Beyond coding, I'm a lifelong learner passionate about exploring emerging technologies and staying 
              at the forefront of industry trends. My goal is to create innovative solutions that make a real-world 
              difference. Let's connect and build something amazing together!
            </p>
          </section>

      </div>
    )
  };
  
export default Home;
  

