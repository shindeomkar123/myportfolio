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
      <section className=" flex flex-col bg-gradient-to-r from-fuchsia-600 to-purple-600 w-full h-screen background-animate">
        <Header />
        <div className="flex flex-col h-4/5 justify-center ml-20">
          <span className="text-2xl tracking-[20px] text-white font-bold">
            OMKAR SHINDE
          </span>
          <TypeWriterEffect
            startDelay={100}
            cursorColor="black"
            text="FRONTEND DEVELOPER"
            typeSpeed={100}
            eraseSpeed={100}
          />{" "}
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
