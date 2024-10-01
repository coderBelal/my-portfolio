const skills = [
  { title: "HTML5", img: "https://i.postimg.cc/WtRGQmhZ/html.png" },
  { title: "CSS3", img: "https://i.postimg.cc/0N9fkCZd/css.png" },
 
  { title: "Tailwind", img: "https://i.postimg.cc/Xq5HGY5w/tailwind.png" },
  { title: "Sass", img: "https://i.postimg.cc/pT4cLFmW/sass.png" },
  { title: "JavaScript", img: "https://i.postimg.cc/BZjdfqjZ/js.png" },
  { title: "React", img: "https://i.postimg.cc/T3JsJ140/redux.png" },
  { title: "Redux", img: "https://i.postimg.cc/SsJt4rN1/redux-B2yjgmpq.png" },
 
  { title: "Next JS", img: "https://i.postimg.cc/gkRQrNyf/next.png" },
];

const otherSkills = [
  { title: "Netlify", img: "https://i.postimg.cc/sfbbVtWY/netlify.png" },
  { title: "Git", img: "https://i.postimg.cc/W3H67cVX/git.png" },
  { title: "VSCode", img: "https://i.postimg.cc/TY8H8n8Q/vscode.png" },

  { title: "GitHub", img: "https://i.postimg.cc/0jKGWX2x/github.jpg" },
];

const Skill = () => {
  return (
    <div className="max-w-7xl mx-auto text-center mt-10  ">
    <h1 className="text-4xl font-bold mb-10 text-white">
      Skills <span className="text-[#10E956]">Front End</span>
    </h1>
    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-10 justify-center p-4">
      {skills.map((skill, index) => (
        <div
          key={index}
          className="flex flex-col items-center shadow-2xl rounded-lg p-6"
          style={{
            boxShadow: 'inset 0 4px 8px 0 rgba(16, 233, 86, 0.6)', // Custom inset box shadow
          }}
        >
          <img
            src={skill.img}
            alt={skill.title}
            className="h-24 w-24 rounded-lg mb-4"
          />
          <h2 className="text-xl font-semibold text-[#10E956]">
            {skill.title}
          </h2>
          {skill.status && (
            <button className="mt-2 bg-red-500 text-white px-4 py-2 rounded-lg">
              {skill.status}
            </button>
          )}
        </div>
      ))}
    </div>

    <h1 className="text-4xl font-bold my-10 text-white">
      <span className="text-[#10E956]">Other</span> Skills
    </h1>
    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 p-4 gap-10 justify-center">
      {otherSkills.map((skill, index) => (
        <div
          key={index}
          className="flex flex-col items-center shadow-2xl rounded-lg p-6"
          style={{
            boxShadow: 'inset 0 4px 8px 0 rgba(16, 233, 86, 0.6)', // Custom inset box shadow
          }}
        >
          <img
            src={skill.img}
            alt={skill.title}
            className="h-24 w-24 rounded-lg mb-4"
          />
          <h2 className="text-xl font-semibold text-[#10E956]">
            {skill.title}
          </h2>
        </div>
      ))}
    </div>
  </div>
);
};

export default Skill;
