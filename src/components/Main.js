export default function Main({ number, content, card }) {
  return (
    <main className={card ? "sub" : "main"}>
      <h2>{number}</h2>
      <p>{content}</p>
    </main>
  );
}

Main.defaultProps = {
  number: "x",
  content: "Murray",
};
