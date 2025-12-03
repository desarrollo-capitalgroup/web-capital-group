export const MobileContactButtons = () => {
  return (
    <div className="text-[13px] bg-orange-500 caret-transparent flex h-[75px] justify-center list-none px-2.5 font-proxima_nova md:hidden">
      <a
        href="mailto:support@capitalgrouprecovery.com.mx"
        className="text-white items-center caret-transparent flex flex-col grow justify-center min-h-[auto] min-w-[50px] md:min-h-0 hover:text-stone-100 hover:bg-amber-600 hover:underline hover:border-stone-100"
      >
        <span className="text-[11.7px] caret-transparent block leading-[11.7px] min-h-[auto] min-w-[auto] pt-[4.68px] md:min-h-0 md:min-w-0">
          Correo electrónico
        </span>
      </a>
      <a
        href="https://wa.me/+447877820482?text=Hola,%20quiero%20m%C3%A1s%20informaci%C3%B3n"
        target="_blank"
        className="text-white items-center caret-transparent flex flex-col grow justify-center min-h-[auto] min-w-[50px] md:min-h-0 hover:text-stone-100 hover:bg-amber-600 hover:underline hover:border-stone-100"
      >
        <span className="text-[11.7px] caret-transparent block leading-[11.7px] min-h-[auto] min-w-[auto] pt-[4.68px] md:min-h-0 md:min-w-0">
          WhatsApp
        </span>
      </a>
    </div>
  );
};
