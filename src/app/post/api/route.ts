import Post from "@/app/config/models/Post";
import connectDB from "@/app/config/mongoose";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  await connectDB();

  try {
    const { title, description } = await req.json();
    const post = await Post.create({ title, description });
    return NextResponse.json(
      {
        data: post,
        message: "Post created successfully",
      },
      {
        status: 201,
        statusText: "Created",
      }
    );
  } catch (error) {
    console.log({ error });
    return NextResponse.json(
      {
        data: null,
        message: "Error creating post",
      },
      {
        status: 400,
        statusText: "Failed",
      }
    );
  }
}
