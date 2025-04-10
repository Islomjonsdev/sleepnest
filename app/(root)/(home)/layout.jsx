import Footer from "@/components/shared/footer";
import Header from "@/components/shared/header";

export default function HomeLayout({ children }) {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
