import dynamic from "next/dynamic";
import className from "./style.module.scss";

export default function useHome() {
  const Vercel = dynamic(() => import("../public/vercel.svg"));
  return (
    <main className={className.home}>
      <Vercel height={300} />
    </main>
  );
}
