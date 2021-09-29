import React from "react";
import { MailIcon, DownloadIcon, AtSymbolIcon } from "@heroicons/react/solid";

export default function Footer() {
  const sendEmail = () => {
    window.open(
      "mailto:chris@christopherritter.com?subject=Your Professional Portfolio 2021"
    );
  };

  const viewTwitter = () => {
    window.open("https://www.twitter.com/geddon", "_blank");
  };

  const viewGithub = () => {
    window.open("https://www.github.com/christopherritter", "_blank");
  };

  return (
    <section
      id="footer"
      className="relative w-full p-2 bg-gray-800 bg-opacity-40 border-t border-gray-700"
    >
      <div className="container mx-auto md:px-10 flex flex-wrap">
        <div className="w-full md:w-1/2">© 2021 Christopher Ritter</div>
        <div className="w-full md:w-1/2 text-right">
          <button
            className="h-5 w-5 ml-2 text-gray-400 hover:text-gray-200"
            type="button"
            onClick={sendEmail}
          >
            <MailIcon className="w-full h-full" />
          </button>
          <button
            className="h-5 w-5 ml-2 text-gray-400 hover:text-gray-200"
            type="button"
            onClick={viewTwitter}
          >
            <AtSymbolIcon className="w-full h-full" />
          </button>
          <button
            className="h-5 w-5 ml-2 text-gray-400 hover:text-gray-200"
            type="button"
            onClick={viewGithub}
          >
            <DownloadIcon className="w-full h-full" />
          </button>
        </div>
      </div>
    </section>
  );
}
