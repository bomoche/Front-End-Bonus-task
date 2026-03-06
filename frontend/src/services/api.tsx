export const BACKEND_URL = "https://one-eleven-developer-task-backend-1.onrender.com/webhook";

export async function testAPI(word: string) {
  if (!word.trim()) return { error: "Please enter a word to sort." };

  try {
    const response = await fetch(BACKEND_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ data: word }), 
    });
    return await response.json();
  } catch (error) {
    return { error: (error as Error).message };
  }
}