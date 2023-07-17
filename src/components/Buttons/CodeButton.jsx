import React from "react";
import "./CodeButton.css";
const CodeButton = () => {
  // const handleDownload = () => {};
  return (
    <a
      href="https://drive.google.com/file/d/1XLiG4Em6QAGleu3nFNm7G9Qw75w7op6v/view?usp=sharing"
      // onClick={handleDownload}
      target="_blank"
      rel="noreferrer"
      className="cssbuttons-io"
    >
      <span className="uppercase md:text-[1.1rem]">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path fill="none" d="M0 0h24v24H0z"></path>
          <path
            fill="currentColor"
            d="M24 12l-5.657 5.657-1.414-1.414L21.172 12l-4.243-4.243 1.414-1.414L24 12zM2.828 12l4.243 4.243-1.414 1.414L0 12l5.657-5.657L7.07 7.757 2.828 12zm6.96 9H7.66l6.552-18h2.128L9.788 21z"
          ></path>
        </svg>
        Check Out CV
      </span>
    </a>
  );
};

export default CodeButton;
