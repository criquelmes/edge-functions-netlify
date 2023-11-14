import type { Handler, HandlerEvent, HandlerContext } from "@netlify/functions";

const handler: Handler = async (
  event: HandlerEvent,
  context: HandlerContext
) => {
  console.log("Hola mundo desde los logs de variables");

  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Hello World!" }),
    headers: {
      "Content-Type": "application/json",
    },
  };
};

export { handler };
