import { FooterContent } from "./components/FooterContext";

export const Footer = () => {
  return (
    <footer className="text-[13.7px] bg-zinc-800 caret-transparent shrink-0 leading-[18.495px] md:text-[15px] md:leading-[22.5px]">
      <div className="text-neutral-400 text-[13.3px] caret-transparent leading-[17.955px] md:text-sm md:leading-[21px]">
        <div className="relative text-[13.3px] box-border caret-transparent grid grid-cols-[[image_content]_minmax(0px,1fr)] grid-rows-[[image_content]_auto] leading-[17.955px] w-full md:text-sm md:leading-[21px]">
          <FooterContent />
        </div>
      </div>
    </footer>
  );
};
