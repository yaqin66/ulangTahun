import React, { useState, useEffect } from 'react';

const KartuUcapan = () => {
    const texts = [
        `Selamat Ulang Tahun! 🎂 Semoga di hari spesialmu ini, segala impianmu segera terwujud.`,
        `Happy Birthday, Cinta! 🌟 Terima kasih telah menemani hari-hariku dengan penuh cinta.`,
        `Selamat bertambah usia, Sayangku! 🎊 Semoga kebahagiaan selalu menyertaimu.`,
        `Selamat Ulang Tahun! 🎉 Semoga hari ini penuh kebahagiaan dan mimpi indah yang menjadi kenyataan.`,
        `Happy Birthday! 🌸 Terima kasih telah menjadi cahaya dalam setiap langkah hidupku.`,
        `Selamat bertambah usia, Sayang! 💖 Semoga setiap harimu dipenuhi cinta dan kebahagiaan.`,
        `Di hari spesial ini, aku hanya ingin mengucapkan: Selamat Ulang Tahun! 🎂 Semoga impianmu selalu terjaga dan tercapai.`,
        `Selamat Ulang Tahun, Cintaku! 🌟 Semoga tahun ini membawa kebahagiaan yang melimpah dan kesehatan selalu menyertaimu.`,
        `Happy Birthday! 🎊 Kamu adalah anugerah terindah dalam hidupku. Terima kasih telah hadir di hidupku.`,
        `Selamat bertambah usia! 🌷 Semoga setiap detik di tahun yang baru ini membawa kebahagiaan dan petualangan yang luar biasa.`,
        `Selamat Ulang Tahun! 💫 Semoga setiap impianmu menjadi kenyataan dan setiap langkahmu selalu diberkahi.`,
        `Happy Birthday! 💛 Semoga senyumanmu selalu indah dan hari-harimu selalu dipenuhi cinta dan kebahagiaan.`,
        `Selamat bertambah usia, Sayang! 🌼 Terima kasih telah menjadi inspirasi dan semangat dalam setiap hari-hariku.`,
    ];

    const [displayedText, setDisplayedText] = useState(""); // Teks yang sedang ditampilkan
    const [randomText] = useState(
        texts[Math.floor(Math.random() * texts.length)].replace(/\s+/g, " ").trim() // Bersihkan spasi
    );

    const typingSpeed = 50; // Kecepatan mengetik (ms per karakter)

    useEffect(() => {
        let currentIndex = 0;

        const typingInterval = setInterval(() => {
            if (currentIndex <= randomText.length) {
                setDisplayedText(randomText.slice(0, currentIndex)); // Gunakan slice
                currentIndex++;
            } else {
                clearInterval(typingInterval);
            }
        }, typingSpeed);

        return () => clearInterval(typingInterval);
    }, [randomText]);

    return (
        <div className="min-h-screen bg-gradient-to-br from-yellow-400 to-orange-500 flex flex-col items-center justify-center text-white text-center px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Selamat Ulang Tahun 🎉</h1>
            <p className="text-lg md:text-xl font-semibold leading-relaxed">
                {displayedText}
            </p>
        </div>
    );
};

export default KartuUcapan;
