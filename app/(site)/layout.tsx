import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />

      <main className="pt-28 min-h-screen">
        {children}
      </main>

      <Footer />
    </>
  );
}