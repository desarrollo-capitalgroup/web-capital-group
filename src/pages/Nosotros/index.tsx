import { AboutSection } from "./AboutSection";
import { TeamSection } from "./TeamSection";
import { TestimonialsSection } from "./TestimonialsSections";

export const Nosotros = () => {
  return (
    <div className="text-[13.7px] bg-stone-50 caret-transparent grow shrink-0 leading-[18.495px] md:text-[15px] md:leading-[22.5px]">
      <main className="text-[13.7px] caret-transparent leading-[18.495px] md:text-[15px] md:leading-[22.5px]">
        <div className="text-[13.7px] caret-transparent leading-[18.495px] md:text-[15px] md:leading-[22.5px]">
          <div className="relative text-[13.7px] box-border caret-transparent leading-[18.495px] break-words w-full scroll-my-[30px] md:text-[15px] md:leading-[22.5px]">
            <AboutSection />
            <TeamSection />
            <TestimonialsSection />
          </div>
        </div>
      </main>
    </div>
  );
};
