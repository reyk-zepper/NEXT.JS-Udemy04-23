export default function Main({ number, content }) {
  return (
    <main className="main">
      <h2>{number}</h2>
      <p>{content}</p>
    </main>
  );
}

Main.defaultProps = {
  number: "x",
  content: "Murray",
};
