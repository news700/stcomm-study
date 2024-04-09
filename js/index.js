const number = $("#number");
const increase = $("#increase");
const decrease = $("#decrease");

increase.on("click", () => {
    const current = parseInt(number.text(), 10);
    number.text(current + 1);
});

decrease.on("click", () => {
    const current = parseInt(number.text(), 10);
    number.text(current - 1);
});
