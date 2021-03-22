import { useApi } from "../get.page";

describe("useApi", () => {
  const response = {
    statusCode: null,
    json: jest.fn(),
  };

  describe("response", () => {
    test("calls json", async () => {
      await useApi(null, response);

      expect(response.json).toHaveBeenCalledTimes(1);
      expect(typeof response.statusCode).toEqual("number");
    });
  });
});
