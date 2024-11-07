import { Music2, BarChart2, Globe2, Rocket, Zap, Users } from 'lucide-react';

function ForArtists() {
  const features = [
    {
      icon: <Music2 size={24} />,
      title: "Music Distribution",
      description: "Release your music on Muziki and reach millions of listeners worldwide"
    },
    {
      icon: <BarChart2 size={24} />,
      title: "Analytics & Insights",
      description: "Get detailed stats about your listeners and track performance"
    },
    {
      icon: <Globe2 size={24} />,
      title: "Global Reach",
      description: "Connect with fans across 180+ markets worldwide"
    },
    {
      icon: <Rocket size={24} />,
      title: "Promotion Tools",
      description: "Access powerful tools to promote your music and grow your audience"
    },
    {
      icon: <Zap size={24} />,
      title: "Artist Support",
      description: "Get dedicated support and resources to help you succeed"
    },
    {
      icon: <Users size={24} />,
      title: "Artist Community",
      description: "Connect with other artists and industry professionals"
    }
  ];

  return (
    <div className="flex-1 overflow-y-auto bg-gradient-to-b from-zinc-800 to-black">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-orange-600 to-black px-6 py-24 text-center">
        <h1 className="text-6xl font-bold mb-6">For Artists</h1>
        <p className="text-xl max-w-2xl mx-auto text-zinc-200">
          Take your music to the next level with Muziki for Artists
        </p>
        <div className="mt-8 space-x-4">
          <button className="bg-white text-black px-8 py-3 rounded-full font-bold hover:scale-105 transition">
            Get Started
          </button>
          <button className="border border-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-black transition">
            Sign In
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Features Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Everything you need</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div 
                key={feature.title}
                className="bg-zinc-900/50 rounded-lg p-6 hover:bg-zinc-900 transition group"
              >
                <div className="text-orange-500 mb-4 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-zinc-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <section className="grid md:grid-cols-3 gap-8 mb-16 text-center">
          <div className="bg-zinc-900/50 rounded-lg p-8">
            <h3 className="text-5xl font-bold text-orange-500 mb-4">500M+</h3>
            <p className="text-xl text-zinc-300">Monthly Listeners</p>
          </div>
          <div className="bg-zinc-900/50 rounded-lg p-8">
            <h3 className="text-5xl font-bold text-orange-500 mb-4">180+</h3>
            <p className="text-xl text-zinc-300">Markets</p>
          </div>
          <div className="bg-zinc-900/50 rounded-lg p-8">
            <h3 className="text-5xl font-bold text-orange-500 mb-4">$7B+</h3>
            <p className="text-xl text-zinc-300">Paid to Artists</p>
          </div>
        </section>

        {/* Resources Section */}
        <section className="grid md:grid-cols-2 gap-8">
          <div className="bg-zinc-900/50 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Artist Resources</h2>
            <p className="text-zinc-300 mb-4">
              Access guides, tutorials, and best practices to help you make the most of Muziki.
            </p>
            <button className="text-white hover:underline">
              Browse Resources →
            </button>
          </div>

          <div className="bg-zinc-900/50 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Success Stories</h2>
            <p className="text-zinc-300 mb-4">
              Read how other artists have found success and grown their audience on Muziki.
            </p>
            <button className="text-white hover:underline">
              Read Stories →
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ForArtists; 