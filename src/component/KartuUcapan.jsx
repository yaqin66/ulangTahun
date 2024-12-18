import React, { useState, useEffect } from 'react';

const KartuUcapan = () => {
    const texts = [
        `Aku bersyukur setiap hari karena kamu ada di hidupku. Kamu adalah anugerah terindah yang pernah aku miliki.`,
        `Kamu adalah alasan di balik senyumku setiap pagi dan kedamaian dalam setiap malamku. Aku cinta kamu, lebih dari kata-kata yang bisa ungkapkan.`,
        `Aku tidak membutuhkan alasan untuk mencintaimu. Semua tentangmu adalah sesuatu yang membuat hidupku lebih berarti.`,
        `Cintaku untukmu tidak mengenal batas waktu. Kamu adalah rumahku, tempat hatiku selalu ingin kembali.`,
        `Bersamamu, hidupku terasa lebih berwarna dan penuh makna. Terima kasih telah menjadi bagian terpenting dalam hidupku.`,
        `Aku ingin kamu tahu, bahwa tidak ada satu hari pun aku lewatkan tanpa mencintaimu lebih dari sebelumnya.`,
        `Kamu bukan hanya orang yang aku cintai, tapi juga sahabat terbaikku dan pendukung terhebat dalam hidupku.`,
        `Di setiap detik, di setiap tarikan napas, kamu adalah yang selalu aku pikirkan. Kamu adalah segalanya bagiku.`,
        `Aku merasa beruntung karena Tuhan mengirimkan kamu ke hidupku. Terima kasih sudah melengkapi aku dengan sempurna.`,
        `Cinta ini lebih dari sekadar kata-kata; ini adalah janji yang aku pegang erat, untuk selalu ada di sampingmu, apa pun yang terjadi.`,
        `Setiap kali aku melihatmu, aku merasa dunia ini jauh lebih indah. Kamu adalah keajaiban yang membuat segalanya terasa benar.`,
        `Aku mencintaimu tidak hanya karena siapa kamu, tapi karena siapa aku ketika bersamamu.`,
        `Terima kasih telah menjadi tempat aku menemukan ketenangan, kebahagiaan, dan cinta yang tak tergantikan.`
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
            <h1 className="text-4xl md:text-xl font-bold mb-6">Yang aku jujur ga pinter rangkai kata-kata cinta buat kamu, tapi aku nyari di google yang menurut aku mengambarkan kamu banget:)</h1>
            <p className="text-lg md:text-4xl font-semibold leading-relaxed">
                {displayedText}
            </p>
        </div>
    );
};

export default KartuUcapan;
