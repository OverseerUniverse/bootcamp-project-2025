import { NextResponse } from "next/server";
import connectDB from "@/database/db";
import blogSchema from "@/database/blogSchema";

export async function POST(req: Request, { params }: any) {
  try {
    await connectDB();

    const body = await req.json();
    const BlogSlug = params.slug;

    if (!body || !body.name || !body.comment) {
      return NextResponse.json("Missing fields", { status: 400 });
    }

    const updatedBlog = await blogSchema.findOneAndUpdate(
      { slug: `/blog/${BlogSlug}` },
      {
        $push: {
          comments: {
            name: body.name,
            comment: body.comment,
            date: new Date(),
          },
        },
      },
      { new: true }
    );

    if (!updatedBlog) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }

    return NextResponse.json(
      { message: "Comment added", blog: updatedBlog },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json(
      { error: "Something went wrong", details: err },
      { status: 500 }
    );
  }
}
