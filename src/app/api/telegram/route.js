import { NextResponse } from "next/server";
import { sendTelegramNotification } from "@/lib/telegram";

export async function POST(request) {
  try {
    const data = await request.json();

    await sendTelegramNotification(data);

    return NextResponse.json({
      success: true,
      message: "Telegram notification sent successfully.",
    });
  } catch (error) {
    console.error("Telegram Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to send Telegram notification.",
      },
      {
        status: 500,
      },
    );
  }
}
