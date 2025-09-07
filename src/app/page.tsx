import Poster from "./components/Poster";
import Header from "./components/Header";

export default function Home() {
  return (
    <main className="flex flex-col gap-0 m-0 p-0 bg-[#f5f5f5]">
      <Header />
      <section>
          <h1 className="h-dvh w-3/4 text-4xl place-items-center">A visual blog documents AI patterns and reflections on things I read and designed.</h1>
      </section>
      <section className="h-full">
       <Poster name="Hello" description="Hello" inspirations="Rauno" />
      </section>
    </main>
  );
}
