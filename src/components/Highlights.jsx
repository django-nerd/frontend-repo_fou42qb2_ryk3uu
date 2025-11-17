import { HeartHandshake, Sprout, HandHeart, Users, Leaf, Sparkles } from "lucide-react";

const items = [
  { icon: HeartHandshake, title: "Meditation", desc: "Free guided meditation for inner peace" },
  { icon: HandHeart, title: "Counselling", desc: "Personal guidance for emotional well-being" },
  { icon: Sprout, title: "Organic Farming", desc: "Natural living and eco-friendly practices" },
  { icon: Users, title: "Youth Support", desc: "Tuition and dance classes for youth" },
  { icon: Leaf, title: "Save Earth", desc: "Green drives & awareness campaigns" },
  { icon: Sparkles, title: "Seva", desc: "Service during natural calamities" },
];

export default function Highlights() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-orange-50/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold text-orange-900">Our Focus</h2>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl bg-white border border-orange-100 p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-10 w-10 rounded-xl bg-orange-100 text-orange-700 flex items-center justify-center">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-medium text-orange-900">{title}</h3>
              <p className="text-sm text-orange-900/70 mt-1">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
