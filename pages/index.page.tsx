import classNames from "./style.module.scss";
import Vercel from "./icon";

export default function useHome() {
  return (
    <main className={classNames.home}>
      <Vercel width="30%" />
    </main>
  );
}
