const VALIDATOR_URL =
  "https://yhxzjyykdsfkdrmdxgho.supabase.co/functions/v1/application-task";

export async function testAPI(email: string, apiUrl: string) {
  try {
    const requestUrl = `${VALIDATOR_URL}?url=${encodeURIComponent(apiUrl)}&email=${encodeURIComponent(email)}`;

    const response = await fetch(requestUrl);

    const data = await response.json();

    return data;
  } catch (error) {
    return { error: (error as Error).message };
  }
}