import "./App.css";

import VerificationStatus from "./components/VerificationStatus/VerificationStatus";

const ExampleList = ({ children }) => {
  return (
    <section className="example-list">
      <div className="container">{children}</div>
    </section>
  );
};
const Example = ({ children }) => {
  return <article className="example">{children}</article>;
};
const ExampleHeader = ({ children }) => (
  <div className="example__header">{children}</div>
);
const ExampleContent = ({ children }) => (
  <div className="example__content">{children}</div>
);

const ExampleSection = ({ title, children }) => {
  return (
    <div className="example__content-section">
      <span>{title}</span>
      <div>{children}</div>
    </div>
  );
};
const ExampleStack = ({ children }) => {
  return <div className="example__stack">{children}</div>;
};

function App() {
  return (
    <div className="App">
      <main>
        <h1>Examples of Components</h1>

        <ExampleList>
          <Example>
            <ExampleHeader>
              <h2>Verification Status</h2>
            </ExampleHeader>

            <ExampleContent>
              <h3>Base</h3>

              <ExampleStack>
                <ExampleSection title="Partially verified">
                  <VerificationStatus status="partial" />
                </ExampleSection>
                <ExampleSection title="Fully verified">
                  <VerificationStatus status="full" />
                </ExampleSection>
              </ExampleStack>

              <h3>Sizes </h3>
              <ExampleSection title="md( default )">
                <VerificationStatus status="partial" size="md" />
                <VerificationStatus status="full" size="md" />
              </ExampleSection>
              <ExampleSection title="sm">
                <VerificationStatus status="partial" size="sm" />
                <VerificationStatus status="full" size="sm" />
              </ExampleSection>
            </ExampleContent>
          </Example>
        </ExampleList>
      </main>
    </div>
  );
}

export default App;
