export default function useApi(request, response) {
  response.status(200).json({ name: "John Doe" });
}
