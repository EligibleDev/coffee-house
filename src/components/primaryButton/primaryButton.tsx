"use client";

import { useState } from "react";
import ButtonLoader from "./buttonLoader";
import Link from "next/link";
import { useParams } from "next/navigation";

type PrimaryButton = {
    text?: string;
    variant?: string;
    link?: string;
    func?: () => void;
    extraClass?: string;
    disabled?: boolean;
};

const PrimaryButton = ({
    text,
    variant,
    link,
    func,
    extraClass,
    disabled,
}: PrimaryButton) => {
    const params = useParams<{ tag: string; item: string }>();
    console.log(params);

    const baseClasses = `relative w-fit flex justify-center items-center overflow-hidden px-2 lg:py-[25.25px] py-4 text-sm font-bold capitalize rounded-full cursor-pointer before:content-[''] before:absolute before:w-full before:h-full before:translate-x-0 before:translate-y-72 hover:before:translate-y-0 before:transition-all before:duration-500 text-white disabled:text-red-500 ${
        extraClass || ""
    }`;

    const generatedClass =
        variant === "black"
            ? "bg-secondary-black before:bg-primary-green"
            : variant === "green"
              ? "bg-primary-green before:bg-secondary-black"
              : "bg-primary-green before:bg-white hover:text-primary-green";

    const classes = `${baseClasses} ${generatedClass}`;

    const buttonText = (
        <span className="z-10 min-w-[160px] text-center transition-all duration-500 lg:min-w-[220px]">
            {/* {buttonLoading ? <ButtonLoader />  //FIXME: : text} */}
        </span>
    );

    return link ? (
        disabled ? (
            <div className={`${classes} pointer-events-none opacity-50`}>
                {buttonText}
            </div>
        ) : (
            <Link className={classes} href={link}>
                {buttonText}
            </Link>
        )
    ) : disabled ? (
        <div className={`${classes} pointer-events-none opacity-50`}>{buttonText}</div>
    ) : (
        <button disabled={disabled} onClick={func} className={classes}>
            {buttonText}
        </button>
    );
};

export default PrimaryButton;
