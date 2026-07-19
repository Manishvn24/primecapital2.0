const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const CHAT_ID = process.env.TELEGRAM_CHAT_ID;

export async function sendTelegramNotification(data) {
  const message = `
🚀 <b>VN PRIME CAPITAL</b>

━━━━━━━━━━━━━━━━━━

👤 <b>Name</b>
${data.name}

📞 <b>Mobile</b>
${data.mobile}

💼 <b>Occupation</b>
${data.occupation}

🫰 <b>Loan Type </b>
${data.LoanType}

🏠 <b>City </b>
${data.city}

🏠 <b>Amount </b>
${data.amount}
━━━━━━━━━━━━━━━━━━

🌐 <b>Source</b>
Website - Best Offer

⚡ <b>Status</b>
Lead Submitted
`;

  const response = await fetch(
    `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        parse_mode: "HTML",
        text: message,
      }),
    },
  );

  if (!response.ok) {
    throw new Error("Telegram notification failed.");
  }

  return response.json();
}
