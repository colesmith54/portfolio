"use client";

import { useState } from "react";
import "./App.css";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

import { Button } from "@/components/ui/button";

function App() {
  const [page, setPage] = useState("about");

  return (
    <>
      <div className="flex justify-evenly">
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
      {page === "about" && <h1>About</h1>}
      {page === "research" && <h1>Research</h1>}
      {page === "coursework" && <h1>Coursework</h1>}
      {page === "resume" && <h1>Resume</h1>}
      {page === "contact" && <h1>Contact</h1>}
    </>
  );
}

export default App;
