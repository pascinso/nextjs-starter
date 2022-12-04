import load from "components/utils";

export default function useVercel(props: VercelProps) {
  return load(import("public/vercel.svg"), props);
}
