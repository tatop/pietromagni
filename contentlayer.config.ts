// @ts-nocheck

import { defineDocumentType, makeSource } from "contentlayer/source-files";
import remarkGfm from "remark-gfm";
import readingTime from "reading-time";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeMathJax from "rehype-mathjax";
import remarkMath from "remark-math";

import { resolveTypedDocument } from "./lib/contentlayer";

const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `blog/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    date: { type: "date", required: true },
    description: { type: "string", required: true },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (post) => `/${post._raw.flattenedPath}`,
    },
    slugAsParams: {
      type: "string",
      resolve: (post) => post._raw.flattenedPath.split("/").slice(1).join("/"),
    },
    meta: {
      type: "json",
      resolve: resolveTypedDocument<{ body: { raw: string } }>(({ body }) =>
        readingTime(body.raw)
      ),
    },
  },
}));

const options: import("rehype-pretty-code").Options = {
  grid: false,
  theme: "rose-pine",
};

export default makeSource({
  contentDirPath: "content",
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [remarkGfm, remarkMath],
    rehypePlugins: [
      rehypeSlug,
      rehypeMathJax,
      [rehypeAutolinkHeadings, { behavior: "append" }],
      [rehypePrettyCode, options],
    ],
  },
});
