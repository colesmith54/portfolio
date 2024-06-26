import { useState } from "react";
import "./App.css";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

import Spacer from "@/components/spacer";
import { Button } from "@/components/ui/button";
import { BackgroundGradient } from "@/components/ui/background-gradient";

import About from "@/components/about";
import Research from "@/components/research";
import Coursework from "@/components/coursework";
import Resume from "@/components/resume";
import Contact from "@/components/contact";

function App() {
  const [page, setPage] = useState("about");

  return (
    <div className="h-full w-full bg-black  bg-grid-small-white/[0.2] relative">
      <div className="absolute pointer-events-none inset-0 bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="flex justify-center p-8">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Button variant="link" onClick={() => setPage("about")}>
                {page === "about" ? <strong>About</strong> : <>About</>}
              </Button>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Button variant="link" onClick={() => setPage("research")}>
                {page === "research" ? (
                  <strong>Research</strong>
                ) : (
                  <>Research</>
                )}
              </Button>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Button variant="link" onClick={() => setPage("coursework")}>
                {page === "coursework" ? (
                  <strong>Coursework</strong>
                ) : (
                  <>Coursework</>
                )}
              </Button>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Button variant="link" onClick={() => setPage("resume")}>
                {page === "resume" ? <strong>Resume</strong> : <>Resume</>}
              </Button>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Button variant="link" onClick={() => setPage("contact")}>
                {page === "contact" ? <strong>Conatct</strong> : <>Contact</>}
              </Button>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <Spacer size={50} />
      <div className="sm:block hidden">
        <Spacer size={50} />
      </div>

      <div className="flex justify-center align-center px-8">
        <BackgroundGradient
          className={`rounded-[22px] max-w-${
            page === "coursework" ? 5 : 3
          }xl p-4 sm:p-10 bg-zinc-900`}
        >
          {page === "about" && <About />}
          {page === "research" && <Research />}
          {page === "coursework" && <Coursework />}
          {page === "resume" && <Resume />}
          {page === "contact" && <Contact />}
        </BackgroundGradient>
      </div>
    </div>
  );
}

export default App;
