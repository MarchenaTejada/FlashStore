function showSlide(index) {
    const slides = document.querySelectorAll('.slider input');
    const checkedInput = document.querySelector('.slider input:checked').id;
    let id = parseInt(checkedInput.slice(-1));
    id += index;
    if (id > slides.length) id = 1;
    if (id < 1) id = slides.length;
    slides[id - 1].checked = true;
}

function nextSlide() {
    showSlide(1);
}

function prevSlide() {
    showSlide(-1);
}