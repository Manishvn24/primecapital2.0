const NEODOVE_ENDPOINT = process.env.NEXT_PUBLIC_NEODOVE_ENDPOINT;

export async function createOrUpdateLead(data) {
  console.log("createOrupdateLead called")
  const response = await fetch(NEODOVE_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify(data),
  });
  if (!response.ok) {
    throw new Error("Failed to submit lead.");
  }

  return response.text();
}
