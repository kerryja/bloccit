const request = require("request");
const server = require("../../src/server");
const base = "http://localhost:3000/";
const base2 = "http://localhost:3000/about";

describe("routes : static", () => {

	describe("GET /", () => {

		it("should return status code 200 and have 'Welcome to Bloccit' in the body of the response", (done) => {

			request.get(base, (err, res, body) => {
				expect(res.statusCode).toBe(200);
				expect(body).toContain("Welcome to Bloccit");

				done();
			});
		});

	});

	describe("GET /about", () => {

		it("should return status code 200 and display 'About Us' in the body", (done) => {

			request.get(base2, (err, res, body) => {
				expect(res.statusCode).toBe(200);
				expect(body).toContain("About Us");

				done();
			})
		})
	})
});