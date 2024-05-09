// src/app/api/devices/route.ts

import { NextApiResponse, NextApiRequest } from "next";
import { NextResponse } from "next/server";

export const deviceElements = [
  { id: 1, src: "/images/devices/phone.svg", title: "Phones" },
  { id: 2, src: "/images/devices/tablet.svg", title: "Tablets" },
  { id: 3, src: "/images/devices/laptop.svg", title: "Laptop" },
  { id: 4, src: "/images/devices/smartwatch.svg", title: "Smartwatch" },
  { id: 5, src: "/images/devices/gameConsole.svg", title: "Game Console" },
];

export async function GET() {
  return NextResponse.json(deviceElements);
}
