import { Check, Music2, Users, Headphones, GraduationCap, Radio } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import LoadingSpinner from './LoadingSpinner';

function SpotifyPlans() {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  const currentPlan = location.pathname.split('/').pop();

  // Simulate loading time
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // 1.5 seconds loading simulation

    return () => clearTimeout(timer);
  }, [currentPlan]); // Reset loading when plan changes

  if (isLoading) {
    return <LoadingSpinner />;
  }

  const planConfigs = {
    'individual': {
      title: "Muziki Premium Individual",
      subtitle: "Listen without limits",
      price: "$9.99/month",
      color: "from-green-600",
      icon: <Headphones size={32} />,
      description: "1 Premium account for you"
    },
    'duo': {
      title: "Muziki Premium Duo",
      subtitle: "Music for two",
      price: "Ksh 439/month",
      color: "from-blue-600",
      icon: <Users size={32} />,
      description: "2 Premium accounts for couples under one roof"
    },
    'family': {
      title: "Muziki Premium Family",
      subtitle: "Music for the whole family",
      price: "$15.99/month",
      color: "from-purple-600",
      icon: <Users size={32} />,
      description: "Up to 6 Premium accounts for family members"
    },
    'student': {
      title: "Muziki Premium Student",
      subtitle: "Student discount on Premium",
      price: "$4.99/month",
      color: "from-sky-600",
      icon: <GraduationCap size={32} />,
      description: "Verified student discount on Premium"
    },
    'muziki-free': {
      title: "Muziki Free",
      subtitle: "Free music streaming",
      price: "$0/month",
      color: "from-red-600",
      icon: <Radio size={32} />,
      description: "Basic features with ads"
    }
  };

  const currentPlanConfig = planConfigs[currentPlan as keyof typeof planConfigs] || planConfigs.individual;

  const features = {
    'duo': [
      "2 Premium accounts for a couple under one roof",
      "Ad-free music listening",
      "Download to listen offline",
      "On-demand playback",
      "Duo Mix: a playlist for two, regularly updated"
    ],
    'family': [
      "6 Premium accounts for family members living under one roof",
      "Block explicit music",
      "Access to Spotify Kids",
      "Family Mix: a playlist for your family, regularly updated",
      "Ad-free music listening for all accounts"
    ],
    'student': [
      "Verified student discount on Premium",
      "Ad-free music listening",
      "Download to listen offline",
      "On-demand playback",
      "Special student pricing"
    ],
    'muziki-free': [
      "Ad-supported listening",
      "Shuffle play",
      "Basic audio quality",
      "Mobile app access",
      "Limited skips"
    ]
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Hero Section */}
      <div className={`bg-gradient-to-b ${currentPlanConfig.color} to-white dark:to-black px-6 py-16`}>
        <div className="flex justify-center mb-6 text-white">
          {currentPlanConfig.icon}
        </div>
        <h1 className="text-5xl font-bold mb-4 text-white">{currentPlanConfig.title}</h1>
        <p className="text-2xl mb-4 text-white">{currentPlanConfig.subtitle}</p>
        <p className="text-xl mb-8 text-white">{currentPlanConfig.description}</p>
        <p className="text-3xl font-bold mb-6 text-white">{currentPlanConfig.price}</p>
        <div className="flex gap-4 justify-center">
          <button className="bg-white text-black px-8 py-3 rounded-full font-bold hover:scale-105 transition">
            Get Started
          </button>
          <button className="border border-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-black transition">
            Learn More
          </button>
        </div>
        <p className="text-sm mt-4 text-zinc-300">
          Terms and conditions apply.
        </p>
      </div>

      {/* Features Section */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="bg-gray-50 dark:bg-zinc-900/50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6 text-black dark:text-white">What's included</h2>
          <ul className="space-y-4">
            {(features[currentPlan as keyof typeof features] || features.duo).map((feature, index) => (
              <li key={index} className="flex items-center gap-3">
                <Check className={`text-${currentPlanConfig.color.split('-')[1]}-500`} size={24} />
                <span className="text-gray-800 dark:text-white">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Value Proposition */}
      <div className={`bg-gradient-to-t ${currentPlanConfig.color} from-white dark:from-black py-16 text-center`}>
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4 text-white">
            {currentPlan === 'duo' && "Best value for two"}
            {currentPlan === 'family' && "Perfect for the whole family"}
            {currentPlan === 'student' && "Special student discount"}
            {currentPlan === 'muziki-free' && "Always free, always music"}
          </h2>
          <p className="text-xl text-zinc-100">
            {currentPlan === 'duo' && "Two people, two separate Muziki Premium accounts for Ksh 439, all in a single bill."}
            {currentPlan === 'family' && "Up to six accounts for family members living under one roof."}
            {currentPlan === 'student' && "Verified students get Premium at a special discount price."}
            {currentPlan === 'muziki-free' && "Access millions of songs with basic features, supported by ads."}
          </p>
        </div>
      </div>
    </div>
  );
}

export default SpotifyPlans; 