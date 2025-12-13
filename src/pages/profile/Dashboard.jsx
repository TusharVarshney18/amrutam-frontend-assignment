import SEO from "../../components/SEO";
function Dashboard() {
  <SEO
    title="Your Dashboard – Amrutam Profile"
    description="View your appointments, chats, orders, wallet and saved posts."
    canonical="https://yourwebsite.com/profile/dashboard"
  />;

  return (
    <section className="bg-white p-6 rounded-2xl shadow-sm">
      <h1 className="text-2xl font-semibold mb-4">Dashboard</h1>
      <p className="text-sm text-gray-600">
        Welcome back — here’s a summary of your recent activity.
      </p>
    </section>
  );
}

export default Dashboard;
