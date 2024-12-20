import { HttpStatusCode } from "axios";
import { NextResponse } from "next/server";
import { addMailChimpListMember } from "@/libs/mailchimp";

export async function POST(req) {
  const body = await req.json();
  const email = body.email;
  if (!email) {
    return NextResponse.json(
      { error: "Email is required" },
      { status: HttpStatusCode.BadRequest }
    );
  }

  if (email) {
    try {
      await addMailChimpListMember({
        email,
        firstName: "",
        lastName: "",
        tags: ["waitlits"],
      }); 
    
    } catch (err) {
      console.error("Error while adding email contact", err);
      return NextResponse.json(
        { error: "An error occurred" },
        { status: HttpStatusCode.InternalServerError }
      );
    }
  }

  return Response.json({ result: true });
}