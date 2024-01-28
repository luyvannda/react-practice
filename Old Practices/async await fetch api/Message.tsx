import React from "react";

interface MessageProps {
  count: number;
}

export default function Message(props: MessageProps) {
  return (
    <div>
      <p>Hello this is TypeScript Message</p>

      <p className="">
        You have read <strong>{props.count}</strong> pieces of advice
      </p>
    </div>
  );
}
