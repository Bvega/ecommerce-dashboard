import CountryCard from "../components/CountryCard";

const Home = () => {
  return (
    <main className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <CountryCard />
      <CountryCard />
      <CountryCard />
    </main>
  );
};

export default Home;
