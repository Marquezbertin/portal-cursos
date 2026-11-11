const cursos = [
  {
    titulo: "Tecnologia, Dados e IA na Gestão Ambiental",
    descricao: "Minicurso gratuito de tecnologia, dados e IA aplicados à gestão ambiental para o ensino médio.",
    categoria: "projeto-social",
    nivel: "Iniciante",
    publico: "Adolescentes",
    duracao: 90,
    tags: ["Dados", "IA", "Meio Ambiente"],
    cover: "assets/img/covers/gestao-ambiental.svg",
    url: "https://github.com/Marquezbertin/Curso-Tecnologia-Dados-Gestao-Ambiental",
  },
  {
    titulo: "Curso de Tecnologia São Pedro",
    descricao: "Kit completo do curso gratuito de tecnologia de São Pedro/SP: 3 trilhas, projeto pedagógico, comunicação visual e kit do voluntário.",
    categoria: "projeto-social",
    nivel: "Iniciante",
    publico: "Adolescentes",
    duracao: 60,
    tags: ["Trilhas", "Educação", "Kit"],
    cover: "assets/img/covers/sao-pedro.svg",
    url: "https://github.com/Marquezbertin/Curso-Tecnologia-Sao-Pedro",
  },
  {
    titulo: "Laboratório Tech Social",
    descricao: "Ensino de tecnologia gratuito para crianças (8-12) e adolescentes (13-20): trilhas, projetos e aulas.",
    categoria: "projeto-social",
    nivel: "Iniciante",
    publico: "Crianças",
    duracao: 60,
    tags: ["Crianças", "Adolescentes", "Gratuito"],
    cover: "assets/img/covers/tech-social.svg",
    url: "https://github.com/Marquezbertin/laboratorio-tech-social",
  },
  {
    titulo: "Pensamento Computacional",
    descricao: "Guia completo de introdução à tecnologia com exercícios para iniciantes absolutos.",
    categoria: "trilha",
    nivel: "Iniciante",
    publico: "Crianças",
    duracao: 60,
    tags: ["Fundamentos", "Lógica"],
    cover: "assets/img/covers/pensamento.svg",
    url: "https://github.com/Marquezbertin/pensamento_computacional",
  },
  {
    titulo: "Lógica de Programação",
    descricao: "Lógica de programação implementada com Visualg — algoritmos passo a passo.",
    categoria: "trilha",
    nivel: "Iniciante",
    publico: "Adolescentes",
    duracao: 90,
    tags: ["Visualg", "Algoritmos"],
    cover: "assets/img/covers/logica.svg",
    url: "https://github.com/Marquezbertin/logica_programacao",
  },
  {
    titulo: "Python do Zero",
    descricao: "15 módulos de Python com exercícios práticos para quem está começando.",
    categoria: "trilha",
    nivel: "Iniciante",
    publico: "Adolescentes",
    duracao: 90,
    tags: ["Python", "Exercícios"],
    cover: "assets/img/covers/python.svg",
    url: "https://github.com/Marquezbertin/python-do-zero",
  },
  {
    titulo: "HTML, CSS e JS na Prática",
    descricao: "Exercícios e mini-projetos de web para iniciantes: HTML, CSS e JavaScript.",
    categoria: "trilha",
    nivel: "Iniciante",
    publico: "Adolescentes",
    duracao: 60,
    tags: ["HTML", "CSS", "JavaScript"],
    cover: "assets/img/covers/web.svg",
    url: "https://github.com/Marquezbertin/html-css-js-pratica",
  },
  {
    titulo: "Git e GitHub Iniciantes",
    descricao: "Guia completo de Git e GitHub com exercícios práticos de versionamento.",
    categoria: "trilha",
    nivel: "Iniciante",
    publico: "Adultos",
    duracao: 60,
    tags: ["Git", "GitHub"],
    cover: "assets/img/covers/git.svg",
    url: "https://github.com/Marquezbertin/git-github-iniciantes",
  },
  {
    titulo: "Banco de Dados SQL",
    descricao: "Modelagem, consultas e exercícios de SQL com SQLite.",
    categoria: "trilha",
    nivel: "Intermediário",
    publico: "Adultos",
    duracao: 90,
    tags: ["SQL", "SQLite", "Dados"],
    cover: "assets/img/covers/sql.svg",
    url: "https://github.com/Marquezbertin/banco-de-dados-sql",
  },
  {
    titulo: "IA para Iniciantes",
    descricao: "Conceitos de inteligência artificial, prompt engineering e APIs.",
    categoria: "trilha",
    nivel: "Iniciante",
    publico: "Adultos",
    duracao: 60,
    tags: ["IA", "Prompt", "APIs"],
    cover: "assets/img/covers/ia.svg",
    url: "https://github.com/Marquezbertin/ia-para-iniciantes",
  },
  {
    titulo: "Inglês para Programadores",
    descricao: "Vocabulário técnico e leitura de documentação em inglês.",
    categoria: "trilha",
    nivel: "Iniciante",
    publico: "Adultos",
    duracao: 30,
    tags: ["Inglês", "Documentação"],
    cover: "assets/img/covers/ingles.svg",
    url: "https://github.com/Marquezbertin/ingles-para-programadores",
  },
  {
    titulo: "Material Didático Completo",
    descricao: "Material didático completo em PT-BR reunindo todos os repositórios do projeto.",
    categoria: "material",
    nivel: "Intermediário",
    publico: "Adultos",
    duracao: 30,
    tags: ["Didático", "PT-BR"],
    cover: "assets/img/covers/material.svg",
    url: "https://github.com/Marquezbertin/Material-Didatico-Tecnologia",
  },
  {
    titulo: "Despertar QA",
    descricao: "Conteúdos sobre qualidade de software e carreira em QA.",
    categoria: "material",
    nivel: "Intermediário",
    publico: "Adultos",
    duracao: 30,
    tags: ["QA", "Qualidade"],
    cover: "assets/img/covers/despertar.svg",
    url: "https://www.despertarqa.net/",
  },
];

