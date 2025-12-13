function DownloadAppSection() {
  return (
    <section className="bg-[#FFF9E9] w-full py-16">
      <div className="max-w-[1300px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center px-4 sm:px-6">
        {/* LEFT SIDE */}
        <div className="text-center lg:text-left">
          <h2 className="text-[28px] md:text-[32px] font-semibold text-[#3A643B] leading-tight">
            Download Amrutam Ayurveda <br /> App Now
          </h2>

          <p className="text-[#676767] text-sm mt-4 leading-relaxed max-w-[480px] mx-auto lg:mx-0">
            The Amrutam Ayurveda App is your one-stop app for all things
            Ayurveda! Apart from mimicking the website, the app has added
            benefits
          </p>

          {/* FEATURE CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
            {[
              "Access To Prescriptions",
              "Track Health Efficiently",
              "Direct Chat With Doctors",
              "In-App Reminders For Consultations",
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-4 border border-[#D6D9C6] rounded-xl py-3 px-4 shadow-sm bg-white"
              >
                <div className="w-16 h-16 flex items-center justify-center">
                  <img
                    src="/messageicon.png"
                    alt="icons"
                    className="w-14 h-14 object-contain"
                  />
                </div>

                <p className="text-[15px] sm:text-[16px] font-medium text-[#1A6634] leading-tight">
                  {item}
                </p>
              </div>
            ))}
          </div>

          {/* STORE BUTTONS */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-8">
            <img
              src="/google.png"
              alt="Google Play"
              className="h-[60px] sm:h-[72px]"
            />
            <img
              src="/apple.png"
              alt="App Store"
              className="h-[60px] sm:h-[72px]"
            />
          </div>
        </div>

        {/* RIGHT SIDE GRAPHICS */}
        <div className="relative flex justify-center w-full h-auto sm:h-[450px] lg:h-[500px]">
          {/* PHONE IMAGE */}
          <img
            src="/Frame1.png"
            className="hidden sm:block absolute w-[220px] sm:w-[260px] md:w-[280px] h-auto top-[5%] lg:top-[-15%] right-[50%] translate-x-1/2 lg:right-[20%] lg:translate-x-0 z-10"
            alt="phone"
          />

          {/* Engagement Card */}
          <div className="hidden sm:block absolute top-[45%] sm:top-[40%] left-[10%] sm:left-0 w-[160px] sm:w-[190px]">
            <img src="/Frame2.png" alt="Engagement" className="w-full h-auto" />
          </div>

          {/* Download Count */}
          <div className="hidden sm:flex absolute bottom-[5%] right-[50%] translate-x-1/2 sm:translate-x-0 sm:right-[45%] bg-[#DFDFC7] shadow-md border rounded-xl px-4 py-3 w-[150px] sm:w-[160px] flex-col justify-end text-center gap-2">
            <img
              src="/Frame3.png"
              className="w-10 h-10 rounded-full mx-auto"
              alt=""
            />
            <p className="text-sm font-semibold text-[#2E2F2E]">
              10K+ Downloads
            </p>
          </div>

          {/* ARROWS */}
          <img
            src="/up.png"
            className="hidden sm:block absolute top-[25%] right-[60%] lg:right-[70%] w-10 sm:w-14"
            alt="arrow"
          />
          <img
            src="/down.png"
            className="hidden sm:block absolute bottom-[18%] right-[18%] lg:right-[23%] w-10 sm:w-14"
            alt="arrow"
          />
        </div>
      </div>
    </section>
  );
}

export default DownloadAppSection;
