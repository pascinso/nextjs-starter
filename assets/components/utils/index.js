import styles from "./style.module.scss";

const { page } = styles;

export function usePageStore() {
  return { page };
}
