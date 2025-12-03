export const MobileMenuButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <button
      type="button"
      aria-label="Abrir menú"
      onClick={onClick}
      className="text-white text-lg items-center bg-neutral-700 caret-transparent flex shrink-0 justify-center leading-[18px] min-h-10 min-w-[auto] text-center w-11 p-[9px] md:hidden md:min-w-0 hover:bg-neutral-800"
    >
      <span className="relative bg-white block h-[3px] w-[18px] my-[7px]
        before:bg-white before:block before:h-[3px] before:w-[18px] before:absolute before:top-[-7px]
        after:bg-white after:block after:h-[3px] after:w-[18px] after:absolute after:top-[7px]
      "></span>
    </button>
  );
};
