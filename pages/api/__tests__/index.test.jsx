import { useApi } from "../hello";

describe("useApi", () => {
  const response = {
    statusCode: 0,
    json: jest.fn((name) => name),
  };

  describe("response", () => {
    beforeEach(() => {
      useApi({ response });
    });

    test("calls json", () => {
      expect(response.json).toHaveBeenCalledTimes(1);
    });
    test("set statusCode", () => {
      expect(typeof response.statusCode).toEqual("number");
    });
  });
});
