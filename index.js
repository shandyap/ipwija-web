let currentIndex = 0;
    const images = document.querySelectorAll('.jumbotron-images img');
    const totalImages = images.length;

    function changeImage() {
        images[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % totalImages; // Pergi ke gambar berikutnya
        images[currentIndex].classList.add('active');
    }

    setInterval(changeImage, 5000); // Ganti gambar setiap 3 detik

    function playVideo() {
        const iframe = document.querySelector('.youtube-container iframe');
        const overlay = document.querySelector('.overlay');
        const youtubeContainer = document.querySelector('.youtube-container');
    
        // Tampilkan iframe
        iframe.style.opacity = 1; // Tampilkan iframe
        overlay.style.display = 'none'; // Sembunyikan overlay
        youtubeContainer.style.backgroundImage = 'none'; // Hilangkan gambar latar belakang
    }
        