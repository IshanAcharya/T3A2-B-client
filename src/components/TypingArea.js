import React from 'react';
import '../styles/TypingArea.css';

// Define TypingArea component to display quote and handle user input during typing session
const TypingArea = ({ quote, typedText, onTyping, inputRef, errors }) => {
  return (
    <div className="typing-area">
      <div className="quote-display">
        {quote.split('').map((char, index) => {
          let charClass = '';
          if (index < typedText.length) {
            if (char === ' ' && typedText[index] !== ' ') {
              charClass = 'error space-error';
            } else if (char !== typedText[index]) {
              charClass = 'error';
            } else {
              charClass = 'correct';
            }
          }
          return (
            <span key={index} className={charClass}>
              {char === ' ' ? '\u00A0' : char}
            </span>
          );
        })}
      </div>
      <textarea
        ref={inputRef}
        className="input_area"
        value={typedText}
        onChange={(e) => onTyping(e.target.value)}
        placeholder="To begin, start typing here..."
      />
    </div>
  );
};


export default TypingArea;