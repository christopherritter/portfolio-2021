import React from "react";
// import { Document, Page, pdfjs } from "react-pdf";
// import pdfjsWorker from "pdfjs-dist/build/pdf.worker.entry";
import "../index.css"

const resumePDF =
  process.env.PUBLIC_URL + "/files/Christoper-Ritter_Resume-09-17-2021.pdf";

  const resumeDOC =
  process.env.PUBLIC_URL + "/files/Christoper-Ritter_Resume-09-17-21.docx";

// pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker;

export default function Resume() {
  // const [pageNumber, setPageNumber] = useState(1);

  const downloadResumePDF = () => {
    window.open(resumePDF, "_blank");
  };

  const downloadResumeDOC = () => {
    window.open(resumeDOC, "_blank");
  };

  return (
    <section
      id="resume"
      className="relative w-full bg-gray-800 bg-opacity-40 py-10 scroll-margin-top"
    >
      <div className="container px-5 py-10 mx-auto text-center">
        <h3 className="text-3xl text-blueGray-100 font-semibold mb-3">
          Download a copy of my resume
        </h3>
        <p className="mb-8 text-blueGray-200 text-lg leading-relaxed">
          Download an updated copy of my resume in Adobe PDF or Microsoft Word
          format
        </p>
        <div>
          <button
            className="bg-green-400 mb-2 text-gray-800 active:bg-green-300 font-bold uppercase text-base px-8 py-3 mr-4 rounded w-full sm:w-auto"
            type="button"
            onClick={downloadResumePDF}
          >
            Adobe PDF
          </button>
          <button
            className="text-green-400 mb-2 bg-transparent border border-solid border-green-400 hover:bg-green-400 hover:text-white active:bg-green-400 active:text-gray-800 font-bold uppercase px-8 py-3 rounded w-full sm:w-auto"
            type="button"
            onClick={downloadResumeDOC}
          >
            Microsoft Word
          </button>
        </div>
      </div>
      {/* <div className="container px-5 py-10 mx-auto h-96 overflow-hidden">
        <Document file={currentResume} width="600">
          <Page pageNumber={pageNumber} width="600" style={{ margin: "0 auto" }} />
        </Document>
      </div> */}
    </section>
  );
}
