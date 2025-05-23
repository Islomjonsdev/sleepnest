import Footer from "@/components/shared/footer";
import FooterBottom from "@/components/shared/footerBottom";
import Header from "@/components/shared/header";

export default function HomeLayout({ children }) {
  return (
    <>
      <Header />
      <main className="pt-[115px]">{children}</main>
      <Footer />
      <FooterBottom />
    </>
  );
}
