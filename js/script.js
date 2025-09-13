document.querySelectorAll(".choose-wrapper a").forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        document.querySelectorAll(".choose-wrapper a").forEach(a => a.classList.remove("active"));

        this.classList.add("active");
    });
});

const input = document.querySelector("input");
input.addEventListener("input", function () {
    if (this.value.length > 1) {
        this.value = this.value.slice(0, 1);
    }
    if (this.value > 8) {
        this.value = 8;
    }
});