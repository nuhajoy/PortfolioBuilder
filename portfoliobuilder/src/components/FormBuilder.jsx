import React, { useState, useCallback } from "react";

export default function FormBuilder({ formData, setFormData }) {
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Valid email is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = useCallback(
    (e) => {
      const { name, value, files } = e.target;
      setErrors((prev) => ({ ...prev, [name]: "" }));
      if (name === "photo") {
        const reader = new FileReader();
        reader.onloadend = () => {
          setFormData((prev) => ({ ...prev, photo: reader.result }));
        };
        if (files && files[0]) reader.readAsDataURL(files[0]);
      } else {
        setFormData((prev) => ({ ...prev, [name]: value }));
      }
    },
    [setFormData]
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    //  Proceed with next actions (submit, preview, etc.)
    // console.log("Form is valid and ready:", formData);
  };

  return (
    <form
      className="bg-white text-gray-900 p-6 max-w-3xl mx-auto"
      onSubmit={handleSubmit}
    >
      <section>
        <h2 className="text-lg font-bold mb-4">🧍 About Me</h2>
        <div className="mb-5">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your full name"
            className={`w-full px-4 py-2 bg-white text-gray-900 border ${
              errors.name ? "border-red-500" : "border-gray-400"
            } rounded-md shadow placeholder:text-gray-500 text-base focus:outline-none focus:ring-2 focus:ring-indigo-500 transition`}
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
          )}
        </div>

        <div className="mb-5">
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Title
          </label>
          <input
            id="title"
            name="title"
            type="text"
            value={formData.title}
            onChange={handleChange}
            placeholder="Your role or title"
            className="w-full px-4 py-2 bg-white text-gray-900 border border-gray-400 rounded-md shadow text-base focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="bio"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Bio
          </label>
          <textarea
            id="bio"
            name="bio"
            value={formData.bio}
            onChange={handleChange}
            placeholder="Write a short introduction"
            rows="4"
            className="w-full px-4 py-2 bg-white text-gray-900 border border-gray-400 rounded-md shadow placeholder:text-gray-500 text-base resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="photo"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Upload Photo
          </label>
          <input
            id="photo"
            type="file"
            name="photo"
            accept="image/*"
            onChange={handleChange}
            className="w-full px-4 py-2 bg-white text-gray-900 border border-gray-400 rounded-md shadow text-base"
          />
          {formData.photo && (
            <img
              src={formData.photo}
              alt="Preview"
              className="mt-4 h-32 w-32 object-cover rounded-full border border-gray-300 shadow"
            />
          )}
        </div>
      </section>

      <section>
        <h2 className="text-lg font-bold mt-6 mb-4">💼 Portfolio</h2>
        <div className="mb-5">
          <label
            htmlFor="skills"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Skills
          </label>
          <textarea
            id="skills"
            name="skills"
            value={formData.skills}
            onChange={handleChange}
            placeholder="Your technical skills"
            rows="4"
            className="w-full px-4 py-2 bg-white text-gray-900 border border-gray-400 rounded-md shadow text-base resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="experience"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Experience
          </label>
          <textarea
            id="experience"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            placeholder="Experience or education"
            rows="4"
            className="w-full px-4 py-2 bg-white text-gray-900 border border-gray-400 rounded-md shadow text-base resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="projects"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Projects
          </label>
          <textarea
            id="projects"
            name="projects"
            value={formData.projects}
            onChange={handleChange}
            placeholder="List your favorite projects"
            rows="4"
            className="w-full px-4 py-2 bg-white text-gray-900 border border-gray-400 rounded-md shadow text-base resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
          />
        </div>
      </section>

      <section>
        <h2 className="text-lg font-bold mt-6 mb-4">📬 Contact Me</h2>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="you@example.com"
            className={`w-full px-4 py-2 bg-white text-gray-900 border ${
              errors.email ? "border-red-500" : "border-gray-400"
            } rounded-md shadow placeholder:text-gray-500 text-base focus:outline-none focus:ring-2 focus:ring-indigo-500 transition`}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        <div className="mb-5">
          <label
            htmlFor="github"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            GitHub
          </label>
          <input
            id="github"
            name="github"
            type="text"
            value={formData.github}
            onChange={handleChange}
            placeholder="https://github.com/..."
            className="w-full px-4 py-2 bg-white text-gray-900 border border-gray-400 rounded-md shadow text-base focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="linkedin"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            LinkedIn
          </label>
          <input
            id="linkedin"
            name="linkedin"
            type="text"
            value={formData.linkedin}
            onChange={handleChange}
            placeholder="https://linkedin.com/in/..."
            className="w-full px-4 py-2 bg-white text-gray-900 border border-gray-400 rounded-md shadow text-base focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
          />
        </div>
      </section>

      {/* <div className="mt-6 flex justify-end">
        <button
          type="submit"
          className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
        >
          Submit
        </button>
      </div> */}
    </form>
  );
}
