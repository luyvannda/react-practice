import questions from "./questions";

export default function FlashCards() {
  const questionElements = questions.map((question) => (
    <div key={question.id}>
      <p>{question.question}</p>
    </div>
  ));
  return <div className="flashcards">{questionElements}</div>;
}
