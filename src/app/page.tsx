import Poster from "./components/Poster";
import Header from "./components/Header";

export default function Home() {
  return (
    <main className="flex flex-col gap-0 m-0 p-0 bg-[#f5f5f5]">
      <Header />
      <section className="h-full">
       <Poster />
       <Poster />
      </section>
    </main>
  );
}
