import Layout from "./components/Layout";

const App = () => {
  return (
    <Layout>
      <div
        data-testid="landing-page-test"
        className="text-white font-bold text-center justify-center flex"
      >
        Landing Page
      </div>
    </Layout>
  );
};

export default App;
