function PrivacyCenter() {
  return (
    <div className="flex-1 overflow-y-auto bg-gradient-to-b from-zinc-800 to-black">
      <div className="bg-gradient-to-b from-purple-600 to-black px-6 py-24 text-center">
        <h1 className="text-6xl font-bold mb-6">Privacy Center</h1>
        <p className="text-xl max-w-2xl mx-auto text-zinc-200">
          Learn about how Muziki protects and handles your personal information
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-16">
        <section className="space-y-12">
          <div className="bg-zinc-900/50 rounded-lg p-8 hover:bg-zinc-900 transition">
            <h2 className="text-2xl font-bold mb-4">Your Privacy Controls</h2>
            <p className="text-zinc-300 mb-4">
              Manage your privacy settings and control how your data is used.
            </p>
            <button className="bg-white text-black px-4 py-2 rounded-full font-semibold hover:scale-105 transition">
              Manage Settings
            </button>
          </div>

          <div className="bg-zinc-900/50 rounded-lg p-8 hover:bg-zinc-900 transition">
            <h2 className="text-2xl font-bold mb-4">Data Usage</h2>
            <p className="text-zinc-300 mb-4">
              Learn about how we collect and use your data to improve your experience.
            </p>
            <ul className="list-disc list-inside text-zinc-300 space-y-2">
              <li>Personal Information</li>
              <li>Usage Data</li>
              <li>Device Information</li>
              <li>Location Data</li>
            </ul>
          </div>

          <div className="bg-zinc-900/50 rounded-lg p-8 hover:bg-zinc-900 transition">
            <h2 className="text-2xl font-bold mb-4">Your Rights</h2>
            <p className="text-zinc-300 mb-4">
              Understanding your rights regarding your personal data.
            </p>
            <button className="text-white hover:underline">Learn More →</button>
          </div>
        </section>
      </div>
    </div>
  );
}

export default PrivacyCenter; 