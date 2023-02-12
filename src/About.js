import Title from "./Title";
import Logo from "./../public/logo.jpg";

const About = () => {
  return (
    <div className="flex h-full flex-col">
      <Title title={"About"} />
      <div className="flex mx-56">
        <div className="mx-20">
          <img src={Logo} alt="profilephoto" className="border h-80 w-80" />
        </div>
        <div className="w-2/4">
          I would like to introduce myself as an active front-end developer and
          software tester, passionate teacher, and ardent content writer. I
          worked as a software tester for past years after my post-graduation. I
          was teamed with the quality analysis environment which helped me in
          bringing a meticulous approach to the work. Through the journey, I was
          able to study the software product in detail and thus ensure that user
          expectations were met during the testing process. Working with a team
          also helped me in developing collaboration and social skills.
        </div>
      </div>
    </div>
  );
};

export default About;
