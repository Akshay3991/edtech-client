import React from "react";
import { Link } from "react-router-dom";

const Button = ({ children, active, linkto }) => {
  return (
    <Link to={linkto}>
      <div
        className="bg-[white] text-[#198f5e]  rounded-[20px] p-[3px] sm:p-[6px] md:p-[6px] sm:font-bold md:font-bold font-black sm:text-[15px] md:text-[15px] text-[10px]"
      >
        {children}
      </div>
    </Link>
  );
};

export default Button;
