import { Menu } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/activities", label: "Activities" },
    { to: "/gallery", label: "Gallery" },
    { to: "/events", label: "Events" },
    { to: "/blog", label: "Blog" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/80 border-b border-orange-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-full bg-gradient-to-tr from-orange-500 to-amber-400 flex items-center justify-center text-white font-semibold">A</div>
            <span className="font-semibold text-lg text-orange-700">Atmasakshi Foundation</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {links.map((l) => (
              <Link key={l.to} to={l.to} className="text-orange-800/80 hover:text-orange-800 transition-colors">
                {l.label}
              </Link>
            ))}
            <Link to="/donate" className="inline-flex items-center rounded-full bg-orange-600 text-white px-4 py-2 shadow-sm hover:bg-orange-700 transition-colors">
              Donate
            </Link>
          </nav>

          <button className="md:hidden p-2" onClick={() => setOpen(!open)}>
            <Menu className="h-6 w-6 text-orange-700" />
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 space-y-2">
            {links.map((l) => (
              <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="block rounded-lg px-3 py-2 bg-orange-50 text-orange-800">
                {l.label}
              </Link>
            ))}
            <Link to="/donate" onClick={() => setOpen(false)} className="block rounded-lg px-3 py-2 bg-orange-600 text-white">
              Donate
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
