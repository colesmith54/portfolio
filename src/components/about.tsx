"use client";
import Spacer from "@/components/spacer";

export function About() {
  return (
    <>
      <div className="flex items-center p-4">
        <img
          src="/headshot.jpg"
          alt="headshot"
          className="rounded-full w-48 h-48 min-w-48 min-h-48 overflow-hidden object-cover"
        />
        <p className="text-base sm:text-xl mt-4 mb-2 ml-12 text-neutral-200 flex-grow max-w-sm">
          Hi! I'm Cole Smith, a computer science student at the University of
          Florida.
        </p>
      </div>

      <Spacer size={20} />

      <p className="text-sm text-neutral-400">
        Glad you could make it to my website! I'm a computer science major at UF
        with minors in mathematics and statistics. Whether it's about software
        development, an hour-long math problem, or just random trivia, I'm
        always trying to learn something new. This summer I'll be interning at
        Intuit Credit Karma as a software engineer. I'm excited to learn more
        about the industry and get some real-world experience.
      </p>
    </>
  );
}

export default About;
