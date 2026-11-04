import { QueryClient } from "@tanstack/react-query";
import { createRouter, rootRouteId } from "@tanstack/react-router";
import { describe, expect, it } from "vitest";

import { routeTree } from "@/routeTree.gen";
import { PRACTICE } from "@/components/site/data";

// Match routes without running loaders or rendering: loaders may need a server or
// network the test run lacks, and jsdom never loads the stylesheets React waits on.
describe("App routing", () => {
  it("matches a page for / instead of falling back to not found", () => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });

    const matches = router.matchRoutes("/");

    expect(matches.at(-1)?.routeId).not.toBe(rootRouteId);
  });

  it("matches every practice area slug on its own page", () => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });

    for (const area of PRACTICE) {
      const matches = router.matchRoutes(`/practice-areas/${area.slug}`);
      const last = matches.at(-1);
      expect(last?.routeId).toBe("/practice-areas/$slug");
      expect(last?.pathname).toBe(`/practice-areas/${area.slug}`);
    }
  });

  it("still serves the practice areas listing at /practice-areas", () => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });

    const matches = router.matchRoutes("/practice-areas");
    const last = matches.at(-1);

    expect(last?.routeId).not.toBe(rootRouteId);
    expect(last?.pathname).toBe("/practice-areas/");
  });
});
