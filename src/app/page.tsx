import Poster from "./components/Poster";
import Header from "./components/Header";

export default function Home() {
  return (
    <main className="border-y-1 flex flex-col gap-0 m-0 p-0 bg-[#f5f5f5]">
      <Header />
      <section className="px-14">
          <div className="md:grid grid-cols-8 gap-8">
            <h1 className="col-span-2 text-4xl place-items-center">A visual blog documents AI patterns and reflections on things I read and designed.</h1>
            <p className="col-span-3">Over the past 3 years, I've had the fortunate enough and opportunity to design for several interesting generative AI-powered user interfaces. Chat UI has become the table stake. I still remember in early 2023, the general sentiment moved from “Why do you even want to add a chat? We don’t need a chat.” to “we must have a chat and put everything in it.”</p>
          </div>
          <div className="md:grid grid-cols-8 gap-8">
            <span className="col-span-5"></span>
            <p className="bg-amber-100 h-[calc(100vh-30vh)] col-span-3 place-content-end">Reflecting on what I have designed and learned, and observed evolution of other popular products (chatgpt, claude, mistral, x, and perplexity), which seems like a commonplace, but there has been much more intention on   looking at the UI alone, it seems like the design is just a chatbox with buttons and chat bubbles. There is much more intent. but there has been much more intention on what is placed. The basic chat interaction has become a link to other deeper and richer experiences, “utltimately people are trying to get stuff done”</p>
          </div>
      </section>
      <section className="h-full">
       <Poster name="Hello" description="Hello" inspirations="Rauno" />
      </section>
    </main>
  );
}
