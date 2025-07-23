import payvest from "../assets/projects/payvest.jpeg";
import bryo from "../assets/projects/bryo.jpeg";
import bookLib from "../assets/projects/nexushome.jpeg"
import bookMgt from "../assets/projects/libraryMS.jpeg"

const Projects = () => {
  const projects = [
    {
      id: 1,
      src: bryo,
      codeLink: "https://github.com/Anuoluwapo25/byro",
      demoLink: "https://www.byro.africa",
    },
    {
      id: 2,
      src: payvest,
      codeLink: "https://github.com/Anuoluwapo25/OvalPay",
      demoLink: "https://vest-pay.vercel.app",
    },
    {
      id: 3,
      src: bookMgt,
      codeLink: "https://github.com/Anuoluwapo25/Library-management-system",
      demoLink: "https://library-management-system-pbnj.onrender.com",
    },
     {
      id: 4,
      src: bookLib,
      codeLink: "https://github.com/Anuoluwapo25/subproject-Django",
      demoLink: "https://learnpath-vpca.onrender.com",
    },
  
  ];

  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white py-20 md:h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my works right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map(({ id, src, codeLink, demoLink }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a
                  href={demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                >
                  Demo
                </a>
                <a
                  href={codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                >
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
