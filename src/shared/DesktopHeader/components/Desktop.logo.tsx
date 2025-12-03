export const DesktopLogo = () => {
  return (
    <div className="relative text-[13.7px] items-center caret-transparent flex float-left justify-start leading-[18.495px] max-w-full md:text-[15px] md:leading-[22.5px]">
      <div className="relative text-[13.7px] caret-transparent hidden basis-20 float-left leading-[0px] max-w-20 min-h-0 min-w-0 w-full md:text-[15px] md:block md:min-h-[auto] md:min-w-[auto]">
        <img
          src="public/img/logo-2-capital-group.png"
          title="Capital Group recovery"
          sizes="80px"
          alt="Capital Group recovery"
          className="relative text-[13.7px] aspect-[auto_80_/_80] caret-transparent max-h-20 w-100 md:text-[15px] max-w-none"
        />
      </div>
      <div className="relative text-[13.7px] caret-transparent hidden float-left leading-[0px] md:text-[15px]">
        <h1 className="text-zinc-100 text-[27.4px] font-bold caret-transparent leading-[27.4px] uppercase md:text-3xl md:leading-[30px]">
          <span className="text-orange-500 text-[27.4px] caret-transparent leading-[27.4px] md:text-3xl md:leading-[30px]">
            CAPITAL GROUP RECOVERY
          </span>
        </h1>
      </div>
    </div>
  );
};
