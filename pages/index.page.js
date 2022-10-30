import dynamic from "next/dynamic";
import className from "./style.module.scss";

const Vercel = dynamic(() => import("../public/vercel.svg"));

export default function useHome() {
  return (
    <main className={className.home}>
      <Vercel height={300} />
    </main>
  );
}
