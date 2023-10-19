interface TheoProps {
  icon?: string;
  children?: React.ReactNode;
  title?: string;
}

export function Theorem({ children, icon, title, ...props }: TheoProps) {
  return (
    <div
      className="my-6 flex flex-col items-start rounded-md border border-pink-400 bg-pink-500/20 p-4"
      {...props}
    >
      {icon && <span className="mr-4 text-2xl">{icon}</span>}
      <h1 className="text-xl font-bold">{title}</h1>
      <div>{children}</div>
    </div>
  );
}
