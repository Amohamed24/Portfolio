import React from "react";
import ProjectCard from "@/components/projectCard";
import projectData from "@/data/projects";



const Projects = () => {
    return (
      <>
        <header className='flex flex-col justify-center text-center align-middle mb-10'>
          <h1 className='text-4xl mt-10 font-semibold'>Featured Projects</h1>
          <p className='mt-2 text-lg text-gray-400'>Hover for more info</p>
        </header>

        <section className="grid gap-6">
          {projectData.map((project, index) => (
            <ProjectCard 
              key={index} 
              {...project} 
              reverse={index % 2 !== 0} // Reverse layout for every other card
              />
          ))}
        </section>
      </>
    )
  };
  
export default Projects;
  

