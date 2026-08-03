const ICONS = {
  image: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="1"/><circle cx="9" cy="9" r="2"/><path d="m21 15-5-5L5 21"/></svg>`,
  logos: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="m4.93 4.93 4.24 4.24"/><path d="m14.83 9.17 4.24-4.24"/><path d="m14.83 14.83 4.24 4.24"/><path d="m4.93 19.07 4.24-4.24"/></svg>`,
  video: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="3"/><polygon points="10,9 16,12 10,15"/></svg>`,
  flyer: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="2" width="16" height="20" rx="2"/><path d="M12 18h.01"/></svg>`, 
  contacto: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`,
  arrow: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14"/><path d="m19 12-7 7-7-7"/></svg>`,
  gmail: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`,
  instagram: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>`,
  whatsapp: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>`
};

const SECTIONS = [
 { 
    id: "portadas", 
    label: "Portadas / Album Cover Art", 
    number: " ", 
    icon: "image", 
    blurb: "Tapa de album o sencillo para plataformas como Spotify.", 
    portadas: [
      { title: "Desde donde vengo", client: "Arana", file: "(1).webp" },
      { title: "MI VISERA", client: "JvnRoman", file: "(2).webp" },
      { title: "El Génesis", client: "Frannko", file: "(3).webp" },
      { title: "Una noche más", client: "Niro", file: "(4).webp" },
      { title: "indiferente", client: " ", file: "(5).webp" },
      { title: "MI LOCA", client: "Gondra", file: "(6).webp" },
      { title: "PUCCA", client: "Niro", file: "(7).webp" },
      { title: "FUGAZ", client: "Mou G", file: "(8).webp" },
      { title: "Vampiros", client: "Concepto", file: "(9).webp" },
      { title: "E.N.V.A.V", client: "KEVANS", file: "(10).webp" },
      { title: "Fvck Luv", client: "Concepto", file: "(11).webp" },
      { title: "Lejos de ti", client: "Vanek", file: "(12).webp" },
      { title: "Mi ataúd", client: "Gondra", file: "(13).webp" },
      { title: "Future Trap", client: "EzeLyrics", file: "(14).webp" },
      { title: "selatrop", client: " ", file: "(15).webp" },
      { title: "SOUL SIDE", client: "Frannko", file: "(16).webp" },
      { title: "¿qué tal tu día?", client: "Kevans", file: "(17).webp" },
      { title: "Remember", client: "Siroe", file: "(18).webp" },
      { title: "Sincero", client: "BARI", file: "(19).webp" },
      { title: "En Mi Mente <3", client: "Siroe", file: "(20).webp" },
      { title: "CICLO", client: "Gondra", file: "(21).webp" },
      { title: "FRONTEOTOUR", client: "Concepto", file: "(22).webp" },
      { title: "Te vi", client: "Gondra", file: "(23).webp" },
      { title: "Reversionado", client: "RodriiLA", file: "(24).webp" },
      { title: "Tamo Nuevo", client: "Gondra", file: "(25).webp" }
    ]
  },
  { 
    id: "flyers", 
    label: "Flyers promocionales", 
    number: " ", 
    icon: "flyer", 
    blurb: "Diseños publicitarios para redes sociales.", 
    flyers: [
      { title: " ", client: "Las Cabras del Sur", src: "img/flyers/jueves.webp" },
      { title: " ", client: "JvnRoman", src: "img/flyers/jvn.webp" },
      { title: " ", client: "Cabras del Sur", src: "img/flyers/neli.webp" },
      { title: " ", client: "Viersadingos", src: "img/flyers/viersadingos.webp" },
      { title: " ", client: "Gondra", src: "img/flyers/miataud.webp" },
      { title: " ", client: "Gondra", src: "img/flyers/tevi.webp" },
      { title: "", client: "FRN", src: "img/flyers/frn.webp" },
      { title: "", client: "FRN & Kaui", src: "img/flyers/niceto.webp" },
      { title: " ", client: "FRO!", src: "img/flyers/fro.webp" },
      { title: " ", client: "Concepto", src: "img/flyers/fvck.webp" },
      { title: " ", client: "Concepto", src: "img/flyers/cro" },
      { title: " ", client: "Micery / Galy King", src: "img/flyers/santatrinidad.webp" }
    ]
  },
  { 
    id: "logos", 
    label: "Logos", 
    number: " ", 
    icon: "logos", 
    blurb: "Isologos e identidades visuales para marcas y artistas.", 
    logos: [
      { title: "JvnRoman", client: "Logo", src: "img/logos/jvn.webp" },
      { title: "BarderShop", client: "Logo", src: "img/logos/barder.webp" },
      { title: "NIRO", client: "Logo", src: "img/logos/niro.webp" },
      { title: "Cabras del Sur", client: "Logo", src: "img/logos/cds.webp" },
      { title: "Mate&Punto", client: "Logo", src: "img/logos/myp.webp" },
      { title: "D9", client: "Logo", src: "img/logos/d9.webp" },
          ]
  },
  {
    id: "visualizers",
    label: "Visualizers / Video Lyrics",
    number: " ",
    icon: "video",
    blurb: "Videos musicales para acompañar el tema",
    videos: [
      { title: "Pasa un rato", client: "NIRO", embed: "https://www.youtube.com/embed/oTmju9RE8qs", src: "img/miniaturas/pasaunrato.webp" },
      { title: "Lejos de ti", client: "Vanek", embed: "https://www.youtube.com/embed/SwzMAK-N-IE", src: "img/miniaturas/lejosdeti.webp" },
      { title: "PUCCA", client: "NIRO", embed: "https://www.youtube.com/embed/09eJfGjJs0w", src: "img/miniaturas/pucca.webp" },
      { title: "En La Nota", client: "JvnRoman", embed: "https://www.youtube.com/embed/P6StH6L5nlc", src: "img/miniaturas/enlanota.webp" },
    { title: "Wowo", client: "Arana", embed: "https://www.youtube.com/embed/DxTSuI7nhtM", src: "img/miniaturas/wowowo.webp" },
    { title: "Desde donde vengo", client: "Arana", embed: "https://www.youtube.com/embed/ASmic3i1AZQ", src: "img/miniaturas/desdedondevengo.webp" }
  
  ]
  },
  { 
    id: "contacto", 
    label: "Contacto", 
    number: " ", 
    icon: "contacto", 
    blurb: "Disponible para portadas, flyers, visualizers, identidad visual y dirección creativa.", 
    isContact: true 
  }
];

let active = -1;
let warping = false;
let wheelLocked = false;
let touchStartY = null;

const railEl = document.getElementById("rail");
const viewportEl = document.getElementById("viewport");
const warpOverlayEl = document.getElementById("warpOverlay");
const pipsEl = document.getElementById("pips");
const modalBackdrop = document.getElementById("modalBackdrop");
const modalTitle = document.getElementById("modalTitle");
const modalCat = document.getElementById("modalCat");
const modalClose = document.getElementById("modalClose");
const modalCard = document.getElementById("modalCard");

function renderRail() {
  const isLandscape = window.innerWidth > window.innerHeight;
  railEl.className = `rail ${window.innerWidth > 720 && isLandscape ? "rail-vertical" : "rail-horizontal"}`;
  railEl.innerHTML = "";

  const homeBtn = document.createElement("button");
  homeBtn.className = `rail-dot rail-home ${active === -1 ? "is-active" : ""}`;
  homeBtn.setAttribute("aria-label", "Inicio");
  homeBtn.innerHTML = "<img src=\"img/icons/logo.svg\" alt=\"Logo\" class=\"emblem-img\" />";
  homeBtn.addEventListener("click", () => navigate(-1));
  railEl.appendChild(homeBtn);

  SECTIONS.forEach((s, i) => {
    const btn = document.createElement("button");
    btn.className = `rail-dot ${active === i ? "is-active" : ""}`;
    btn.setAttribute("aria-label", s.label);
    btn.innerHTML = `${ICONS[s.icon]}<span class="rail-tooltip">${s.number} — ${s.label}</span>`;
    btn.addEventListener("click", () => navigate(i));
    railEl.appendChild(btn);
  });
}

function renderPips() {
  pipsEl.innerHTML = "";
  const homePip = document.createElement("span");
  homePip.className = `pip ${active === -1 ? "is-active" : ""}`;
  pipsEl.appendChild(homePip);
  SECTIONS.forEach((s, i) => {
    const pip = document.createElement("span");
    pip.className = `pip ${active === i ? "is-active" : ""}`;
    pipsEl.appendChild(pip);
  });
}

function renderHome() {
  return `
    <section class="screen home-screen">
      <div class="home-title-container">
        <img src="img/icons/logo2.svg" alt="Logo" class="home-inline-logo" />
        <h1 class="wordmark">Portfolio</h1>
      </div>
      <p class="home-sub">Dirección creativa para artistas, eventos y creadores de contenido.</p>
      <button class="press-start">Ver trabajos ${ICONS.arrow}</button>
    </section>`;
}

function renderSection(section) {
  if (section.isContact) {
    return `
      <section class="screen section-screen contact-screen">
        <header class="section-head">
          <span class="section-number">${section.number}</span>
          <div>
            <h2 class="wordmark section-title">${section.label}</h2>
            <p class="section-blurb">${section.blurb}</p>
          </div>
          <span class="section-icon">${ICONS[section.icon]}</span>
        </header>
        <div class="contact-container">
          <div class="contact-card">
            <h3>Hablemos sobre tu proyecto</h3>
            <div class="contact-links">
              <a href="mailto:wesstyle.arg@gmail.com" class="contact-btn" target="_blank" rel="noopener">
                <div class="contact-btn-left">
                  ${ICONS.gmail}
                  <span>Gmail</span>
                </div>
                ${ICONS.arrow}
              </a>
              <a href="https://instagram.com/wesstyle.arg" class="contact-btn" target="_blank" rel="noopener">
                <div class="contact-btn-left">
                  ${ICONS.instagram}
                  <span>Instagram</span>
                </div>
                ${ICONS.arrow}
              </a>
              <a href="https://wa.me/+542983448645?text=Hola%20Wesstyle,%20vi%20tu%20portfolio%20y%20quiero%20encargarte%20un%20dise%C3%B1o" class="contact-btn" target="_blank" rel="noopener">
                <div class="contact-btn-left">
                  ${ICONS.whatsapp}
                  <span>WhatsApp</span>
                </div>
                ${ICONS.arrow}
              </a>
            </div>
          </div>
        </div>
      </section>`;
  }

  const isFlyer = section.id === "flyers";
  const isLogo = section.id === "logos";
  const isVisualizer = section.id === "visualizers";
  
  let dataList = section.portadas;
  if (isLogo) dataList = section.logos;
  if (isFlyer) dataList = section.flyers;
  if (isVisualizer) dataList = section.videos;

const items = dataList.map((p, i) => {
    let mediaContent = '';
    let itemClass = '';

    if (isFlyer) {
      itemClass = 'flyer-item';
      mediaContent = `<img src="${p.src}" alt="${p.title}" class="flyer-img" />`;
    } else if (isLogo) {
      itemClass = '';
      mediaContent = `<img src="${p.src}" alt="${p.title}" class="portada-img" />`;
    } else if (isVisualizer) {
      itemClass = 'visualizer-item';
      mediaContent = `
        <div class="video-thumb-wrap">
          <img src="${p.src}" alt="${p.title}" class="portada-img" />
          <div class="play-overlay">${ICONS.video}</div>
        </div>`;
    } else {
      itemClass = '';
      mediaContent = `<img src="img/portadas/${p.file}" alt="${p.title}" class="portada-img" />`;
    }

    // AQUÍ CAMBIAMOS: Solo mostramos p.title en la tarjeta de la galería
    return `
      <div class="floating-item ${itemClass}" data-index="${i}">
        ${mediaContent}
        <div class="floating-caption">${p.title}</div>
      </div>`;
  }).join("");

  return `
    <section class="screen section-screen">
      <header class="section-head">
        <span class="section-number">${section.number}</span>
        <div>
          <h2 class="wordmark section-title">${section.label}</h2>
          <p class="section-blurb">${section.blurb}</p>
        </div>
        <span class="section-icon">${ICONS[section.icon]}</span>
      </header>
      <div class="floating-gallery" id="floatingGallery">
        <div class="floating-track" id="floatingTrack">
          ${items}
        </div>
      </div>
      <button class="next-section-btn" onclick="step(1)">Ver otro servicio ${ICONS.arrow}</button>
    </section>`;
}

function renderViewport() {
  viewportEl.innerHTML = active === -1 ? renderHome() : renderSection(SECTIONS[active]);

  if (active === -1) {
    const pressStartBtn = viewportEl.querySelector(".press-start");
    if (pressStartBtn) {
      pressStartBtn.addEventListener("click", () => navigate(0));
    }
  } else {
    const track = document.getElementById("floatingTrack");
    const gallery = document.getElementById("floatingGallery");
    
    if (track && gallery) {
      let isDown = false;
      let startX, currentTranslate = 0, prevTranslate = 0;
      let hasMoved = false;
      const normalScrollSpeed = 2;
      const slowScrollSpeed = 1;
      let currentAutoSpeed = normalScrollSpeed;
      let autoScrollId = null;
      let isInteracting = false;

      function getMinTranslate() {
        return -(track.scrollWidth - gallery.clientWidth);
      }
      const maxTranslate = 0;

      track.style.transform = `translateX(0px)`;

      function getClientX(e) {
        return e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
      }

      function dragStart(e) {
        isDown = true;
        hasMoved = false;
        isInteracting = true;
        startX = getClientX(e);
        track.style.transition = 'none';
      }

      function dragMove(e) {
        if (!isDown) return;
        const currentX = getClientX(e);
        const diff = currentX - startX;
        
        if (Math.abs(diff) > 4) {
          hasMoved = true;
        }

        let newTranslate = prevTranslate + diff;
        const minTranslate = getMinTranslate();
        
        if (newTranslate > maxTranslate) newTranslate = maxTranslate;
        if (newTranslate < minTranslate) newTranslate = minTranslate;

        currentTranslate = newTranslate;
        track.style.transform = `translateX(${currentTranslate}px)`;
      }

      function dragEnd() {
        if (!isDown) return;
        isDown = false;
        prevTranslate = currentTranslate;
        track.style.transition = 'transform 0.2s ease-out';
        
        setTimeout(() => {
          isInteracting = false;
        }, 300);
      }

      gallery.addEventListener("mousedown", dragStart);
      window.addEventListener("mousemove", dragMove);
      window.addEventListener("mouseup", dragEnd);

      gallery.addEventListener("touchstart", dragStart, { passive: true });
      window.addEventListener("touchmove", dragMove, { passive: true });
      window.addEventListener("touchend", dragEnd);

      gallery.addEventListener("mouseenter", () => { 
        currentAutoSpeed = slowScrollSpeed; 
      });
      
      gallery.addEventListener("mouseleave", () => { 
        if (!isDown) currentAutoSpeed = normalScrollSpeed; 
      });

      gallery.addEventListener("wheel", (e) => {
        e.preventDefault();
        isInteracting = true;
        let delta = e.deltaX !== 0 ? e.deltaX : e.deltaY;
        currentTranslate -= delta;

        const minTranslate = getMinTranslate();
        if (currentTranslate > maxTranslate) currentTranslate = maxTranslate;
        if (currentTranslate < minTranslate) currentTranslate = minTranslate;

        prevTranslate = currentTranslate;
        track.style.transition = 'transform 0.1s ease-out';
        track.style.transform = `translateX(${currentTranslate}px)`;

        clearTimeout(window.wheelTimeout);
        window.wheelTimeout = setTimeout(() => {
          isInteracting = false;
        }, 500);
      }, { passive: false });

      function stepAutoScroll() {
        if (!isDown && !isInteracting && track) {
          currentTranslate -= currentAutoSpeed;
          const minTranslate = getMinTranslate();

          if (currentTranslate <= minTranslate) {
            currentTranslate = maxTranslate;
          }

          prevTranslate = currentTranslate;
          track.style.transition = 'none';
          track.style.transform = `translateX(${currentTranslate}px)`;
        }
        autoScrollId = requestAnimationFrame(stepAutoScroll);
      }

      autoScrollId = requestAnimationFrame(stepAutoScroll);

      track.querySelectorAll(".floating-item").forEach((item) => {
        item.addEventListener("click", () => {
          if (hasMoved) return; 
          const i = Number(item.dataset.index);
          const currentSection = SECTIONS[active];

          const isFlyer = currentSection.id === "flyers";
          const isLogo = currentSection.id === "logos";
          const isVisualizer = currentSection.id === "visualizers";
          
          let data, mediaSrc, embedUrl = null;
          if (isFlyer) {
            data = currentSection.flyers[i];
            mediaSrc = data.src;
          } else if (isLogo) {
            data = currentSection.logos[i];
            mediaSrc = data.src;
          } else if (isVisualizer) {
            data = currentSection.videos[i];
            mediaSrc = data.src;
            embedUrl = data.embed;
          } else {
            data = currentSection.portadas[i];
            mediaSrc = `img/portadas/${data.file}`;
          }
          
          openModal(data.title, data.client, mediaSrc, isFlyer, embedUrl);
        });
      });
    }
  }
}

function openModal(title, category, mediaSrc = null, isFlyer = false, embedUrl = null) {
  modalTitle.textContent = title;
  modalCat.textContent = category;
  
  if (isFlyer) {
    modalCard.classList.add("is-flyer");
  } else {
    modalCard.classList.remove("is-flyer");
  }

  const modalPlaceholder = modalCard.querySelector(".modal-placeholder");
  if (embedUrl) {
    modalPlaceholder.innerHTML = `<iframe src="${embedUrl}?autoplay=1" title="${title}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen class="modal-video-iframe"></iframe>`;
  } else if (mediaSrc) {
    modalPlaceholder.innerHTML = `<img src="${mediaSrc}" alt="${title}" />`;
  } else {
    modalPlaceholder.innerHTML = ICONS[SECTIONS[active]?.icon] || '';
  }

  modalBackdrop.hidden = false;
}

