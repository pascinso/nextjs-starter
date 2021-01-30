import { usePageStore } from "./utils";

export function usePage() {
  const { page } = usePageStore();

  return <main className={page}>Page</main>;
}
