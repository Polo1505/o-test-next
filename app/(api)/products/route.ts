import { NextRequest, NextResponse } from 'next/server';
import data from "@/app/lib/placeholder-data"

export async function GET(req: NextRequest) {
    const page = req.nextUrl.searchParams.get('page') as string;
    const amount = parseInt(req.nextUrl.searchParams.get('page_size') as string) || 3; // default to 3 if amount is not provided

    const startIndex = (page ? parseInt(page) : 1) * amount - amount;
    const endIndex = startIndex + amount;
      return NextResponse.json({
        page: page,
        amount: amount,
        total: data.products.length,
        items: data.products.slice(startIndex, endIndex)
    })
  }