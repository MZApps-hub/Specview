// ─────────────────────
// DADOS DAS VERSÕES
// ─────────────────────
const versions = [
  {
    v: 10,
    tag: "latest",
    date: "Abr 2025",
    size: "28 KB",
    log: [
      "Versão mais estável",
      "Suporte Win11 Build 26200",
      "Swap memory tracking",
      "Melhorias de acessibilidade",
    ],
  },
  {
    v: 9,
    tag: "stable",
    date: "Fev 2025",
    size: "26 KB",
    log: [
      "Redesign visual completo",
      "Info de placa-mãe",
      "Performance otimizada",
    ],
  },
  {
    v: 8,
    tag: "stable",
    date: "Dez 2024",
    size: "24 KB",
    log: [
      "Módulo de benchmark",
      "Score CPU e memória",
      "Correções de estabilidade",
    ],
  },
  {
    v: 7,
    tag: "beta",
    date: "Out 2024",
    size: "22 KB",
    log: [
      "Compatibilidade de jogos",
      "Busca por título",
      "Sugestões populares",
    ],
  },
  {
    v: 6,
    tag: "beta",
    date: "Ago 2024",
    size: "20 KB",
    log: ["Aba armazenamento", "Detecção SSD/HDD", "Interface NVMe"],
  },
  {
    v: 5,
    tag: "legacy",
    date: "Jun 2024",
    size: "21 KB",
    log: [
      "Módulo de rede",
      "Download/Upload em tempo real",
      "Info de interface",
    ],
  },
  {
    v: 4,
    tag: "legacy",
    date: "Abr 2024",
    size: "16 KB",
    log: ["Aba de temperatura", "Top processos", "Filtro de processos"],
  },
  {
    v: 3,
    tag: "legacy",
    date: "Mar 2024",
    size: "16 KB",
    log: ["Histórico em gráfico", "Suporte multi-núcleo", "Barra de status"],
  },
  {
    v: 2,
    tag: "legacy",
    date: "Fev 2024",
    size: "17 KB",
    log: ["Adicionada aba GPU", "Melhorias de layout", "Correção de bugs"],
  },
  {
    v: 1,
    tag: "legacy",
    date: "Jan 2024",
    size: "14 KB",
    log: ["Versão inicial", "CPU e RAM básico", "Layout inicial"],
  },
];

// ─────────────────────
// RENDERIZA TABELA
// ─────────────────────
const tbody = document.getElementById("dl-tbody");

versions.forEach((ver) => {
  const isLatest = ver.tag === "latest";
  const name = `SpecView-v${ver.v}`;

  const tr = document.createElement("tr");
  tr.className = "dl-row" + (isLatest ? " latest-row" : "");

  tr.innerHTML = `
    <td>
      <div class="col-name">
        <div class="ver-icon">v${ver.v}</div>
        <div>
          <div class="ver-title">${name}</div>
          <div class="ver-sub">Windows x64</div>
        </div>
      </div>
    </td>
    <td><span class="tag ${ver.tag}">${ver.tag.toUpperCase()}</span></td>
    <td class="changelog-cell">
      ${ver.log.map((l) => `<span>${l}</span>`).join("")}
    </td>
    <td class="meta-cell">
      <div class="size">${ver.size}</div>
      <div>${ver.date}</div>
    </td>
    <td>
      <a href="${name}.zip" download="${name}.zip" class="btn-dl${isLatest ? " latest-btn" : ""}">
        <span>⬇ BAIXAR</span>
      </a>
    </td>
  `;
  tbody.appendChild(tr);

  // Abre changelog ao clicar na linha (exceto no botão de download)
  tr.addEventListener("click", (e) => {
    const a = e.target?.closest?.("a");
    if (a) return;
    openChangelog(ver);
  });
});

// ─────────────────────
// CHANGELOG MODAL
// ─────────────────────
function openChangelog(ver) {
  const modal = document.getElementById("changelog-modal");
  const title = document.getElementById("changelog-title");
  const sub = document.getElementById("changelog-sub");
  const list = document.getElementById("changelog-list");
  if (!modal || !title || !sub || !list) return;

  const name = `SpecView-v${ver.v}`;
  title.textContent = `${name} — ${String(ver.tag || "").toUpperCase()}`;
  sub.textContent = `${ver.date || "—"} · ${ver.size || "—"}`;

  list.innerHTML = (ver.log || []).map((item) => `<li>${item}</li>`).join("");

  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
}

function closeChangelog() {
  const modal = document.getElementById("changelog-modal");
  if (!modal) return;
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeChangelog();
});

// ─────────────────────
// TABS
// ─────────────────────
function switchTab(id) {
  document
    .querySelectorAll(".tab")
    .forEach((t) => t.classList.remove("active"));
  document
    .querySelectorAll(".page")
    .forEach((p) => p.classList.remove("active"));
  document.getElementById("tab-" + id).classList.add("active");
  document.getElementById("page-" + id).classList.add("active");

  if (id === "help") {
    setTimeout(() => {
      document.querySelector(".help-page-title").classList.add("vis");
      document.querySelector(".help-page-sub").classList.add("vis");
      document.querySelectorAll(".help-block").forEach((el, i) => {
        setTimeout(() => el.classList.add("vis"), 120 + i * 70);
      });
    }, 40);
  }
}

// ─────────────────────
// LIGHTBOX
// ─────────────────────
function openLb(el) {
  document.getElementById("lb-img").src = el.querySelector("img").src;
  document.getElementById("lightbox").classList.add("open");
}
function closeLb() {
  document.getElementById("lightbox").classList.remove("open");
}
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeLb();
});

// ─────────────────────
// FAQ
// ─────────────────────
function toggleFaq(el) {
  const item = el.parentElement;
  const open = item.classList.contains("open");
  document
    .querySelectorAll(".faq-item")
    .forEach((i) => i.classList.remove("open"));
  if (!open) item.classList.add("open");
}

// Expor para handlers inline do HTML (onclick="...")
window.switchTab = switchTab;
window.openLb = openLb;
window.closeLb = closeLb;
window.toggleFaq = toggleFaq;
window.openChangelog = openChangelog;
window.closeChangelog = closeChangelog;
