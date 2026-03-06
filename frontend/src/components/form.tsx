import { useState } from "react";
import { testAPI } from "../services/api";

export default function Form() {
  const [email, setEmail] = useState("");
  const [word, setWord] = useState("");
  const [response, setResponse] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!word.trim()) return alert("Please enter a word to sort.");

    setLoading(true);
    setResponse(null);

    const result = await testAPI(word); 
    setResponse(result);
    setLoading(false);
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <div className="field">
          <label className="field-label">Email address</label>
          <input
            className="field-input"
            type="email"
            placeholder="you@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="field">
          <label className="field-label">Word to sort</label>
          <input
            className="field-input"
            type="text"
            placeholder="Enter a word, e.g., hello"
            value={word}
            onChange={(e) => setWord(e.target.value)}
            required
          />
        </div>

        <button className="submit-btn" type="submit" disabled={loading}>
          {loading ? "Sorting..." : "Sort Word"}
        </button>
      </form>

      {response && (
        <div className="response">
          <div className="response-head">Response</div>
          <div className="response-body">
            {Object.entries(response).map(([key, value]) => (
              <div className="response-row" key={key}>
                <span className="response-key">{key}</span>
                <span className="response-val">{Array.isArray(value) ? value.join(", ") : String(value)}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}