import React from "react";

const Category = () => {
  const cards = [
    {
      title: "Guided Tours",
      description:
        "sunt qui repellat saepe quo velit aperiam id aliquam placeat.",
      image: "/home/hands 1.png",
    },
    {
      title: "Adventure Trips",
      description:
        "Explore mountains, rivers, and forests with our expert guides.",
      image: "/home/medical-team 1.png",
    },
    {
      title: "City Excursions",
      description: "Visit famous landmarks and hidden gems in the city.",
      image: "/home/hands 1.png",
    },
    {
      title: "Adventure Trips",
      description:
        "Explore mountains, rivers, and forests with our expert guides.",
      image: "/home/medical-team 1.png",
    },
    {
      title: "Adventure Trips",
      description:
        "Explore mountains, rivers, and forests with our expert guides.",
      image: "/home/medical-team 1.png",
    },
    {
      title: "City Excursions",
      description: "Visit famous landmarks and hidden gems in the city.",
      image: "/home/hands 1.png",
    },
  ];

  return (
    <div className="responsive-container flex space-y-2  flex-col  items-center   mt-10">
      <h2>category</h2>
      <h1>We Offer Best Services</h1>

      <div className=" grid gap-6 sm:grid-cols-2 md:grid-cols-4 mt-10 w-full items-stretch">
        {cards.slice(0, 4).map((card, index) => (
          <div
            key={index}
            className="grid grid-rows-[auto_auto_1fr] h-full
                       text-center p-4 w-full
                       bg-cardbackground   rounded-3xl gap-3
                       transform transition-transform duration-300
                       hover:scale-105 hover:shadow-2xl m-4 md:m-0"
          >
            <img
              src={card.image}
              className="w-24 h-24 mx-auto object-contain"
              alt={card.title}
            />
            <h5 className="text-lg font-semibold line-clamp-2">{card.title}</h5>
            <p className="text-sm text-gray-600 line-clamp-3">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Category;
