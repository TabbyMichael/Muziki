import { Code, Database, Lock, Zap } from 'lucide-react';

function Developers() {
  const apis = [
    {
      icon: <Code size={24} />,
      title: "Web API",
      description: "Access music metadata, user data, and playback controls"
    },
    {
      icon: <Database size={24} />,
      title: "Streaming API",
      description: "Integrate high-quality audio streaming into your apps"
    },
    {
      icon: <Lock size={24} />,
      title: "Authentication",
      description: "Secure OAuth 2.0 authentication flows"
    },
    {
      icon: <Zap size={24} />,
      title: "Webhooks",
      description: "Real-time updates for your applications"
    }
  ];

  return (
    <div className="flex-1 overflow-y-auto bg-gradient-to-b from-zinc-800 to-black">
      <div className="bg-gradient-to-b from-indigo-600 to-black px-6 py-24 text-center">
        <h1 className="text-6xl font-bold mb-6">Developers</h1>
        <p className="text-xl max-w-2xl mx-auto text-zinc-200">
          Build the next generation of music experiences
        </p>
        <button className="mt-8 bg-white text-black px-8 py-3 rounded-full font-bold hover:scale-105 transition">
          Get Started
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Our APIs</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {apis.map((api) => (
              <div 
                key={api.title}
                className="bg-zinc-900/50 rounded-lg p-6 hover:bg-zinc-900 transition"
              >
                <div className="text-green-500 mb-4">{api.icon}</div>
                <h3 className="text-xl font-bold mb-2">{api.title}</h3>
                <p className="text-zinc-300">{api.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid md:grid-cols-2 gap-8">
          <div className="bg-zinc-900/50 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Documentation</h2>
            <p className="text-zinc-300 mb-4">
              Comprehensive guides, references, and examples to help you integrate with our platform.
            </p>
            <button className="text-white hover:underline">
              View Documentation →
            </button>
          </div>

          <div className="bg-zinc-900/50 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Developer Community</h2>
            <p className="text-zinc-300 mb-4">
              Join our community of developers building amazing music experiences.
            </p>
            <button className="text-white hover:underline">
              Join Community →
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Developers; 