import Header from "./components/Header";
import Home from "./pages/Home";

function App() {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen">
      <Header />
      <Home />
    </div>
  );
}

export default App;
