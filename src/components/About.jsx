// About Compo

const About = () => {
  return (
    <div
      name="about"
      className="w-full bg-gradient-to-b from-gray-800 to-black text-white py-20 md:h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-10 md:mt-20">
          I find pure love in building robust applications, applying software
          engineering best practices, and collaborating with teams to deliver 
          high-quality software solutions. Committed to continuous learning 
          and staying at the forefront of Python ecosystem advancements.
        </p>
        <br />

        <p className="text-xl">
          I am a Results-driven Backend Engineer with 2+ years of experience 
          designing and implementing scalable web applications and backend 
          systems. Specializing in Python-based development (Django, Flask) 
          with a growing expertise in microservices architecture and 
          high-performance APIs.
          Proficient in optimizing database performance, implementing robust 
          security measures, and utilizing CI/CD pipelines with GitHub Actions.
          Demonstrated ability to enhance system reliability and deliver 
          efficient solutions on cloud platforms.
        </p>
      </div>
    </div>
  );
};

export default About;
