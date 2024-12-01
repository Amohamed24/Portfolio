import * as React from "react"
import { Button } from "@/components/ui/button"


interface ProjectCardProps {
    projectName: string;
    projectTitle: string;
    projectDescription: string;
    livePreviewLink: string;
    clientRepoLink: string;
    projectGif: string;
  }



  const ProjectCard: React.FC<ProjectCardProps> = ({
    projectName,
    projectTitle,
    projectDescription,
    livePreviewLink,
    clientRepoLink,
    projectVideo,
    reverse,
  }) => {
    return (
      <div
        className={`flex flex-col md:flex-row ${
          reverse ? "md:flex-row-reverse" :""
        } w-[90%] max-w-[900px] gap-8 mx-auto my-10 h-[350px] items-center`}
      >
        {/* Left or Right Side: Project Details */}
        <div 
            className={`flex flex-col justify-between flex-1 ${
            reverse ? "text-start" : "text-end"
            } rounded-lg max-w-[400px] h-full py-7`}
        >
            {/* Top Section: Project Name and Title */}
            <div>
            <h1 className="text-[1.75rem] font-semibold">{projectName}</h1>
            <div className="text-[1.35rem] font-normal text-gray-400 mt-2">
                {projectTitle}
            </div>
            </div>

            {/* Middle Section: Project Description */}
            <div className="flex-1 flex items-center">
            <p className="text-lg text-gray-700">{projectDescription}</p>
            </div>

            {/* Bottom Section: Buttons */}
            <div
                className={`flex ${
                    reverse ? "justify-start" : "justify-end"
                } gap-6`}
                >
                <Button asChild variant="default" className="hover:cursor-pointer">
                    <a href={livePreviewLink} target="_blank" rel="noopener noreferrer" aria-label="Live Preview">
                    Live Preview
                    </a>
                </Button>
                <Button asChild variant="outline" className="hover:cursor-pointer">
                    <a href={clientRepoLink} target="_blank" rel="noopener noreferrer" aria-label="Client Code">
                    Client Code
                    </a>
                </Button>
            </div>
        </div>

        {/* Left or Right Side: Project Video */}
        <div className="flex-1 rounded-xl shadow-lg bg-teal-100 max-w-[900px] h-full flex items-center justify-center">
            {/* <video
            src={projectVideo}
            controls
            className="rounded-lg shadow-lg w-full h-auto"
            >
            Your browser does not support the video tag.
            </video> */}
        </div>
      </div>
    );
  };
  

export default ProjectCard;