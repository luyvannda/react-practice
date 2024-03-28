import { useState } from "react";
import questions from "./questions";

export default function FlashCards() {
  const [selectedId, setSelectedId] = useState<number | null>(7336);

  const handleClick = (id: number | null) => {
    setSelectedId(id !== selectedId ? id : null);
  };

  const questionElements = questions.map((question) => (
    <div
      key={question.id}
      onClick={() => handleClick(question.id)}
      className={question.id === selectedId ? "selected" : ""}
    >
      <p>{question.id === selectedId ? question.answer : question.question}</p>
    </div>
  ));
  return <div className="flashcards">{questionElements}</div>;
}
