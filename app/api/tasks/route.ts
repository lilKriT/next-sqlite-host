import { usePrisma } from "@/lib/usePrisma";
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const json = await request.json();

  try {
    const task = await usePrisma.task.create({ data: json });
    revalidatePath("/");
    return NextResponse.json(task);
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 400 });
  }
}
