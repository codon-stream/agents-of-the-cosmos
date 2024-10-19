import { CHROME_PRIVACY_PRESERVING_PREFETCH_PROXY } from "astro:env/server";

export const GET = async () => {
  const prefetching = {
    false: [{ user_agent: "prefetch-proxy", disallow: true }],
    true: [
      {
        user_agent: "prefetch-proxy",
        google_prefetch_proxy_eap: {
          fraction: 1.0,
        },
      },
    ],
  };

  return new Response(
    JSON.stringify(prefetching[CHROME_PRIVACY_PRESERVING_PREFETCH_PROXY]),
    {
      status: 200,
      headers: { "Content-Type": "application/trafficadvice+json" },
    }
  );
};
