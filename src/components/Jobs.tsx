function Jobs() {
  const positions = [
    {
      title: "Frontend Developer",
      location: "Remote",
      type: "Full-time",
      department: "Engineering"
    },
    {
      title: "Product Manager",
      location: "New York",
      type: "Full-time",
      department: "Product"
    },
    {
      title: "UX Designer",
      location: "London",
      type: "Full-time",
      department: "Design"
    }
  ];

  return (
    <div className="flex-1 overflow-y-auto bg-gradient-to-b from-zinc-800 to-black">
      <div className="bg-gradient-to-b from-pink-600 to-black px-6 py-24 text-center">
        <h1 className="text-6xl font-bold mb-6">Jobs at Muziki</h1>
        <p className="text-xl max-w-2xl mx-auto text-zinc-200">
          Join us in shaping the future of music streaming
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Open Positions</h2>
          <div className="grid gap-4">
            {positions.map((position) => (
              <div 
                key={position.title}
                className="bg-zinc-900/50 rounded-lg p-6 hover:bg-zinc-900 transition cursor-pointer"
              >
                <h3 className="text-xl font-bold mb-2">{position.title}</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-zinc-800 px-3 py-1 rounded-full text-sm">
                    {position.location}
                  </span>
                  <span className="bg-zinc-800 px-3 py-1 rounded-full text-sm">
                    {position.type}
                  </span>
                  <span className="bg-zinc-800 px-3 py-1 rounded-full text-sm">
                    {position.department}
                  </span>
                </div>
                <button className="text-green-500 hover:text-green-400 transition">
                  Apply Now →
                </button>
              </div>
            ))}
          </div>
        </section>

        <section className="grid md:grid-cols-2 gap-8">
          <div className="bg-zinc-900/50 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Benefits & Perks</h2>
            <ul className="space-y-3 text-zinc-300">
              <li>• Flexible working hours</li>
              <li>• Remote work options</li>
              <li>• Health insurance</li>
              <li>• Professional development</li>
              <li>• Competitive salary</li>
            </ul>
          </div>

          <div className="bg-zinc-900/50 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Our Culture</h2>
            <p className="text-zinc-300 mb-4">
              We're building a culture where innovation, creativity, and passion come together
              to create amazing experiences for music lovers worldwide.
            </p>
            <button className="text-white hover:underline">
              Learn More About Our Culture →
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Jobs; 