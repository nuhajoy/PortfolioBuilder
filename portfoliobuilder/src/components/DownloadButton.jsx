import { useState } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas-pro";

export default function DownloadButton({ elementId }) {
  const [status, setStatus] = useState("");

  const exportToPDF = async () => {
    const element = document.getElementById(elementId);
    if (!element) return;

    setStatus("generating-pdf");

    const canvas = await html2canvas(element, {
      backgroundColor: "#ffffff",
      useCORS: true,
    });

    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "px",
      format: [canvas.width, canvas.height],
    });

    pdf.addImage(imgData, "PNG", 0, 0, canvas.width, canvas.height);
    pdf.save("portfolio.pdf");

    setStatus("pdf-exported");
  };

  const exportToHTML = () => {
    const element = document.getElementById(elementId);
    if (!element) return;

    setStatus("exporting-html");

    const htmlContent = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <title>My Portfolio</title>
      </head>
      <body style="font-family:sans-serif;padding:20px;">
        ${element.outerHTML}
      </body>
      </html>
    `;

    const blob = new Blob([htmlContent], { type: "text/html" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "portfolio.html";
    link.click();

    setStatus("html-exported");
  };

  return (
    <div className="flex flex-col gap-2 mt-6 items-start">
      <div className="flex gap-4">
        <button
          onClick={exportToPDF}
          disabled={status === "generating-pdf"}
          className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 disabled:opacity-50"
        >
          {status === "generating-pdf" ? "Exporting..." : "Download PDF"}
        </button>
        <button
          onClick={exportToHTML}
          disabled={status === "exporting-html"}
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 disabled:opacity-50"
        >
          {status === "exporting-html" ? "Exporting..." : "Export as HTML"}
        </button>
      </div>
      {status && <p className="text-sm text-gray-600">Status: {status}</p>}
    </div>
  );
}
