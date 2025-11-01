import React, { useState, useEffect } from "react";
import "../App.css"; // or wherever you put your CSS

const TextType = ({
  text = [],
  typingSpeed = 100,
  pauseDuration = 1000,
  showCursor = true,
  cursorCharacter = "|",
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout;

    const handleTyping = () => {
      const currentText = text[currentIndex];
      if (!isDeleting) {
        setDisplayText(currentText.substring(0, displayText.length + 1));
        if (displayText === currentText) {
          timeout = setTimeout(() => setIsDeleting(true), pauseDuration);
        } else {
          timeout = setTimeout(handleTyping, typingSpeed);
        }
      } else {
        setDisplayText(currentText.substring(0, displayText.length - 1));
        if (displayText === "") {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % text.length);
        }
        timeout = setTimeout(handleTyping, typingSpeed / 2);
      }
    };

    timeout = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, text, currentIndex, typingSpeed, pauseDuration]);

  return (
    <span className="text-type">
      {displayText}
      {showCursor && (
        <span className="text-type__cursor">{cursorCharacter}</span>
      )}
    </span>
  );
};

export default TextType;
