"use client";
import Poster from "./components/Poster";
import Header from "./components/Header";
import Nav from "./components/Nav";

export default function Home() {
  return (
    <main className="relative flex flex-col gap-0 m-0 p-0 bg-[#f5f5f5]">
      <Header />
      <section className="px-14 py-8">
        <div className="md:grid grid-cols-8 gap-8">
          <h1 className="col-span-3 text-6xl place-items-center">
            A visual & interactive blog to document and reflect on things I
            read, stumbled upon or designed.
          </h1>
          <p className="col-span-2">
            I am grateful to have the opportunity to call myself a designer.
            With 6+ years working and counting, I've been through burn-out,
            doubted if this is really what I want to do. I paused, and have been
            told "It’s just a job"... I never really stopped. Mostly because, I
            constantly looked outwards. Looked at other designers and
            technologists who I admire dearly and secretly call them "Senpai"
            (先輩) in my notes and Saved Folders. I studied their work, borrowed
            their ideas, listened to their podcasts, read their writing on
            product, design and technology. They are my greatest source of
            inspiration and learning. This is the Saved folder and thanks to
            them for being such inspiration.
          </p>
        </div>
        <div className="md:grid grid-cols-8 gap-8">
          <span className="col-span-5"></span>
          <p className="h-[calc(100vh-40vh)] col-span-3 place-content-end">
            I am grateful to have the opportunity to call myself a designer.
            With 6+ years working and counting, I've been through burn-out,
            doubted if this is really what I want to do. I paused, and have been
            told "It’s just a job"... I never really stopped. Mostly because, I
            constantly looked outwards. Looked at other designers and
            technologists who I admire dearly and secretly call them "Senpai"
            (先輩) in my notes and Saved Folders. I studied their work, borrowed
            their ideas, listened to their podcasts, read their writing on
            product, design and technology. They are my greatest source of
            inspiration and learning. This is the Saved folder and thanks to
            them for being such inspiration.
          </p>
        </div>
      </section>
      <section className="h-full">
        <Poster name="Hello" description="Hello" inspirations="Rauno" />
      </section>
      {/* Fixed Bottom Control */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2">
        <Nav />
      </div>
    </main>
  );
}
