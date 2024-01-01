import prisma from "../../../../lib/prisma";
import { getServerSession } from "next-auth";
import options from "../../auth/[...nextauth]/options";

export async function POST(req, res) {
  try {
    const session = await getServerSession({req, res, options});

    if (!session) {
      return new Response("Unauthorized", { status: 401 });
    }

    const data = await req.json();

    const result = await prisma.guide.create({
      data: {
        title: data.title,
        content: data.content,
        description: data.description,
        authorId: data.authorId
      },
    });

    if (result) {
      return new Response
    } else {
      return new Response("Error", { status: 500 });
    }

  } catch (e) {
    console.log(e);
    return new Response(e.message, { status: 500 });
  }
}
