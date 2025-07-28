import React, { useCallback } from "react";

// InputBox with visible border and styling
const InputBox = React.memo(({ label, name, placeholder, value, onChange }) => (
  <div className="mb-5">
    <label
      htmlFor={name}
      className="block text-sm font-medium text-gray-700 mb-1"
    >
      {label}
    </label>
    <input
      id={name}
      type="text"
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full px-4 py-2 bg-white text-gray-900 border border-gray-400 rounded-md shadow placeholder:text-gray-500 text-base focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
    />
  </div>
));

// TextareaBox with visible border and styling
const TextareaBox = React.memo(
  ({ label, name, placeholder, value, onChange }) => (
    <div className="mb-5">
      <label
        htmlFor={name}
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        {label}
      </label>
      <textarea
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows="4"
        className="w-full px-4 py-2 bg-white text-gray-900 border border-gray-400 rounded-md shadow placeholder:text-gray-500 text-base resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
      />
    </div>
  )
);

export default function FormBuilder({ formData, setFormData }) {
  const handleChange = useCallback(
    (e) => {
      const { name, value, files } = e.target;
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

  return (
    <div className="bg-white text-gray-900 p-6 max-w-3xl mx-auto">
      <section>
        <h2 className="text-lg font-bold mb-4">🧍 About Me</h2>
        <InputBox
          label="Name"
          name="name"
          placeholder="Your full name"
          value={formData.name}
          onChange={handleChange}
        />
        <InputBox
          label="Title"
          name="title"
          placeholder="Your role or title"
          value={formData.title}
          onChange={handleChange}
        />
        <TextareaBox
          label="Bio"
          name="bio"
          placeholder="Write a short introduction"
          value={formData.bio}
          onChange={handleChange}
        />
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
        <TextareaBox
          label="Skills"
          name="skills"
          placeholder="Your technical skills"
          value={formData.skills}
          onChange={handleChange}
        />
        <TextareaBox
          label="Experience"
          name="experience"
          placeholder="Experience or education"
          value={formData.experience}
          onChange={handleChange}
        />
        <TextareaBox
          label="Projects"
          name="projects"
          placeholder="List your favorite projects"
          value={formData.projects}
          onChange={handleChange}
        />
      </section>

      <section>
        <h2 className="text-lg font-bold mt-6 mb-4">📬 Contact Me</h2>
        <InputBox
          label="Email"
          name="email"
          placeholder="you@example.com"
          value={formData.email}
          onChange={handleChange}
        />
        <InputBox
          label="GitHub"
          name="github"
          placeholder="https://github.com/..."
          value={formData.github}
          onChange={handleChange}
        />
        <InputBox
          label="LinkedIn"
          name="linkedin"
          placeholder="https://linkedin.com/in/..."
          value={formData.linkedin}
          onChange={handleChange}
        />
      </section>
    </div>
  );
}
