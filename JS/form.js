

const form = document.getElementById("contactForm");
const respuesta = document.getElementById("respuesta");
const spinner = document.getElementById("spinner");
const submitBtn = document.getElementById("submitBtn");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    respuesta.textContent = "";
    respuesta.className = "";
    spinner.style.display = "block";
    submitBtn.disabled = true;

    const data = new FormData(form);

    fetch("https://formsubmit.co/minocarlos.tec@gmail.com", {
        method: "POST",
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    })
        .then(response => {
            spinner.style.display = "none";
            submitBtn.disabled = false;

            if (response.ok) {
                respuesta.textContent = "¡Mensaje enviado con éxito!";
               respuesta.classList.add("success", "show");
                form.reset();
            } else {
                respuesta.textContent = "Hubo un error al enviar el mensaje.";
                respuesta.classList.add("error", "show");
            }


            setTimeout(() => {
                respuesta.textContent = "";
                respuesta.className = "";
            }, 3000);
        })
        .catch(error => {
            spinner.style.display = "none";
            submitBtn.disabled = false;
            respuesta.textContent = "Error de red o conexión.";
            respuesta.classList.add("error");

            setTimeout(() => {
                respuesta.textContent = "";
                respuesta.className = "";
            }, 5000);
        });
});