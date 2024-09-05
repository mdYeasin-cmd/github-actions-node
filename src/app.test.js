const app = require("./app");
const supertest = require("supertest");

const request = supertest(app);

describe("/testNodeApp endpoint", () => {
    it("Should return a response", async () => {
        const response = await request.get("/testNodeApp");
        expect(response.status).toBe(200);
        expect(response.text).toBe("Yes testNodeApp endpoint works properly.");
    })
});