const categorias = {
  "projeto-social": "🏫 Projeto Social",
  trilha: "💻 Trilha",
  material: "📚 Material",
};

const publicosIcone = {
  Crianças: "👧",
  Adolescentes: "🧑",
  Adultos: "👨",
};

const estado = {
  busca: "",
  categoria: "todos",
  nivel: "todos",
  publico: "todos",
  duracao: "todos",
};

const grid = document.getElementById("cursosGrid");
const noResults = document.getElementById("noResults");
const searchInput = document.getElementById("searchInput");

function filtrar() {
  return cursos.filter((curso) => {
    const texto = (curso.titulo + " " + curso.descricao + " " + curso.tags.join(" ")).toLowerCase();
    const bateBusca = texto.includes(estado.busca.toLowerCase());
    const bateCategoria = estado.categoria === "todos" || curso.categoria === estado.categoria;
    const bateNivel = estado.nivel === "todos" || curso.nivel === estado.nivel;
    const batePublico = estado.publico === "todos" || curso.publico === estado.publico;
    const bateDuracao = estado.duracao === "todos" || String(curso.duracao) === estado.duracao;
    return bateBusca && bateCategoria && bateNivel && batePublico && bateDuracao;
  });
}

function renderizar() {
  const lista = filtrar();
  grid.innerHTML = lista
    .map(
      (curso, i) => `
      <article class="curso-card" data-categoria="${curso.categoria}" style="animation-delay:${i * 40}ms">
        <img class="curso-cover" src="${curso.cover}" alt="" loading="lazy">
        <span class="curso-badge">${categorias[curso.categoria]}</span>
        <h3 class="curso-title">${curso.titulo}</h3>
        <p class="curso-desc">${curso.descricao}</p>
        <div class="curso-tags">
          ${curso.tags.map((tag) => `<span class="curso-tag">${tag}</span>`).join("")}
        </div>
        <div class="curso-footer">
          <span class="curso-meta">${curso.nivel === "Iniciante" ? "🟢" : "🔵"} ${curso.nivel} · ${publicosIcone[curso.publico]} ${curso.publico} · ⏱ ${curso.duracao} min</span>
          <a class="curso-link" href="${curso.url}" target="_blank" rel="noopener">Acessar ↗</a>
        </div>
      </article>`
    )
    .join("");

  noResults.style.display = lista.length === 0 ? "block" : "none";
}

const filtroCampos = {
  filterCategoria: "categoria",
  filterNivel: "nivel",
  filterPublico: "publico",
  filterDuracao: "duracao",
};

Object.entries(filtroCampos).forEach(([id, chave]) => {
  const container = document.getElementById(id);
  if (!container) return;
  container.addEventListener("click", (e) => {
    const btn = e.target.closest(".filter-btn");
    if (!btn) return;
    container.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    estado[chave] = btn.dataset.filter;
    renderizar();
  });
});

if (searchInput) {
  searchInput.addEventListener("input", (e) => {
    estado.busca = e.target.value.trim();
    renderizar();
  });
}

const statCursos = document.getElementById("statCursos");
const statTrilhas = document.getElementById("statTrilhas");
if (statCursos) statCursos.textContent = cursos.length;
if (statTrilhas) statTrilhas.textContent = cursos.filter((c) => c.categoria === "trilha").length;

const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");

function aplicarTema(tema) {
  document.documentElement.setAttribute("data-theme", tema);
  if (themeIcon) themeIcon.textContent = tema === "dark" ? "☀️" : "🌙";
  localStorage.setItem("portal-tema", tema);
}

if (themeToggle) {
  aplicarTema(localStorage.getItem("portal-tema") || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"));
  themeToggle.addEventListener("click", () => {
    const atual = document.documentElement.getAttribute("data-theme");
    aplicarTema(atual === "dark" ? "light" : "dark");
  });
}

const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const nav = document.querySelector(".nav");

if (mobileMenuBtn && nav) {
  mobileMenuBtn.addEventListener("click", () => {
    nav.classList.toggle("open");
    mobileMenuBtn.classList.toggle("open");
  });

  nav.addEventListener("click", (e) => {
    if (e.target.classList.contains("nav-link")) {
      nav.classList.remove("open");
      mobileMenuBtn.classList.remove("open");
    }
  });
}

const header = document.getElementById("header");
if (header) {
  addEventListener("scroll", () => {
    header.classList.toggle("scrolled", scrollY > 10);
  });
}

if (grid) renderizar();
