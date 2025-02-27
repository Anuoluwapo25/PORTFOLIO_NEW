// Docs Component

import docsOne from "../assets/Docs/cssNew.jpeg";
import docsTwo from "../assets/Docs/erctoken.jpeg";
import docsThree from "../assets/Docs/Solidity2.jpeg";
import docsFour from "../assets/Docs/Soliditygray.png";

const Docs = () => {
  const writing = [
    {
      id: 1,
      src: docsOne,
      readLink:
        "https://anniecodes.hashnode.dev/an-easy-guide-to-css-for-website-styling",
    },
    {
      id: 2,
      src: docsTwo,
      readLink: "https://hackmd.io/@Annie25/BJ8zHh4K1g",
    },
    {
      id: 3,
      src: docsThree,
      readLink: "https://hackmd.io/@Annie25/r1IgaoOOJg",
    },
    {
      id: 4,
      src: docsFour,
      readLink: "https://hackmd.io/@Annie25/BJ8zHh4K1g",
    },
  ];

  return (
    <div
      name="docs"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white py-20 md:h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Documentation
          </p>
          <p className="py-6">
            Check out some of my articles and documentations here
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {writing.map(({ id, src, readLink }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a
                  href={readLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                >
                  Click here to read!
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Docs;
