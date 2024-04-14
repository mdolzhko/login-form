import Form from "./components/form/form";
import Header from "./components/header";
import TrialLink from "./components/trial";

function App() {
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <Header />
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <Form />
        <TrialLink />
      </div>
    </div>
  );
}

export default App;
