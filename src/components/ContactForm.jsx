import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState(null);

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const base = import.meta.env.VITE_BACKEND_URL || "";
      const res = await fetch(`${base}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok) setStatus("success"); else setStatus(data.detail || "error");
    } catch (e) {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <input className="rounded-xl border border-orange-200 px-4 py-3 w-full" placeholder="Name" value={form.name} onChange={(e)=>setForm({...form, name:e.target.value})} required />
        <input className="rounded-xl border border-orange-200 px-4 py-3 w-full" placeholder="Email" type="email" value={form.email} onChange={(e)=>setForm({...form, email:e.target.value})} required />
      </div>
      <input className="rounded-xl border border-orange-200 px-4 py-3 w-full" placeholder="Phone" value={form.phone} onChange={(e)=>setForm({...form, phone:e.target.value})} />
      <textarea className="rounded-xl border border-orange-200 px-4 py-3 w-full" rows="4" placeholder="Message" value={form.message} onChange={(e)=>setForm({...form, message:e.target.value})} required />
      <button className="rounded-full bg-orange-600 text-white px-6 py-3 shadow-sm hover:bg-orange-700" disabled={status==="loading"}>
        {status==="loading"?"Sending...":"Send Message"}
      </button>
      {status==="success" && <p className="text-green-700">Thank you! We will reach out soon.</p>}
      {status && status!=="loading" && status!=="success" && <p className="text-red-600">{String(status)}</p>}
    </form>
  );
}
