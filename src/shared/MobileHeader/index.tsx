import { useState } from "react";
import { MobileLogo } from "./components/MobileLogo";
import { MobileMenuButton } from "./components/MobileMenuButton";
import { MobileNavigation } from "./components/MobileNavigation";

export const MobileHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative text-[13.7px] box-border caret-transparent flex shrink-0 leading-[18.495px] min-h-[auto] min-w-[auto] w-full z-[1010] md:text-[15px] md:hidden md:leading-[22.5px] md:min-h-0 md:min-w-0">
      <MobileMenuButton onClick={() => setIsOpen(!isOpen)} />
      <MobileLogo />

      <MobileNavigation isOpen={isOpen} closeMenu={() => setIsOpen(false)} />
    </div>
  );
};
