import logo from "@/assets/logo.png.asset.json";

export function Logo({ className = "h-6" }: { className?: string }) {
  return <img src={logo.url} alt="ECLIPSSE" className={className} />;
}
