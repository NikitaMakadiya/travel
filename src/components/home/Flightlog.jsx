const Flightlog = () => {
  const images = [
    { src: "/home/fly1.png", alt: "Image 1" },
    { src: "/home/fly2.png", alt: "Image 1" },
    { src: "/home/fly3.png", alt: "Image 1" },
    { src: "/home/fly4.png", alt: "Image 1" },
  ];
  return (
    <div class="flex gap-4 p-4 bg-gray-300 rounded-lg w-full mx-auto justify-evenly ">
      {images.map((img) => (
        <img
          src={img.src}
          className="h-20 w-20 object-contain  grayscale opacity-70"
          alt=""
        />
      ))}
    </div>
  );
};

export default Flightlog;
