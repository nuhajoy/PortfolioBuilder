export default function PortfolioTemplate({ data }) {
  return (
    <div
      id="portfolioPreview"
      className="p-6 bg-white text-gray-900 rounded-lg shadow-md"
    >
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="lg:w-1/2 space-y-2">
          <h1 className="text-3xl font-bold text-indigo-600">{data.name}</h1>
          <h2 className="text-lg text-gray-600">{data.title}</h2>
          <p>{data.bio}</p>
          <div>
            <strong>Skills:</strong> <p>{data.skills}</p>
            <strong>Experience:</strong> <p>{data.experience}</p>
            <strong>Projects:</strong> <p>{data.projects}</p>
          </div>
          <div className="pt-2 space-x-3">
            {data.email && <a href={`mailto:${data.email}`}>📧 Email</a>}
            {data.github && (
              <a href={data.github} target="_blank" rel="noopener noreferrer">
                🐙 GitHub
              </a>
            )}
            {data.linkedin && (
              <a href={data.linkedin} target="_blank" rel="noopener noreferrer">
                💼 LinkedIn
              </a>
            )}
          </div>
        </div>
        <div className="lg:w-1/2 flex justify-center items-center">
          {data.photo && (
            <img
              src={data.photo}
              alt="Uploaded"
              className="w-48 h-48 object-cover rounded-lg border-4 border-gray-300"
            />
          )}
        </div>
      </div>
    </div>
  );
}
