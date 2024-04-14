import { NextRequest, NextResponse } from 'next/server';


type CartItem = {
  id: number;
  quantity: number;
};

type ApiResponse = {
  success: number;
  error?: string;
};

export async function POST(req: NextRequest) {
  const body = await req.json();
  const cart: CartItem[] = body.cart;
  const phone = body.phone;

  if (!body.phone) {
    return NextResponse.json<ApiResponse>(
      { success: 0, error: 'Номер отсутствует' },
      { status: 400 },
    );
  }

  if (!body.cart || cart.length === 0) {
    return NextResponse.json<ApiResponse>(
      { success: 0, error: 'Товары отсутствуют' },
      { status: 400 },
    );
  }

  return NextResponse.json<ApiResponse>({ success: 1 });
}
