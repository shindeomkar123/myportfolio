import Title from "./Title";

const Expereince = () => {
  return (
    <div className="flex items-center flex-col">
      <Title title={"Expereince"} />

      <ol class="relative border-l border-gray-200 dark:border-gray-700 w-2/3">
        <li class="mb-10 ml-4">
          <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            December 2016 - June 2019
          </time>
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
            Accenture
          </h3>
          <h4 className="text-sm italic">Associate Application Developer</h4>
          <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            Workded as a frontend developer. Created features to enhance the
            user experience while ensuring that the web design is user friendly.
            Employed in a variety of languages such as HTML and SCSS/CSS to
            write & create user-friendly web pages. Good knowledge in developing
            applications in a single page (SPAs) using various JavaScript
            frameworks like Angular and library ReactJS
          </p>
        </li>
        <li class="mb-10 ml-4">
          <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            June 2019 - Present
          </time>
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
            YASH Technnologies
          </h3>
          <h4 className="text-sm italic">UI Specialist</h4>
          <p class="text-base font-normal text-gray-500 dark:text-gray-400">
            Experienced in working with Angular modules, services, templates,
            directives, services and dependency injection to create a SPA.
            Managed brand consistency throughout the design and maintained &
            improved the company's website by adding more features and
            functionality.Having experience in NgRx as well as Redux toolkit.
          </p>
        </li>
      </ol>
    </div>
  );
};

export default Expereince;
