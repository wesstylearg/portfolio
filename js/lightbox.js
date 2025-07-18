document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".album-img");

  images.forEach((img) => {
    img.addEventListener("click", () => {
      const album = img.closest(".album");
      const src = img.src;
      const alt = img.alt;
      const title = album.querySelector("h4")?.innerText || "";
      const artist = album.querySelector("a")?.innerText || "";
      const description = album.dataset.description || "Sin descripción disponible.";
      const link = album.querySelector("a")?.href || "#";

      openLightbox(src, alt, title, artist, description, link);
    });
  });

  const lightbox = document.createElement("div");
  lightbox.id = "lightbox";
  document.body.appendChild(lightbox);

  lightbox.addEventListener("click", (e) => {
    // Solo cierra si clickeas fuera del contenido
    if (e.target.id === "lightbox") {
      lightbox.classList.remove("active");
    }
  });
});

function openLightbox(src, alt, title, artist, description, link) {
  const lightbox = document.getElementById("lightbox");
  lightbox.innerHTML = "";

  const content = document.createElement("div");
  content.classList.add("lightbox-content");

  content.innerHTML = `
    <img src="${src}" alt="${alt}" />
    <div class="lightbox-text">
      <h4>${title}</h4>
      <p>${artist}</p>
      <a href="${link}" target="_blank" class="lightbox-link">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" viewBox="0 0 168 168">
          <path d="M84 0a84 84 0 1084 84 84 84 0 00-84-84zm38.8 120.9a5.92 5.92 0 01-8.1 1.9c-22.2-13.6-50.2-16.6-83-9.2a5.91 5.91 0 11-2.5-11.5c35.2-7.5 65-4.2 89 10.2a5.9 5.9 0 011.6 8.6zm11-20.5a7.4 7.4 0 01-10.2 2.4c-25.4-15.4-63.9-19.8-93.8-11a7.4 7.4 0 016-13.6c34.4-7.6 77.3-3 106.6 13.1a7.4 7.4 0 01-9.6 9.1zm.9-21.3c-29.3-18-77-19.7-104-10a9 9 0 01-5.5-17.3c31.3-9.8 85-7.7 117 11.5a9 9 0 01-7.4 15.8z"/>
        </svg>Escuchar en Spotify
      </a>
    </div>
  `;
  

  lightbox.appendChild(content);


  lightbox.classList.add("active");
}

