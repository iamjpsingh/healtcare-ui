const MapSection = () => {
  return (
    <section className="w-full bg-gray-50 py-16">
      <div className="container mx-auto px-4 text-center">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Visit Our <span className="text-blue-600">Healh Center</span>
        </h2>

        {/* Description */}
        <p className="mt-4 text-lg text-gray-600 max-w-xl mx-auto">
          Find us easily on the map and drop by for a visit. We're always here
          to help you in person!
        </p>

        {/* Google Map Embed */}
        <div className="mt-8 w-full h-[400px] rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7122.60336196673!2d80.89406741642458!3d26.79852116028239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfea7c4740451%3A0xb38f28aef5330e4f!2sPhoenix%20United%20Mall%2C%20Lucknow%2C%20U.P.!5e0!3m2!1sen!2sin!4v1748430615930!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default MapSection;

<iframe
  src=""
  width="600"
  height="450"
  style="border:0;"
  allowfullscreen=""
  loading="lazy"
  referrerpolicy="no-referrer-when-downgrade"
></iframe>;
