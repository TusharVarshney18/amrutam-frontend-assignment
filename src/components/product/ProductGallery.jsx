function ProductGallery({ images, main }) {
  return (
    <div className="flex flex-col gap-4 w-full">
      <img
        src={main}
        className="w-full max-w-[636px] h-auto aspect-square object-cover rounded-xl mx-auto"
      />

      <div className="flex flex-wrap justify-center gap-3">
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            className="h-20 w-20 md:h-24 md:w-24 rounded-lg object-cover cursor-pointer hover:opacity-80 transition"
          />
        ))}
      </div>
    </div>
  );
}

export default ProductGallery;
