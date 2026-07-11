export async function GET() {
  return new Response(JSON.stringify({ message: "API route is working" }), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
