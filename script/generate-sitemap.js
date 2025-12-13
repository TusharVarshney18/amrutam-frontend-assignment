import fs from "fs";
import path from "path";

import products from "../src/data/products.js";
import ingredients from "../src/data/ingredients.js";
import { sampleQuestions } from "../src/data/forumSample.js";

const baseUrl = "https://yourdomain.com";

// STATIC ROUTES (from App.jsx)
const staticRoutes = [
  "/",
  "/shop",
  "/cart",
  "/forum",
  "/forum/new",
  "/find-doctors",
  "/ingredients",
  "/profile",
  "/profile/dashboard",
  "/profile/appointments",
  "/profile/wallet",
  "/profile/chats",
  "/profile/orders",
  "/profile/saved-posts",
];

// BUILD URL ARRAY
const urls = [
  ...staticRoutes.map((route) => ({
    loc: `${baseUrl}${route}`,
  })),

  // Dynamic Product URLs
  ...products.map((p) => ({
    loc: `${baseUrl}/product/${p.id}`,
  })),

  // Dynamic Ingredient URLs
  ...ingredients.map((i) => ({
    loc: `${baseUrl}/ingredients/${i.id}`,
  })),

  // Dynamic Forum Questions
  ...sampleQuestions.map((q) => ({
    loc: `${baseUrl}/forum/${q.id}`,
  })),
];

// XML Content
const xml = `
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `
  <url>
    <loc>${u.loc}</loc>
  </url>
  `
  )
  .join("")}
</urlset>
`.trim();

// Save the sitemap into /public
const savePath = path.resolve("public/sitemap.xml");
fs.writeFileSync(savePath, xml);

console.log("✔ SUCCESS: Sitemap generated → public/sitemap.xml");
