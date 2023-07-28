import { NextRequest, NextResponse } from "next/server";
import { revalidateTag } from "next/cache";

export async function GET(request: NextRequest) {
  const validatableTags = ["main", "itemList-items", "itemList-brand"];
  const tag = request.nextUrl.searchParams.get("tag");
  if (!tag || !validatableTags.includes(tag)) {
    return NextResponse.json({ revalidated: false, status: 400 });
  }
  revalidateTag(tag);
  return NextResponse.json({ revalidated: true, now: Date.now() });
}
