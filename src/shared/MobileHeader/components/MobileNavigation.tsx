import { Link, useLocation } from "react-router-dom";

export const MobileNavigation = ({
  isOpen,
  closeMenu,
}: {
  isOpen: boolean;
  closeMenu: () => void;
}) => {
  const { pathname } = useLocation();

  return (
    <nav
      className={`absolute top-full left-0 w-full bg-neutral-900 text-white p-4 flex-col gap-4 md:hidden transition-all duration-300 ${
        isOpen ? "flex" : "hidden"
      }`}
    >
      <Link
        to="/"
        onClick={closeMenu}
        className={`block py-2 uppercase ${
          pathname === "/"
            ? "text-orange-400 font-bold"
            : "text-neutral-400"
        }`}
      >
        Inicio
      </Link>

      <Link
        to="/sobre-nosotros"
        onClick={closeMenu}
        className={`block py-2 uppercase ${
          pathname === "/sobre-nosotros"
            ? "text-orange-400 font-bold"
            : "text-neutral-400"
        }`}
      >
        Sobre Nosotros
      </Link>

      <Link
        to="/nuestros-servicios"
        onClick={closeMenu}
        className={`block py-2 uppercase ${
          pathname === "/nuestros-servicios"
            ? "text-orange-400 font-bold"
            : "text-neutral-400"
        }`}
      >
        Nuestros Servicios
      </Link>

      <Link
        to="/contacto"
        onClick={closeMenu}
        className={`block py-2 uppercase ${
          pathname === "/contacto"
            ? "text-orange-400 font-bold"
            : "text-neutral-400"
        }`}
      >
        Contacto
      </Link>
    </nav>
  );
};
