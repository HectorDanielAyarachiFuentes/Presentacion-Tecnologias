/**
 * =============================================================================
 * CONTROLADOR PRINCIPAL — EXPOSICIÓN DE SISTEMAS DE INFORMACIÓN (5 MINUTOS)
 * Universidad Nacional del Comahue — CURZAS
 * Licenciatura en Recursos Humanos
 * Autores: Héctor Daniel Ayarachi Fuentes & Andrea Alejandra Díaz
 * =============================================================================
 * Administra la navegación a través de las 7 filminas, el panel dual interactivo
 * (Tarjeta Conceptual + Espacio para GIFs), el cronómetro de 5 minutos,
 * el guion teleprompter del orador y el respaldo metodológico de las 3 prácticas.
 */

class PresentationApp {
  constructor(data) {
    this.data = data;
    this.currentSlideIndex = 0;
    this.totalSlides = data.slides.length;

    // Cronómetro Académico de 5 Minutos (300 segundos exactos)
    this.totalSeconds = (data.timing?.totalMinutos || 5) * 60;
    this.remainingSeconds = this.totalSeconds;
    this.timerRunning = false;
    this.timerInterval = null;

    // Estado del modo de visualización de texto (Expandido / Dual con GIF)
    this.isTextExpanded = false;

    // Inicializar Elementos del DOM
    this.initDOMElements();

    // Configurar Eventos e Inicializar
    this.bindEvents();
    this.renderStationsIndicator();
    this.renderSlide(0);
    this.populateDrawerContent();
    this.renderSlidesIndex();
  }

  initDOMElements() {
    // Tarjeta de Contenido Conceptual (Lado Izquierdo)
    this.cardElement = document.getElementById("slide-card");
    this.badgeElement = document.getElementById("slide-badge");
    this.bloqueBadgeElement = document.getElementById("slide-bloque-badge");
    this.slideTimeBadge = document.getElementById("slide-time-badge");
    this.titleElement = document.getElementById("slide-title");
    this.subtitleElement = document.getElementById("slide-subtitle");
    this.bulletsElement = document.getElementById("slide-bullets");
    this.footerMetaElement = document.getElementById("slide-footer-meta");

    // Espacio Multimedia para GIFs (Lado Derecho)
    this.slideMediaStage = document.getElementById("slide-media-stage");
    this.gifCard = document.getElementById("gif-card");
    this.gifBadge = document.getElementById("gif-badge");
    this.gifSlideTag = document.getElementById("gif-slide-tag");
    this.slideGifImg = document.getElementById("slide-gif-img");
    this.slideGifVideo = document.getElementById("slide-gif-video");
    this.gifPlaceholder = document.getElementById("gif-placeholder");
    this.gifPlaceholderIcon = document.getElementById("gif-placeholder-icon");
    this.gifPlaceholderTitle = document.getElementById("gif-placeholder-title");
    this.gifPlaceholderDesc = document.getElementById("gif-placeholder-desc");
    this.gifCaption = document.getElementById("gif-caption");
    this.gifViewport = document.getElementById("gif-viewport");

    // Modal Lightbox para Ampliación de Esquemas Isométricos y Videos
    this.mediaLightboxModal = document.getElementById("media-lightbox-modal");
    this.mediaLightboxBackdrop = document.getElementById("media-lightbox-backdrop");
    this.lightboxBadge = document.getElementById("lightbox-badge");
    this.lightboxTag = document.getElementById("lightbox-tag");
    this.lightboxTitle = document.getElementById("lightbox-title");
    this.lightboxImg = document.getElementById("lightbox-img");
    this.lightboxVideo = document.getElementById("lightbox-video");
    this.lightboxCaption = document.getElementById("lightbox-caption");
    this.btnCloseLightbox = document.getElementById("lightbox-close");
    this.lightboxBody = document.getElementById("lightbox-body");
    this.floatingDock = document.getElementById("lightbox-floating-dock");
    this.btnDockZoomIn = document.getElementById("btn-dock-zoom-in");
    this.btnDockZoomOut = document.getElementById("btn-dock-zoom-out");
    this.btnDockReset = document.getElementById("btn-dock-reset");
    this.btnDockPreset2x = document.getElementById("btn-dock-preset-2x");
    this.dockZoomBadge = document.getElementById("dock-zoom-badge");
    this.dockZoomText = document.getElementById("dock-zoom-text");
    this.dockHintText = document.getElementById("dock-hint-text");

    // Estado de Zoom y Pan en Lightbox
    this.zoomLevel = 1;
    this.panX = 0;
    this.panY = 0;
    this.isPanning = false;
    this.panStartX = 0;
    this.panStartY = 0;

    // Contador y Barra de Progreso
    this.slideCounter = document.getElementById("slide-counter");
    this.slideCounterBadge = document.getElementById("slide-counter-badge");
    this.progressBar = document.getElementById("presentation-progress-bar");

    // Índice Canónico de Filminas
    this.slidesIndexPanel = document.getElementById("slides-index-panel");
    this.slidesIndexBackdrop = document.getElementById("slides-index-backdrop");
    this.slidesIndexBody = document.getElementById("slides-index-body");
    this.btnCloseSlidesIndex = document.getElementById("btn-close-slides-index");

    // Cronómetro de Exposición
    this.timerDisplay = document.getElementById("timer-display");
    this.btnTimerToggle = document.getElementById("btn-timer-toggle");
    this.btnTimerReset = document.getElementById("btn-timer-reset");

    // Navegación Inferior
    this.btnPrev = document.getElementById("btn-prev");
    this.btnNext = document.getElementById("btn-next");
    this.stationsContainer = document.getElementById("stations-indicator");

    // Modal de Notas y Guion del Orador
    this.notesModal = document.getElementById("notes-modal");
    this.notesBody = document.getElementById("notes-body");
    this.btnToggleNotes = document.getElementById("btn-toggle-notes");
    this.btnCloseNotes = document.getElementById("btn-close-notes");

    // Panel Desplegable (Drawer) de Respaldo Jurado
    this.drawerBackdrop = document.getElementById("drawer-backdrop");
    this.drawerPanel = document.getElementById("drawer-panel");
    this.btnToggleDrawer = document.getElementById("btn-toggle-drawer");
    this.btnCloseDrawer = document.getElementById("btn-close-drawer");
    this.drawerContent = document.getElementById("drawer-content");

    // Visor de Documentos PDF
    this.docModal = document.getElementById("doc-modal");
    this.docModalBackdrop = document.getElementById("doc-modal-backdrop");
    this.docModalTitle = document.getElementById("doc-modal-title");
    this.docModalBadge = document.getElementById("doc-modal-badge");
    this.docModalFrame = document.getElementById("doc-modal-frame");
    this.btnDocMaximize = document.getElementById("btn-doc-maximize");
    this.btnDocNewTab = document.getElementById("btn-doc-newtab");
    this.btnDocDownload = document.getElementById("btn-doc-download");
    this.btnCloseDoc = document.getElementById("btn-close-doc");
    this.isDocMaximized = false;

    // Atajos y Pantalla Completa
    this.btnFullscreen = document.getElementById("btn-toggle-fullscreen");
    this.btnShortcuts = document.getElementById("btn-toggle-shortcuts");
    this.shortcutsModal = document.getElementById("shortcuts-modal");
    this.shortcutsBackdrop = document.getElementById("shortcuts-backdrop");
    this.btnCloseShortcuts = document.getElementById("btn-close-shortcuts");

    // Alternador de Visualización de Texto
    this.btnViewText = document.getElementById("btn-view-text");
    this.btnFloatingCardToggle = document.getElementById("btn-floating-card-toggle");
    this.mainStage = document.getElementById("main-stage");
  }

