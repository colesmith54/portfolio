export function About() {
  return (
    <>
      <div className="max-w-3xl flex sm:flex-row flex-col items-center justify-between p-4">
        <img
          src="/headshot.jpg"
          alt="headshot"
          className="border-solid border-2 border-neutral-200 rounded-full w-36 h-36 md:w-48 md:h-48 min-w-36 overflow-hidden object-cover"
        />
        <p className="text-base sm:text-xl mt-4 mb-2 sm:ml-4 ml-0 text-neutral-200 flex-grow max-w-sm">
          Hi! I'm Cole Smith, a computer science student at the University of
          Florida.
        </p>
      </div>

      <p className="text-sm text-neutral-400 text-left mx-4 my-4">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Glad you could make it
        to my website! I'm a computer science major at UF with minors in
        mathematics and statistics. Whether it's about software development, an
        hour-long math problem, or just random trivia, I'm always trying to
        learn something new. This summer I'll be interning at Intuit Credit
        Karma as a software engineer. I'm excited to learn more about the
        industry and get some real-world experience.
      </p>
    </>
  );
}

export default About;
