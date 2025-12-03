import { Link, useLocation } from "react-router-dom";



export const DesktopNavigation = () => {
  const { pathname } = useLocation();
  
  return (
    <nav className="text-[13.7px] self-center caret-transparent hidden leading-[18.495px] min-h-0 min-w-0 ml-auto mr-0 md:text-[15px] md:block md:leading-[22.5px] md:min-h-[auto] md:min-w-[auto] md:mr-5">
      <ul className="text-[15px] caret-transparent flex flex-wrap leading-[20.25px] list-none uppercase pl-0 md:leading-[22.5px] before:accent-auto before:caret-transparent before:text-neutral-500 before:table before:text-[15px] before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[0px] before:list-outside before:list-none before:min-h-0 before:min-w-0 before:pointer-events-auto before:text-start before:indent-[0px] before:uppercase before:visible before:border-separate before:font-source_sans_pro before:md:min-h-[auto] before:md:min-w-[auto] after:accent-auto after:caret-transparent after:clear-both after:text-neutral-500 after:table after:text-[15px] after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-[0px] after:list-outside after:list-none after:min-h-0 after:min-w-0 after:pointer-events-auto after:text-start after:indent-[0px] after:uppercase after:visible after:border-separate after:font-source_sans_pro after:md:min-h-[auto] after:md:min-w-[auto]">
        <li className="relative box-border caret-transparent list-item leading-[20.25px] min-h-0 min-w-0 w-full mr-[15px] md:block md:leading-[22.5px] md:w-auto">
        <Link
          to="/"
          className={`relative box-border caret-transparent block text-center px-[15px] py-[5px] md:text-start md:px-3 font-bold ${
            pathname === "/" 
              ? "text-zinc-100 shadow-[rgb(235,129,19)_0px_2px_0px_0px]" 
              : "text-neutral-400"
          }`}
        >
          Inicio
        </Link>
      </li>

      <li className="relative box-border caret-transparent list-item leading-[20.25px] w-full mr-[15px] md:block md:w-auto">
        <Link
          to="/sobre-nosotros"
          className={`relative box-border caret-transparent block text-center px-[15px] py-[5px] md:text-start md:px-3 ${
            pathname === "/sobre-nosotros"
              ? "text-zinc-100 shadow-[rgb(235,129,19)_0px_2px_0px_0px]"
              : "text-neutral-400"
          }`}
        >
          Sobre Nosotros
        </Link>
      </li>

      <li className="relative box-border caret-transparent list-item leading-[20.25px] w-full mr-[15px] md:block md:w-auto">
        <Link
          to="/nuestros-servicios"
          className={`relative box-border caret-transparent block text-center px-[15px] py-[5px] md:text-start md:px-3 ${
            pathname === "/nuestros-servicios"
              ? "text-zinc-100 shadow-[rgb(235,129,19)_0px_2px_0px_0px]"
              : "text-neutral-400"
          }`}
        >
          Nuestros Servicios
        </Link>
      </li>

      <li className="relative box-border caret-transparent list-item leading-[20.25px] w-full mr-[15px] md:block md:w-auto">
        <Link
          to="/contacto"
          className={`relative box-border caret-transparent block text-center px-[15px] py-[5px] md:text-start md:px-3 ${
            pathname === "/contacto"
              ? "text-zinc-100 shadow-[rgb(235,129,19)_0px_2px_0px_0px]"
              : "text-neutral-400"
          }`}
        >
          Contacto
        </Link>
      </li>
      </ul>
    </nav>
  );
};
