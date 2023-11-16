// Показ або приховання кнопки "Повернутися вгору" при прокручуванні
window.onscroll = function() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("scrollToTopButton").style.display = "block";
    } else {
        document.getElementById("scrollToTopButton").style.display = "none";
    }
};

// Функція для плавного прокручування сторінки нагору
function scrollToTop() {
    const currentY = document.documentElement.scrollTop || document.body.scrollTop;

    if (currentY > 0) {
        window.requestAnimationFrame(scrollToTop);
        window.scrollTo(0, currentY - currentY / 8);
    }
}

document.addEventListener("DOMContentLoaded", function(){
    const cars = document.querySelectorAll('.carmodel');
    //список всіх моделей машин
    console.log(cars);
    cars.forEach((car) => {
        const image = car.querySelector('img');
        //зображення конкретної машини
console.log(image);
        const detailes = car.querySelector('.details');

    const overlay = car.querySelector('.overlay')
        //вікно інформації конкретної машини
        image.addEventListener("click", (event) => {
            overlay.style.display = "block"
            //event.preventDefault();
            detailes.style.display = "block";
            //показує вікно detailes
            document.documentElement.style.overflow = "hidden";
            //значення hidden для overflow означає, що контет обрізається, без надання прокрутки
console.log(detailes);
        });

        const closeBtn = detailes.querySelector('.close');
        //коли натискаєш на closeBtn вікно detailes повинно приховатись

        closeBtn.addEventListener("click", (event) => {
            overlay.style.display = "none"
            //event.preventDefault();
            detailes.style.display = "none";
            //показує вікно detailes
            document.documentElement.style.overflow = "";//повернулось значення за замовчуванням для overflow
        });
    });
    
});