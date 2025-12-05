import { Link } from "react-router-dom";

export type CTAButtonProps = {
  href: string;
  text: string;
  title?: string;
};

export const CTAButton = (props: CTAButtonProps) => {
  return (
    <div className="relative text-[13.7px] box-border caret-transparent leading-[18.495px] break-words w-full mt-[13.7px] scroll-my-[30px] md:text-[15px] md:leading-[22.5px] md:mt-[15px]">
      <div className="text-[13.7px] caret-transparent leading-[18.495px] break-words text-center md:text-[15px] md:leading-[22.5px]">
        <Link
          to={props.href}
          title={props.title}
          className="text-orange-500 text-[17.81px] items-center shadow-[rgb(235,129,19)_0px_0px_0px_2px_inset] box-border caret-transparent inline-flex justify-center leading-[24.0435px] break-words w-full px-[16.029px] py-[8.905px] rounded-[3.562px] md:text-[19.5px] md:leading-[29.25px] md:px-[17.55px] md:py-[9.75px] md:rounded-[3.9px] hover:text-white hover:bg-orange-500 hover:border-white"
        >
          <div className="text-[17.81px] caret-transparent leading-[24.0435px] min-w-px break-words md:text-[19.5px] md:leading-[29.25px]">
            {props.text}
          </div>
        </Link>
      </div>
    </div>
  );
};
