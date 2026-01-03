
import { useRef, useEffect, useState } from "react";

import Card from "../components/Card";
import { Globe } from "../components/globe";
import CopyEmailButton from "../components/CopyEmailButton";
import { Frameworks } from "../components/Frameworks";

const About = () => {
  const grid2Container = useRef();
  const [time, setTime] = useState("");

useEffect(() => {
  const updateTime = () => {
    const now = new Date();
    const indiaTime = now.toLocaleTimeString("en-IN", {
      timeZone: "Asia/Kolkata",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
    setTime(indiaTime);
  };

  updateTime(); // initial
  const interval = setInterval(updateTime, 1000);

  return () => clearInterval(interval);
}, []);

  return (
    <section className="c-space section-spacing" id="about">
      <h2 className="text-heading">About Me</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* Grid 1 */}
        <div className="flex items-end grid-default-color grid-1">
          <img
            src="assets/coding-pov.png"
            className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"
          />
          <div className="z-10">
            <p className="headtext">Hi, I'm Swayam Vishwakarma</p>
            <p className="subtext">
           Final-year Computer Science student passionate about building scalable web and AI-driven applications. Actively seeking internship and entry-level opportunities.
            </p>
          </div>
          <div className="absolute inset-x-0 pointer-evets-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
        </div>
        {/* Grid 2 */}
        <div className="grid-default-color grid-2">
          <div
            ref={grid2Container}
            className="flex items-center justify-center w-full h-full"
          >
            <p className="flex items-end text-5xl text-gray-500">
              CODE IS CRAFT
            </p>
            <Card
              style={{ rotate: "75deg", top: "30%", left: "20%" }}
              text="CSS"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-30deg", top: "60%", left: "45%" }}
              text="Algorithms"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "90deg", bottom: "30%", left: "70%" }}
              text="Web Development"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "55%", left: "0%" }}
              text="Gen Ai"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "20deg", top: "10%", left: "38%" }}
              text="Python"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "30deg", top: "70%", left: "70%" }}
              image="assets/logos/c++logo.png"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "70%", left: "25%" }}
              image="/assets/logos/icons8-mongodb-48.png"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "5%", left: "10%" }}
              image="/assets/logos/js icon.png"
              containerRef={grid2Container}
            />
            
            <Card
              style={{ rotate: "-45deg", top: "5%", left: "10%" }}
              image="\assets\logos\react-js-logo.png"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "5%", left: "10%" }}
              image="\assets\logos\html5.svg"
              containerRef={grid2Container}
            />
            
          </div>
        </div>
        {/* Grid 3 */}
        <div className="grid-black-color grid-3">
  <div className="z-10 w-[50%]">
    <p className="headtext">Current Time</p>

    <p className="text-2xl font-semibold text-indigo-400 mt-1">
      {time}
      <span className="text-sm text-neutral-400 ml-2">(IST)</span>
    </p>

    <p className="subtext mt-2">
      Based in India • Open to remote opportunities worldwide
    </p>
  </div>

  <figure className="absolute left-[30%] top-[10%]">
    <Globe />
  </figure>
</div>

        {/* Grid 4 */}
        <div className="grid-special-color grid-4">
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p className="text-center headtext">
              Do you want to start a project together?
            </p>
            <CopyEmailButton />
          </div>
        </div>
        {/* Grid 5 */}
        <div className="grid-default-color grid-5">
          <div className="z-10 w-[50%]">
            <p className="headText">Teck Stack</p>
            <p className="subtext">
              I specialize in a variety of languages, frameworks, and tools taht
              allow me to build robust and scalable applications</p>
<ul className="subtext list-disc list-inside space-y-1">
  <li><b>Frontend:</b> React, Tailwind CSS, JavaScript</li>
  <li><b>Backend:</b> Node.js, Django, Flask</li>
  <li><b>Database:</b> MongoDB, SQL, SQLite</li>
  <li><b>Tools:</b> Git, GitHub, Vite, Vercel, Render</li>
</ul>

          </div>
          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
            <Frameworks />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
