const EpisodeList = () => {
  const episodes = [
    { number: 1, title: "Introduction" },
    { number: 2, title: "Getting Started" },
    { number: 3, title: "Basic Table" },
    { number: 4, title: "Data & Headers" },
    { number: 5, title: "Loading" },
    { number: 6, title: "Sorting" },
    { number: 7, title: "Custom Column Sort" },
    { number: 8, title: "Remote Sort" },
    { number: 9, title: "Selectable Row" },
    { number: 10, title: "Pagination" },
    { number: 11, title: "Remote Pagination" },
    { number: 12, title: "And more" },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Tutorial Episodes</h2>
      <ul className="list-disc list-inside">
        {episodes.map((episode) => (
          <li
            className="text-lg font-mediumBold list-disc list-inside"
            key={episode.number}
          >
            Episode {episode.number}: {episode.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EpisodeList;
