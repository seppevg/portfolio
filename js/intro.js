let intro = document.querySelector(".intro");
let intro2 = document.querySelector(".intro__2");

let logo = document.querySelector(".logo__intro");
let logoSpan = document.querySelectorAll(".logo");

window.addEventListener("DOMContentLoaded", () => {

    let navigation = document.referrer;

    if (navigation.includes("alucan") || navigation.includes("multitech") || navigation.includes("index") || navigation.includes("ducktalk") || navigation.includes("effenaf") || navigation.includes("folioo") || navigation.includes("houtum") || navigation.includes("projecten") || navigation.includes("blogs")) {
        setTimeout(() => {
            intro.style.top = "-100vh";
            intro2.style.top = "-100vh";
        }, 100);
        return;
    }

    setTimeout(() => {

        logoSpan.forEach((span, idx) => {
            setTimeout(() => {
                span.classList.add("active__intro");
            }, (idx + 1) * 200)
        });

        setTimeout(() => {
            logoSpan.forEach((span, idx) => {
                setTimeout(() => {
                    span.classList.remove("active__intro");
                    span.classList.add("fade__intro");
                }, (idx + 1))
            });
        }, 1200)

        setTimeout(() => {
            intro.style.top = "-100vh";
            intro2.style.top = "-100vh";
        }, 1200)

    });

});