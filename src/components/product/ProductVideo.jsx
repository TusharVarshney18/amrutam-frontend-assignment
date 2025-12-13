function ProductVideo({ video }) {
  if (!video) return null;

  return (
    <section className="mt-10">
      <h2 className="text-xl font-semibold  text-[#2E2F2E] mb-4">
        {video.title}
      </h2>

      <div className="rounded-xl overflow-hidden w-full max-w-[700px] mx-auto">
        <iframe
          width="100%"
          height="400"
          src={video.url}
          title="Video testimonial"
          allowFullScreen
          className="rounded-xl"
        ></iframe>
      </div>
    </section>
  );
}

export default ProductVideo;
