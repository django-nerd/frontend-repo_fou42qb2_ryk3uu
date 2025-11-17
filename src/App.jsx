import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Events from "./components/Events";
import ActivitiesGrid from "./components/ActivitiesGrid";
import ContactForm from "./components/ContactForm";

const Section = ({ title, children }) => (
  <section className="py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl font-semibold text-orange-900">{title}</h2>
      <div className="mt-6">{children}</div>
    </div>
  </section>
);

function Home() {
  return (
    <main>
      <Hero />
      <Highlights />
      <Events />
      <Section title="Activities">
        <ActivitiesGrid />
      </Section>
      <Section title="Get in touch">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <p className="text-orange-900/80">We are based in Vidya Nagar, Gokak. Reach out for meditation classes, counselling, volunteering and more.</p>
            <div className="mt-4 text-orange-900/80 text-sm">
              <p>Phone: +91 98450 00000, +91 97315 11111</p>
              <p>Email: atmasakshifoundation@gmail.com</p>
              <div className="mt-4 rounded-2xl overflow-hidden">
                <iframe title="Map" className="w-full h-56" loading="lazy" referrerPolicy="no-referrer-when-downgrade" src="https://www.google.com/maps?q=Vidya%20Nagar%20Gokak&output=embed"></iframe>
              </div>
            </div>
          </div>
          <div className="rounded-2xl bg-white border border-orange-100 p-6 shadow-sm">
            <ContactForm />
          </div>
        </div>
      </Section>
    </main>
  );
}

function About() {
  return (
    <main className="pt-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <h1 className="text-3xl font-semibold text-orange-900">About Us</h1>
        <p className="text-orange-900/80">Our mission is spreading meditation, peace and service. Our vision is self-realization, spiritual growth and community well-being.</p>
        <div className="grid sm:grid-cols-2 gap-4">
          <img className="rounded-2xl shadow" src="https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?q=80&w=1600&auto=format&fit=crop" />
          <img className="rounded-2xl shadow" src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=1600&auto=format&fit=crop" />
        </div>
        <div className="rounded-2xl bg-orange-50 border border-orange-100 p-6">
          <h3 className="font-medium text-orange-900">Founder's Message</h3>
          <p className="text-orange-900/80 mt-2">We believe inner transformation leads to outer harmony. Through meditation and seva, we nurture peaceful, compassionate communities.</p>
        </div>
      </div>
    </main>
  );
}

function Activities() {
  return (
    <main className="pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-semibold text-orange-900">Activities</h1>
        <ActivitiesGrid />
      </div>
    </main>
  );
}

function Gallery() {
  const imgs = [
    "https://images.unsplash.com/photo-1540569014015-19a7be504e3a?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1465406325902-283296f2c1c7?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1493836512294-502baa1986e2?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1520975605369-9271960943f5?q=80&w=1600&auto=format&fit=crop",
  ];
  return (
    <main className="pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-semibold text-orange-900">Gallery</h1>
        <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {imgs.map((src, i) => (
            <img key={i} src={src} className="rounded-2xl h-56 w-full object-cover" />
          ))}
        </div>
      </div>
    </main>
  );
}

function EventsPage() {
  return (
    <main className="pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-semibold text-orange-900">Events</h1>
        <Events />
      </div>
    </main>
  );
}

