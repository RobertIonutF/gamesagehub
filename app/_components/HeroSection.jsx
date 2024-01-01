const HeroSection = () => {
  return (
    <div className="bg-gray-800 text-white text-center hero-section">
      <div className="pt-24 pb-12 md:pt-36 md:pb-24">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Welcome to GameSage Hub!
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          Your Ultimate Guide to Gaming Excellence
        </p>
        <a
          href="#explore"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
        >
          Explore Now
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
