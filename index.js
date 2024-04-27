import { hello } from "./hello/hello";

const server = Bun.serve({
  port: 3000,
  fetch(req) {
    return Response.json({bun:"Bun!", say: hello});
  },
});

console.log(`Listening on http://localhost:${server.port} ...`);