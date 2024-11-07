import { Search, HelpCircle, CreditCard, Smartphone, Shield, Settings, Users, Music } from 'lucide-react';

function Support() {
  const categories = [
    {
      icon: <CreditCard size={24} />,
      title: "Payments & billing",
      description: "Manage your subscription, payment methods, and billing details"
    },
    {
      icon: <Smartphone size={24} />,
      title: "Devices & troubleshooting",
      description: "Fix playback issues and learn about Muziki-compatible devices"
    },
    {
      icon: <Shield size={24} />,
      title: "Safety & privacy",
      description: "Control your privacy settings and keep your account secure"
    },
    {
      icon: <Settings size={24} />,
      title: "Account settings",
      description: "Manage your account, profile information, and preferences"
    },
    {
      icon: <Users size={24} />,
      title: "Family plan",
      description: "Invite or remove family members and manage your family plan"
    },
    {
      icon: <Music size={24} />,
      title: "Premium plans",
      description: "Learn about Premium features and subscription options"
    }
  ];

  const quickHelp = [
    "Can't log in to Muziki",
    "Failed payment help",
    "Charged too much",
    "Invite or remove Family plan members",
    "How to change your payment details"
  ];

  return (
    <div className="flex-1 overflow-y-auto bg-gradient-to-b from-zinc-800 to-black">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-emerald-600 to-black px-6 py-16 text-center">
        <h1 className="text-5xl font-bold mb-8">How can we help you?</h1>
        <div className="max-w-2xl mx-auto relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-zinc-400" size={20} />
          <input
            type="text"
            placeholder="Search"
            className="w-full bg-white text-black pl-12 pr-4 py-4 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {categories.map((category) => (
            <div
              key={category.title}
              className="bg-zinc-900/50 rounded-lg p-6 hover:bg-zinc-900 transition cursor-pointer group"
            >
              <div className="text-green-500 mb-4 group-hover:scale-110 transition-transform">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{category.title}</h3>
              <p className="text-zinc-300">{category.description}</p>
            </div>
          ))}
        </div>

        {/* Quick Help Section */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Quick help</h2>
          <div className="space-y-2">
            {quickHelp.map((item) => (
              <button
                key={item}
                className="w-full text-left bg-zinc-900/30 hover:bg-zinc-900/50 transition p-4 rounded-lg flex items-center justify-between group"
              >
                <span>{item}</span>
                <HelpCircle 
                  className="text-zinc-400 group-hover:text-white transition" 
                  size={20} 
                />
              </button>
            ))}
          </div>
        </section>

        {/* Community Section */}
        <section className="mt-16 bg-zinc-900/50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Visit our Community</h2>
          <p className="text-zinc-300 mb-6">
            Have questions? Find answers from our worldwide Community of expert fans!
          </p>
          <button className="bg-green-500 text-black px-8 py-3 rounded-full font-bold hover:scale-105 transition">
            Go to Community
          </button>
        </section>
      </div>
    </div>
  );
}

export default Support; 