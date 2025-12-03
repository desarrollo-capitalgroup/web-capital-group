export type TestimonialCardProps = {
  variant: string;
  imageUrl: string;
  imageClassName: string;
  testimonialText: string;
  authorName: string;
  authorNameBold: boolean;
};

export const TestimonialCard = (props: TestimonialCardProps) => {
  return (
    <div
      className={`relative text-[13.7px] box-border caret-transparent leading-[18.495px] min-h-0 break-words w-full px-0 scroll-my-[30px] md:text-[15px] md:leading-[22.5px] md:min-h-[auto] md:w-[33.3333%] md:px-3 ${props.variant}`}
    >
      <div className="relative text-[13.7px] box-border caret-transparent leading-[18.495px] break-words w-full mb-[13.7px] scroll-my-[30px] md:text-[15px] md:leading-[22.5px] md:mb-[15px] before:accent-auto before:caret-transparent before:text-neutral-400 before:table before:text-[13.7px] before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[18.495px] before:list-outside before:list-disc before:break-words before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-source_sans_pro before:md:text-[15px] before:md:leading-[22.5px] after:accent-auto after:caret-transparent after:clear-both after:text-neutral-400 after:table after:text-[13.7px] after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-[18.495px] after:list-outside after:list-disc after:break-words after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-source_sans_pro after:md:text-[15px] after:md:leading-[22.5px]">
        <div className="relative text-[13.7px] caret-transparent leading-[0px] max-w-full break-words w-[140px] mx-auto md:text-[15px]">
          <picture className="relative text-[13.7px] caret-transparent block h-0 object-cover break-words w-full overflow-hidden pt-[100%] rounded-[50%] md:text-[15px]">
            <img
              alt=""
              src={props.imageUrl}
              sizes="auto, min(100vw, 140px), 100vw"
              className={`absolute text-[13.7px] aspect-[auto_800_/_800] caret-transparent h-full max-w-full object-cover break-words w-full rounded-[50%] inset-0 md:text-[15px] ${props.imageClassName}`}
            />
          </picture>
        </div>
      </div>
      <div className="relative text-[13.7px] box-border caret-transparent leading-[18.495px] break-words w-full scroll-my-[30px] md:text-[15px] md:leading-[22.5px]">
        <div className="text-[13.7px] caret-transparent leading-[18.495px] min-w-[54.8px] break-words md:text-[15px] md:leading-[22.5px] md:min-w-[60px]">
          <p className="text-[13.7px] caret-transparent leading-[18.495px] break-words text-center mb-[5.48px] md:text-[15px] md:leading-[22.5px] md:mb-1.5">
            {props.testimonialText}
          </p>
        </div>
      </div>
      <div className="relative text-[13.7px] box-border caret-transparent leading-[18.495px] break-words w-full scroll-my-[30px] md:text-[15px] md:leading-[22.5px]">
        <div className="text-[13.7px] caret-transparent leading-[18.495px] min-w-[54.8px] break-words md:text-[15px] md:leading-[22.5px] md:min-w-[60px]">
          <p className="text-[10.5px] caret-transparent leading-[14.175px] break-words text-center md:leading-[15.75px]">
            {props.authorNameBold ? (
              <strong className="font-bold caret-transparent leading-[14.175px] break-words md:leading-[15.75px]">
                {props.authorName}
              </strong>
            ) : (
              props.authorName
            )}
          </p>
        </div>
      </div>
    </div>
  );
};
