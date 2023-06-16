import { defineProperties, dynamic } from "utils";
import type { Home } from "./types";
import classNames from "./styles.module.scss";

const useHome: Home = () => {
  const { Vercel = () => null } = useHome;
  return (
    <main className={classNames.home}>
      <Vercel width="30%" />
    </main>
  );
};

defineProperties(useHome, {
  Vercel: { value: dynamic(() => import("public/vercel.svg")) },
});

export default useHome;
