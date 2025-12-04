import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/database/db";
import blogSchema from "@/database/blogSchema";

type IParams = {
  params: {
    slug: string;
  };
};
// test using http://localhost:3000/api/blogs/about/comment
export async function POST(req: NextRequest, { params }: IParams) {
  try {
    await connectDB();
    const body = await req.json();
    const { slug: BlogSlug } = await params;
    // validate body
    if (!body || !body.name || !body.comment) {
      return NextResponse.json("Missing fields", { status: 400 });
    }

    // push comment object to document
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
      { new: true } // return updated document
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
