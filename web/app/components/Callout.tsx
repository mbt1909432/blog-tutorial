export function Callout({
  variant,
  icon,
  children,
}: {
  variant: "blue" | "green" | "orange" | "red" | "purple";
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  const styles = {
    blue: "bg-accent-blue-bg border-accent-blue text-[#1a5fb4]",
    green: "bg-accent-green-bg border-accent-green text-[#0a5c50]",
    orange: "bg-accent-orange-bg border-accent-orange text-[#8b4d00]",
    red: "bg-accent-red-bg border-accent-red text-[#a33]",
    purple: "bg-accent-purple-bg border-accent-purple text-[#4a2d7a]",
  };
  return (
    <div
      className={`flex gap-3 px-[18px] py-4 rounded-lg my-5 border-l-[3px] text-sm leading-relaxed ${styles[variant]}`}
    >
      <span className="shrink-0 mt-px [&_svg]:w-[18px] [&_svg]:h-[18px]">{icon}</span>
      <div>{children}</div>
    </div>
  );
}
