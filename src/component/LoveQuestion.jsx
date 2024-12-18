import React, { useState } from 'react';

const LoveQuestion = () => {
  const [buttonPosition, setButtonPosition] = useState({ top: "50%", left: "50%" });
  const [answer, setAnswer] = useState("");

  const moveButton = () => {
    const randomTop = Math.random() * 80 + 10; // Generate random top position
    const randomLeft = Math.random() * 80 + 10; // Generate random left position
    setButtonPosition({ top: `${randomTop}%`, left: `${randomLeft}%` });
  };

  const handleYes = () => {
    setAnswer("Aku juga mencintaimu! ❤️");
  };

  const handleNoHover = () => {
    moveButton();
  };

  const handleNoClick = () => {
    moveButton();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-500 to-red-500 flex flex-col items-center justify-center text-white relative overflow-hidden">
      <h1 className="text-4xl font-bold mb-8 text-center -translate-y-2">Apakah kamu mencintaiku? ❤️</h1>
      <button
        className="bg-green-500 px-6 py-3 rounded-md text-xl font-semibold hover:bg-green-400 translate-y-6"
        onClick={handleYes}
      >
        Iya
      </button>
      <button
        className="bg-blue-500 px-6 py-3 rounded-md text-xl font-semibold hover:bg-blue-400 absolute"
        style={{
          position: "absolute",
          top: buttonPosition.top,
          left: buttonPosition.left,
          transform: "translate(-50%, -50%)",
        }}
        onMouseEnter={handleNoHover}
        onClick={handleNoClick}
      >
        Tidak
      </button>
      {answer && (
        <p className="mt-8 text-2xl font-semibold text-center">{answer}</p>
      )}
    </div>
  );
};

export default LoveQuestion;
