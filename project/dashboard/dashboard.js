//* niet zelf gedaan en niet af
const ecWaarde = document.getElementById("ec-output")
const waarde = document.querySelectorAll(".cijferInput");
waarde.forEach(input => {
    input.addEventListener("input", function () {
        const value = parseFloat(input.value);

        if (value) {
            if (value >= 5.5) {
                input.style.color = "green";
                ecWaarde.textContent = "2.5";
                

            } else {
                input.style.color = "red";
                ecWaarde.textContent = "0";

            }
        } else {
            input.style.color = "black";
        }
    });
});

