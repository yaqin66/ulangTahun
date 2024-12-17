import React, { useState, useEffect } from 'react';

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({});
  const [isCountdownComplete, setIsCountdownComplete] = useState(false);

  useEffect(() => {
    const targetDate = new Date("2024-12-19T00:00:00");
    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(interval);
        setIsCountdownComplete(true);
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / (1000 * 60)) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (isCountdownComplete) {
    return (
      <div className="h-screen bg-gradient-to-br from-purple-500 to-pink-500 flex flex-col items-center justify-center text-white px-4">
        <h1 className="text-2xl md:text-3xl font-bold text-center mb-6">Selamat Ulang Tahun, Cintaku 💕</h1>
        <p className="max-w-2xl text-lg md:text-xl text-center leading-relaxed">
          Hampir empat tahun sudah kita bersama. Empat tahun penuh cerita—tawa, air mata, perjuangan, dan cinta
          yang membuatku semakin yakin bahwa kamulah rumahku. Di hari istimewamu ini, aku ingin kamu tahu betapa
          berartinya kamu untukku. Kamu bukan hanya seseorang yang aku cintai, tapi juga sahabat, pendengar terbaik,
          dan alasan di balik senyumku setiap hari. Terima kasih telah menerima aku apa adanya, dengan semua kelebihan
          dan kekuranganku. Aku berdoa semoga kamu selalu diberikan kebahagiaan, kesehatan, dan kekuatan untuk
          meraih semua yang kamu impikan. Apa pun yang terjadi, aku akan selalu ada di sampingmu—mendukungmu,
          menggenggam tanganmu, dan mencintaimu tanpa batas waktu. Selamat bertambah usia, sayang. Aku sayang kamu,
          lebih dari kata-kata yang pernah bisa aku ungkapkan. 💕
        </p>
      </div>
    );
  }

  return (
    <div className="h-screen bg-gradient-to-br from-purple-500 to-pink-500 flex flex-col items-center justify-center text-white">
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Countdown !!!</h1>
        <div className="flex space-x-4 text-xl md:text-3xl font-semibold justify-center">
          <div className="text-center">
            <p>{timeLeft.days || 0}</p>
            <p>Hari</p>
          </div>
          <div className="text-center">
            <p>{timeLeft.hours || 0}</p>
            <p>Jam</p>
          </div>
          <div className="text-center">
            <p>{timeLeft.minutes || 0}</p>
            <p>Menit</p>
          </div>
          <div className="text-center">
            <p>{timeLeft.seconds || 0}</p>
            <p>Detik</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Countdown;