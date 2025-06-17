
        const contenedor = document.getElementById("lista-recientes");
        const ultimos = proyectos.slice(0, 2); // Mostrar los últimos 2

        ultimos.forEach(p => {
            const div = document.createElement("div");
            div.classList.add("proyecto");

                        div.innerHTML = `
                
                        <div class="proyecto">
                            <div class="media-container">
                                <img src="${p.imagen}" alt="${p.titulo}" class="preview-img">
                            </div>
                            <div class="descripcion_container">
                                <h2>${p.titulo}</h2>
                                <div class="tags">
                                    ${p.tecnologias.map(tec => `<div class="tag">${tec}</div>`).join("")}
                                </div>
                                <p>${p.descripcion}</p>
                                <a class="link-proyecto" href="${p.link}">Ver más</a>
                            </div>
                        </div>
                    `;

            contenedor.appendChild(div);


        });
