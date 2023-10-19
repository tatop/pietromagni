import ModeToggle from "./theme-toggle";

export default function Footer() {
  return (
    <div className="flex flex-row justify-between items-center md:w-2/3 absolute bottom-0 pb-10">
      <div className="flex flex-row gap-5">
        <a href="github.com">Github</a>
        <a href="design.com">Design</a>
        <a href="twitter.com">Twitter</a>
      </div>
      {/* <ModeToggle /> */}
    </div>
  );
}
