import Form from "./components/form";

function App() {
  return (
    <div className="app-root">
      <div className="card">
        <div className="card-inner">

          <h1 className="heading">
            Validate your <br /> backend endpoint
          </h1>

          <p className="subheading">
            Enter your email and API endpoint to validate your backend using the Supabase validator.
          </p>

          <Form />

        </div>
      </div>
    </div>
  );
}

export default App;