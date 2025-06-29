import { Country } from "../types/Country";

interface Props {
  country: Country;
}

const CountryCard = ({ country }: Props) => {
  return (
    <div className="bg-white dark:bg-gray-700 rounded shadow p-4">
      <img src={country.flags.png} alt={`Flag of ${country.name.common}`} className="w-full h-40 object-cover mb-4" />
      <h2 className="font-semibold text-lg mb-2">{country.name.common}</h2>
      <p><strong>Region:</strong> {country.region}</p>
      <p><strong>Capital:</strong> {country.capital?.[0]}</p>
      <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
    </div>
  );
};

export default CountryCard;
