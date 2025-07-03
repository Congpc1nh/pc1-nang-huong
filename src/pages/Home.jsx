import ServiceHighlightSection from "../components/ServiceHighlightSection";

export default function Home() {
  return (
    <main className="p-4 space-y-12">
      <section className="text-center">
        <h1 className="text-3xl font-bold">Chào mừng đến với PC1 Nàng Hương</h1>
        <p className="text-lg mt-2">Dịch vụ tận tâm, nâng tầm chất lượng</p>
      </section>
      <ServiceHighlightSection />
    </main>
  );
}