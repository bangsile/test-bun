const server = Bun.serve({
  port: 3000,
  fetch(req) {
    return Response.json({bun:"Bun!"});
  },
});

console.log(`Listening on http://localhost:${server.port} ...`);