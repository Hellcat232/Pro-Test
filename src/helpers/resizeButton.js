export default function updateButtonText() {
  const prev = document.querySelector(".prev-btn");
  const next = document.querySelector(".next-btn");

  if (prev && next) {
    if (window.innerWidth > 768) {
      prev.textContent = "previous question";
      next.textContent = "next question";
    } else {
      prev.textContent = "prev";
      next.textContent = "next";
    }
  }
}

// // Запускаем код после полной загрузки DOM
// document.addEventListener("DOMContentLoaded", () => {
//   // Выполняем функцию для установки начального текста
//   updateButtonText();

//   // Добавляем обработчик события на изменение размера окна
//   window.addEventListener("resize", updateButtonText);
// });
