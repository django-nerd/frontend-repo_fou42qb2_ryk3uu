import { useEffect, useState } from "react";

export default function Events() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const base = import.meta.env.VITE_BACKEND_URL || "";
        const res = await fetch(`${base}/api/events`);
        const data = await res.json();
        setEvents(data.items || []);
      } catch (e) {
        setError("Could not load events");
      } finally {
        setLoading(false);
      }
    };
    fetchEvents();
  }, []);

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-2xl font-semibold text-orange-900">Recent Camps & Events</h2>
          <a href="/events" className="text-orange-700 hover:text-orange-900 text-sm">View all</a>
        </div>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {loading && <div className="text-orange-900/70">Loading...</div>}
          {error && <div className="text-red-600">{error}</div>}
          {!loading && !error && events.map((e) => (
            <article key={e.title} className="rounded-2xl bg-white border border-orange-100 overflow-hidden shadow-sm">
              <img src={e.image_url} alt={e.title} className="h-44 w-full object-cover" />
              <div className="p-5">
                <div className="text-xs text-orange-700/80">{new Date(e.date).toLocaleString()}</div>
                <h3 className="mt-1 font-medium text-orange-900">{e.title}</h3>
                <p className="text-sm text-orange-900/70 mt-1 line-clamp-2">{e.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
