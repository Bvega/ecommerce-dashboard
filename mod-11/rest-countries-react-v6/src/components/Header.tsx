const Header = () => {
  return (
    <header className="bg-white dark:bg-gray-800 shadow-md p-4 flex justify-between items-center">
      <h1 className="text-lg font-bold">REST Countries</h1>
      <button className="text-sm">🌙 Dark Mode</button>
    </header>
  );
};

export default Header;
