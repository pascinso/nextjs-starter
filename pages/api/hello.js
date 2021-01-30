// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export function useApi({ response }) {
  response.statusCode = 200;
  response.json({ name: "John Doe" });
}
