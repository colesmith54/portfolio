import { Button } from "@/components/ui/button";
import Spacer from "@/components/spacer";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

export function Resume() {
  return (
    <div>
      <Button variant="link">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="/Cole_Smith_resume.pdf"
          download
        >
          Download Resume
        </a>
      </Button>
      <div>
        <Dialog>
          <DialogTrigger>
            <Button variant="link">Preview Resume</Button>
          </DialogTrigger>
          <DialogContent>
            <div className="max-w-screen-md mx-auto p-5 text-left">
              <div className="mt-6">
                <h2 className="sm:text-lg text-base font-semibold border-b border-gray-400">
                  Experience
                </h2>
                <Spacer size={8} />
                <ul className="list-none">
                  <li>
                    <div className="flex justify-between">
                      <span className="font-bold">
                        Software Engineering Intern
                      </span>
                      <span className="max-sm:hidden">
                        May 2024 - Aug. 2024
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="italic sm:text-sm text-xs">
                        Intuit Credit Karma
                      </span>
                      <span className="italic sm:text-sm text-xs">
                        Charlotte, NC
                      </span>
                    </div>
                  </li>
                  <Spacer size={8} />
                  <li>
                    <div className="flex justify-between">
                      <span className="font-bold">Technical Officer</span>
                      <span className="max-sm:hidden">Dec. 2023 - Present</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="italic sm:text-sm text-xs">
                        UF Software Engineering Club
                      </span>
                      <span className="italic sm:text-sm text-xs">
                        Gainesville, FL
                      </span>
                    </div>
                  </li>
                  <Spacer size={8} />
                  <li>
                    <div className="flex justify-between">
                      <span className="font-bold">
                        Undergraduate Researcher
                      </span>
                      <span className="max-sm:hidden">Aug. 2023 - Present</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="italic sm:text-sm text-xs">
                        UF SurfLab
                      </span>
                      <span className="italic sm:text-sm text-xs">
                        Gainesville, FL
                      </span>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="mt-6">
                <h2 className="sm:text-lg text-base font-semibold border-b border-gray-400">
                  Projects
                </h2>
                <Spacer size={8} />
                <ul className="list-none">
                  <li>
                    <div className="flex justify-between">
                      <span className="font-bold">Sentimentor</span>
                      <span className="max-sm:hidden">Mar. 2024</span>
                    </div>
                    <div className="italic sm:text-sm text-xs">
                      React, TypeScript, Node, MongoDB, FastAPI, TensorFlow,
                      PyTorch
                    </div>
                  </li>
                  <Spacer size={8} />
                  <li>
                    <div className="flex justify-between">
                      <span className="font-bold">PathPilot</span>
                      <span className="max-sm:hidden">Mar. 2024</span>
                    </div>
                    <div className="italic sm:text-sm text-xs">
                      React, TypeScript, Node, Framer Motion, Google Maps API,
                      OpenStreetMap
                    </div>
                  </li>
                  <Spacer size={8} />
                  <li>
                    <div className="flex justify-between">
                      <span className="font-bold">
                        Sorting Algorithm Visualizer
                      </span>
                      <span className="max-sm:hidden">May 2023</span>
                    </div>
                    <div className="italic sm:text-sm text-xs">JavaScript</div>
                  </li>
                </ul>
              </div>

              <div className="mt-6">
                <h2 className="sm:text-lg text-base font-semibold border-b border-gray-400">
                  Technical Skills
                </h2>
                <Spacer size={8} />
                <ul className="list-none">
                  <li className="sm:text-sm text-xs">
                    <strong>Languages:</strong> Python, C/C++, JavaScript,
                    TypeScript, HTML/CSS, Swift, Java, SQL
                  </li>
                  <Spacer size={8} />
                  <li className="sm:text-sm text-xs">
                    <strong>Frameworks & Libraries:</strong> React, Node.js,
                    Flask, Tailwind, TensorFlow
                  </li>
                  <Spacer size={8} />
                  <li className="sm:text-sm text-xs">
                    <strong>Developer Tools:</strong> MongoDB, Git, Unix, Linux,
                    VS Code, Visual Studio
                  </li>
                </ul>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}

export default Resume;
