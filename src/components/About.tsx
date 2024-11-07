import { MapPin, Mail } from 'lucide-react';

function About() {
  const offices = [
    {
      name: 'Spotify AB',
      address: 'Regeringsgatan 19',
      city: 'SE-111 53 Stockholm',
      country: 'Sweden',
      email: 'office@spotify.com'
    },
    {
      name: 'Spotify USA Inc',
      address: '4 World Trade Center',
      addressLine2: '150 Greenwich Street, 62nd Floor',
      city: 'New York, NY 10007',
      country: 'USA',
      email: 'office@spotify.com'
    },
    {
      name: 'Spotify GmbH',
      address: 'Unter den Linden 10',
      city: '10117 Berlin',
      country: 'Germany',
      email: 'office@spotify.com'
    }
  ];

  return (
    <div className="flex-1 overflow-y-auto bg-gradient-to-b from-zinc-800 to-black">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-green-600 to-black px-6 py-24 text-center">
        <h1 className="text-6xl font-bold mb-6">About Muziki</h1>
        <p className="text-xl max-w-2xl mx-auto text-zinc-200">
          With Muziki, it's easy to find the right music for every moment – on your phone,
          your computer, your tablet and more.
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Mission Statement */}
        <section className="mb-24">
          <h2 className="text-4xl font-bold mb-8">Our Mission</h2>
          <p className="text-xl text-zinc-300 max-w-3xl">
            Our mission is to unlock the potential of human creativity—by giving a million creative
            artists the opportunity to live off their art and billions of fans the opportunity to
            enjoy and be inspired by it.
          </p>
        </section>

        {/* Global Offices */}
        <section>
          <h2 className="text-4xl font-bold mb-12">Global Offices</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {offices.map((office) => (
              <div 
                key={office.name}
                className="bg-zinc-900/50 rounded-lg p-6 hover:bg-zinc-900 transition"
              >
                <h3 className="text-xl font-bold mb-4">{office.name}</h3>
                <div className="flex items-start gap-3 text-zinc-300 mb-4">
                  <MapPin className="mt-1 flex-shrink-0" />
                  <div>
                    <p>{office.address}</p>
                    {office.addressLine2 && <p>{office.addressLine2}</p>}
                    <p>{office.city}</p>
                    <p>{office.country}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-zinc-300">
                  <Mail className="flex-shrink-0" />
                  <a 
                    href={`mailto:${office.email}`}
                    className="hover:text-white transition"
                  >
                    {office.email}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <section className="mt-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-5xl font-bold text-green-500 mb-4">500M+</h3>
              <p className="text-xl text-zinc-300">Users worldwide</p>
            </div>
            <div>
              <h3 className="text-5xl font-bold text-green-500 mb-4">180+</h3>
              <p className="text-xl text-zinc-300">Markets</p>
            </div>
            <div>
              <h3 className="text-5xl font-bold text-green-500 mb-4">100M+</h3>
              <p className="text-xl text-zinc-300">Tracks available</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About; 