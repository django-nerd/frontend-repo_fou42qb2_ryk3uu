import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-50 pointer-events-none" aria-hidden>
        <svg className="absolute -top-20 -right-20 w-[600px]" viewBox="0 0 600 600" fill="none">
          <circle cx="300" cy="300" r="300" fill="#ffedd5" />
        </svg>
        <svg className="absolute -bottom-32 -left-10 w-[400px]" viewBox="0 0 400 400" fill="none">
          <circle cx="200" cy="200" r="200" fill="#fff7ed" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-semibold text-orange-900 leading-tight">
              Inner Peace, Self-Realization,
              <span className="block text-transparent bg-clip-text bg-gradient-to-tr from-orange-600 to-amber-500">Service to Humanity</span>
            </h1>
            <p className="mt-4 text-lg text-orange-900/80">
              Meditation • Counselling • Organic Farming • Social Service
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/join" className="rounded-full bg-orange-600 text-white px-6 py-3 shadow-sm hover:bg-orange-700 transition-colors">
                Join Us
              </Link>
              <Link to="/donate" className="rounded-full bg-white border border-orange-200 text-orange-800 px-6 py-3 hover:bg-orange-50">
                Donate Now
              </Link>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1600&auto=format&fit=crop"
              alt="Meditation"
              className="rounded-3xl shadow-lg"
            />
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow p-4 max-w-[260px]">
              <p className="text-sm text-orange-900/80">Weekly free meditation sessions and counselling support for all.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
