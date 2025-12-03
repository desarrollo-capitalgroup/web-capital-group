import { FooterCopyright } from "./FooterCopyright";
// import { FooterPoweredBy } from "./FooterPoweredBy";

export const FooterContent = () => {
  return (
    <div className="text-[13.3px] caret-transparent col-end-[content] col-start-[content] row-end-[content] row-start-[content] leading-[17.955px] px-[15px] py-[26.6px] md:text-sm md:leading-[21px] md:px-[30px] md:py-[46.2px]">
      <div className="relative text-[13.3px] box-border caret-transparent leading-[17.955px] max-w-none w-full mx-auto md:text-sm md:leading-[21px] md:max-w-[1066px]">
        <div className="relative text-[13.3px] box-border caret-transparent flex flex-col leading-[17.955px] break-words w-full scroll-my-[30px] md:text-sm md:leading-[21px]"></div>
        <div className="text-[13.3px] caret-transparent leading-[17.955px] md:text-sm md:leading-[21px] before:accent-auto before:caret-transparent before:text-neutral-400 before:table before:text-[13.3px] before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[0px] before:list-outside before:list-disc before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-source_sans_pro before:md:text-sm after:accent-auto after:caret-transparent after:clear-both after:text-neutral-400 after:table after:text-[13.3px] after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-[0px] after:list-outside after:list-disc after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-source_sans_pro after:md:text-sm">
          <FooterCopyright />
          {/* <FooterPoweredBy /> */}
        </div>
      </div>
    </div>
  );
};
