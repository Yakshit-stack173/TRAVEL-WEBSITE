import React, { useEffect, useState } from "react";
import axios from "axios";

const FLIGHT_API_URL = "/flight.json";

export default function Flight() {
  const [flight, setFlight] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadInitialData = async () => {
      try {
        const response = await axios.get(FLIGHT_API_URL);
        setFlight(response.data?.flights || []);
      } catch (err) {
        console.error("Failed to fetch flights:", err);
      } finally {
        setLoading(false);
      }
    };

    loadInitialData();
  }, []);

  if (loading) {
    return (
      <section id="flights" className="min-h-screen flex items-center justify-center">
        <div className="text-center">Loading flights...</div>
      </section>
    );
  }

  if (!flight.length) {
    return (
      <section id="flights" className="min-h-screen flex items-center justify-center">
        <div className="text-center">No flights available.</div>
      </section>
    );
  }

  return (
    <section id="flights" className="min-h-screen bg-gray-50 dark:bg-slate-800 py-12">
      <div className="container mx-auto px-4">
        <header className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Available Flights</h2>
          <p className="text-sm text-gray-600 dark:text-gray-300">Choose a flight that fits your schedule and budget.</p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {flight.map((fly) => (
            <article
              key={fly.id}
              className="bg-white dark:bg-slate-700 rounded-xl shadow-md overflow-hidden flex flex-col h-full"
            >
              <div className="h-40 w-full bg-cover bg-center" style={{ backgroundImage: `url(${fly.image})` }} />

              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{fly.airline}</h3>
                    <img src={fly.airlineLogo} alt={`${fly.airline} logo`} className="h-8 w-auto ml-2" />
                  </div>

                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">{fly.from} → {fly.to}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{fly.duration} • {fly.country}</p>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <div className="text-2xl font-bold text-amber-600 dark:text-amber-400">${fly.price}</div>
                  <div className="flex items-center gap-3">
                    <div className="text-sm text-gray-700 dark:text-gray-200">{fly.rating} ★</div>
                    <button className="px-3 py-1 rounded-md bg-amber-600 text-white text-sm hover:opacity-90">Book</button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
