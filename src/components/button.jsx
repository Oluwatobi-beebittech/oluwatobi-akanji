import * as React from "react";

export const POSITION = {
  LEFT: "left",
  RIGHT: "right",
};

export const Button = ({
  name,
  link,
  iconName,
  position,
  isExternalLink = false,
  isDownloadLink = false,
  disabled = false,
  downloadName,
}) => {
  const colour = position === POSITION.LEFT ? "bg-black" : "bg-blue-900";
  const disabledButtonClassName = disabled ? "disabled" : "";
  const buttonClassName = `${colour} p-2 text-center rounded-lg text-white font-semibold ${disabledButtonClassName}`;

  const buttonContent = (
    <>
      <span className={`${iconName} fa-lg`}></span> {name}
    </>
  );

  if (isExternalLink) {
    return (
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className={buttonClassName}
      >
        {buttonContent}
      </a>
    );
  }

  if (isDownloadLink) {
    return (
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        download={downloadName}
        className={buttonClassName}
      >
        {buttonContent}
      </a>
    );
  }

  return (
    <a
      href={link}
      className={buttonClassName}
      
    >
      {buttonContent}
    </a>
  );
};
