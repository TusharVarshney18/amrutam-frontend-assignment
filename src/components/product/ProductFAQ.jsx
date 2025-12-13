function ProductFAQ({ faq = [] }) {
  if (!faq || faq.length === 0) return null;

  return (
    <section className="mt-10">
      <h2 className="text-xl font-bold text-[#2E2F2E] mb-4">
        Commonly Asked Questions
      </h2>

      <div className="space-y-4">
        {faq.map((item, index) => (
          <div
            key={index}
            className="p-4 bg-[#FDEAD2] border border-[#F3DFBA] rounded-xl shadow-sm"
          >
            {/* QUESTION */}
            <h3 className="font-bold text-base text-[#2E2F2E] mb-2">
              {item.question}
            </h3>

            {/* ANSWER */}
            <p className="text-sm text-[#2E2F2E] leading-relaxed">
              {item.answer}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProductFAQ;
