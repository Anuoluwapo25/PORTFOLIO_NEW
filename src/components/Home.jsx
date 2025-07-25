
import Hero from "../assets/others/hero.jpg";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-full w-full bg-gradient-to-b from-black via-black to-gray-800 pt-20"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full  mt-16">
          {" "}
          {/* Add sm:mt-40 for small screens and mt-16 for all screens */}
          <h2 className="text-4xl sm:text-7xl font-bold text-white ">
            I am a Backend Developer and Smart Contract Developer
          </h2>
          <p className="text-gray-200 py-4">
            I am a passionate backend developer dedicated to crafting robust and innovative 
            server-side solutions for web and mobile platforms. 
            With a deep commitment to 
            building efficient, scalable, and reliable systems that power seamless application
            performance.
          </p>
          <div>
            <Link
              to="projects"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-800 to-blue-20 cursor-pointer"
            >
              View Projects
              <span className="group-hover:rotate-90 duration-300 ml-2">
                <FaArrowRightLong />
              </span>
            </Link>

            {/* Anchor tag for Google Drive link */}
            <a
              // href="https://drive.google.com/file/d/1FABt0sLE0BNW8GgnDoKKaMovGcUP4_69/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-l from-cyan-800 to-blue-160"
            >
              View Resume and Cover Letter
              <span className="group-hover:rotate-90 duration-300 ml-2">
                <FaArrowRightLong />
              </span>
            </a>
          </div>
        </div>

        <div>
          <img
            src={Hero}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full "
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
