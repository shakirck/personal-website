import * as contentful from "contentful";

export async function GET() {
  try {
    const CONTENTFUL_SPACE_ID = process.env.CONTENTFUL_SPACE_ID;
    const CONTENTFUL_ACCESS_TOKEN = process.env.CONTENTFUL_ACCESS_TOKEN;
    const client = contentful.createClient({
      space: CONTENTFUL_SPACE_ID || "",
      accessToken: CONTENTFUL_ACCESS_TOKEN || "",
    });
    const data = await client.getAsset("3Y7zLT4VYnlKxoIYOWpKBf");
    const resumeUrl = data?.fields?.file?.url ?? "";
     const returnData = {
      url:resumeUrl,
      
     }
    return new Response(JSON.stringify(returnData), {status: 200});
  } catch (error) {
    console.log("error", error);
    return new Response("Unable to fetch resume", { status: 500 });
  }
}
