import { useState } from "react";
import FormBuilder from "../components/FormBuilder";
import PortfolioTemplate from "../components/PortfolioTemplate";
import DownloadButton from "../components/DownloadButton";
import Header from "../components/Header";
import Footer from "../components/Footer";
// import ThemeToggle from "../components/ThemeToggle";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    title: "",
    bio: "",
    photo: "",
    skills: "",
    experience: "",
    projects: "",
    email: "",
    github: "",
    linkedin: "",
  });

  return (
    <>
      <Header />
      {/* <ThemeToggle /> */}
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        <FormBuilder formData={formData} setFormData={setFormData} />
        <div className="p-6 bg-gray-100 dark:bg-gray-800 overflow-y-auto">
          <PortfolioTemplate data={formData} />
          <DownloadButton elementId="portfolioPreview" />
        </div>
      </div>
      <Footer />
    </>
  );
}
