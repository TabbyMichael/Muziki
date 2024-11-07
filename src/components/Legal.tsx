function Legal() {
  return (
    <div className="flex-1 overflow-y-auto bg-gradient-to-b from-zinc-800 to-black">
      <div className="bg-gradient-to-b from-blue-600 to-black px-6 py-24 text-center">
        <h1 className="text-6xl font-bold mb-6">Legal</h1>
        <p className="text-xl max-w-2xl mx-auto text-zinc-200">
          Guidelines and legal documents for using Muziki's services
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-16">
        <section className="space-y-12">
          <div className="bg-zinc-900/50 rounded-lg p-8 hover:bg-zinc-900 transition">
            <h2 className="text-2xl font-bold mb-4">Terms and Conditions</h2>
            <p className="text-zinc-300 mb-4">
              These Terms and Conditions govern your use of Muziki's services and constitute a legally binding agreement.
            </p>
            <button className="text-white hover:underline">Read More →</button>
          </div>

          <div className="bg-zinc-900/50 rounded-lg p-8 hover:bg-zinc-900 transition">
            <h2 className="text-2xl font-bold mb-4">Copyright</h2>
            <p className="text-zinc-300 mb-4">
              Information about copyright, intellectual property rights, and content ownership.
            </p>
            <button className="text-white hover:underline">Read More →</button>
          </div>

          <div className="bg-zinc-900/50 rounded-lg p-8 hover:bg-zinc-900 transition">
            <h2 className="text-2xl font-bold mb-4">User Guidelines</h2>
            <p className="text-zinc-300 mb-4">
              Guidelines for acceptable use of Muziki's platform and services.
            </p>
            <button className="text-white hover:underline">Read More →</button>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Legal; 