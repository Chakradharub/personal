import {Link} from "react-router-dom";
import {useState, useEffect} from 'react';

export function PersonalPage({ selectedName }) {
  return (
    <div>
      <div>
        <Link to="/professional">
          Switch to Professional
        </Link>
      </div>

      <TypingText text={`Hello ${selectedName || "Guest"}`}/>

      <div>
        <h2>Personal Life</h2>
      </div>
    </div>
  );
}

function TypingText({ text }) {
  const [displayedText, setDisplayedText] =
    useState("");

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setDisplayedText(
        text.slice(0, index + 1)
      );

      index++;

      if (index >= text.length) {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [text]);

  return (
    <h1>
      {displayedText}
    </h1>
  );
}
