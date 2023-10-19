import { Navbar } from "@/components/header-min";

export default function Page() {
  return (
    <main className="flex flex-col md:px-24 md:w-3/5 w-full md:mx-auto px-5 mt-10">
      <Navbar />
      <h1 className="text-4xl font-bold pb-5 pt-10">About</h1>
      <p>
        I&apos;m a huge fan of new bleeding-edge technologies and languages.
        I&apos;ve learned a lot about web technologies and core programming, and
        I strive to learn more about these things every day and utilize my
        knowledge to understand further how or why the technology around us
        works.
      </p>
      <p className="pt-5 pb-10">
        I&apos;m currently a student at the University of California, Irvine,
        and I&apos;m pursuing a B.S. in Computer Science. I&apos;m also a part
        of the Association for Computing Machinery (ACM) at UCI, and I&apos;m a
        part of the Web Development team.
      </p>
      <h1 className="text-3xl font-bold pb-5">Videogames</h1>
      <p>
        I deeply enjoy playing videogames, and I&apos;ve been playing them since
        I was a kid. Recently I&apos;ve been playing a lot of Valorant and
        League of Legends recently.
      </p>
    </main>
  );
}
