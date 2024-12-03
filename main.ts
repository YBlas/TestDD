import { Application, Router } from "https://deno.land/x/oak/mod.ts";

// Create a new router
const router = new Router();
router.get("/", (context) => {
  context.response.body =
    "Jaguar, sleek and smart. For men who'd like hand jobs from beautiful women they hardly know";
});

// Create a new application
const app = new Application();

// Add the router middleware
app.use(router.routes());
app.use(router.allowedMethods());

// Start the server
const PORT = 8000;
console.log(`Server is running on http://localhost:${PORT}`);
await app.listen({ port: PORT });
