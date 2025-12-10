import useSEO from "../../hooks/useSEO";
import { HeroSection } from "./HeroSection";

export const Inicio = () => {
  useSEO({
    title: 'Capital Group Recovery - Abogados especializados en activos financieros',
    description: 'Expertos en recuperación de cartera vencida y cobranza profesional. Estrategias efectivas y legales.',
    keywords: 'recuperación de cartera, cobranza profesional, cartera vencida, México',
    url: 'https://www.capitalgrouprecovery.com.mx/',
    ogImage: 'https://www.capitalgrouprecovery.com.mx/img/logo.webp'
  });

  return (
    <div className="text-[13.7px] bg-stone-50 caret-transparent grow shrink-0 leading-[18.495px] md:text-[15px] md:leading-[22.5px]">
      <main className="text-[13.7px] caret-transparent leading-[18.495px] md:text-[15px] md:leading-[22.5px]">
        <div className="text-[13.7px] caret-transparent leading-[18.495px] md:text-[15px] md:leading-[22.5px]">
          <HeroSection />
        </div>
      </main>
    </div>
  );
};
