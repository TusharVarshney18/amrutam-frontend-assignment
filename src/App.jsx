import { Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Store from "./pages/Store";
import ProductDetail from "./pages/ProductDetail";
import Navbar from "./components/Navbar";
import TopBar from "./components/TopBar";
import FindDoc from "./pages/FindDoc";
import Forum from "./pages/Forum";
import Cart from "./pages/Cart";
import Ingredient from "./pages/Ingredient";
import IngredientDetail from "./pages/IngredientDetails";
import AppDownload from "./components/AppDownload";
import Footer from "./components/Footer";
import NewQuestionPage from "./pages/NewQuestionPage";
import ProfilePage from "./pages/profile/ProfilePage";
import Dashboard from "./pages/profile/Dashboard";
import Appointments from "./pages/profile/Appointments";
import Wallet from "./pages/profile/Wallet";
import Chats from "./pages/profile/Chats";
import Orders from "./pages/profile/Orders";
import SavedPosts from "./pages/profile/SavedPosts";

function App() {
  return (
    <>
      <TopBar />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Store />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/ingredients" element={<Ingredient />} />
        <Route path="/ingredients/:id" element={<IngredientDetail />} />
        <Route path="/forum" element={<Forum />} />
        <Route path="/find-doctors" element={<FindDoc />} />
        <Route path="/forum/new" element={<NewQuestionPage />} />

        <Route path="/profile" element={<ProfilePage />}>
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="appointments" element={<Appointments />} />
          <Route path="wallet" element={<Wallet />} />
          <Route path="chats" element={<Chats />} />
          <Route path="orders" element={<Orders />} />
          <Route path="saved-posts" element={<SavedPosts />} />
        </Route>
      </Routes>
      <AppDownload />
      <Footer />
    </>
  );
}

export default App;
