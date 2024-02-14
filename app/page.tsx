import classNames from "./styles.module.scss";
import { defineProperties, dynamic } from "utils";

const useHome: Home = () => {
  const { Vercel = () => null } = useHome;
  return (
    <main className={classNames.home}>
      <Vercel />
    </main>
  );
};

defineProperties(useHome, {
  Vercel: { value: dynamic(() => import("public/vercel.svg")) },
});

export default useHome;
