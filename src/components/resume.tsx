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
                <h2 className="text-lg font-semibold border-b border-gray-400">
                  Experience
                </h2>
                <Spacer size={8} />
                <ul className="list-none">
                  <li>
                    <div className="flex justify-between">
                      <span className="font-bold">
                        Software Engineering Intern
                      </span>
                      <span>May 2024 - Aug. 2024</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="italic text-sm">
                        Intuit Credit Karma
                      </span>
                      <span className="italic text-sm">Charlotte, NC</span>
                    </div>
                  </li>
                  <Spacer size={8} />
                  <li>
                    <div className="flex justify-between">
                      <span className="font-bold">Technical Officer</span>
                      <span>Dec. 2023 - Present</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="italic text-sm">
                        UF Software Engineering Club
                      </span>
                      <span className="italic text-sm">Gainesville, FL</span>
                    </div>
                  </li>
                  <Spacer size={8} />
                  <li>
                    <div className="flex justify-between">
                      <span className="font-bold">
                        Undergraduate Researcher
                      </span>
                      <span>Aug. 2023 - Present</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="italic text-sm">UF SurfLab</span>
                      <span className="italic text-sm">Gainesville, FL</span>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="mt-6">
                <h2 className="text-lg font-semibold border-b border-gray-400">
                  Projects
                </h2>
                <Spacer size={8} />
                <ul className="list-none">
                  <li>
                    <div className="flex justify-between">
                      <span className="font-bold">Sentimentor</span>
                      <span>Mar. 2024</span>
                    </div>
                    <div className="italic text-sm">
                      React, TypeScript, Node, MongoDB, FastAPI, TensorFlow,
                      PyTorch
                    </div>
                  </li>
                  <Spacer size={8} />
                  <li>
                    <div className="flex justify-between">
                      <span className="font-bold">PathPilot</span>
                      <span>Mar. 2024</span>
                    </div>
                    <div className="italic text-sm">
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
                      <span>May 2023</span>
                    </div>
                    <div className="italic text-sm">JavaScript</div>
                  </li>
                </ul>
              </div>

              <div className="mt-6">
                <h2 className="text-lg font-semibold border-b border-gray-400">
                  Technical Skills
                </h2>
                <ul className="list-none">
                  <li className="text-sm">
                    <strong>Languages:</strong> Python, C/C++, JavaScript,
                    TypeScript, HTML/CSS, Swift, Java, SQL
                  </li>
                  <li className="text-sm">
                    <strong>Frameworks & Libraries:</strong> React, Node.js,
                    Flask, Tailwind, TensorFlow
                  </li>
                  <li className="text-sm">
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
