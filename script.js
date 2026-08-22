// =========================
// Dark Mode
// =========================

const darkModeButton = document.querySelector("#darkModeButton");

darkModeButton.addEventListener("click", function () {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        darkModeButton.textContent = "Light Mode";
    } else {
        darkModeButton.textContent = "Dark Mode";
    }

});


// =========================
// Order Button
// =========================

const orderButton = document.querySelector("#orderButton");

orderButton.addEventListener("click", function () {

    alert("Cảm ơn! Đơn hàng của bạn đã được nhận.");

});


// =========================
// CTA Button
// =========================

const ctaButton = document.querySelector("#ctaButton");

ctaButton.addEventListener("click", function () {

    alert("Cảm ơn đã ghé qua");

});


// =========================
// Product Buttons
// =========================

const productButtons = document.querySelectorAll(".product-button");

productButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const productName =
            button.parentElement.querySelector("h3").textContent;

        alert("You selected: " + productName);

    });

});