import React from "react";
import ReactDOM from "react-dom/client";
import TypeWriterEffect from "react-typewriter-effect";
import Header from "./Header";
import About from "./About";
import Expereince from "./Experience";

const App = () => {
  return (
    <>
      {/* // Introduction page */}
      <section className=' flex flex-col w-full h-screen  bg-[url("./public/pxfuel.jpg")]'>
        <Header />
        <div className="flex flex-col h-4/5 justify-center ml-20">
          <span className="text-5xl tracking-[20px] text-white font-bold">
            OMKAR SHINDE
          </span>
          <div className="mt-5">
            <TypeWriterEffect
              textStyle={{
                fontFamily: "Red Hat Display",
                color: "yellow",
                fontWeight: 500,
                fontSize: "1.5em",
              }}
              startDelay={100}
              cursorColor="yellow"
              text="FRONTEND DEVELOPER"
              typeSpeed={500}
              eraseSpeed={100}
              loop="true"
              autostart="true"
            />
          </div>
        </div>
      </section>

      {/* // About section */}
      <section className="w-full h-screen">
        <About />
      </section>

      {/* //Experience section */}
      <section className="w-full h-screen">
        <Expereince />
      </section>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);

export default App;
