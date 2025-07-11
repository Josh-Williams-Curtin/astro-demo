// Outputs: /builtwith.json
export function GET({ params, request }: { params: any; request: any }) {
  return new Response(
    JSON.stringify({
      name: "Astro",
      url: "https://astro.build/",
    })
  );
}
