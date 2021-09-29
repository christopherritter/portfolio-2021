import React from "react";
import {
  MailIcon,
  DownloadIcon,
  AtSymbolIcon,
} from "@heroicons/react/solid";

export default function Footer() {
  return (
    <section id="contact" className="relative w-full p-2 bg-gray-800 bg-opacity-40 border-t border-gray-700">
      <div className="container mx-auto md:px-10 flex flex-wrap">
        <div className="w-full md:w-1/2">© 2021 Christopher Ritter</div>
        <div className="w-full md:w-1/2 text-right">
          <button
            className="h-5 w-5 ml-2 text-gray-400 hover:text-gray-200"
            type="button"
          >
            <MailIcon cssClass="w-full h-full" />
          </button>
          <button
            className="h-5 w-5 ml-2 text-gray-400 hover:text-gray-200"
            type="button"
          >
            <AtSymbolIcon cssClass="w-full h-full" />
          </button>
          <button
            className="h-5 w-5 ml-2 text-gray-400 hover:text-gray-200"
            type="button"
          >
            <DownloadIcon cssClass="w-full h-full" />
          </button>
        </div>
      </div>
    </section>
  );
}
