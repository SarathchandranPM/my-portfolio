"use client";
import React, { createContext, useContext, useState } from "react";
import { links } from "@/lib/data";

type SectionName = (typeof links)[number]["name"];
type ActiveSectionContextProviderProps = {
  children: React.ReactNode;
};

type ActiveSectionContextType = {
  activeSection: SectionName;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
};

export const ActiveSectionContext =
  createContext<ActiveSectionContextType | null>(null);

const ActiveSectionContextProvider = ({
  children,
}: ActiveSectionContextProviderProps) => {
  const [activeSection, setActiveSection] = useState<SectionName>("Home");
  return (
    <ActiveSectionContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </ActiveSectionContext.Provider>
  );
};
export default ActiveSectionContextProvider;

/*
While defining ActiveSectionContext we have specified that it can either be of type ActiveSectionContextType or null. Why "or null", because the default value we're passing is null:

export const ActiveSectionContext =
  createContext<ActiveSectionContextType | null>(null);

We need a type guard to make sure that the useContext is not null. For this we create a custom hook useActiveSectionContext(), inside which we call useContext and pass ActiveSectionContext. This will return an object with 2 properties- activeSection, setActiveSection. If this returns null, we want to handle that. For this we use a type guard, and if it in null, we throw a new error. 
*/

export function useActiveSectionContext() {
  const context = useContext(ActiveSectionContext);

  if (context === null) {
    throw new Error(
      "useActiveSectionContext must be used within an ActiveSectionContextProvider"
    );
  }

  return context;
}

/* When we set the default state to "Home", TypeScript infers the type of value passed into useState as string. But it is not any string. It should be any of these strings- "Home", "About", "Projects", "Experience", "Contact". 

We can specify the literal type by writing:
const [activeSection, setActiveSection] = useState<"Home" | "About" | "Projects" | "Experience" | "Contact">("Home")

But this make the code more verbose, instead we can create a type

type SectionName = "Home" | "About" | "Projects" | "Experience" | "Contact"

But we can be further more concise, the value is the name of any object in any index in the links array:

type SectionName = (typeof links)[number]["name"];
*/
