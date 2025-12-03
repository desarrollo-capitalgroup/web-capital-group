import { MobileContactButtons } from "./components/MobileContactButtons";

export const MobileBottomBar = () => {
  return (
    <div className="fixed text-[13.7px] caret-transparent flex flex-col shrink-0 leading-[18.495px] z-[1020] bottom-0 inset-x-0 md:text-[15px] md:leading-[22.5px]">
      <div className="text-[13.7px] caret-transparent leading-[18.495px] order-1 md:text-[15px] md:leading-[22.5px]">
        <MobileContactButtons />
      </div>
    </div>
  );
};
