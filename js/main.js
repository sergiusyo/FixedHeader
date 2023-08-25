//находим хэдер и определяем его позицию
const headerEl = document.getElementById("header");

// При прокрутки страницы вниз, в позиции > 300 срабатыват класс header_mini и шапке добавляется тень.
window.addEventListener("scroll", function () {
    console.log('какой-то текст');
    const scrollPos = window.scrollY
    console.log(scrollPos);
    if (scrollPos > 100) {
        headerEl.classList.add("header_mini")
    } else {
        headerEl.classList.remove("header_mini")
    }
})