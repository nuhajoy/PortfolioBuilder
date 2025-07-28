// Optional extra for exporting as HTML string
export const exportToHTML = (elementId) => {
  const element = document.getElementById(elementId);
  if (!element) return;
  const htmlContent = element.outerHTML;
  const blob = new Blob([htmlContent], { type: "text/html" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "portfolio.html";
  link.click();
};
