const request = require("supertest");
const app = require("../src/index");

describe("GET /api/todo", () => {
  it("should return a message indicating the todo API is running", async () => {
    const res = await request(app).get("/api/todo");
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("message", "todo API is running");
  });
});
