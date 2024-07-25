import React, { useState, useEffect, useRef} from 'react';
import '../styles/TypeTutor.css';

// Define time limit for the type tutor session
const time_limit = 60;

// Categorised quotes to be used in type tutor session and sorted by respective difficulty
const quotesArray = {
    Beginner: [
        "Typing is fun. Practice makes perfect. Slow and steady wins the race.",
        "a b c d e f g h i j k l m n o p q r s t u v w x y z",
        "1 2 3 4 5 6 7 8 9 10"
    ],
    Easy: [
        "Practice typing daily to improve your skills. Remember to sit up straight and keep your fingers on the home row. Enjoy the process and have fun.",
        "Typing can be a fun and useful skill. Focus on your posture and hand placement. With regular practice, you will see improvement. Keep it up and stay motivated.",
        "Typing is a valuable skill that helps in many areas of life. Start slowly and focus on accuracy. With consistent practice, your speed will improve."
    ],
    Medium: [
        "Consistent practice and proper technique are keys to becoming a proficient typist. Focus on accuracy first, and then gradually increase your speed. Remember, the journey to mastery is a marathon, not a sprint. Include numbers like 1 and 2.",
        "Improving your typing speed requires patience and dedication. Start with simple texts and gradually increase complexity. Numbers such as 3 and 4 can be helpful. With time, your skills will grow.",
        "Typing efficiently means using all your fingers correctly. Practice regularly and keep track of your progress. Incorporate numbers like 5 and 6. Aim for accuracy, and speed will follow naturally."
    ],
    Hard: [
        "To achieve high typing speeds, it's crucial to maintain proper posture and hand placement. Practice touch typing without looking at the keyboard. Challenge yourself with complex texts! Accuracy and speed will improve over time, with dedication. Numbers like 5 and 7 are important. Symbols such as ! and , add complexity.",
        "Typing quickly requires muscle memory and consistent practice. Ensure your hands are positioned correctly. Incorporate complex texts! Accuracy is key. Speed follows with time and effort. Numbers like 8 and 9 are useful. Use symbols such as @ and %.",
        "Mastering typing speed involves dedication and the right technique. Keep practicing regularly and focus on improvement. Numbers such as 3 and 6 should be included. Utilize symbols like ? and $. Consistency is key to success."
    ],
    Expert: [
        "In professional typing, speed and accuracy are paramount. Master advanced techniques like finger rolling, and develop muscle memory for common word patterns. Continuous practice with diverse, complex texts is essential. Numbers (1, 2, 3, 4, 5) and symbols (!, ., ,, ?, @, $, %, &, *) are part of the challenge!",
        "Advanced typists understand the importance of precision. Practice makes perfect. Numbers (6, 7, 8, 9, 10) and symbols (!, ., ,, ?, #, $, ^, *, +) are essential. Incorporate them into your routine for better results.",
        "Professional typists aim for high accuracy and speed. Regular practice with complex texts helps. Numbers (11, 12, 13, 14, 15) and symbols (!, ., ,, :, ;, -, @, #, &, %) challenge your skills. Achieving excellence requires effort."
    ]
};

// Main TypeTutor component and state variables for the game
const TypeTutor = () => {
    // State variables for TypeTutor game
    const [difficulty, setDifficulty] = useState('Beginner');
    const [timeLeft, setTimeLeft] = useState(time_limit);
    const [timeElapsed, setTimeElapsed] = useState(0);
    const [totalErrors, setTotalErrors] = useState(0);
    const [errors, setErrors] = useState(0);
    const [accuracy, setAccuracy] = useState(100);
    const [characterTyped, setCharacterTyped] = useState(0);
    const [currentQuote, setCurrentQuote] = useState('');
    const [timer, setTimer] = useState(null);
    const [cpm, setCpm] = useState(0);
    const [wpm, setWpm] = useState(0);
    const inputAreaRef = useRef(null);

// Add effect to update quote to respective difficulty assigned when user changes difficulty
useEffect(() => {
    updateQuote();
}, [difficulty]);

// Add effect to finish the typetutor game session once the timer runs out
useEffect(() => {
    if (timeLeft === 0) {
        finishGame();
    }
}, [timeLeft]);

// Function to update the quote for difficulty based on random quote from each difficulty
const updateQuote = () => {
    const quotes = quotesArray[difficulty];
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setCurrentQuote(quotes[randomIndex]);
};

// Function to process text input by user during session
const processCurrentText = (typedText) => {
    const quoteSpanArray = currentQuote.split('');
    let newErrors = 0;

    // Calculate number of errors made by user during session
    quoteSpanArray.forEach((char, index) => {
        const typedChar = typedText[index];
        if (typedChar !== char) {
            newErrors++;
        }
    });

    setErrors(newErrors);
    setCharactersTyped(typedText.length);

    // Calculate accuracy of user input during session
    const correctCharacters = characterTyped - (totalErrors + newErrors);
    const accuracyVal = (correctCharacters / characterTyped) * 100;
    setAccuracy(Math.round(accuracyVal));

    // Reset text to update quote if user input exceeds quote length 
    if (typedText.length === currentQuote.length) {
        updateQuote();
        setTotalErrors(totalErrors + newErrors);
        setTypedText('');
    }
};
 
































};