  bindEvents() {
    // Navegación Principal
    if (this.btnPrev) {
      this.btnPrev.addEventListener("click", () => this.prevSlide());
    }
    if (this.btnNext) {
      this.btnNext.addEventListener("click", () => this.nextSlide());
    }

    // Cronómetro
    if (this.btnTimerToggle) {
      this.btnTimerToggle.addEventListener("click", () => this.toggleTimer());
    }
    if (this.btnTimerReset) {
      this.btnTimerReset.addEventListener("click", () => this.resetTimer());
    }

    // Guion del Orador
    if (this.btnToggleNotes) {
      this.btnToggleNotes.addEventListener("click", () => this.toggleNotes());
    }
    if (this.btnCloseNotes) {
      this.btnCloseNotes.addEventListener("click", () => this.toggleNotes(false));
    }

    // Respaldo Jurado (Drawer)
    if (this.btnToggleDrawer) {
      this.btnToggleDrawer.addEventListener("click", () => this.toggleDrawer());
    }
    if (this.btnCloseDrawer) {
      this.btnCloseDrawer.addEventListener("click", () => this.toggleDrawer(false));
    }
    if (this.drawerBackdrop) {
      this.drawerBackdrop.addEventListener("click", () => this.toggleDrawer(false));
    }

    // Alternar Enfoque de Texto (Maximizar / Dividido con GIF)
    if (this.btnViewText) {
      this.btnViewText.addEventListener("click", () => this.toggleTextExpanded());
    }
    if (this.btnFloatingCardToggle) {
      this.btnFloatingCardToggle.addEventListener("click", () => this.toggleTextExpanded());
    }

    // Pantalla Completa
    if (this.btnFullscreen) {
      this.btnFullscreen.addEventListener("click", () => this.toggleFullscreen());
    }

    // Atajos de Teclado
    if (this.btnShortcuts) {
      this.btnShortcuts.addEventListener("click", () => this.toggleShortcuts());
    }
    if (this.btnCloseShortcuts) {
      this.btnCloseShortcuts.addEventListener("click", () => this.toggleShortcuts(false));
    }
    if (this.shortcutsBackdrop) {
      this.shortcutsBackdrop.addEventListener("click", () => this.toggleShortcuts(false));
    }

    // Índice Canónico de Filminas
    if (this.slideCounterBadge) {
      this.slideCounterBadge.addEventListener("click", () => this.toggleSlidesIndex());
    }
    if (this.btnCloseSlidesIndex) {
      this.btnCloseSlidesIndex.addEventListener("click", () => this.toggleSlidesIndex(false));
    }
    if (this.slidesIndexBackdrop) {
      this.slidesIndexBackdrop.addEventListener("click", () => this.toggleSlidesIndex(false));
    }

    // Pestañas del Drawer
    document.querySelectorAll(".drawer-tab").forEach((tab) => {
      tab.addEventListener("click", (e) => {
        document.querySelectorAll(".drawer-tab").forEach((t) => t.classList.remove("active"));
        e.currentTarget.classList.add("active");
        this.renderDrawerTab(e.currentTarget.dataset.tab);
      });
    });

    // Ampliación Interactiva de Esquemas Isométricos y Videos (Lightbox)
    if (this.gifViewport) {
      this.gifViewport.addEventListener("click", () => this.openMediaLightbox());
    }
    if (this.btnCloseLightbox) {
      this.btnCloseLightbox.addEventListener("click", () => this.closeMediaLightbox());
    }
    if (this.mediaLightboxBackdrop) {
      this.mediaLightboxBackdrop.addEventListener("click", () => this.closeMediaLightbox());
    }
    this.initLightboxZoom();

    // Gestos Táctiles (Swipe en Celulares y Tablets)
    let touchStartX = 0;
    let touchStartY = 0;
    let touchStartTime = 0;

    if (this.mainStage) {
      this.mainStage.addEventListener("touchstart", (e) => {
        if (e.touches.length === 1) {
          touchStartX = e.touches[0].clientX;
          touchStartY = e.touches[0].clientY;
          touchStartTime = Date.now();
        }
      }, { passive: true });

      this.mainStage.addEventListener("touchend", (e) => {
        if (e.changedTouches.length === 1) {
          const diffX = e.changedTouches[0].clientX - touchStartX;
          const diffY = e.changedTouches[0].clientY - touchStartY;
          const elapsed = Date.now() - touchStartTime;

          if (Math.abs(diffX) > 45 && Math.abs(diffX) > 1.3 * Math.abs(diffY) && elapsed < 650) {
            if (diffX < 0) this.nextSlide();
            else this.prevSlide();
          }
        }
      }, { passive: true });
    }

    // Atajos de Teclado Profesionales
    window.addEventListener("keydown", (e) => {
      // Si el modal de documento está abierto, escape lo cierra
      if (this.docModal && this.docModal.classList.contains("open")) {
        if (e.key === "Escape") {
          this.closeDocModal();
          return;
        } else if (e.key.toLowerCase() === "m") {
          this.toggleDocMaximize();
          return;
        }
      }

      // Si el modal de ampliación (Lightbox) está abierto, controles de zoom y pan
      const isLightboxOpen = this.mediaLightboxModal && this.mediaLightboxModal.style.display !== "none";
      if (isLightboxOpen) {
        if (e.key === "Escape") {
          this.closeMediaLightbox();
          return;
        }
        if (e.key === "+" || e.key === "=") {
          e.preventDefault();
          this.zoomIn();
          return;
        }
        if (e.key === "-" || e.key === "_") {
          e.preventDefault();
          this.zoomOut();
          return;
        }
        if (e.key === "0") {
          e.preventDefault();
          this.resetMediaZoom();
          return;
        }
        if (this.zoomLevel > 1) {
          if (e.key === "ArrowLeft") {
            e.preventDefault();
            this.panX += 60;
            this.clampPan();
            this.applyMediaTransform(true);
            return;
          }
          if (e.key === "ArrowRight") {
            e.preventDefault();
            this.panX -= 60;
            this.clampPan();
            this.applyMediaTransform(true);
            return;
          }
          if (e.key === "ArrowUp") {
            e.preventDefault();
            this.panY += 60;
            this.clampPan();
            this.applyMediaTransform(true);
            return;
          }
          if (e.key === "ArrowDown") {
            e.preventDefault();
            this.panY -= 60;
            this.clampPan();
            this.applyMediaTransform(true);
            return;
          }
        }
      }

      // Si algún modal flotante o lightbox está abierto, Escape los cierra
      if (e.key === "Escape") {
        this.closeMediaLightbox();
        this.toggleNotes(false);
        this.toggleDrawer(false);
        this.toggleShortcuts(false);
        this.toggleSlidesIndex(false);
        this.closeDocModal();
        return;
      }

      if (e.key === "ArrowRight" || e.key === " " || e.key === "PageDown") {
        e.preventDefault();
        this.nextSlide();
      } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
        e.preventDefault();
        this.prevSlide();
      } else if (e.key.toLowerCase() === "t") {
        this.toggleTimer();
      } else if (e.key.toLowerCase() === "n") {
        this.toggleNotes();
      } else if (e.key.toLowerCase() === "m") {
        this.toggleDrawer();
      } else if (e.key.toLowerCase() === "i") {
        this.toggleSlidesIndex();
      } else if (e.key.toLowerCase() === "d") {
        this.toggleTextExpanded();
      } else if (e.key.toLowerCase() === "f") {
        this.toggleFullscreen();
      } else if (e.key === "?" || e.key === "¿") {
        this.toggleShortcuts();
      }
    });
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // NAVEGACIÓN Y RENDERIZADO DE FILMINAS
  // ═══════════════════════════════════════════════════════════════════════════
  nextSlide() {
    if (this.currentSlideIndex < this.totalSlides - 1) {
      this.renderSlide(this.currentSlideIndex + 1, 1);
    }
  }

  prevSlide() {
    if (this.currentSlideIndex > 0) {
      this.renderSlide(this.currentSlideIndex - 1, -1);
    }
  }

  goToSlide(index) {
    if (index >= 0 && index < this.totalSlides) {
      this.renderSlide(index, index > this.currentSlideIndex ? 1 : -1);
    }
  }