function Blog() {
  const [posts, setPosts] = React.useState([]);
  React.useEffect(() => {
    const load = async () => {
      const base = import.meta.env.VITE_BACKEND_URL || "";
      const res = await fetch(`${base}/api/blogs`);
      const data = await res.json();
      setPosts(data.items || []);
    };
    load();
  }, []);
  return (
    <main className="pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-semibold text-orange-900">Blog</h1>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          {posts.map((p) => (
            <article key={p.slug} className="rounded-2xl bg-white border border-orange-100 overflow-hidden shadow-sm">
              <img src={p.cover_image} className="h-44 w-full object-cover" />
              <div className="p-5">
                <div className="text-xs text-orange-700/80">{new Date(p.published_at).toLocaleDateString()}</div>
                <h3 className="mt-1 font-medium text-orange-900">{p.title}</h3>
                <p className="text-sm text-orange-900/70 mt-1 line-clamp-2">{p.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}

function Contact() {
  return (
    <main className="pt-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <h1 className="text-3xl font-semibold text-orange-900">Contact</h1>
        <div className="rounded-2xl bg-white border border-orange-100 p-6 shadow-sm">
          <ContactForm />
        </div>
        <div className="rounded-2xl overflow-hidden">
          <iframe title="Map" className="w-full h-72" loading="lazy" referrerPolicy="no-referrer-when-downgrade" src="https://www.google.com/maps?q=Vidya%20Nagar%20Gokak&output=embed"></iframe>
        </div>
      </div>
    </main>
  );
}

function Join() {
  const [form, setForm] = React.useState({ name:"", email:"", phone:"", areas:[], notes:"" });
  const [status, setStatus] = React.useState(null);
  const toggleArea = (area) => {
    setForm((f)=> ({...f, areas: f.areas.includes(area) ? f.areas.filter(a=>a!==area) : [...f.areas, area]}));
  };
  const submit = async (e)=>{
    e.preventDefault(); setStatus("loading");
    try {
      const base = import.meta.env.VITE_BACKEND_URL || "";
      const res = await fetch(`${base}/api/volunteer`, { method:"POST", headers:{"Content-Type":"application/json"}, body: JSON.stringify(form)});
      if (res.ok) setStatus("success"); else setStatus("error");
    } catch(e){ setStatus("error"); }
  };
  const areas = ["farming","teaching","counselling assistance","disaster relief"];
  return (
    <main className="pt-8">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-semibold text-orange-900">Join as Volunteer</h1>
        <form onSubmit={submit} className="mt-6 space-y-4 rounded-2xl bg-white border border-orange-100 p-6 shadow-sm">
          <input className="rounded-xl border border-orange-200 px-4 py-3 w-full" placeholder="Name" value={form.name} onChange={(e)=>setForm({...form, name:e.target.value})} required />
          <input className="rounded-xl border border-orange-200 px-4 py-3 w-full" placeholder="Email" type="email" value={form.email} onChange={(e)=>setForm({...form, email:e.target.value})} required />
          <input className="rounded-xl border border-orange-200 px-4 py-3 w-full" placeholder="Phone" value={form.phone} onChange={(e)=>setForm({...form, phone:e.target.value})} required />
          <div>
            <label className="block text-sm text-orange-900/80 mb-2">Areas to volunteer</label>
            <div className="grid sm:grid-cols-2 gap-2">
              {areas.map((a)=> (
                <label key={a} className="flex items-center gap-2 rounded-xl border border-orange-200 px-3 py-2 bg-orange-50">
                  <input type="checkbox" checked={form.areas.includes(a)} onChange={()=>toggleArea(a)} />
                  <span className="text-orange-900/80 capitalize">{a}</span>
                </label>
              ))}
            </div>
          </div>
          <textarea className="rounded-xl border border-orange-200 px-4 py-3 w-full" rows="4" placeholder="Notes (optional)" value={form.notes} onChange={(e)=>setForm({...form, notes:e.target.value})} />
          <button className="rounded-full bg-orange-600 text-white px-6 py-3 shadow-sm hover:bg-orange-700" disabled={status==="loading"}>{status==="loading"?"Submitting...":"Submit"}</button>
          {status==="success" && <p className="text-green-700">Thanks for volunteering! We will get in touch.</p>}
          {status && status!=="loading" && status!=="success" && <p className="text-red-600">Something went wrong.</p>}
        </form>
      </div>
    </main>
  );
}

function Donate() {
  return (
    <main className="pt-8">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <h1 className="text-3xl font-semibold text-orange-900">Donate</h1>
        <div className="rounded-2xl bg-white border border-orange-100 p-6 shadow-sm">
          <p className="text-orange-900/80">Your contribution supports meditation camps, youth education, disaster relief and environmental initiatives.</p>
          <div className="mt-6 grid sm:grid-cols-2 gap-6 items-center">
            <div className="rounded-xl bg-orange-50 border border-orange-100 p-4 text-center">
              <div className="text-sm text-orange-900/80">Scan to Donate</div>
              <img className="mx-auto mt-2 rounded-lg" src="https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=upi%3A%2F%2Fpay%3Fpa%3Datmasakshi%40upi%26pn%3AAtmasakshi%2520Foundation%26am%3D%26cu%3DINR" alt="QR" />
            </div>
            <div>
              <div className="text-orange-900 font-medium">UPI ID</div>
              <div className="text-lg text-orange-800">atmasakshi@upi</div>
              <div className="mt-4 text-sm text-orange-900/80">Please share your name and purpose in notes while donating. Receipts will be emailed on request.</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[conic-gradient(at_10%_-10%,#fff7ed,transparent)]">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/join" element={<Join />} />
          <Route path="/donate" element={<Donate />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
