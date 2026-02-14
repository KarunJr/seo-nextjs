import Courses from "./components/Courses";

export default function Home() {
  return (
    <main className="h-screen">
      <nav className="h-12 w-full flex items-center border-b border-b-gray-600 mb-3">
        StartHub
      </nav>
      <section>
        <header className="flex justify-center flex-col gap-2 items-center h-[25vh]">
          <h1 className="font-bold text-2xl sm:text-4xl text-center">Unlock the Creative Potential You’ve Always Had</h1>
          <p className="text-xm sm:text-xl text-center text-gray-500">Turn your hidden talents into mastered skills with our expert-led roadmap.</p>
        </header>
      </section>

      <section className="container p-8 sm:p-10">
        <header>
          <h1 className="text-xl font-bold mb-4">Courses</h1>
        </header>
        
        <Courses />
      </section>
    </main>
  );
}
