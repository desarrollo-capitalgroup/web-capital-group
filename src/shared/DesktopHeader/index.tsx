import { DesktopLogo } from "./components/Desktop.logo";
import { DesktopNavigation } from "./components/Desktop.navigation";

export const DesktopHeader = () => {
  return (
    <header className="text-[13.7px] bg-zinc-800 caret-transparent flex shrink-0 flex-wrap leading-[18.495px] p-0 md:text-[15px] md:leading-[22.5px] md:p-5 before:accent-auto before:caret-transparent before:text-neutral-500 before:table before:text-[13.7px] before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[0px] before:list-outside before:list-disc before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-source_sans_pro before:md:text-[15px] after:accent-auto after:caret-transparent after:clear-both after:text-neutral-500 after:table after:text-[13.7px] after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-[0px] after:list-outside after:list-disc after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-source_sans_pro after:md:text-[15px]">
      <div className="text-[13.7px] caret-transparent basis-[0%] grow leading-[18.495px] md:text-[15px] md:leading-[22.5px]">
        <DesktopLogo />
      </div>
      <DesktopNavigation />
    </header>
  );
};
