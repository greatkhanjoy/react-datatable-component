import EpisodeList from "./EpisodeList";

const Home = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="p-8 space-y-10">
        <h1 className="text-4xl font-bold mb-4">
          Welcome to React Datatable Component Tutorial!
        </h1>
        <p className="text-gray-700 text-xl">
          In this tutorial series, we will learn how to use the
          react-datatable-component library to create interactive and responsive
          data tables in your React applications.
        </p>
        <EpisodeList />
      </div>
    </div>
  );
};

export default Home;
