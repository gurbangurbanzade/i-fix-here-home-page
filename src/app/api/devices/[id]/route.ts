import { NextResponse } from "next/server";
import { deviceElements } from "./../route";

export async function GET(
  req: Request,
  { params }: { params: { id: number } }
) {
  const { id } = params;

  let device = deviceElements.find((elem) => elem.id == id);

  if (!device) {
    return NextResponse.json("element tapilmadi");
  }

  return NextResponse.json(device);
}
