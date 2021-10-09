export default function Section({ title, children }) {
  return (
    <section className="App">
      <h1 className="title">{title}</h1>
      {children}
    </section>
  );
}
