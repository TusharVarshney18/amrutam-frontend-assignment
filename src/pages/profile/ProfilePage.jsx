import { NavLink, Outlet } from "react-router-dom";

export default function ProfilePage() {
  const linkBase = "flex items-center gap-3 text-gray-600 hover:text-[#0C5C4C]";
  const activeLink = "text-[#0C5C4C] font-semibold";

  return (
    <div className="min-h-screen bg-[#F7FCF7] flex">
      {/* LEFT SIDEBAR */}
      <aside className="w-64 bg-white shadow-lg px-6 py-8 hidden md:flex flex-col border-r">
        {/* PROFILE */}
        <div className="flex flex-col items-center text-center pb-6 border-b">
          <img
            src="/forum/priya.png"
            alt="Profile"
            className="w-24 h-24 rounded-full object-cover"
          />
          <h3 className="mt-4 text-lg font-semibold text-[#0C5C4C]">
            Priya Singhal
          </h3>
          <p className="text-xs text-gray-500 mt-1">24 July, 1999 • 25 years</p>
          <p className="text-xs text-gray-500">New Delhi, India</p>
        </div>

        {/* NAVIGATION */}
        <nav className="mt-8 space-y-6 text-sm font-medium">
          <NavLink
            to="/profile/dashboard"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? activeLink : ""}`
            }
          >
            <span className="w-10 h-10 flex items-center justify-center bg-[#EAF3EB] rounded-lg">
              <img src="/forum/Dashboard.svg" className="w-6 h-6" />
            </span>
            Dashboard
          </NavLink>

          <NavLink
            to="/profile/appointments"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? activeLink : ""}`
            }
          >
            <span className="w-10 h-10 flex items-center justify-center bg-[#EAF3EB] rounded-lg">
              <img src="/forum/appoinments.svg" className="w-6 h-6" />
            </span>
            Appointments
          </NavLink>

          <NavLink
            to="/profile/wallet"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? activeLink : ""}`
            }
          >
            <span className="w-10 h-10 flex items-center justify-center bg-[#EAF3EB] rounded-lg">
              <img src="/forum/wallet.svg" className="w-6 h-6" />
            </span>
            My Wallet
          </NavLink>

          <NavLink
            to="/profile/chats"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? activeLink : ""}`
            }
          >
            <span className="w-10 h-10 flex items-center justify-center bg-[#EAF3EB] rounded-lg">
              <img src="/forum/chat.svg" className="w-6 h-6" />
            </span>
            My Chats
          </NavLink>

          <NavLink
            to="/profile/orders"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? activeLink : ""}`
            }
          >
            <span className="w-10 h-10 flex items-center justify-center bg-[#EAF3EB] rounded-lg">
              <img src="/forum/order.svg" className="w-6 h-6" />
            </span>
            My Orders
          </NavLink>

          <NavLink
            to="/profile/saved-posts"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? activeLink : ""}`
            }
          >
            <span className="w-10 h-10 flex items-center justify-center bg-[#0C5C4C] rounded-lg">
              <img src="/forum/bookmark.svg" className="w-6 h-6 invert" />
            </span>
            Saved Posts
          </NavLink>
        </nav>
      </aside>

      {/* RIGHT CONTENT */}
      <main className="flex-1 px-4 sm:px-8 lg:px-12 py-10">
        <Outlet />
      </main>
    </div>
  );
}
