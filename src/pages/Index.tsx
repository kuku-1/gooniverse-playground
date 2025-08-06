import { useState } from "react";
import Navigation from "@/components/Navigation";
import HomePage from "@/components/HomePage";
import GoonifyPage from "@/components/GoonifyPage";
import GamesPage from "@/components/GamesPage";
import CalculatorPage from "@/components/CalculatorPage";
import ChartPage from "@/components/ChartPage";

const Index = () => {
  const [currentPage, setCurrentPage] = useState("home");

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage onNavigate={setCurrentPage} />;
      case "goonify":
        return <GoonifyPage />;
      case "games":
        return <GamesPage />;
      case "calculator":
        return <CalculatorPage />;
      case "chart":
        return <ChartPage />;
      default:
        return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
      {renderPage()}
    </div>
  );
};

export default Index;
