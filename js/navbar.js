// menu toggle
const tombol = document.getElementById('toggle');
const navTombol = document.getElementById('navTombol');

tombol.addEventListener('click', function() {
        navTombol.classList.toggle('ganti');
});

// circle toggle
const toggle = document.getElementById('circle');
const toggleTournament = document.getElementById('tournament');

toggle.addEventListener('click', function() {
        toggle.classList.toggle('circle-toggle');
});
