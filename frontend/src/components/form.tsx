import { useState } from "react";
import { testAPI } from "../services/api";

export default function Form() {
  const [email, setEmail] = useState("");
  const [url, setUrl] = useState("");
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email.trim() || !url.trim()) return;

    setLoading(true);
    const result = await testAPI(email, url);
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
            required
          />
        </div>

        <div className="field">
          <label className="field-label">API Endpoint</label>
          <input
            className="field-input"
            type="url"
            placeholder="https://your-api.com/webhook"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            required
          />
        </div>

        <button className="submit-btn" type="submit" disabled={loading}>
          {loading ? "Validating..." : "Run Validation"}
        </button>

      </form>

      {response && (
        <div className="response">
          <div className="response-head">
            Validation Result
          </div>

          <div className="response-body">
            {Object.entries(response).map(([key, value]) => (
              <div className="response-row" key={key}>
                <span className="response-key">{key}</span>
                <span className="response-val">{String(value)}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}