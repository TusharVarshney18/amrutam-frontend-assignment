function Footer() {
  return (
    <footer className="bg-[#DCE5DB] w-full py-16">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* LEFT - GET IN TOUCH */}
        <div>
          <h3 className="text-lg font-semibold text-[#2E2F2E]">Get in touch</h3>
          <p className="mt-4 text-[#244a40]">support@amrutam.global</p>
          <p className="mt-4 text-[#244a40] leading-relaxed w-[300px]">
            Amrutam Pharmaceuticals Pvt Ltd., <br />
            chitragupt ganj, Nai Sadak, Lashkar, <br />
            Gwalior - 474001
          </p>
          <p className="mt-4 text-[#244a40] font-medium">+91 9713171999</p>

          {/* SOCIAL ICONS */}
          <div className="flex gap-4 mt-6">
            {[
              "/fb.png",
              "/insta.png",
              "/yt.png",
              "/tw.png",
              "/ln.png",
              "/pt.png",
            ].map((icon, i) => (
              <div
                key={i}
                className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md cursor-pointer hover:scale-110 transition"
              >
                <img src={icon} className="w-6 h-6" />
              </div>
            ))}
          </div>
        </div>

        {/* MIDDLE - LINKS */}
        <div>
          <h3 className="text-lg font-semibold text-[#2E2F2E]">Information</h3>
          <ul className="mt-4 flex flex-col gap-2 text-[#244a40]">
            <li>About Us</li>
            <li>Terms and Conditions</li>
            <li>Privacy Policy</li>
            <li>Privacy Policy for Mobile Apps</li>
            <li>Shipping, return and cancellation Policy</li>
            <li>International Delivery</li>
            <li>For Businesses, Hotels, and Resorts</li>
          </ul>
        </div>

        {/* RIGHT - NEWSLETTER */}
        <div>
          <h3 className="text-lg font-semibold text-[#2E2F2E]">
            Subscribe to our Newsletter and join <br />
            Amrutam Family today!
          </h3>

          {/* Email Input */}
          <div className="flex mt-6 w-full border border-[#2E2F2E] rounded-full overflow-hidden">
            <input
              type="email"
              placeholder="Your Email Address"
              className="flex-1 px-5 py-3 outline-none bg-transparent text-sm"
            />
            <button className="px-6 py-3 bg-black text-white font-medium text-sm">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
