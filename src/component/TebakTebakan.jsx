import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const TebakTebakan = () => {
  const questions = [
    { question: "Apa yang selalu basah meskipun selalu mengeringkan orang?", answer: "Handuk" },
    { question: "Aku ada di pagi hari, tapi hilang saat siang. Apa aku?", answer: "Embun" },
    // { question: "Aku punya kaki empat tapi tidak bisa berjalan. Apa aku?", answer: "Meja" },
    { question: "Aku memiliki banyak lubang, tetapi tetap bisa menahan air. Apa aku?", answer: "Spons" },
{ question: "Semakin aku digunakan, semakin aku kecil. Apa aku?", answer: "Sabun" },
{ question: "Aku bisa terbang tanpa sayap dan memiliki suara yang keras. Apa aku?", answer: "Pesawat" },
{ question: "Aku berwarna putih, tapi jika kotor, bisa berubah hitam. Apa aku?", answer: "Kertas" },
{ question: "Aku memiliki banyak jarum, tetapi tidak bisa menyakiti. Apa aku?", answer: "Jam" },
{ question: "Aku selalu bersama malam, tapi menghilang saat matahari terbenam. Apa aku?", answer: "Bintang" },
{ question: "Aku bisa dimakan, tetapi tidak bisa diminum. Apa aku?", answer: "Roti" },
{ question: "Aku tidak punya hati, tetapi bisa berdetak. Apa aku?", answer: "Jam tangan" },
{ question: "Aku bisa dipanjangkan tetapi tidak pernah tumbuh. Apa aku?", answer: "Jalur kereta" },
{ question: "Aku bersembunyi di balik awan, tapi selalu muncul saat hujan tiba. Apa aku?", answer: "Pelangi" },
{ question: "Aku bisa membeku di musim dingin dan meleleh di musim panas. Apa aku?", answer: "Es" },
{ question: "Aku selalu berjalan tetapi tidak pernah pergi ke mana-mana. Apa aku?", answer: "Jam" },
{ question: "Aku bisa mengisi perut tapi tidak bisa berbicara. Apa aku?", answer: "Makanan" },
{ question: "Aku kecil ketika muda, tetapi besar seiring waktu. Apa aku?", answer: "Lilinya" },
{ question: "Aku selalu berputar tanpa berhenti. Apa aku?", answer: "Roda" },
{ question: "Aku tidak memiliki rumah, tetapi selalu mengikuti seseorang. Apa aku?", answer: "Bayangan" },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [feedback, setFeedback] = useState("");
  const [answeredCorrectly, setAnsweredCorrectly] = useState(0);

  const navigate = useNavigate();

  const handleAnswer = () => {
    if (userAnswer.toLowerCase() === questions[currentQuestion].answer.toLowerCase()) {
      setFeedback("Benar! 🎉");
      setAnsweredCorrectly((prev) => prev + 1);
    } else {
      setFeedback("Salah! Coba lagi.");
    }
  };

  const nextQuestion = () => {
    setFeedback("");
    setUserAnswer("");
    setCurrentQuestion((prev) => (prev + 1) % questions.length);
  };

  const openNewTab = () => {
    navigate("/kartu-ucapan"); // Navigasi ke halaman kartu ucapan
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-green-500 flex flex-col items-center justify-center text-white">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Tebak-Tebakan</h1>
        {answeredCorrectly < questions.length ? (
          <>
            <p className="text-lg md:text-xl mb-8">{questions[currentQuestion].question}</p>
            <input
              type="text"
              className="p-2 rounded-md text-black mb-4 mr-4"
              placeholder="Jawaban kamu"
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
            />
            <button
              className="bg-yellow-500 px-4 py-2 rounded-md text-black font-semibold hover:bg-yellow-400"
              onClick={handleAnswer}
            >
              Cek Jawaban
            </button>
            <p className="mt-4 text-xl">{feedback}</p>
            {feedback === "Benar! 🎉" && (
              <button
                className="mt-4 bg-purple-500 px-4 py-2 rounded-md text-black font-semibold hover:bg-purple-400"
                onClick={nextQuestion}
              >
                Soal Berikutnya
              </button>
            )}
            <p className="mt-4 text-lg">
              Soal yang berhasil dijawab: {answeredCorrectly} / {questions.length}
            </p>
          </>
        ) : (
          <>
            <h2 className="text-2xl font-semibold mb-4">Semua pertanyaan berhasil dijawab! 🎉</h2>
            <button
              className="bg-red-500 px-4 py-2 rounded-md text-black font-semibold hover:bg-red-400"
              onClick={openNewTab}
            >
              Buka Tab Baru
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default TebakTebakan;