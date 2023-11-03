import React from "react";
import BarChart from "./Components/BarChart";
import { useGetProductsQuery } from "./api/data";

const App = () => {
  const { data, error, isLoading } = useGetProductsQuery();

  return (
    <div className="min-h-screen animate-wave bg-wave-pattern bg-300% bg-no-repeat bg-fixed">
      <header className="py-5 text-center shadow-md">
        <h1 className="text-3xl font-bold">Product Ratings Dashboard</h1>
      </header>

      <main className="flex-grow">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            <aside className="lg:w-1/4 bg-white p-4 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold mb-4">Analysis</h2>
              <p>
                Here's a brief analysis of the data presented in the bar chart,
                which visualizes product ratings in an accessible format. This
                project was constructed using a modern technology stack
                including TailwindCSS for styling, Redux Toolkit and React Redux
                for state management, and Chart.js with React Chartjs-2 for
                rendering interactive data visualizations. Observe trends in
                product ratings to inform strategic business decisions.
              </p>
            </aside>
            <div className="lg:w-5/6 p-4 bg-white rounded-lg shadow-lg">
              {isLoading && <div>Loading...</div>}
              {error && <div>Error: {error.message}</div>}
              {!isLoading && !error && data && <BarChart chartData={data} />}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
