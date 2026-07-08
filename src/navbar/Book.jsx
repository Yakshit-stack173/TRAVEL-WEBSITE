import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HOTEL_API_URL = "/hotels.json";

export default function Book() {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadHotels() {
      try {
        const response = await fetch(HOTEL_API_URL);
        if (!response.ok) {
          throw new Error(`Hotel API responded with status ${response.status}`);
        }

        const data = await response.json();
        setHotels(data.hotels || []);
      } catch (err) {
        setError(err.message || "Unable to load hotels.");
      } finally {
        setLoading(false);
      }
    }

    loadHotels();
  }, []);

  return (
    <section id="/b"
    className="min-h-screen bg-slate-50 text-slate-900 py-10 px-6 sm:px-10 dark:bg-slate-800">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex flex-col gap-4 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-amber-600 ">Worldwide Hotels</p>
          <h1 className="text-3xl font-bold sm:text-4xl dark:text-white">Explore top hotels around the world</h1>
          <p className="mx-auto max-w-2xl text-sm text-slate-600 sm:text-base dark:text-white">
            Browse curated hotel listings from our global collection and discover premium stays in every major travel destination.
          </p>
        </div>

        {loading ? (
          <p className="text-center text-lg text-slate-700">Loading hotels…</p>
        ) : error ? (
          <p className="text-center text-lg text-red-600">{error}</p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {hotels.map((hotel) => (
              <article key={hotel.id} className="overflow-hidden rounded-3xl bg-white shadow-lg shadow-slate-200 transition hover:-translate-y-1 dark:bg-slate-500">
                <div className="h-56 overflow-hidden">
                  <img
                    src={hotel.image}
                    alt={`${hotel.name} in ${hotel.city}`}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <div className="mb-3 flex items-center justify-between text-sm text-slate-500">
                    <span>{hotel.city}, {hotel.country}</span>
                    <span className="rounded-full bg-amber-100 px-3 py-1 font-semibold text-amber-700">{hotel.rating.toFixed(1)}</span>
                  </div>
                  <h2 className="text-xl font-semibold text-slate-900 dark:text-white">{hotel.name}</h2>
                  <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-white">{hotel.description}</p>
                  <div className="mt-5 flex items-center justify-between gap-4">
                    <span className="text-lg font-bold text-slate-900 dark:text-white">${hotel.price}</span>
                    <button className="rounded-2xl bg-amber-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-amber-600">
                      Book Now
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
