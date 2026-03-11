import AdminNavbar from "../../components/AdminNavbar";
import Footer from "../../components/Footer";

export default function AdminLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">

      <AdminNavbar />

      <main className="flex-grow">
        {children}
      </main>

      <Footer />

    </div>
  );
}