  renderSlide(index, direction = 1) {
    const slide = this.data.slides[index];
    if (!slide) return;

    this.currentSlideIndex = index;

    // Actualizar botones de navegación
    if (this.btnPrev) this.btnPrev.disabled = index === 0;
    if (this.btnNext) this.btnNext.disabled = index === this.totalSlides - 1;

    // Animar sutilmente la transición de la tarjeta
    if (window.gsap && this.cardElement) {
      gsap.fromTo(
        this.cardElement,
        { opacity: 0.7, y: direction * 8 },
        { opacity: 1, y: 0, duration: 0.28, ease: "power2.out" }
      );
    }

    // 1. Lado Izquierdo: Tarjeta Conceptual
    if (this.badgeElement) {
      this.badgeElement.textContent = `FILMINA ${index + 1} • ${slide.badge}`;
    }
    if (this.bloqueBadgeElement) {
      this.bloqueBadgeElement.textContent = slide.bloque || "TIG 2026";
    }
    if (this.slideTimeBadge) {
      this.slideTimeBadge.textContent = slide.tiempoEstimado || "45s";
    }
    if (this.titleElement) {
      this.titleElement.textContent = slide.titulo;
    }
    if (this.subtitleElement) {
      this.subtitleElement.textContent = slide.subtitulo;
    }

    // Bullets o Carátula de contenido
    if (this.bulletsElement) {
      this.bulletsElement.innerHTML = "";
      if (slide.esCaratula) {
        const autores = slide.autores || [
          {
            nombre: "Héctor Daniel Ayarachi Fuentes",
            titulo: "Tec. Sup. en Recursos Humanos",
            legajo: "CURZA-8284",
            dni: "35.492.138",
            rol: "Expositor",
            avatar: "👨‍💼",
            clase: "autor-hector",
            rolClase: "role-expositor"
          },
          {
            nombre: "Andrea Alejandra Díaz",
            titulo: "Estudiante Lic. en Recursos Humanos",
            legajo: "CURZA-7229",
            dni: "27.786.409",
            rol: "Expositora",
            avatar: "👩‍💼",
            clase: "autor-alejandra",
            rolClase: "role-expositora"
          }
        ];

        const caratulaBox = document.createElement("div");
        caratulaBox.className = "caratula-container";
        caratulaBox.innerHTML = `
          <div class="caratula-autores-title">
            <svg viewBox="0 0 20 20" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M16 17v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="10" cy="7" r="4"/></svg>
            <span>INTEGRANTES DEL EQUIPO EXPOSITOR</span>
          </div>

          <div class="caratula-autores-grid">
            ${autores.map((a) => `
              <div class="caratula-autor-card ${a.clase || ''}">
                <div class="caratula-avatar-circle">${a.avatar || '👤'}</div>
                <div class="caratula-autor-info">
                  <span class="caratula-autor-role ${a.rolClase || 'role-expositor'}">${a.rol || 'Expositor/a'}</span>
                  <h3 class="caratula-autor-nombre">${a.nombre}</h3>
                  <p class="caratula-autor-desc">${a.titulo || ''}</p>
                  <div class="caratula-autor-meta">
                    <span><strong>Legajo:</strong> ${a.legajo}</span>
                    <span><strong>DNI:</strong> ${a.dni}</span>
                  </div>
                </div>
              </div>
            `).join('')}
          </div>

          <div class="caratula-hero-box">
            <div class="caratula-inst-row">
              <span>🏛️ Universidad Nacional del Comahue • CURZAS</span>
            </div>
            <p class="caratula-carrera">Licenciatura en Recursos Humanos | Tecnologías de la Información para la Gestión 2026</p>
            <div class="caratula-practicas-pills">
              <span class="practica-pill"><strong>Módulo 1:</strong> Mapeo Sistémico Organizacional (Act. 6)</span>
              <span class="practica-pill"><strong>Módulo 2:</strong> Ficha de Diagnóstico y Rediseño (Act. 8)</span>
              <span class="practica-pill"><strong>Módulo 3:</strong> Pirámide y Tipos de Sistemas (Act. 9)</span>
            </div>
          </div>

          <div class="caratula-wiki-box">
            <div class="caratula-wiki-title">
              <svg viewBox="0 0 20 20" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 4h12v12H4zM4 8h12M8 4v12"/></svg>
              <span>TRABAJOS PRÁCTICOS DESARROLLADOS PARA LA WIKI DE CÁTEDRA</span>
            </div>
            <div class="caratula-wiki-list">
              <div class="caratula-wiki-item">
                <span>📌</span>
                <span><strong>Módulo 1 — Actividad 6 (Mapeo Sistémico):</strong> Aplicación de la TGS al ingreso de personal de salud bajo Leyes 1904/1844 en Catriel.</span>
              </div>
              <div class="caratula-wiki-item">
                <span>📌</span>
                <span><strong>Módulo 2 — Actividad 8 (Diagnóstico y Rediseño):</strong> Diagnóstico de las 5 preguntas cotidianas y rediseño integral ERP Cloud en Ecomoda S.A.</span>
              </div>
              <div class="caratula-wiki-item">
                <span>📌</span>
                <span><strong>Módulo 3 — Actividad 9 (Pirámide y Tipos de Sistemas):</strong> Alineación jerárquica de sistemas (TPS, MIS, DSS) y principio GIGO en Ecomoda S.A.</span>
              </div>
            </div>
          </div>
        `;
        this.bulletsElement.appendChild(caratulaBox);
      } else if (slide.tipo === "catriel_matrix" && slide.catrielData) {
        const catrielEl = this.renderCatrielMatrix(slide);
        if (catrielEl) this.bulletsElement.appendChild(catrielEl);
      } else if (slide.tipo === "ecomoda_diagnostico" && slide.ecomodaDiagData) {
        const diagEl = this.renderEcomodaDiagnostico(slide);
        if (diagEl) this.bulletsElement.appendChild(diagEl);
      } else if (slide.tipo === "ecomoda_rediseno" && slide.ecomodaRedesignData) {
        const redEl = this.renderEcomodaRediseno(slide);
        if (redEl) this.bulletsElement.appendChild(redEl);
      } else if (slide.tipo === "ecomoda_piramide" && slide.piramideData) {
        const pirEl = this.renderEcomodaPiramide(slide);
        if (pirEl) this.bulletsElement.appendChild(pirEl);
      } else if (slide.tipo === "conclusiones" && slide.conclusionesData) {
        const concEl = this.renderConclusiones(slide);
        if (concEl) this.bulletsElement.appendChild(concEl);
      } else {
        (slide.puntosClave || []).forEach((punto) => {
          const li = document.createElement("li");
          li.innerHTML = punto;
          this.bulletsElement.appendChild(li);
        });
      }
    }

    // Footer de la tarjeta
    if (this.footerMetaElement) {
      this.footerMetaElement.innerHTML = `
        <span>📌 ${slide.metadatosFooter}</span>
        <span>⏱️ Ritmo sugerido: ${slide.tiempoEstimado}</span>
      `;
    }

    // Contador y Barra de Progreso Superior
    if (this.slideCounter) {
      this.slideCounter.textContent = `${index + 1} / ${this.totalSlides}`;
    }
    if (this.progressBar) {
      const pct = Math.round(((index + 1) / this.totalSlides) * 100);
      this.progressBar.style.width = `${pct}%`;
    }

    // 2. Lado Derecho: Espacio Multimedia para GIFs
    this.renderGifPanel(slide, index);

    // 3. Guion del Orador (Teleprompter)
    if (this.notesBody) {
      this.notesBody.innerHTML = `
        <div style="background: rgba(180, 131, 36, 0.08); padding: 0.75rem 1rem; border-radius: 6px; border-left: 3px solid var(--gold-main); margin-bottom: 0.85rem;">
          <p style="font-weight: 700; color: var(--oxford-blue); font-size: 0.85rem;">🎯 ENCUADRE DE LA FILMINA ${index + 1}:</p>
          <p style="font-size: 0.82rem; color: var(--text-muted); margin-top: 0.2rem;">${slide.subtitulo}</p>
          <p style="font-size: 0.78rem; color: var(--gold-main); font-weight: 600; margin-top: 0.35rem;">⏱️ Ritmo sugerido: ${slide.tiempoEstimado}</p>
        </div>
        <p style="font-size: 0.95rem; line-height: 1.6; color: #1e293b; font-weight: 450;">
          ${slide.guionOrador}
        </p>
      `;
    }

    // 4. Actualizar estado de las estaciones superiores
    this.updateStationsHighlight(index);
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // RENDERIZADORES ESTRUCTURADOS CON LA INFORMACIÓN COMPLETA DE LOS PDF
  // ═══════════════════════════════════════════════════════════════════════════

  renderCatrielMatrix(slide) {
    const data = slide.catrielData;
    if (!data) return null;
    const container = document.createElement("div");
    container.className = "catriel-container";
    container.innerHTML = `
      <div class="catriel-meta-bar">
        <span>👥 <strong>Equipo:</strong> ${data.equipoMencion}</span>
        <span>⚖️ <strong>Marco Legal:</strong> ${data.marcoNormativo}</span>
      </div>
      <div class="catriel-grid-2x3">
        ${data.componentes.map((c) => `
          <div class="catriel-comp-card">
            <div class="catriel-comp-header">
              <span class="catriel-comp-badge ${c.clase}">${c.badge}</span>
              <span class="catriel-comp-title">${c.titulo}</span>
            </div>
            ${c.cuerpo ? `<div class="catriel-comp-body">${c.cuerpo}</div>` : ''}
            ${c.pasos ? `
              <ul class="catriel-pasos-list">
                ${c.pasos.map((p) => `<li>${p}</li>`).join('')}
              </ul>
            ` : ''}
          </div>
        `).join('')}
      </div>
    `;
    return container;
  }

  renderEcomodaDiagnostico(slide) {
    const data = slide.ecomodaDiagData;
    if (!data) return null;
    const container = document.createElement("div");
    container.className = "ecomoda-diag-container";
    container.innerHTML = `
      <div class="ecomoda-q-grid">
        ${data.preguntas.map((q) => `
          <div class="ecomoda-q-card ${q.esDestacada ? 'card-highlight' : ''}">
            <div class="ecomoda-q-card-header">
              <span class="ecomoda-q-num">${q.num}</span>
              <span class="ecomoda-q-title">${q.titulo}</span>
            </div>
            <div class="ecomoda-q-text">${q.falla}</div>
            <div class="ecomoda-q-text" style="color: #0369a1; font-size: 0.74rem; border-top: 1px dashed #cbd5e1; padding-top: 0.25rem; margin-top: 0.2rem;">
              <strong>Solución que propusimos:</strong> ${q.propuesta}
            </div>
          </div>
        `).join('')}
      </div>
      <div class="ecomoda-audit-strip">
        <span>🎨 <strong>${data.evidenciasAuditoria.hallazgoPaint}</strong></span>
        <span>📊 <strong>${data.evidenciasAuditoria.casoProduccion}</strong></span>
        <span>⏱️ <strong>${data.evidenciasAuditoria.casoHorarios}</strong></span>
      </div>
    `;
    return container;
  }

  renderEcomodaRediseno(slide) {
    const data = slide.ecomodaRedesignData;
    if (!data) return null;
    const container = document.createElement("div");
    container.className = "ecomoda-redesign-container";
    container.innerHTML = `
      <div class="redesign-miradas-grid">
        ${data.miradas.map((m) => `
          <div class="redesign-mirada-card ${m.clase}">
            <div class="redesign-mirada-title">
              <span>${m.icono}</span>
              <span>${m.tipo}</span>
            </div>
            <div class="redesign-mirada-desc" style="font-weight: 700; color: var(--oxford-blue); font-size: 0.78rem;">${m.titulo}</div>
            ${m.puntos.map((p) => `<div class="redesign-mirada-desc">${p}</div>`).join('')}
          </div>
        `).join('')}
      </div>
      <div class="redesign-pedidos-box">
        <div class="redesign-pedidos-title">
          <svg viewBox="0 0 20 20" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 4h12v12H4zM4 8h12M8 4v12"/></svg>
          <span>3 PEDIDOS AUTOMÁTICOS QUE LE HICIMOS AL SISTEMA</span>
        </div>
        <div class="redesign-pedidos-grid">
          ${data.pedidosSistema.map((p) => `
            <div class="redesign-pedido-item">
              <strong style="color: var(--oxford-blue); display: block; margin-bottom: 0.15rem;">${p.num}: ${p.titulo}</strong>
              <span>${p.desc}</span>
            </div>
          `).join('')}
        </div>
      </div>
    `;
    return container;
  }

  renderEcomodaPiramide(slide) {
    const data = slide.piramideData;
    if (!data) return null;
    const container = document.createElement("div");
    container.className = "piramide-container";
    container.innerHTML = `
      <div class="piramide-tiers-wrapper">
        ${data.niveles.map((n) => `
          <div class="piramide-tier-card ${n.clase}">
            <div class="piramide-tier-top">
              <span class="piramide-tier-badge">${n.badge}</span>
              <span class="piramide-sistema-tag">${n.sistema}</span>
            </div>
            <div class="piramide-tier-roles">${n.roles}</div>
            <div class="piramide-tier-desc">${n.entradasYSalidas}</div>
          </div>
        `).join('')}
      </div>
      <div class="piramide-pipeline-footer">
        <span>🔄 ${data.pipelineGigo}</span>
      </div>
    `;
    return container;
  }

  renderConclusiones(slide) {
    const data = slide.conclusionesData;
    if (!data) return null;
    const container = document.createElement("div");
    container.className = "conclusiones-container";
    container.innerHTML = `
      <div class="conclusiones-grid">
        ${data.map((c) => `
          <div class="conclusion-card">
            <div class="conclusion-card-header">
              <span class="conclusion-icon">${c.icono}</span>
              <span class="conclusion-title">${c.titulo}</span>
            </div>
            <div class="conclusion-body">${c.cuerpo}</div>
          </div>
        `).join('')}
      </div>
      <div class="conclusiones-wiki-final">
        <span>🌐 <strong>Wiki de Cátedra:</strong> Sistematización completa cargada en la Wiki de Tecnologías de la Información para la Gestión (TIG 2026).</span>
        <span>🎓 <strong>CURZAS • UNCo</strong> | Licenciatura en Recursos Humanos</span>
      </div>
    `;
    return container;
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // PANEL MULTIMEDIA DEDICADO PARA GIFS Y VIDEOS MP4 (LADO DERECHO)
  // ═══════════════════════════════════════════════════════════════════════════
  renderGifPanel(slide, index) {
    if (!this.gifCard) return;

    const gifData = slide.gif || {};

    if (this.gifSlideTag) {
      this.gifSlideTag.textContent = `FILMINA ${index + 1} / ${this.totalSlides}`;
    }
    if (this.gifCaption) {
      this.gifCaption.textContent = gifData.caption || `Figura ${index + 1}: Demostración visual de la práctica.`;
    }

    const url = (gifData.url || "").trim();
    const isVideo = url.toLowerCase().endsWith(".mp4") || url.toLowerCase().endsWith(".webm") || url.toLowerCase().endsWith(".mov");
    const mediaUrl = (!isVideo && url !== "") ? (url.includes("?") ? `${url}&v=5.8` : `${url}?v=5.8`) : url;

    if (url !== "") {
      if (isVideo) {
        if (this.slideGifImg) {
          this.slideGifImg.style.display = "none";
          this.slideGifImg.src = "";
        }
        if (this.slideGifVideo) {
          this.slideGifVideo.src = url;
          this.slideGifVideo.style.display = "block";
          if (typeof this.slideGifVideo.play === "function") {
            const playPromise = this.slideGifVideo.play();
            if (playPromise !== undefined) {
              playPromise.catch(() => {});
            }
          }
        }
        if (this.gifViewport) {
          this.gifViewport.classList.add("has-media");
        }
        if (this.gifPlaceholder) {
          this.gifPlaceholder.style.display = "none";
        }
      } else {
        if (this.slideGifVideo) {
          if (typeof this.slideGifVideo.pause === "function") {
            this.slideGifVideo.pause();
          }
          this.slideGifVideo.style.display = "none";
          this.slideGifVideo.src = "";
        }
        const testImg = new Image();
        testImg.onload = () => {
          if (this.slideGifImg && this.gifPlaceholder) {
            this.slideGifImg.src = mediaUrl;
            this.slideGifImg.style.display = "block";
            this.gifPlaceholder.style.display = "none";
            if (this.gifViewport) {
              this.gifViewport.classList.add("has-media");
            }
          }
        };
        testImg.onerror = () => {
          this.renderGifPlaceholder(gifData, index);
        };
        testImg.src = mediaUrl;
      }
    } else {
      if (this.slideGifVideo) {
        if (typeof this.slideGifVideo.pause === "function") {
          this.slideGifVideo.pause();
        }
        this.slideGifVideo.style.display = "none";
        this.slideGifVideo.src = "";
      }
      this.renderGifPlaceholder(gifData, index);
    }
  }

  renderGifPlaceholder(gifData, index) {
    if (this.gifViewport) {
      this.gifViewport.classList.remove("has-media");
    }
    if (this.slideGifImg) {
      this.slideGifImg.style.display = "none";
      this.slideGifImg.src = "";
    }
    if (this.slideGifVideo) {
      this.slideGifVideo.pause();
      this.slideGifVideo.style.display = "none";
      this.slideGifVideo.src = "";
    }
    if (this.gifPlaceholder) {
      this.gifPlaceholder.style.display = "flex";
    }
    if (this.gifPlaceholderIcon) {
      this.gifPlaceholderIcon.textContent = gifData.placeholderIcon || "🎬";
    }
    if (this.gifPlaceholderTitle) {
      this.gifPlaceholderTitle.textContent = gifData.placeholderTitulo || `GIF Sugerido: Filmina ${index + 1}`;
    }
    if (this.gifPlaceholderDesc) {
      this.gifPlaceholderDesc.textContent = gifData.placeholderDesc || "Espacio reservado para el archivo GIF de esta práctica.";
    }
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // MODAL LIGHTBOX: AMPLIACIÓN INTERACTIVA DE ESQUEMAS ISOMÉTRICOS Y VIDEOS
  // ═══════════════════════════════════════════════════════════════════════════
  getCurrentSlide() {
    return (this.data && this.data.slides && this.data.slides[this.currentSlideIndex])
      ? this.data.slides[this.currentSlideIndex]
      : null;
  }

  openMediaLightbox() {
    if (!this.mediaLightboxModal) return;
    const slide = this.getCurrentSlide();
    if (!slide || !slide.gif) return;

    const gifData = slide.gif;
    const url = (gifData.url || "").trim();
    if (!url) return;

    if (this.lightboxTag) {
      this.lightboxTag.textContent = `FILMINA ${this.currentSlideIndex + 1} / ${this.totalSlides}`;
    }
    if (this.lightboxTitle) {
      this.lightboxTitle.textContent = gifData.placeholderTitulo || slide.titulo;
    }
    if (this.lightboxBadge) {
      const isVideo = url.toLowerCase().endsWith(".mp4") || url.toLowerCase().endsWith(".webm");
      this.lightboxBadge.textContent = isVideo ? "ANIMACIÓN MP4" : "ESQUEMA ISOMÉTRICO (TIG)";
    }
    if (this.lightboxCaption) {
      this.lightboxCaption.textContent = gifData.caption || `Figura ${this.currentSlideIndex + 1}: Demostración visual ampliada.`;
    }

    const isVideo = url.toLowerCase().endsWith(".mp4") || url.toLowerCase().endsWith(".webm");
    const mediaUrl = (!isVideo && url !== "") ? (url.includes("?") ? `${url}&v=5.8` : `${url}?v=5.8`) : url;

    if (isVideo) {
      if (this.floatingDock) this.floatingDock.style.display = "none";
      if (this.lightboxImg) {
        this.lightboxImg.style.display = "none";
        this.lightboxImg.src = "";
      }
      if (this.lightboxVideo) {
        this.lightboxVideo.src = url;
        this.lightboxVideo.style.display = "block";
        if (typeof this.lightboxVideo.play === "function") {
          const p = this.lightboxVideo.play();
          if (p !== undefined) p.catch(() => {});
        }
      }
    } else {
      if (this.floatingDock) this.floatingDock.style.display = "flex";
      this.resetMediaZoom();
      if (this.lightboxVideo) {
        if (typeof this.lightboxVideo.pause === "function") {
          this.lightboxVideo.pause();
        }
        this.lightboxVideo.style.display = "none";
        this.lightboxVideo.src = "";
      }
      if (this.lightboxImg) {
        this.lightboxImg.src = mediaUrl;
        this.lightboxImg.style.display = "block";
      }
    }

    this.mediaLightboxModal.style.display = "flex";
    this.mediaLightboxModal.setAttribute("aria-hidden", "false");
  }

  closeMediaLightbox() {
    if (!this.mediaLightboxModal) return;
    this.mediaLightboxModal.style.display = "none";
    this.mediaLightboxModal.setAttribute("aria-hidden", "true");
    this.resetMediaZoom();
    if (this.lightboxVideo && typeof this.lightboxVideo.pause === "function") {
      this.lightboxVideo.pause();
      this.lightboxVideo.src = "";
    }
    if (this.lightboxImg) {
      this.lightboxImg.src = "";
    }
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // SISTEMA INTERACTIVO DE ZOOM & PAN CON LÍMITES INTELIGENTES (UX/UI PROFESIONAL)
  // ═══════════════════════════════════════════════════════════════════════════
  initLightboxZoom() {
    // 1. Controles del Dock Flotante
    if (this.btnDockZoomIn) {
      this.btnDockZoomIn.addEventListener("click", (e) => {
        e.stopPropagation();
        this.zoomIn();
      });
    }
    if (this.btnDockZoomOut) {
      this.btnDockZoomOut.addEventListener("click", (e) => {
        e.stopPropagation();
        this.zoomOut();
      });
    }
    if (this.btnDockReset) {
      this.btnDockReset.addEventListener("click", (e) => {
        e.stopPropagation();
        this.resetMediaZoom();
      });
    }
    if (this.btnDockPreset2x) {
      this.btnDockPreset2x.addEventListener("click", (e) => {
        e.stopPropagation();
        this.setZoom(Math.abs(this.zoomLevel - 2) < 0.2 ? 1 : 2);
      });
    }
    if (this.dockZoomBadge) {
      this.dockZoomBadge.addEventListener("click", (e) => {
        e.stopPropagation();
        this.setZoom(this.zoomLevel <= 1 ? 2 : 1);
      });
    }

    // Evitar que el clic o arrastre sobre el dock interactúe con el fondo o la imagen
    if (this.floatingDock) {
      this.floatingDock.addEventListener("mousedown", (e) => e.stopPropagation());
      this.floatingDock.addEventListener("touchstart", (e) => e.stopPropagation(), { passive: true });
      this.floatingDock.addEventListener("wheel", (e) => e.stopPropagation(), { passive: true });
      this.floatingDock.addEventListener("dblclick", (e) => e.stopPropagation());
    }

    if (this.lightboxBody) {
      // 2. Zoom Progresivo con la Rueda del Mouse (Suave y con Clamping)
      this.lightboxBody.addEventListener("wheel", (e) => {
        if (!this.lightboxImg || this.lightboxImg.style.display === "none") return;
        if (e.target && e.target.closest && e.target.closest("#lightbox-floating-dock")) return;
        e.preventDefault();
        const factor = e.deltaY < 0 ? 0.3 : -0.3;
        this.setZoom(this.zoomLevel + factor);
      }, { passive: false });

      // 3. Doble Clic para alternar rápidamente entre 100% (Ajustar) y 200% (Detalle)
      this.lightboxBody.addEventListener("dblclick", (e) => {
        if (!this.lightboxImg || this.lightboxImg.style.display === "none") return;
        if (e.target && e.target.closest && e.target.closest("#lightbox-floating-dock")) return;
        if (this.zoomLevel > 1) {
          this.resetMediaZoom();
        } else {
          this.setZoom(2);
        }
      });

      // 4. Arrastre con Clic Sostenido (Pan) con LÍMITES ESTRICTOS (No se puede salir ni romper)
      this.lightboxBody.addEventListener("mousedown", (e) => {
        if (!this.lightboxImg || this.lightboxImg.style.display === "none") return;
        if (e.target && e.target.closest && e.target.closest("#lightbox-floating-dock")) return;
        if (this.zoomLevel > 1 && e.button === 0) {
          this.isPanning = true;
          this.panStartX = e.clientX - this.panX;
          this.panStartY = e.clientY - this.panY;
          this.lightboxBody.classList.add("is-dragging");
          this.applyMediaTransform(false);
          e.preventDefault();
        }
      });

      // 5. Soporte Táctil Completo (Pinch to Zoom y Pan en Móviles / Tablets)
      let initialTouchDist = 0;
      let initialZoom = 1;

      this.lightboxBody.addEventListener("touchstart", (e) => {
        if (!this.lightboxImg || this.lightboxImg.style.display === "none") return;
        if (e.target && e.target.closest && e.target.closest("#lightbox-floating-dock")) return;

        if (e.touches.length === 1 && this.zoomLevel > 1) {
          this.isPanning = true;
          this.panStartX = e.touches[0].clientX - this.panX;
          this.panStartY = e.touches[0].clientY - this.panY;
        } else if (e.touches.length === 2) {
          this.isPanning = false;
          initialTouchDist = Math.hypot(
            e.touches[0].clientX - e.touches[1].clientX,
            e.touches[0].clientY - e.touches[1].clientY
          );
          initialZoom = this.zoomLevel;
        }
      }, { passive: true });

      this.lightboxBody.addEventListener("touchmove", (e) => {
        if (!this.lightboxImg || this.lightboxImg.style.display === "none") return;
        if (e.target && e.target.closest && e.target.closest("#lightbox-floating-dock")) return;

        if (e.touches.length === 1 && this.isPanning && this.zoomLevel > 1) {
          this.panX = e.touches[0].clientX - this.panStartX;
          this.panY = e.touches[0].clientY - this.panStartY;
          this.clampPan();
          this.applyMediaTransform(false);
        } else if (e.touches.length === 2 && initialTouchDist > 0) {
          const currentDist = Math.hypot(
            e.touches[0].clientX - e.touches[1].clientX,
            e.touches[0].clientY - e.touches[1].clientY
          );
          const pinchScale = currentDist / initialTouchDist;
          this.setZoom(initialZoom * pinchScale);
        }
      }, { passive: true });

      this.lightboxBody.addEventListener("touchend", () => {
        if (this.isPanning) {
          this.isPanning = false;
          this.clampPan();
          this.applyMediaTransform(true);
        }
        initialTouchDist = 0;
      });
    }

    // 6. Seguimiento de Mouse Global durante el Arrastre
    window.addEventListener("mousemove", (e) => {
      if (this.isPanning && this.zoomLevel > 1) {
        this.panX = e.clientX - this.panStartX;
        this.panY = e.clientY - this.panStartY;
        this.clampPan();
        this.applyMediaTransform(false);
      }
    });

    window.addEventListener("mouseup", () => {
      if (this.isPanning) {
        this.isPanning = false;
        if (this.lightboxBody) this.lightboxBody.classList.remove("is-dragging");
        this.clampPan();
        this.applyMediaTransform(true);
      }
    });

    // 7. Recalcular límites si cambia el tamaño de la ventana
    window.addEventListener("resize", () => {
      if (this.mediaLightboxModal && this.mediaLightboxModal.style.display !== "none") {
        this.clampPan();
        this.applyMediaTransform(true);
      }
    });
  }

  // Clamping riguroso: impide que el diagrama salga del marco o se rompa
  clampPan() {
    if (this.zoomLevel <= 1) {
      this.panX = 0;
      this.panY = 0;
      return;
    }
    if (!this.lightboxBody || !this.lightboxImg) return;

    const boxW = this.lightboxBody.clientWidth || 800;
    const boxH = this.lightboxBody.clientHeight || 600;

    const baseW = (this.lightboxImg.offsetWidth && this.lightboxImg.offsetWidth > 0)
      ? this.lightboxImg.offsetWidth
      : Math.min(boxW * 0.85, boxH * 0.85);
    const baseH = (this.lightboxImg.offsetHeight && this.lightboxImg.offsetHeight > 0)
      ? this.lightboxImg.offsetHeight
      : baseW;

    const scaledW = baseW * this.zoomLevel;
    const scaledH = baseH * this.zoomLevel;

    // Margen de seguridad para que los extremos del SVG se puedan leer con holgura pero NUNCA se pierdan
    const maxPanX = Math.max(0, (scaledW - boxW) / 2) + 60;
    const maxPanY = Math.max(0, (scaledH - boxH) / 2) + 60;

    this.panX = Math.max(-maxPanX, Math.min(maxPanX, this.panX));
    this.panY = Math.max(-maxPanY, Math.min(maxPanY, this.panY));
  }

  setZoom(level) {
    const clamped = Math.max(1, Math.min(4.5, Math.round(level * 10) / 10));
    this.zoomLevel = clamped;
    this.clampPan();
    this.applyMediaTransform(true);
    this.updateZoomControlsUI();
  }

  zoomIn(step = 0.4) {
    this.setZoom(this.zoomLevel + step);
  }

  zoomOut(step = 0.4) {
    this.setZoom(this.zoomLevel - step);
  }

  resetMediaZoom() {
    this.zoomLevel = 1;
    this.panX = 0;
    this.panY = 0;
    this.isPanning = false;
    if (this.lightboxBody) {
      this.lightboxBody.classList.remove("is-zoomed", "is-dragging");
    }
    this.applyMediaTransform(true);
    this.updateZoomControlsUI();
  }

  applyMediaTransform(smooth = true) {
    if (!this.lightboxImg) return;
    this.lightboxImg.style.transition = smooth
      ? "transform 0.22s cubic-bezier(0.2, 0, 0, 1)"
      : "none";
    this.lightboxImg.style.transform = `translate(${Math.round(this.panX)}px, ${Math.round(this.panY)}px) scale(${this.zoomLevel})`;

    if (this.lightboxBody) {
      if (this.zoomLevel > 1) {
        this.lightboxBody.classList.add("is-zoomed");
      } else {
        this.lightboxBody.classList.remove("is-zoomed", "is-dragging");
      }
    }
  }

  updateZoomControlsUI() {
    const percentText = `${Math.round(this.zoomLevel * 100)}%`;
    if (this.dockZoomText) {
      this.dockZoomText.textContent = percentText;
    }
    if (this.btnDockZoomOut) {
      this.btnDockZoomOut.disabled = this.zoomLevel <= 1;
    }
    if (this.btnDockZoomIn) {
      this.btnDockZoomIn.disabled = this.zoomLevel >= 4.5;
    }
    if (this.btnDockPreset2x) {
      this.btnDockPreset2x.classList.toggle("is-active", Math.abs(this.zoomLevel - 2) < 0.15);
    }
    if (this.dockHintText) {
      this.dockHintText.textContent = this.zoomLevel > 1 ? "Arrastre para explorar" : "Doble clic para 200%";
    }
  }

  toggleTextExpanded() {
    this.isTextExpanded = !this.isTextExpanded;
    if (this.cardElement) {
      this.cardElement.classList.toggle("expanded", this.isTextExpanded);
    }
    if (this.slideMediaStage) {
      this.slideMediaStage.classList.toggle("hidden", this.isTextExpanded);
    }
    if (this.btnViewText) {
      this.btnViewText.classList.toggle("active", this.isTextExpanded);
      const label = this.btnViewText.querySelector(".tool-text");
      if (label) label.textContent = this.isTextExpanded ? "Ver GIF" : "Ver Texto";
    }
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // ESTACIONES DEL DOCK SUPERIOR
  // ═══════════════════════════════════════════════════════════════════════════
  renderStationsIndicator() {
    if (!this.stationsContainer) return;
    this.stationsContainer.innerHTML = "";

    const estaciones = this.data.estaciones || [];
    estaciones.forEach((est, idx) => {
      const dot = document.createElement("button");
      dot.className = "station-dot";
      dot.setAttribute("data-slide-index", est.numero);
      dot.setAttribute("title", est.tooltip || `Ir a Filmina ${est.numero}`);
      dot.setAttribute("aria-label", `Filmina ${est.numero}: ${est.etiqueta}`);

      dot.innerHTML = `
        <span class="station-dot-hitbox"></span>
        <span class="station-dot-core"></span>
      `;

      dot.addEventListener("click", () => this.goToSlide(idx));
      this.stationsContainer.appendChild(dot);
    });
  }

  updateStationsHighlight(currentIndex) {
    if (!this.stationsContainer) return;
    const dots = this.stationsContainer.querySelectorAll(".station-dot");
    dots.forEach((dot, idx) => {
      dot.classList.toggle("active", idx === currentIndex);
      dot.classList.toggle("passed", idx < currentIndex);
    });
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // CRONÓMETRO ACADÉMICO DE 5 MINUTOS (05:00)
  // ═══════════════════════════════════════════════════════════════════════════
  toggleTimer() {
    if (this.timerRunning) {
      this.pauseTimer();
    } else {
      this.startTimer();
    }
  }

  startTimer() {
    if (this.timerRunning) return;
    this.timerRunning = true;
    if (this.btnTimerToggle) {
      this.btnTimerToggle.textContent = "⏸";
      this.btnTimerToggle.title = "Pausar Cronómetro (T)";
    }

    this.timerInterval = setInterval(() => {
      if (this.remainingSeconds > 0) {
        this.remainingSeconds--;
        this.updateTimerDisplay();
      } else {
        this.pauseTimer();
        if (this.timerDisplay) {
          this.timerDisplay.textContent = "00:00";
          this.timerDisplay.style.color = "#dc2626";
        }
      }
    }, 1000);
  }

  pauseTimer() {
    this.timerRunning = false;
    clearInterval(this.timerInterval);
    if (this.btnTimerToggle) {
      this.btnTimerToggle.textContent = "▶";
      this.btnTimerToggle.title = "Iniciar Cronómetro (T)";
    }
  }

  resetTimer() {
    this.pauseTimer();
    this.remainingSeconds = this.totalSeconds;
    this.updateTimerDisplay();
  }

  updateTimerDisplay() {
    if (!this.timerDisplay) return;
    const mins = Math.floor(this.remainingSeconds / 60);
    const secs = this.remainingSeconds % 60;
    this.timerDisplay.textContent = `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;

    // Colores de alerta académica
    const elapsedSeconds = this.totalSeconds - this.remainingSeconds;
    const alertaAmarilla = (this.data.timing?.alertaAmarillaMinutos || 3.5) * 60; // 3:30 (quedan 1:30)
    const alertaRoja = (this.data.timing?.alertaRojaMinutos || 4.5) * 60;         // 4:30 (quedan 30s)

    if (elapsedSeconds >= alertaRoja) {
      this.timerDisplay.style.color = "#dc2626"; // Rojo
    } else if (elapsedSeconds >= alertaAmarilla) {
      this.timerDisplay.style.color = "#d97706"; // Ámbar
    } else {
      this.timerDisplay.style.color = "var(--gold-main)";
    }
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // MODALES FLOTANTES (NOTAS, RESPALDO JURADO, ÍNDICE, ATAJOS)
  // ═══════════════════════════════════════════════════════════════════════════
  toggleNotes(forceState) {
    if (!this.notesModal) return;
    const shouldOpen = forceState !== undefined ? forceState : !this.notesModal.classList.contains("open");
    this.notesModal.classList.toggle("open", shouldOpen);
    if (this.btnToggleNotes) {
      this.btnToggleNotes.classList.toggle("active", shouldOpen);
    }
  }

  toggleDrawer(forceState) {
    if (!this.drawerPanel) return;
    const shouldOpen = forceState !== undefined ? forceState : !this.drawerPanel.classList.contains("open");
    this.drawerPanel.classList.toggle("open", shouldOpen);
    if (this.drawerBackdrop) {
      this.drawerBackdrop.classList.toggle("open", shouldOpen);
    }
    if (this.btnToggleDrawer) {
      this.btnToggleDrawer.classList.toggle("active", shouldOpen);
    }
    if (shouldOpen) {
      // Activar por defecto la pestaña de prácticas
      const activeTab = document.querySelector(".drawer-tab.active")?.dataset.tab || "practicas";
      this.renderDrawerTab(activeTab);
    }
  }

  toggleSlidesIndex(forceState) {
    if (!this.slidesIndexPanel) return;
    const shouldOpen = forceState !== undefined ? forceState : !this.slidesIndexPanel.classList.contains("open");
    this.slidesIndexPanel.classList.toggle("open", shouldOpen);
    if (this.slidesIndexBackdrop) {
      this.slidesIndexBackdrop.classList.toggle("open", shouldOpen);
    }
    if (this.slideCounterBadge) {
      this.slideCounterBadge.classList.toggle("active", shouldOpen);
    }
  }

  toggleShortcuts(forceState) {
    if (!this.shortcutsModal) return;
    const shouldOpen = forceState !== undefined ? forceState : !this.shortcutsModal.classList.contains("open");
    this.shortcutsModal.classList.toggle("open", shouldOpen);
    if (this.shortcutsBackdrop) {
      this.shortcutsBackdrop.classList.toggle("open", shouldOpen);
    }
    if (this.btnShortcuts) {
      this.btnShortcuts.classList.toggle("active", shouldOpen);
    }
  }

  toggleFullscreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      if (this.btnFullscreen) this.btnFullscreen.classList.add("active");
    } else {
      if (document.exitFullscreen) document.exitFullscreen().catch(() => {});
      if (this.btnFullscreen) this.btnFullscreen.classList.remove("active");
    }
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // CONTENIDO DEL DRAWER DE RESPALDO (PESTAÑAS)
  // ═══════════════════════════════════════════════════════════════════════════
  populateDrawerContent() {
    this.renderDrawerTab("practicas");
  }

  renderDrawerTab(tabName) {
    if (!this.drawerContent) return;
    const respaldo = this.data.fichasRespaldo || {};

    let html = "";

    if (tabName === "practicas") {
      const practicas = respaldo.practicas || [];
      html = `
        <div style="margin-bottom: 1rem;">
          <h4 style="font-family: var(--font-title); font-size: 1.25rem; color: var(--oxford-blue); margin-bottom: 0.35rem;">
            📚 Recorrido de los 3 Trabajos Prácticos de la Cátedra
          </h4>
          <p style="font-size: 0.85rem; color: var(--text-muted); line-height: 1.45;">
            Sistematización y respaldo metodológico de las actividades prácticas evaluadas en la materia.
          </p>
        </div>
        <div style="display: flex; flex-direction: column; gap: 1rem;">
          ${practicas.map((p) => `
            <div style="background: #ffffff; border: 1px solid var(--gold-border); border-radius: 8px; padding: 1rem 1.2rem; box-shadow: 0 4px 14px rgba(15,23,42,0.04);">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.45rem;">
                <span style="font-family: var(--font-serif); font-size: 0.75rem; font-weight: 700; color: var(--gold-main); background: var(--gold-dim); padding: 0.25rem 0.55rem; border-radius: 4px; border: 1px solid var(--gold-border);">${p.codigo}</span>
                <span style="font-size: 0.74rem; color: var(--text-dim); font-weight: 500;">Equipo CURZAS</span>
              </div>
              <h5 style="font-family: var(--font-title); font-size: 1.15rem; color: var(--oxford-blue); margin-bottom: 0.45rem; line-height: 1.3;">
                ${p.titulo}
              </h5>
              <p style="font-size: 0.84rem; color: var(--text-main); line-height: 1.5; margin-bottom: 0.6rem;">
                ${p.resumen}
              </p>
              <div style="font-size: 0.78rem; color: var(--text-muted); background: rgba(15,23,42,0.03); padding: 0.4rem 0.6rem; border-radius: 4px; margin-bottom: 0.75rem;">
                <strong>👥 Integrantes:</strong> ${p.integrantes}
              </div>
              <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
                <button onclick="window.app.openDocModal('${p.archivoPdf}', '${p.titulo}', '${p.codigo}')" style="background: var(--gold-main); color: #ffffff; border: none; padding: 0.4rem 0.85rem; border-radius: 4px; font-size: 0.78rem; font-weight: 600; cursor: pointer; display: inline-flex; align-items: center; gap: 0.35rem;">
                  <span>📖 Ver PDF en Visor</span>
                </button>
                <a href="${p.archivoPdf}" target="_blank" style="background: transparent; color: var(--oxford-blue); border: 1px solid rgba(15,23,42,0.2); padding: 0.4rem 0.85rem; border-radius: 4px; font-size: 0.78rem; font-weight: 500; text-decoration: none; display: inline-flex; align-items: center; gap: 0.35rem;">
                  <span>↗ Nueva Pestaña</span>
                </a>
              </div>
            </div>
          `).join("")}
        </div>
      `;
    } else if (tabName === "autores") {
      const autores = respaldo.autores || [];
      html = `
        <div style="display: flex; flex-direction: column; gap: 1rem;">
          ${autores.map((a) => `
            <div style="background: #ffffff; border: 1px solid rgba(15,23,42,0.12); border-left: 3px solid var(--gold-main); border-radius: 6px; padding: 1rem; box-shadow: 0 2px 8px rgba(15,23,42,0.03);">
              <h5 style="font-size: 1rem; font-weight: 700; color: var(--oxford-blue); margin-bottom: 0.2rem;">${a.nombre}</h5>
              <p style="font-size: 0.8rem; color: var(--gold-main); font-weight: 600; margin-bottom: 0.4rem;">${a.concepto} • <em>${a.obra}</em></p>
              <blockquote style="font-size: 0.82rem; color: var(--text-muted); font-style: italic; border-left: 2px solid rgba(180,131,36,0.3); padding-left: 0.65rem; margin: 0.4rem 0 0.55rem 0;">
                «${a.cita}»
              </blockquote>
              <p style="font-size: 0.78rem; color: var(--text-main); background: rgba(180,131,36,0.06); padding: 0.35rem 0.55rem; border-radius: 4px;">
                <strong>📌 Aplicación en la Exposición:</strong> ${a.aplicacion}
              </p>
            </div>
          `).join("")}
        </div>
      `;
    } else if (tabName === "normativa") {
      const normas = respaldo.normativa || [];
      html = `
        <div style="display: flex; flex-direction: column; gap: 1rem;">
          ${normas.map((n) => `
            <div style="background: #ffffff; border: 1px solid rgba(15,23,42,0.12); border-radius: 6px; padding: 1rem; box-shadow: 0 2px 8px rgba(15,23,42,0.03);">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.3rem;">
                <span style="font-weight: 700; color: var(--oxford-blue); font-size: 0.92rem;">${n.norma}</span>
                <span style="font-size: 0.72rem; color: var(--gold-main); font-weight: 600;">Estatuto Sanitario / Laboral</span>
              </div>
              <h6 style="font-size: 0.84rem; color: var(--text-muted); margin-bottom: 0.4rem;">${n.titulo}</h6>
              <p style="font-size: 0.8rem; color: #334155; margin-bottom: 0.4rem;"><strong>Articulado clave:</strong> ${n.articulos}</p>
              <p style="font-size: 0.78rem; color: var(--text-dim); background: rgba(15,23,42,0.03); padding: 0.35rem 0.5rem; border-radius: 4px;">
                <strong>Relevancia:</strong> ${n.relevancia}
              </p>
            </div>
          `).join("")}
        </div>
      `;
    } else if (tabName === "faq") {
      const faqs = respaldo.faq || [];
      html = `
        <div style="display: flex; flex-direction: column; gap: 1rem;">
          ${faqs.map((f, i) => `
            <div style="background: #ffffff; border: 1px solid rgba(15,23,42,0.12); border-radius: 6px; padding: 1rem; box-shadow: 0 2px 8px rgba(15,23,42,0.03);">
              <h5 style="font-size: 0.88rem; font-weight: 700; color: var(--oxford-blue); margin-bottom: 0.45rem;">
                ❓ ${i + 1}. ${f.pregunta}
              </h5>
              <p style="font-size: 0.82rem; color: var(--text-main); line-height: 1.5; background: rgba(180,131,36,0.05); padding: 0.55rem 0.75rem; border-radius: 4px; border-left: 2px solid var(--gold-main);">
                💡 <strong>Respuesta de Cátedra:</strong> ${f.respuesta}
              </p>
            </div>
          `).join("")}
        </div>
      `;
    } else if (tabName === "catedra") {
      const items = window.CATEDRA_MATERIAL_DATA || [];
      html = `
        <div style="margin-bottom: 0.8rem;">
          <h4 style="font-size: 1.15rem; font-family: var(--font-title); color: var(--oxford-blue); margin-bottom: 0.25rem;">
            📁 Materiales y Trabajos Prácticos en PDF
          </h4>
          <p style="font-size: 0.82rem; color: var(--text-muted);">
            Descarga o visualización directa de los informes completos evaluados en la materia.
          </p>
        </div>
        <div style="display: flex; flex-direction: column; gap: 0.75rem;">
          ${items.map((it) => `
            <div style="background: #ffffff; border: 1px solid rgba(15,23,42,0.12); border-radius: 6px; padding: 0.85rem 1rem; display: flex; justify-content: space-between; align-items: center; gap: 1rem;">
              <div style="flex: 1;">
                <div style="display: flex; gap: 0.4rem; align-items: center; margin-bottom: 0.2rem;">
                  <span style="font-size: 0.7rem; font-weight: 700; background: var(--gold-dim); color: var(--gold-main); padding: 0.15rem 0.45rem; border-radius: 3px;">${it.codigo}</span>
                  <span style="font-size: 0.72rem; color: var(--text-dim);">${it.tamano} • ${it.fecha}</span>
                </div>
                <h5 style="font-size: 0.88rem; color: var(--oxford-blue); font-weight: 600; line-height: 1.3;">${it.titulo}</h5>
                <p style="font-size: 0.76rem; color: var(--text-muted); margin-top: 0.2rem;">${it.autores}</p>
              </div>
              <div style="display: flex; gap: 0.4rem;">
                <button onclick="window.app.openDocModal('${it.archivo}', '${it.titulo}', '${it.codigo}')" style="background: var(--gold-main); color: #fff; border: none; padding: 0.35rem 0.7rem; border-radius: 4px; font-size: 0.74rem; font-weight: 600; cursor: pointer;">
                  Ver PDF
                </button>
                <a href="${it.archivo}" download style="background: transparent; border: 1px solid rgba(15,23,42,0.2); color: var(--oxford-blue); padding: 0.35rem 0.7rem; border-radius: 4px; font-size: 0.74rem; text-decoration: none;">
                  ⬇
                </a>
              </div>
            </div>
          `).join("")}
        </div>
      `;
    }

    this.drawerContent.innerHTML = html;
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // VISOR MODAL DE DOCUMENTOS PDF
  // ═══════════════════════════════════════════════════════════════════════════
  openDocModal(url, title, badge = "PDF") {
    if (!this.docModal) return;
    if (this.docModalTitle) this.docModalTitle.textContent = title;
    if (this.docModalBadge) this.docModalBadge.textContent = badge;
    if (this.docModalFrame) this.docModalFrame.src = url;
    if (this.btnDocNewTab) this.btnDocNewTab.href = url;
    if (this.btnDocDownload) this.btnDocDownload.href = url;

    this.docModal.classList.add("open");
    if (this.docModalBackdrop) this.docModalBackdrop.classList.add("open");
  }

  closeDocModal() {
    if (!this.docModal) return;
    this.docModal.classList.remove("open", "maximized");
    if (this.docModalBackdrop) this.docModalBackdrop.classList.remove("open");
    if (this.docModalFrame) this.docModalFrame.src = "";
    this.isDocMaximized = false;
    if (this.btnDocMaximize) this.btnDocMaximize.textContent = "⛶ Maximizar";
  }

  toggleDocMaximize() {
    this.isDocMaximized = !this.isDocMaximized;
    if (this.docModal) this.docModal.classList.toggle("maximized", this.isDocMaximized);
    if (this.btnDocMaximize) {
      this.btnDocMaximize.textContent = this.isDocMaximized ? "🗗 Restaurar" : "⛶ Maximizar";
    }
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // ÍNDICE CANÓNICO DE LAS 6 FILMINAS (5 MINUTOS)
  // ═══════════════════════════════════════════════════════════════════════════
  renderSlidesIndex() {
    if (!this.slidesIndexBody) return;

    const sections = [
      {
        titulo: "SECCIÓN 1: CARÁTULA E IDENTIFICACIÓN DEL EQUIPO",
        rango: [0, 0],
        filminas: [this.data.slides[0]]
      },
      {
        titulo: "SECCIÓN 2: ACTIVIDAD 6 — MAPEO SISTÉMICO EN CATRIEL (TGS)",
        rango: [1, 1],
        filminas: [this.data.slides[1]]
      },
      {
        titulo: "SECCIÓN 3: ACTIVIDAD 8 — DIAGNÓSTICO Y REDISEÑO EN ECOMODA S.A.",
        rango: [2, 3],
        filminas: [this.data.slides[2], this.data.slides[3]]
      },
      {
        titulo: "SECCIÓN 4: ACTIVIDAD 9 — PIRÁMIDE Y TIPOS DE SISTEMAS (TPS, MIS, DSS)",
        rango: [4, 4],
        filminas: [this.data.slides[4]]
      },
      {
        titulo: "SECCIÓN 5: CONCLUSIONES Y APORTES PARA RECURSOS HUMANOS",
        rango: [5, 5],
        filminas: [this.data.slides[5]]
      }
    ];

    let html = `
      <div style="display: flex; flex-direction: column; gap: 1.2rem; padding: 0.5rem 0;">
        ${sections.map((sec) => `
          <div style="background: rgba(15,23,42,0.02); border: 1px solid rgba(180,131,36,0.2); border-radius: 8px; padding: 0.85rem 1rem;">
            <h4 style="font-family: var(--font-serif); font-size: 0.78rem; font-weight: 700; color: var(--gold-main); letter-spacing: 0.08em; text-transform: uppercase; margin-bottom: 0.65rem;">
              ${sec.titulo}
            </h4>
            <div style="display: flex; flex-direction: column; gap: 0.5rem;">
              ${sec.filminas.map((sl) => {
                const slIdx = sl.numero - 1;
                const isCurrent = slIdx === this.currentSlideIndex;
                return `
                  <button onclick="window.app.goToSlide(${slIdx}); window.app.toggleSlidesIndex(false);" style="display: flex; align-items: center; justify-content: space-between; width: 100%; text-align: left; padding: 0.65rem 0.85rem; border-radius: 6px; background: ${isCurrent ? "rgba(180,131,36,0.12)" : "#ffffff"}; border: 1px solid ${isCurrent ? "var(--gold-main)" : "rgba(15,23,42,0.08)"}; cursor: pointer; transition: all 0.2s ease;">
                    <div style="flex: 1;">
                      <div style="display: flex; gap: 0.5rem; align-items: center; margin-bottom: 0.2rem;">
                        <span style="font-family: var(--font-serif); font-size: 0.72rem; font-weight: 700; color: var(--gold-main);">FILMINA ${sl.numero}</span>
                        <span style="font-size: 0.7rem; color: #065f46; background: rgba(16,185,129,0.1); padding: 0.1rem 0.4rem; border-radius: 3px; font-weight: 600;">${sl.tiempoEstimado}</span>
                      </div>
                      <div style="font-family: var(--font-title); font-size: 0.98rem; font-weight: 600; color: var(--oxford-blue);">${sl.titulo}</div>
                      <div style="font-size: 0.78rem; color: var(--text-muted);">${sl.subtitulo}</div>
                    </div>
                    <span style="color: var(--gold-main); font-size: 0.9rem; margin-left: 0.5rem;">→</span>
                  </button>
                `;
              }).join("")}
            </div>
          </div>
        `).join("")}
      </div>
    `;

    this.slidesIndexBody.innerHTML = html;
  }
}

// Inicializar la aplicación al cargar el DOM
window.addEventListener("DOMContentLoaded", () => {
  if (window.PRESENTACION_DATA) {
    window.app = new PresentationApp(window.PRESENTACION_DATA);
  } else {
    console.error("No se encontraron los metadatos de PRESENTACION_DATA.");
  }
});
