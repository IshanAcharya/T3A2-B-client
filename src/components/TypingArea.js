import React from 'react';
import '../styles/TypingArea.css';

const TypingArea = ({ quote, typedText, onTyping, inputRef }) => {
  return (
    <div className="typing-area">
      <div className="quote">
        {quote.split('').map((char, index) => (
          <span key={index} className={`char ${typedText[index] === char ? 'correct_char' : typedText[index] ? 'incorrect_char' : ''}`}>
            {char}
          </span>
        ))}
      </div>
      <textarea
        ref={inputRef}
        className="input_area"
        value={typedText}
        onChange={(e) => onTyping(e.target.value)}
        placeholder="Start typing here..."
      />
    </div>
  );
};


export default TypingArea;