import Headear from "@/components/header";
import Footer from "@/components/footer";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col md:px-24 md:w-3/5 w-full md:mx-auto px-5 mt-24">
      <Headear />
      <p className="pt-10">
        Welcome to my small corner of the internet. I'm 0x23u, and I'm a
        self-taught software engineer interested in web and serverless
        technologies and DevOps practices.
      </p>
      <h1 className="pt-20 pb-5 text-lg text-left font-bold">Projects</h1>
      <p>
        Below are some of projects I've worked on. You can find most of my work
        on my{" "}
        <a
          href="github.com"
          className="underline decoration-slate-400 hover:decoration-slate-200"
        >
          GitHub
        </a>
        .
      </p>
      <ul className=" -mx-4 mt-8 flex flex-col gap-6 px-1 sm:px-0 w-full">
        <li>
          <Link
            className="-my-2 flex select-none items-center gap-2.5 rounded-xl px-4 py-2 transition-colors hover:bg-gray-200 dark:hover:bg-gray-500/10"
            href={"https://screfy.vercel.app"}
            target="_blank"
          >
            <p className="font-semibold">Screfy</p>

            <p className="hidden text-gray-11 md:block">Test test eee</p>

            <span className="h-px flex-1 bg-gray-400" />

            <p className="text-gray-11">2023</p>
          </Link>
        </li>
        <li>
          <Link
            className="-my-2 flex select-none items-center gap-2.5 rounded-xl px-4 py-2 transition-colors dark:hover:bg-gray-500/10"
            href={"https://screfy.vercel.app"}
            target="_blank"
          >
            <p className="font-semibold">Screfy</p>

            <p className="hidden text-gray-11 md:block">
              Stay close while you're apart
            </p>

            <span className="h-px flex-1 bg-gray-400" />

            <p className="text-gray-11">2023</p>
          </Link>
        </li>
      </ul>
      <Footer />
    </main>
  );
}
