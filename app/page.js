'use client';

import React, { useState, useEffect } from 'react';
import { 
  Globe, 
  Menu, 
  X, 
  CheckCircle2, 
  MapPin, 
  Phone, 
  Mail, 
  ArrowRight, 
  Compass, 
  Plane, 
  Building2 
} from 'lucide-react';

const WEBSITE_URL = "https://www.savannahorizonsafaris.com";

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('safari');
  const [minDate, setMinDate] = useState('');

  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    setMinDate(today);
  }, []);

  const handleSafariSubmit = (e) => {
    e.preventDefault();
    alert('Safari booking inquiry submitted successfully!');
  };

  const handleHotelSubmit = (e) => {
    e.preventDefault();
    alert('Hotel reservation request sent successfully!');
  };

  const handleFlightSubmit = (e) => {
    e.preventDefault();
    alert('Flight booking request received!');
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    alert('Thank you! Your message has been sent to our Nairobi headquarters.');
  };

  return (
    <div className="bg-gray-50 text-gray-800 font-sans min-h-screen scroll-smooth">
      {/* NAVIGATION BAR */}
      <nav className="bg-white shadow-md fixed w-full z-50 top-0 left-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            
            {/* Clickable Logo */}
            <div className="flex-shrink-0 flex items-center">
              <a
                href={WEBSITE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 group focus:outline-none focus:ring-2 focus:ring-amber-600 rounded-lg p-1 transition"
              >
                <Globe className="h-8 w-8 text-amber-600 group-hover:text-amber-700 transition" />
                <span className="font-bold text-xl tracking-wide text-gray-900 group-hover:text-amber-600 transition">
                  Savanna Horizon
                </span>
              </a>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex space-x-8 items-center font-medium">
              <a href="#home" className="text-amber-600 hover:text-amber-700 transition">
                Home
              </a>
              <a href="#destinations" className="text-gray-600 hover:text-amber-600 transition">
                Destinations
              </a>
              <a href="#booking" className="text-gray-600 hover:text-amber-600 transition">
                Bookings
              </a>
              <a href="#about" className="text-gray-600 hover:text-amber-600 transition">
                About Us
              </a>
              <a href="#contact" className="text-gray-600 hover:text-amber-600 transition">
                Contact
              </a>
              <a
                href="#booking"
                className="bg-amber-600 text-white px-5 py-2.5 rounded-full shadow hover:bg-amber-700 transition"
              >
                Book Now
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-700 focus:outline-none focus:ring-2 focus:ring-amber-600 rounded-md p-1"
              >
                {isMobileMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t px-4 pt-2 pb-4 space-y-2">
            {[
              { label: 'Home', href: '#home' },
              { label: 'Destinations', href: '#destinations' },
              { label: 'Bookings', href: '#booking' },
              { label: 'About Us', href: '#about' },
              { label: 'Contact', href: '#contact' },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-2 text-gray-700 hover:text-amber-600 font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* HERO SECTION */}
      <section
        id="home"
        className="relative bg-cover bg-center h-screen flex items-center justify-center text-center px-4"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=1920')`,
        }}
      >
        <div className="max-w-3xl text-white">
          <h1 className="text-4xl sm:text-6xl font-extrabold mb-4 tracking-tight">
            Discover the Magic of Africa
          </h1>
          <p className="text-lg sm:text-xl mb-8 font-light">
            Based in the heart of Nairobi, Kenya. We bring you unforgettable safaris, seamless hotel bookings, and global flights.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#booking"
              className="bg-amber-600 text-white font-semibold px-8 py-3.5 rounded-full shadow-lg hover:bg-amber-700 transition"
            >
              Plan Your Trip
            </a>
            <a
              href="#destinations"
              className="bg-white text-gray-900 font-semibold px-8 py-3.5 rounded-full shadow-lg hover:bg-gray-100 transition"
            >
              Explore Destinations
            </a>
          </div>
        </div>
      </section>

      {/* DESTINATIONS SECTION */}
      <section id="destinations" className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Popular Destinations</h2>
          <p className="text-gray-600 mt-2">Explore Kenya's finest parks, reserves, and coastal gems</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">
            <img
              src="https://images.unsplash.com/photo-1534567153574-2b12153a87f0?auto=format&fit=crop&q=80&w=600"
              alt="Masai Mara"
              className="h-56 w-full object-cover"
            />
            <div className="p-6">
              <span className="text-xs font-semibold text-amber-600 bg-amber-50 px-3 py-1 rounded-full uppercase">
                Wildlife
              </span>
              <h3 className="text-xl font-bold mt-2 text-gray-900">Masai Mara National Reserve</h3>
              <p className="text-gray-600 mt-2 text-sm">
                Witness the Great Wildebeest Migration and experience thrilling game drives across the savannah.
              </p>
              <div className="mt-4 flex justify-between items-center">
                <span className="font-bold text-gray-900">From $350</span>
                <a href="#booking" className="text-amber-600 font-semibold hover:underline text-sm flex items-center gap-1">
                  Book Safari <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">
            <img
              src="https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=600"
              alt="Amboseli"
              className="h-56 w-full object-cover"
            />
            <div className="p-6">
              <span className="text-xs font-semibold text-amber-600 bg-amber-50 px-3 py-1 rounded-full uppercase">
                Scenic Views
              </span>
              <h3 className="text-xl font-bold mt-2 text-gray-900">Amboseli National Park</h3>
              <p className="text-gray-600 mt-2 text-sm">
                Famous for being the best place in Africa to get close to free-ranging elephants against Mount Kilimanjaro.
              </p>
              <div className="mt-4 flex justify-between items-center">
                <span className="font-bold text-gray-900">From $290</span>
                <a href="#booking" className="text-amber-600 font-semibold hover:underline text-sm flex items-center gap-1">
                  Book Safari <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">
            <img
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=600"
              alt="Diani Beach"
              className="h-56 w-full object-cover"
            />
            <div className="p-6">
              <span className="text-xs font-semibold text-amber-600 bg-amber-50 px-3 py-1 rounded-full uppercase">
                Beach & Leisure
              </span>
              <h3 className="text-xl font-bold mt-2 text-gray-900">Diani Beach, Mombasa</h3>
              <p className="text-gray-600 mt-2 text-sm">
                Relax on pristine white sands, turquoise waters, and enjoy world-class coastal beach resorts.
              </p>
              <div className="mt-4 flex justify-between items-center">
                <span className="font-bold text-gray-900">From $420</span>
                <a href="#booking" className="text-amber-600 font-semibold hover:underline text-sm flex items-center gap-1">
                  Book Hotel <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BOOKING SECTION */}
      <section id="booking" className="py-20 bg-gray-100 px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-6 sm:p-10">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">All-in-One Booking Portal</h2>
            <p className="text-gray-600 mt-2">Book your next Safari, Flight, or Hotel seamlessly</p>
          </div>

          <div className="flex justify-center border-b mb-8 space-x-4 sm:space-x-8">
            {[
              { id: 'safari', label: 'Book Safari', icon: Compass },
              { id: 'hotel', label: 'Book Hotel', icon: Building2 },
              { id: 'flight', label: 'Book Flight', icon: Plane },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`pb-3 font-semibold flex items-center gap-2 transition border-b-2 ${
                    isActive ? 'border-amber-600 text-amber-600 font-bold' : 'border-transparent text-gray-500 hover:text-amber-600'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {tab.label}
                </button>
              );
            })}
          </div>

          {activeTab === 'safari' && (
            <form onSubmit={handleSafariSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Select Destination</label>
                  <select className="mt-1 block w-full rounded-md border border-gray-300 p-3 bg-white focus:ring-amber-500 focus:border-amber-500 outline-none">
                    <option>Masai Mara National Reserve</option>
                    <option>Amboseli National Park</option>
                    <option>Tsavo East & West</option>
                    <option>Lake Nakuru National Park</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Travel Date</label>
                  <input
                    type="date"
                    min={minDate}
                    required
                    className="mt-1 block w-full rounded-md border border-gray-300 p-3 focus:ring-amber-500 focus:border-amber-500 outline-none"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Number of Travelers</label>
                  <input
                    type="number"
                    min="1"
                    defaultValue="1"
                    required
                    className="mt-1 block w-full rounded-md border border-gray-300 p-3 focus:ring-amber-500 focus:border-amber-500 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Your Full Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    required
                    className="mt-1 block w-full rounded-md border border-gray-300 p-3 focus:ring-amber-500 focus:border-amber-500 outline-none"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-amber-600 text-white font-semibold py-3.5 rounded-lg hover:bg-amber-700 transition mt-4 shadow-md"
              >
                Confirm Safari Booking
              </button>
            </form>
          )}

          {activeTab === 'hotel' && (
            <form onSubmit={handleHotelSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">City / Location</label>
                  <select className="mt-1 block w-full rounded-md border border-gray-300 p-3 bg-white focus:ring-amber-500 focus:border-amber-500 outline-none">
                    <option>Nairobi City Hotels</option>
                    <option>Mombasa / Diani Beach Resorts</option>
                    <option>Naivasha Lakeside Lodges</option>
                    <option>Masai Mara Luxury Camps</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Check-in Date</label>
                  <input
                    type="date"
                    min={minDate}
                    required
                    className="mt-1 block w-full rounded-md border border-gray-300 p-3 focus:ring-amber-500 focus:border-amber-500 outline-none"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Rooms & Guests</label>
                  <input
                    type="text"
                    defaultValue="1 Room, 2 Adults"
                    required
                    className="mt-1 block w-full rounded-md border border-gray-300 p-3 focus:ring-amber-500 focus:border-amber-500 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Your Email</label>
                  <input
                    type="email"
                    placeholder="email@example.com"
                    required
                    className="mt-1 block w-full rounded-md border border-gray-300 p-3 focus:ring-amber-500 focus:border-amber-500 outline-none"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-amber-600 text-white font-semibold py-3.5 rounded-lg hover:bg-amber-700 transition mt-4 shadow-md"
              >
                Find & Book Hotel
              </button>
            </form>
          )}

          {activeTab === 'flight' && (
            <form onSubmit={handleFlightSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">From</label>
                  <input
                    type="text"
                    defaultValue="Nairobi (NBO - Jomo Kenyatta Intl)"
                    required
                    className="mt-1 block w-full rounded-md border border-gray-300 p-3 focus:ring-amber-500 focus:border-amber-500 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">To (Destination)</label>
                  <input
                    type="text"
                    placeholder="e.g. Zanzibar, Dubai, London"
                    required
                    className="mt-1 block w-full rounded-md border border-gray-300 p-3 focus:ring-amber-500 focus:border-amber-500 outline-none"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Departure Date</label>
                  <input
                    type="date"
                    min={minDate}
                    required
                    className="mt-1 block w-full rounded-md border border-gray-300 p-3 focus:ring-amber-500 focus:border-amber-500 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Flight Class</label>
                  <select className="mt-1 block w-full rounded-md border border-gray-300 p-3 bg-white focus:ring-amber-500 focus:border-amber-500 outline-none">
                    <option>Economy</option>
                    <option>Business Class</option>
                    <option>First Class</option>
                  </select>
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-amber-600 text-white font-semibold py-3.5 rounded-lg hover:bg-amber-700 transition mt-4 shadow-md"
              >
                Search Flights
              </button>
            </form>
          )}
        </div>
      </section>

      {/* ABOUT US SECTION */}
      <section id="about" className="py-20 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&q=80&w=800"
              alt="Safari Lodge and Guide"
              className="rounded-2xl shadow-lg w-full h-96 object-cover"
            />
          </div>
          <div>
            <span className="text-amber-600 font-bold uppercase tracking-wider text-sm">
              About Savanna Horizon
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-2">
              Your Trusted Travel Partner in Nairobi
            </h2>
            <p className="text-gray-600 mt-4 leading-relaxed">
              Based right in the vibrant capital of Kenya, Nairobi, Savanna Horizon Safaris specializes in crafting customized authentic African adventures. From the breathtaking plains of the Masai Mara to white sandy beaches, standard local/international flight arrangements, and comfortable hotel reservations, we manage every detail of your journey.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-6">
              {[
                'Local Expertise',
                '24/7 Support',
                'Best Price Guarantee',
                'Tailored Itineraries',
              ].map((feature) => (
                <div key={feature} className="flex items-center space-x-3">
                  <CheckCircle2 className="text-amber-600 h-5 w-5 flex-shrink-0" />
                  <span className="font-semibold text-gray-800">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="bg-gray-900 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
            <p className="text-gray-400 mb-8">
              Have questions about a custom itinerary or need immediate assistance? Reach out to our Nairobi team.
            </p>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="text-amber-500 h-6 w-6 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">Office Location</h4>
                  <p className="text-gray-400 text-sm">Kimathi Street, Nairobi CBD, Kenya</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Phone className="text-amber-500 h-6 w-6 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <p className="text-gray-400 text-sm">+254 700 000 000 / +254 20 000000</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Mail className="text-amber-500 h-6 w-6 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p className="text-gray-400 text-sm">
                    <a href="mailto:info@savannahorizonsafaris.com" className="hover:text-amber-500 transition">
                      info@savannahorizonsafaris.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white text-gray-800 p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Send Us a Message</h3>
            <form onSubmit={handleContactSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Your Name</label>
                <input
                  type="text"
                  placeholder="Jane Doe"
                  required
                  className="mt-1 block w-full rounded-md border border-gray-300 p-3 focus:ring-amber-500 focus:border-amber-500 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email Address</label>
                <input
                  type="email"
                  placeholder="jane@example.com"
                  required
                  className="mt-1 block w-full rounded-md border border-gray-300 p-3 focus:ring-amber-500 focus:border-amber-500 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  rows={4}
                  placeholder="Tell us what you'd like to plan..."
                  required
                  className="mt-1 block w-full rounded-md border border-gray-300 p-3 focus:ring-amber-500 focus:border-amber-500 outline-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-amber-600 text-white font-semibold py-3.5 rounded-lg hover:bg-amber-700 transition shadow-md"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-950 text-gray-400 py-6 text-center text-sm border-t border-gray-800">
        <p>
          &copy; {new Date().getFullYear()}{' '}
          <a href={WEBSITE_URL} target="_blank" rel="noopener noreferrer" className="hover:text-amber-500 transition font-medium">
            Savanna Horizon Safaris
          </a>
          . All rights reserved. Proudly based in Nairobi, Kenya 🇰🇪
        </p>
      </footer>
    </div>
  );
}