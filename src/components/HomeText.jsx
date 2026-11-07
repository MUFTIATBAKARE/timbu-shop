function HomeText() {
  const reviews = [
    {
      quote:
        "For a sneakerhead, Timbu has helped me build an authentic collection of the best drops. Fast delivery and immaculate packaging.",
      author: "Andre M.",
      verified: "Verified Buyer",
    },
    {
      quote:
        "I currently own about 35 pairs of sneakers and I bought my grails from here. Always 100% genuine and pristine condition.",
      author: "Milo K.",
      verified: "Sneaker Enthusiast",
    },
    {
      quote:
        "Every sneakerhead&apos;s dream store! Seamless checkout, fair prices, and customer support was super helpful with sizing.",
      author: "Ariel T.",
      verified: "VIP Member",
    },
  ];

  return (
    <div className="mx-4 sm:mx-8 md:mx-10 my-8 py-8 border-t border-gray-100">
      <div className="text-center mb-8">
        <h4 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
          What Our Customers Say
        </h4>
        <p className="text-sm text-gray-500 mt-1">
          Trusted by over 2M+ sneakerheads and collectors worldwide
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {reviews.map((rev) => (
          <div
            key={rev.author}
            className="p-6 bg-green-50/50 rounded-2xl border border-green-100/80 flex flex-col justify-between gap-4"
          >
            <div className="text-amber-400 text-sm">★★★★★</div>
            <p className="text-sm text-gray-700 italic leading-relaxed">
              &quot;{rev.quote}&quot;
            </p>
            <div className="pt-2 border-t border-green-100 flex items-center justify-between text-xs">
              <span className="font-bold text-gray-900">{rev.author}</span>
              <span className="text-custom-midGreen font-semibold">{rev.verified}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomeText;
