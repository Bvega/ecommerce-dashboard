import { useCountries } from "../hooks/useCountries";
import CountryCard from "../components/CountryCard";

const Home = () => {
  const { countries, loading, error } = useCountries();

  if (loading) return <div className="p-6">Loading...</div>;
  if (error) return <div className="p-6 text-red-600">{error}</div>;

  return (
    <main className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {countries.map((country) => (
        <CountryCard key={country.name.common} country={country} />
      ))}
    </main>
  );
};

export default Home;
