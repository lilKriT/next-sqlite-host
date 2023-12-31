import { usePrisma } from "@/lib/usePrisma";
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const tasks = usePrisma.task.findMany();
  return NextResponse.json(tasks);
}

export async function DELETE(
  request: NextRequest,
  { params: { id } }: { params: { id: number } }
) {
  const task = await usePrisma.task.delete({ where: { id: +id } });
  revalidatePath("/");
  return NextResponse.json({ task });
}
