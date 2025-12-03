import { CTAButton } from "../CTAButtons";
import { TeamMemberCard } from "./components/TeamMembers";

export const TeamSection = () => {
  return (
    <div className="relative text-[13.7px] border-b-neutral-500 border-l-neutral-500 border-r-neutral-500 border-t-neutral-500/20 box-border caret-transparent grid grid-cols-[[image_content]_minmax(0px,1fr)] grid-rows-[[image_content]_auto] leading-[18.495px] break-words w-full scroll-my-[30px] border-t md:text-[15px] md:leading-[22.5px]">
      <div className="text-[13.7px] caret-transparent col-end-[content] col-start-[content] row-end-[content] row-start-[content] leading-[18.495px] break-words px-[15px] py-[27.4px] md:text-[15px] md:leading-[22.5px] md:px-[30px] md:py-[49.5px]">
        <div className="relative text-[13.7px] box-border caret-transparent leading-[18.495px] max-w-none break-words w-full mx-auto md:text-[15px] md:leading-[22.5px] md:max-w-[1066px]">
          <div className="relative text-[13.7px] box-border caret-transparent leading-[18.495px] break-words w-full scroll-my-[30px] md:text-[15px] md:leading-[22.5px]">
            <div className="text-[13.7px] caret-transparent leading-[18.495px] min-w-[54.8px] break-words md:text-[15px] md:leading-[22.5px] md:min-w-[60px]">
              <h2 className="text-orange-500 text-[22.5px] font-bold caret-transparent leading-[24.75px] break-words text-center mb-[6.75px] md:text-3xl md:leading-[33px] md:mb-[9px]">
                Abogados Financieros Calificados
              </h2>
            </div>
          </div>
          <div className="relative text-[13.7px] box-border caret-transparent leading-[18.495px] break-words w-full scroll-my-[30px] md:text-[15px] md:leading-[22.5px]">
            <div className="text-[13.7px] caret-transparent leading-[18.495px] min-w-[54.8px] break-words md:text-[15px] md:leading-[22.5px] md:min-w-[60px]">
              <h1 className="text-orange-500 text-[37.5px] font-bold caret-transparent leading-[41.25px] break-words text-center mt-[26.25px] mb-[9.75px] md:text-6xl md:leading-[66px] md:mt-[33px] md:mb-3">
                Conozca a nuestros abogados expertos
              </h1>
              <p className="text-[13.7px] caret-transparent leading-[18.495px] break-words text-center mb-[5.48px] md:text-[15px] md:leading-[22.5px] md:mb-1.5">
                Contamos con un equipo de abogados con amplia experiencia en el
                ámbito financiero y legal. Nuestra experiencia en colaboración
                con entidades regulatorias nos permite ofrecer un servicio
                integral y eficaz.
              </p>
              <p className="text-[13.7px] caret-transparent leading-[18.495px] break-words mb-[5.48px] md:text-[15px] md:leading-[22.5px] md:mb-1.5">
                 
              </p>
            </div>
          </div>
          <div className="relative text-[13.7px] box-border caret-transparent leading-[18.495px] break-words w-full my-[13.7px] scroll-my-[30px] md:text-[15px] md:leading-[22.5px] md:my-[15px]">
            <div className="text-[13.7px] caret-transparent h-[5px] leading-[18.495px] max-h-2.5 break-words md:text-[15px] md:leading-[22.5px] md:max-h-none"></div>
          </div>
          <div className="relative text-[13.7px] [align-items:normal] box-border caret-transparent block leading-[18.495px] break-words w-full mx-0 my-[13.7px] scroll-my-[30px] md:text-[15px] md:items-stretch md:flex md:leading-[22.5px] md:w-auto md:-mx-3 md:my-[15px]">
            <TeamMemberCard
              name="Patrick Zabala"
              role="Financial Lawyer"
              imageUrl="https://c.animaapp.com/miajyqr6CUcCHG/assets/18.jpg"
              imageLargeUrl="https://primary.jwwb.nl/unsplash/UxujkVMyY_0.jpg"
              imageAlt=""
              containerVariant="md:w-[18.8213%] md:mb-0"
              pictureVariant="overflow-hidden pt-[150%] rounded-[5.48px] md:rounded-md"
              imageVariant="aspect-[auto_800_/_1200] rounded-[5.48px] md:rounded-md"
              roleTextVariant="text-[13.7px] leading-[18.495px]"
            />
            <TeamMemberCard
              name="Carlos Zains"
              role="Financial Lawyer"
              imageUrl="https://c.animaapp.com/miajyqr6CUcCHG/assets/25.jpg"
              imageLargeUrl="https://primary.jwwb.nl/unsplash/61Idm7r4ERE.jpg"
              imageAlt=""
              containerVariant="mt-[41.1px] mb-[13.7px] md:w-[19.827%] md:my-0"
              pictureVariant="pt-[149.948%]"
              imageVariant="aspect-[auto_800_/_1199.58]"
              roleTextVariant="text-[13.7px] leading-[18.495px]"
            />
            <TeamMemberCard
              name="Teresa  Rossi"
              role="Financial Lawyer"
              imageUrl="https://c.animaapp.com/miajyqr6CUcCHG/assets/68kSYChGlMo.jpg"
              imageLargeUrl="https://c.animaapp.com/miajyqr6CUcCHG/assets/68kSYChGlMo.jpg"
              imageAlt=""
              containerVariant="mt-[41.1px] mb-[13.7px] md:w-[19.5333%] md:my-0"
              pictureVariant="pt-[150%]"
              imageVariant="aspect-[auto_1920_/_2880]"
              roleTextVariant="text-left"
            />
            <TeamMemberCard
              name="Stiven Velez"
              role="Financial Lawyer"
              imageUrl="https://c.animaapp.com/miajyqr6CUcCHG/assets/19.jpg"
              imageLargeUrl="https://primary.jwwb.nl/unsplash/_KL3FFG4eBA.jpg"
              imageAlt=""
              containerVariant="mt-[41.1px] mb-[13.7px] md:w-[20.698%] md:my-0"
              pictureVariant="pt-[150%]"
              imageVariant="aspect-[auto_800_/_1200]"
              roleTextVariant="text-left"
            />
            <TeamMemberCard
              name="Maria Rossi"
              role="Financial Lawyer"
              imageUrl="https://c.animaapp.com/miajyqr6CUcCHG/assets/8zLG5tGOGxk.jpg"
              imageLargeUrl="https://c.animaapp.com/miajyqr6CUcCHG/assets/8zLG5tGOGxk.jpg"
              imageAlt=""
              containerVariant="mt-[41.1px] md:w-[21.1204%] md:mt-0"
              pictureVariant="pt-[150%]"
              imageVariant="aspect-[auto_1920_/_2880]"
              roleTextVariant="text-left"
            />
          </div>
          <CTAButton
            href="https://temp-dbfccddjkiaksvriohsb.webadorsite.com/"
            text="AGENDA TU CITA"
          />
        </div>
      </div>
    </div>
  );
};
