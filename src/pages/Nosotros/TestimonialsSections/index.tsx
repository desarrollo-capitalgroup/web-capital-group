import { TestimonialCard } from "./components/TestimonialCard";

export const TestimonialsSection = () => {
  return (
    <div className="relative text-neutral-400 text-[13.7px] bg-zinc-800 box-border caret-transparent grid grid-cols-[[image_content]_minmax(0px,1fr)] grid-rows-[[image_content]_auto] leading-[18.495px] break-words w-full scroll-my-[30px] md:text-[15px] md:leading-[22.5px]">
      <div className="text-[13.7px] caret-transparent col-end-[content] col-start-[content] row-end-[content] row-start-[content] leading-[18.495px] break-words px-[15px] py-[27.4px] md:text-[15px] md:leading-[22.5px] md:px-[30px] md:py-[49.5px]">
        <div className="relative text-[13.7px] box-border caret-transparent leading-[18.495px] max-w-none break-words w-full mx-auto md:text-[15px] md:leading-[22.5px] md:max-w-[1066px]">
          <div className="relative text-[13.7px] box-border caret-transparent leading-[18.495px] break-words w-full scroll-my-[30px] md:text-[15px] md:leading-[22.5px]">
            <div className="text-[13.7px] caret-transparent leading-[18.495px] min-w-[54.8px] break-words md:text-[15px] md:leading-[22.5px] md:min-w-[60px]">
              <h1 className="text-[37.5px] font-bold caret-transparent leading-[41.25px] break-words text-center mb-[9.75px] md:text-6xl md:leading-[66px] md:mb-3">
                <strong className="text-[37.5px] caret-transparent leading-[41.25px] break-words md:text-6xl md:leading-[66px]">
                  <span className="text-orange-500 text-[37.5px] caret-transparent leading-[41.25px] break-words md:text-6xl md:leading-[66px]">
                    Testimonios
                  </span>
                </strong>
              </h1>
            </div>
          </div>
          <div className="relative text-[13.7px] [align-items:normal] box-border caret-transparent block leading-[18.495px] break-words w-full mt-[13.7px] mx-0 scroll-my-[30px] md:text-[15px] md:items-stretch md:flex md:leading-[22.5px] md:w-auto md:mt-[15px] md:-mx-3">
            <TestimonialCard
              variant="mb-[13.7px]"
              imageUrl="https://c.animaapp.com/miajyqr6CUcCHG/assets/23.jpg"
              imageClassName="object-[50%_70%]"
              testimonialText="“Estoy muy satisfecho con los servicios de Capital Group Recovery. Su equipo profesional logró recuperar mi capital adeudado de manera eficiente y efectiva.”"
              authorName="Juan Pérez"
              authorNameBold={false}
            />
            <TestimonialCard
              variant="mt-[41.1px] mb-[13.7px]"
              imageUrl="https://c.animaapp.com/miajyqr6CUcCHG/assets/21.jpg"
              imageClassName=""
              testimonialText="No tengo palabras para describir el excelente servicio que recibí de vuestra empresa."
              authorName="Emma Thompson"
              authorNameBold={true}
            />
            <TestimonialCard
              variant="mt-[41.1px]"
              imageUrl="https://c.animaapp.com/miajyqr6CUcCHG/assets/22.jpg"
              imageClassName="object-[50%_60%]"
              testimonialText="No tengo palabras para describir el excelente servicio que recibí de vuestra empresa."
              authorName="Oliver Hartman"
              authorNameBold={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
