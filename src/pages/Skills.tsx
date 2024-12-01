import { FaReact, FaNodeJs, FaGit, FaGithub } from "react-icons/fa";
import { SiJavascript, SiTypescript, SiPython, SiVite, SiNextdotjs, SiTailwindcss, SiPostgresql, SiMysql, SiMongodb, SiSupabase, SiPrisma } from "react-icons/si";

const Skills = () => {
  const techs = [
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-500" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
    { name: "Python", icon: <SiPython className="text-blue-500" /> },
    { name: "React", icon: <FaReact className="text-blue-400" /> },
    { name: "Vite", icon: <SiVite className="text-purple-500" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-black" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-800" /> },
    { name: "MySQL", icon: <SiMysql className="text-blue-600" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
    { name: "Supabase", icon: <SiSupabase className="text-green-400" /> },
    { name: "Git", icon: <FaGit className="text-orange-500" /> },
    { name: "GitHub", icon: <FaGithub className="text-gray-800" /> },
    { name: "Prisma", icon: <SiPrisma className="text-black" /> },
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold text-center pt-20 ">Tech Stack</h2>
      <section className="flex justify-center m-auto py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-7">
          {techs.map((tech, index) => (
            <div
              key={index}
              className="flex items-center space-x-4 text-gray-800 dark:text-gray-200"
            >
              <div className="text-4xl">{tech.icon}</div>
              <p className="text-lg font-medium">{tech.name}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Skills;
