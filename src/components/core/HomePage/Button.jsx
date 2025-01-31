import React from "react";
import { Link } from "react-router-dom";

const Button = ({ children, active, linkto }) => {
  return (
    <Link to={linkto}>
      <div
        className="bg-[#198f5e] text-[white] border-[3px] border-[whitesmoke] rounded-[20px] p-[6px] font-bold text-[15px]"
      >
        {children}
      </div>
    </Link>
  );
};

export default Button;
