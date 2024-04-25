document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search');
    searchInput.focus();
});

document.addEventListener('DOMContentLoaded', () => {
    const photoGallery = document.querySelector('.photo-gallery');
    const searchInput = document.getElementById('search');
    const searchBtn = document.querySelector('.searchBtn');
    const crossBtn = document.querySelector('.crossBtn');

    fetch('https://api.unsplash.com/photos/random?count=10&client_id=RgRs5yMcrOQaKtYRv5teMQbw1Dv7YCwdJGNh5scPxdQ')
        .then(response => response.json())
        .then(data => {
            data.forEach(photo => {
                const img = document.createElement('img');
                img.src = photo.urls.regular;
                img.alt = photo;
                img.classList.add('gallery-image');
                photoGallery.appendChild(img);
            });
        })
        .catch(error => console.error(error));

        searchInput.addEventListener('keydown', function(event) {
            if (event.key === 'Enter') {
                if (searchInput.value.trim() !== '') {
                    searchPhotos();
                }
                event.preventDefault();
            }
        });

    searchBtn.addEventListener('click', function () {
        if (searchInput.value.trim() === '') {
            searchInput.focus();
            return;
        }
        searchPhotos();
    });

    crossBtn.addEventListener('click', function() {
        searchInput.value = '';
        searchInput.placeholder = 'Search';
        searchInput.focus();
        if (searchInput.value.trim() === '') {
            return;
        }
        clearInput();
    });

    async function searchPhotos() {
        const query = searchInput.value;
        const apiKey = 'RgRs5yMcrOQaKtYRv5teMQbw1Dv7YCwdJGNh5scPxdQ';
        const apiUrl = `https://api.unsplash.com/search/photos?query=${query}&client_id=${apiKey}`;

        try {
            const response = await fetch(apiUrl);
            const data = await response.json();
            const gallery = document.querySelector('.photo-gallery');
            gallery.innerHTML = '';

            data.results.forEach(photo => {
                const img = document.createElement('img');
                img.src = photo.urls.regular;
                img.alt = photo;
                img.classList.add('gallery-image');
                gallery.appendChild(img);
            });
        } catch (error) {
            console.error('Помилка при отриманні фотографій:', error);
        }
    }
});