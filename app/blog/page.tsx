import Image from "next/image";
import Link from "next/link";
import { allPosts } from "contentlayer/generated";
import { compareDesc, format, parseISO } from "date-fns";
import Footer from "@/components/footer";
import { Navbar } from "@/components/header-min";

export const metadata = {
  title: "Blog",
};

export default async function BlogPage() {
  const posts = allPosts
    .filter((post) => post.date)
    .sort((a, b) => {
      return compareDesc(new Date(a.date), new Date(b.date));
    });

  return (
    <main className="flex flex-col md:px-24 md:w-3/5 w-full md:mx-auto px-5 mt-10">
      <Navbar />
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block font-heading text-4xl tracking-tight lg:text-5xl">
            Blog
          </h1>
          <p className="text-xl text-muted-foreground pb-4">
            Articles about software development, productivity, and life.
          </p>
        </div>
      </div>
      {posts?.length ? (
        <div className="grid gap-5 sm:grid-cols-1 -mx-4">
          {posts.map((post, index) => (
            <article
              key={post._id}
              className="group relative flex flex-col space-y-2 p-4 hover:bg-gray-300/10 hover:rounded-md"
            >
              <div className="flex flex-row gap-2 items-center">
                {post.date && (
                  <p className="text-sm text-muted-foreground">
                    {" "}
                    {format(parseISO(post.date), "LLLL d, yyyy")}
                  </p>
                )}
                <span className="text-sm text-muted-foreground">·</span>
                <span className="text-sm text-muted-foreground">
                  {post.meta.text}
                </span>
              </div>
              <h2 className="text-2xl font-extrabold">{post.title}</h2>
              {post.description && (
                <p className="text-muted-foreground">{post.description}</p>
              )}

              <Link href={post.slug} className="absolute inset-0">
                <span className="sr-only">View Article</span>
              </Link>
            </article>
          ))}
        </div>
      ) : (
        <p>No posts published.</p>
      )}
      <Footer />
    </main>
  );
}
