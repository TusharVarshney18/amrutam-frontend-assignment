import { Outlet } from "react-router-dom";

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-[#F7FCF7] flex">
      {/* LEFT SIDEBAR */}
      <aside className="w-64 bg-white shadow-lg px-6 py-8 hidden md:flex flex-col border-r">
        <div className="flex flex-col items-center text-center pb-6 border-b">
          <img
            src="/forum/priya.png"
            className="w-24 h-24 rounded-full object-cover"
          />
          <h3 className="mt-4 text-lg font-semibold text-[#0C5C4C]">
            Priya Singhal
          </h3>
          <p className="text-xs text-gray-500 mt-1">24 July, 1999 • 25 years</p>
          <p className="text-xs text-gray-500">New Delhi, India</p>
        </div>

        <nav className="mt-8 space-y-6 text-sm font-medium">
          <a
            href="/profile/dashboard"
            className="flex items-center gap-3 text-gray-600 hover:text-[#0C5C4C]"
          >
            <span className="w-10 h-10 flex items-center justify-center bg-[#EAF3EB] rounded-lg">
              <img src="/forum/Dashboard.svg" className="w-6 h-6" />
            </span>
            Dashboard
          </a>

          <a
            href="/profile/appointments"
            className="flex items-center gap-3 text-gray-600 hover:text-[#0C5C4C]"
          >
            <span className="w-10 h-10 flex items-center justify-center bg-[#EAF3EB] rounded-lg">
              <img src="/forum/appoinments.svg" className="w-6 h-6" />
            </span>
            Appointments
          </a>

          <a
            href="/profile/wallet"
            className="flex items-center gap-3 text-gray-600 hover:text-[#0C5C4C]"
          >
            <span className="w-10 h-10 flex items-center justify-center bg-[#EAF3EB] rounded-lg">
              <img src="/forum/wallet.svg" className="w-6 h-6" />
            </span>
            My Wallet
          </a>

          <a
            href="/profile/chats"
            className="flex items-center gap-3 text-gray-600 hover:text-[#0C5C4C]"
          >
            <span className="w-10 h-10 flex items-center justify-center bg-[#EAF3EB] rounded-lg">
              <img src="/forum/chat.svg" className="w-6 h-6" />
            </span>
            My Chats
          </a>

          <a
            href="/profile/orders"
            className="flex items-center gap-3 text-gray-600 hover:text-[#0C5C4C]"
          >
            <span className="w-10 h-10 flex items-center justify-center bg-[#EAF3EB] rounded-lg">
              <img src="/forum/order.svg" className="w-6 h-6" />
            </span>
            My Orders
          </a>

          <a
            href="/profile/saved-posts"
            className="flex items-center gap-3 text-[#0C5C4C] font-semibold"
          >
            <span className="w-10 h-10 flex items-center justify-center bg-[#0C5C4C] rounded-lg">
              <img src="/forum/bookmark.svg" className="w-6 h-6 invert" />
            </span>
            Saved Posts
          </a>
        </nav>
      </aside>

      {/* RIGHT CONTENT SHOULD CHANGE BASED ON ROUTE */}
      <main className="flex-1 px-4 sm:px-8 lg:px-12 py-10">
        <Outlet />
      </main>
    </div>
  );
}
