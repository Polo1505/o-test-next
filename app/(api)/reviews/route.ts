import { NextResponse } from "next/server";
import data from "@/app/lib/placeholder-data"

export async function GET() {
    return NextResponse.json({
        items: data.reviews
    })
}