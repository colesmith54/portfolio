"use client";

import { useState } from "react";
import "./App.css";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

import About from "@/components/about";
import Spacer from "@/components/spacer";
import { Button } from "@/components/ui/button";

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
                About
              </Button>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Button variant="link" onClick={() => setPage("research")}>
                Research
              </Button>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Button variant="link" onClick={() => setPage("coursework")}>
                Coursework
              </Button>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Button variant="link" onClick={() => setPage("resume")}>
                Resume
              </Button>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Button variant="link" onClick={() => setPage("contact")}>
                Contact
              </Button>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <Spacer size={100} />

      <div className="flex justify-center align-center px-8">
        {page === "about" && (
          <div className="max-w-3xl flex justify-center align-center">
            <About />
          </div>
        )}
        {page === "research" && <h1>Research</h1>}
        {page === "coursework" && <h1>Coursework</h1>}
        {page === "resume" && <h1>Resume</h1>}
        {page === "contact" && <h1>Contact</h1>}
      </div>
    </div>
  );
}

export default App;