function closeModal() {
  modalBackdrop.hidden = true;
  const modalPlaceholder = modalCard.querySelector(".modal-placeholder");
  if (modalPlaceholder) {
    modalPlaceholder.innerHTML = ""; 
  }
}

modalClose.addEventListener("click", closeModal);
modalBackdrop.addEventListener("click", (e) => {
  if (e.target === modalBackdrop) closeModal();
});

function navigate(target) {
  if (warping || target === active) return;
  target = Math.min(SECTIONS.length - 1, Math.max(-1, target));
  if (target === active) return;

  warping = true;
  viewportEl.classList.add("is-warping");
  warpOverlayEl.classList.add("is-active");

  setTimeout(() => {
    active = target;
    renderViewport();
    renderRail();
    renderPips();
    viewportEl.classList.remove("is-warping");
  }, 340);

  setTimeout(() => {
    warpOverlayEl.classList.remove("is-active");
    warping = false;
  }, 680);
}

function step(dir) {
  navigate(active + dir);
}

window.addEventListener("keydown", (e) => {
  if (!modalBackdrop.hidden) {
    if (e.key === "Escape") closeModal();
    return;
  }
  if (e.key === "ArrowDown" || e.key === "ArrowRight") step(1);
  if (e.key === "ArrowUp" || e.key === "ArrowLeft") step(-1);
  if (e.key === "Escape") navigate(-1);
});

window.addEventListener(
  "wheel",
  (e) => {
    if (!modalBackdrop.hidden) return;
    if (wheelLocked) return;
    if (Math.abs(e.deltaY) < 24) return;
    wheelLocked = true;
    step(e.deltaY > 0 ? 1 : -1);
    setTimeout(() => (wheelLocked = false), 700);
  },
  { passive: true }
);



window.addEventListener("resize", renderRail);

renderRail();
renderViewport();
renderPips();