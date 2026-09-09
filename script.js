function openSurprise() {

    document.getElementById("welcome").style.display = "none";

    document.getElementById("card").classList.remove("hidden");

    createHearts();

}


function createHearts() {

    for (let i = 0; i < 20; i++) {

        const heart = document.createElement("div");

        heart.innerHTML = "❤️";

        heart.style.position = "fixed";

        heart.style.left = Math.random() * 100 + "%";

        heart.style.top = "100%";

        heart.style.fontSize =
            Math.random() * 20 + 15 + "px";

        heart.style.animation =
            "float 4s linear";

        document.body.appendChild(heart);

        setTimeout(() => {

            heart.remove();

        }, 4000);

    }

}
