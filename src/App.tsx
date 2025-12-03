import { MobileHeader } from "./shared/MobileHeader";
import { Footer } from "./shared/Footer";
import { MobileBottomBar } from "./shared/MobileBottomBar";
import { DesktopHeader } from "./shared/DesktopHeader";
import { Inicio } from "./pages/Inicio";
import { Route, Routes } from "react-router-dom";
import { Nosotros } from "./pages/Nosotros";
import { Servicios } from "./pages/Servicios";
import { Contacto } from "./pages/Contacto";

export const App = () => {
  return (
    <div className="relative text-black text-[10px] not-italic normal-nums font-normal accent-auto bg-zinc-800 caret-transparent block tracking-[normal] leading-[normal] list-outside list-disc min-h-full pointer-events-auto text-start indent-[0px] normal-case visible w-full border-separate font-sans_serif">
      <div className="absolute text-neutral-500 text-[13.7px] bg-zinc-800 caret-transparent hidden h-full leading-[18.495px] w-full font-source_sans_pro md:text-[15px] md:leading-[22.5px]"></div>
      <div className="relative text-neutral-500 text-[13.7px] caret-transparent flex flex-col h-full leading-[18.495px] min-h-[1000px] font-source_sans_pro md:text-[15px] md:leading-[22.5px] before:accent-auto before:caret-transparent before:text-neutral-500 before:table before:text-[13.7px] before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[0px] before:list-outside before:list-disc before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-source_sans_pro before:md:text-[15px] after:accent-auto after:caret-transparent after:clear-both after:text-neutral-500 after:table after:text-[13.7px] after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-[0px] after:list-outside after:list-disc after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-source_sans_pro after:md:text-[15px]">
        <MobileHeader />
        <DesktopHeader />

        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/sobre-nosotros" element={<Nosotros />} />
          <Route path="/nuestros-servicios" element={<Servicios />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>

        <Footer />
        <MobileBottomBar />
        <div className="text-[13.7px] caret-transparent shrink-0 leading-[18.495px] md:text-[15px] md:leading-[22.5px]">
          <div className="text-[13.7px] caret-transparent h-[75px] leading-[18.495px] md:text-[15px] md:h-auto md:leading-[22.5px]"></div>
        </div>
        <div className="text-yellow-400 text-[13.7px] caret-transparent hidden shrink-0 leading-[18.495px] md:text-[15px] md:leading-[22.5px]"></div>
        <div className="text-[13.7px] caret-transparent hidden shrink-0 leading-[18.495px] md:text-[15px] md:leading-[22.5px]">
          <span className="text-zinc-800 text-[13.7px] caret-transparent leading-[18.495px] md:text-[15px] md:leading-[22.5px]"></span>
          <span className="text-[13.7px] caret-transparent leading-[18.495px] md:text-[15px] md:leading-[22.5px]"></span>
          <span className="text-[13.7px] caret-transparent leading-[18.495px] md:text-[15px] md:leading-[22.5px]"></span>
          <span className="text-[13.7px] caret-transparent leading-[18.495px] md:text-[15px] md:leading-[22.5px]"></span>
          <span className="text-orange-500 text-[13.7px] caret-transparent leading-[18.495px] md:text-[15px] md:leading-[22.5px]"></span>
          <span className="text-[13.7px] caret-transparent leading-[18.495px] md:text-[15px] md:leading-[22.5px]"></span>
          <span className="text-orange-500 text-[13.7px] caret-transparent leading-[18.495px] md:text-[15px] md:leading-[22.5px]"></span>
          <span className="text-orange-500 text-[13.7px] caret-transparent leading-[18.495px] md:text-[15px] md:leading-[22.5px]"></span>
          <span className="text-[13.7px] caret-transparent leading-[18.495px] md:text-[15px] md:leading-[22.5px]"></span>
          <span className="text-[13.7px] caret-transparent leading-[18.495px] md:text-[15px] md:leading-[22.5px]"></span>
          <span className="text-neutral-400 text-[13.7px] caret-transparent leading-[18.495px] md:text-[15px] md:leading-[22.5px]"></span>
          <span className="text-orange-500 text-[13.7px] caret-transparent leading-[18.495px] md:text-[15px] md:leading-[22.5px]"></span>
          <span className="text-[13.7px] caret-transparent leading-[18.495px] md:text-[15px] md:leading-[22.5px]"></span>
          <span className="text-[13.7px] caret-transparent leading-[18.495px] md:text-[15px] md:leading-[22.5px]"></span>
          <span className="text-[13.7px] caret-transparent leading-[18.495px] md:text-[15px] md:leading-[22.5px]"></span>
          <span className="text-[13.7px] caret-transparent leading-[18.495px] md:text-[15px] md:leading-[22.5px]"></span>
          <span className="text-neutral-400 text-[13.7px] caret-transparent leading-[18.495px] md:text-[15px] md:leading-[22.5px]"></span>
          <span className="text-orange-500 text-[13.7px] caret-transparent leading-[18.495px] md:text-[15px] md:leading-[22.5px]"></span>
          <span className="text-[13.7px] caret-transparent leading-[18.495px] md:text-[15px] md:leading-[22.5px]"></span>
          <span className="text-[13.7px] caret-transparent leading-[18.495px] md:text-[15px] md:leading-[22.5px]"></span>
          <span className="text-[13.7px] caret-transparent leading-[18.495px] md:text-[15px] md:leading-[22.5px]"></span>
          <span className="text-[13.7px] caret-transparent leading-[18.495px] md:text-[15px] md:leading-[22.5px]"></span>
          <span className="text-[13.7px] caret-transparent leading-[18.495px] md:text-[15px] md:leading-[22.5px]"></span>
        </div>
      </div>
    </div>

  );
};
