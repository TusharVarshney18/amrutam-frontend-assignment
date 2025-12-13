function TopBar() {
  return (
    <div className="hidden lg:flex w-full h-[67px] bg-[#373636] items-center justify-between py-2 px-6">

     

      {/* CENTER TEXT */}
      <p className="text-[#D9D9D9] text-sm font-medium text-center absolute left-1/2 transform -translate-x-1/2">
        Your first 5 minutes instant call is free.
      </p>

      {/* RIGHT BUTTON */}
      <button className="bg-[#3A643B] absolute right-60 text-white px-5 py-2 rounded-2xl text-sm font-medium">
        Try Instant Free Call Now
      </button>

    </div>
  );
}

export default TopBar;
