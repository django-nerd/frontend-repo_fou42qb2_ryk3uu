export default function Footer() {
  return (
    <footer className="mt-20 border-t border-orange-100 bg-gradient-to-b from-orange-50/40 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-orange-800 font-semibold">Atmasakshi Foundation</h3>
          <p className="text-orange-900/70 mt-2 text-sm">
            Inner Peace, Self-Realization, Service to Humanity
          </p>
        </div>
        <div>
          <h4 className="text-orange-800 font-medium">Contact</h4>
          <p className="text-orange-900/70 text-sm mt-2">
            Vidya Nagar, Gokak
            <br />
            Phone: +91 98450 00000, +91 97315 11111
            <br />
            Email: atmasakshifoundation@gmail.com
          </p>
        </div>
        <div>
          <h4 className="text-orange-800 font-medium">Follow</h4>
          <div className="flex gap-3 mt-3">
            <a href="#" className="text-orange-700 hover:text-orange-900">Facebook</a>
            <a href="#" className="text-orange-700 hover:text-orange-900">Instagram</a>
            <a href="#" className="text-orange-700 hover:text-orange-900">YouTube</a>
          </div>
        </div>
      </div>
      <div className="text-center text-xs text-orange-900/60 py-4 border-t border-orange-100">
        © {new Date().getFullYear()} Atmasakshi Foundation. All rights reserved.
      </div>
    </footer>
  );
}
