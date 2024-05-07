import React from "react";
import style from "./index.module.scss";
import Image from "next/image";
import phoneIcon from "@/assets/images/icons/phoneIcon.svg";

const MainBtn = ({ title, icon, btnStyle }) => {
  return (
    <button className={`${style.mainBtn} ${style[btnStyle]}`}>
      {icon ? (
        <Image
          src={icon?.src}
          alt="phone icon"
          objectFit="contain"
          height={20}
          width={20}
        />
      ) : null}
      {title}
    </button>
  );
};

export default MainBtn;
