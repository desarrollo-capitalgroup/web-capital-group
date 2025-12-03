export type TeamMemberCardProps = {
  name: string;
  role: string;
  imageUrl: string;
  imageLargeUrl: string;
  imageAlt?: string;
  containerVariant: string;
  pictureVariant: string;
  imageVariant: string;
  roleTextVariant: string;
};

export const TeamMemberCard = (props: TeamMemberCardProps) => {
  return (
    <div
      className={`relative text-[13.7px] box-border caret-transparent leading-[18.495px] min-h-0 break-words w-full px-0 scroll-my-[30px] md:text-[15px] md:leading-[22.5px] md:min-h-[auto] md:px-3 ${props.containerVariant}`}
    >
      <div className="relative text-[13.7px] box-border caret-transparent leading-[18.495px] break-words w-full mb-[13.7px] scroll-my-[30px] md:text-[15px] md:leading-[22.5px] md:mb-[15px] before:accent-auto before:caret-transparent before:text-neutral-500 before:table before:text-[13.7px] before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[18.495px] before:list-outside before:list-disc before:break-words before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-source_sans_pro before:md:text-[15px] before:md:leading-[22.5px] after:accent-auto after:caret-transparent after:clear-both after:text-neutral-500 after:table after:text-[13.7px] after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-[18.495px] after:list-outside after:list-disc after:break-words after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-source_sans_pro after:md:text-[15px] after:md:leading-[22.5px]">
        <div className="relative text-[13.7px] caret-transparent float-none leading-[0px] max-w-full break-words w-full mx-auto md:text-[15px] md:float-left md:mx-0">
          <a
            href={props.imageLargeUrl}
            title="Ver versión más grande"
            className="text-orange-500 text-[13.7px] caret-transparent break-words md:text-[15px] hover:text-orange-400 hover:underline hover:border-orange-400"
          >
            <picture
              className={`relative text-[13.7px] caret-transparent block h-0 break-words w-full md:text-[15px] ${props.pictureVariant}`}
            >
              <img
                alt={props.imageAlt || ""}
                src={props.imageUrl}
                sizes="auto, min(100vw, 1200px), 100vw"
                className={`absolute text-[13.7px] caret-transparent h-full max-w-full object-cover break-words w-full inset-0 md:text-[15px] ${props.imageVariant}`}
              />
            </picture>
          </a>
        </div>
      </div>
      <div className="relative text-[13.7px] box-border caret-transparent leading-[18.495px] break-words w-full scroll-my-[30px] md:text-[15px] md:leading-[22.5px]">
        <div className="text-[13.7px] caret-transparent leading-[18.495px] min-w-[54.8px] break-words md:text-[15px] md:leading-[22.5px] md:min-w-[60px]">
          <h3 className="text-orange-500 text-lg font-bold caret-transparent leading-[19.8px] break-words mt-[14.4px] mb-[5.4px] md:text-[21px] md:leading-[23.1px] md:mt-[16.8px] md:mb-[6.3px]">
            {props.name}
          </h3>
        </div>
      </div>
      <div className="relative text-[13.7px] box-border caret-transparent leading-[18.495px] break-words w-full scroll-my-[30px] md:text-[15px] md:leading-[22.5px]">
        <div className="text-[13.7px] caret-transparent leading-[18.495px] min-w-[54.8px] break-words md:text-[15px] md:leading-[22.5px] md:min-w-[60px]">
          <p
            className={`caret-transparent break-words md:leading-[22.5px] ${props.roleTextVariant}`}
          >
            <span className="caret-transparent break-words md:leading-[22.5px] text-[13.7px] leading-[18.495px] md:text-[15px]">
              {props.role}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};
