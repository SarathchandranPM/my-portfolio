"use client";

import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import { useState } from "react";
import clsx from "clsx";

const Header = () => {
  const [active, setActive] = useState("Home");
  return (
    <header className="z-[999] relative">
      <motion.div
        className="fixed top-0 left-1/2 h-[6.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>

      <nav className="fixed flex top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center  text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {links.map((link) => (
            <motion.li
              key={link.hash}
              className="h-[3/4] flex items-center justify-center relative"
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                href={link.hash}
                onClick={() => {
                  setActive(link.name);
                }}
                className={clsx(
                  "w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition",
                  { "text-gray-950": active === link.name }
                )}
              >
                {link.name}

                {link.name === active && (
                  <motion.span
                    className="bg-gray-100 rounded-full absolute inset-0 -z-10"
                    layoutId="active"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
export default Header;

/*
The navbar is wrapped inside header tags. it will have the highest z-index. This will help us to implement the see-through effect. As we scroll the page up, we can see the page contents behind through the navbar. For this we set a white background. We set an opacity of 80 (80%) to this white color. 

We also set an opacity of 40 opacity for the border, which means borders are going to be more transparent that the navbar. We can get a better view of the page contents behind the navbar through borders of the navbar.

The navbar will have a shadow-lg. And the shadow color will be black. /[0.03], means the shadow will have an opacity of 3%.

The backdrop-blur-[0.5rem] is used to control an element’s backdrop blur. A smaller (sm) backdrop-blur make the background content more clear. A regular blur class, which we used earlier in the RootLayout will blur the element itself. If it has any text content or image, they all will be blurry. Whereas backdrop-blur blurs the area behind the element. We have set the opacity of the navbar to 80% to the navbar. Which means, we can see through the navbar slightly. Using backdrop blur we can blur the content we see through.
*/

/*
When you use motion.div, remember it is using useEffect hook behind the scene, so make sure to make the component a client component.

Framer Motion is using CSS animation under the hood. So when you write:

initial={{ y: -100, opacity: 0 }}
animate={{ y: 0, opacity: 1 }}

This will override any transform property already set in the element. We have a -translate-x-1/2 (which is transform-translateX in normal CSS). This will be overridden by the initial and animate. So, if we have any transform properties set previously make sure to add it here:

initial={{ y: -100, x: "-50%", opacity: 0 }}
animate={{ y: 0, x: "-50%", opacity: 1 }}

After writing this you can remove the -translate-x-1/2 from className.

When you click, say About link in the nav bar, you will be scrolled down to the about section. We're achieving this by setting an id property to each section, which is same as the hash value for that section (see data.ts to see the hash value for each section). But when we click on about, we'll be scrolled down to that section, but the section will be on top of the screen. To prevent this we can use scroll margin property. After setting a scroll margin the section will stay some distance below from the view port. 

<span className="bg-gray-100 rounded-full absolute inset-0"></span>

inset-0 will set 0 position for all- top, bottom, left and right.
*/
