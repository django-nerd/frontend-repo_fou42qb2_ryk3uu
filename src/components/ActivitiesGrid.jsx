const activities = [
  "Free Meditation Classes",
  "Personal Counselling",
  "Blood Donation Camps",
  "Organic Farming & Natural Living",
  "Save Mother Earth Campaign",
  "Past-life Regression Therapy",
  "Service During Natural Calamities",
  "Tuition & Dance Classes for Youth",
];

export default function ActivitiesGrid() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-orange-50/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold text-orange-900">Activities</h2>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {activities.map((a) => (
            <div key={a} className="rounded-2xl bg-white border border-orange-100 p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-10 w-10 rounded-xl bg-orange-100 text-orange-700 flex items-center justify-center font-semibold">•</div>
              <h3 className="mt-4 font-medium text-orange-900">{a}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
