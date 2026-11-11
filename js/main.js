const cursos = [
  {
    titulo: "Tecnologia, Dados e IA na Gestão Ambiental",
    descricao: "Minicurso gratuito de tecnologia, dados e IA aplicados à gestão ambiental para o ensino médio.",
    categoria: "projeto-social",
    nivel: "Iniciante",
    tags: ["Dados", "IA", "Meio Ambiente"],
    url: "https://github.com/Marquezbertin/Curso-Tecnologia-Dados-Gestao-Ambiental",
  },
  {
    titulo: "Curso de Tecnologia São Pedro",
    descricao: "Kit completo do curso gratuito de tecnologia de São Pedro/SP: 3 trilhas, projeto pedagógico, comunicação visual e kit do voluntário.",
    categoria: "projeto-social",
    nivel: "Iniciante",
    tags: ["Trilhas", "Educação", "Kit"],
    url: "https://github.com/Marquezbertin/Curso-Tecnologia-Sao-Pedro",
  },
  {
    titulo: "Laboratório Tech Social",
    descricao: "Ensino de tecnologia gratuito para crianças (8-12) e adolescentes (13-20): trilhas, projetos e aulas.",
    categoria: "projeto-social",
    nivel: "Iniciante",
    tags: ["Crianças", "Adolescentes", "Gratuito"],
    url: "https://github.com/Marquezbertin/laboratorio-tech-social",
  },
  {
    titulo: "Pensamento Computacional",
    descricao: "Guia completo de introdução à tecnologia com exercícios para iniciantes absolutos.",
    categoria: "trilha",
    nivel: "Iniciante",
    tags: ["Fundamentos", "Lógica"],
    url: "https://github.com/Marquezbertin/pensamento_computacional",
  },
  {
    titulo: "Lógica de Programação",
    descricao: "Lógica de programação implementada com Visualg — algoritmos passo a passo.",
    categoria: "trilha",
    nivel: "Iniciante",
    tags: ["Visualg", "Algoritmos"],
    url: "https://github.com/Marquezbertin/logica_programacao",
  },
  {
    titulo: "Python do Zero",
    descricao: "15 módulos de Python com exercícios práticos para quem está começando.",
    categoria: "trilha",
    nivel: "Iniciante",
    tags: ["Python", "Exercícios"],
    url: "https://github.com/Marquezbertin/python-do-zero",
  },
  {
    titulo: "HTML, CSS e JS na Prática",
    descricao: "Exercícios e mini-projetos de web para iniciantes: HTML, CSS e JavaScript.",
    categoria: "trilha",
    nivel: "Iniciante",
    tags: ["HTML", "CSS", "JavaScript"],
    url: "https://github.com/Marquezbertin/html-css-js-pratica",
  },
  {
    titulo: "Git e GitHub Iniciantes",
    descricao: "Guia completo de Git e GitHub com exercícios práticos de versionamento.",
    categoria: "trilha",
    nivel: "Iniciante",
    tags: ["Git", "GitHub"],
    url: "https://github.com/Marquezbertin/git-github-iniciantes",
  },
  {
    titulo: "Banco de Dados SQL",
    descricao: "Modelagem, consultas e exercícios de SQL com SQLite.",
    categoria: "trilha",
    nivel: "Intermediário",
    tags: ["SQL", "SQLite", "Dados"],
    url: "https://github.com/Marquezbertin/banco-de-dados-sql",
  },
  {
    titulo: "IA para Iniciantes",
    descricao: "Conceitos de inteligência artificial, prompt engineering e APIs.",
    categoria: "trilha",
    nivel: "Iniciante",
    tags: ["IA", "Prompt", "APIs"],
    url: "https://github.com/Marquezbertin/ia-para-iniciantes",
  },
  {
    titulo: "Inglês para Programadores",
    descricao: "Vocabulário técnico e leitura de documentação em inglês.",
    categoria: "trilha",
    nivel: "Iniciante",
    tags: ["Inglês", "Documentação"],
    url: "https://github.com/Marquezbertin/ingles-para-programadores",
  },
  {
    titulo: "Material Didático Completo",
    descricao: "Material didático completo em PT-BR reunindo todos os repositórios do projeto.",
    categoria: "material",
    nivel: "Intermediário",
    tags: ["Didático", "PT-BR"],
    url: "https://github.com/Marquezbertin/Material-Didatico-Tecnologia",
  },
  {
    titulo: "Despertar QA",
    descricao: "Conteúdos sobre qualidade de software e carreira em QA.",
    categoria: "material",
    nivel: "Intermediário",
    tags: ["QA", "Qualidade"],
    url: "https://www.despertarqa.net/",
  },
];

const categorias = {
  "projeto-social": "🏫 Projeto Social",
  trilha: "💻 Trilha",
  material: "📚 Material",
};

const estado = {
  busca: "",
  categoria: "todos",
  nivel: "todos",
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
    return bateBusca && bateCategoria && bateNivel;
  });
}

function renderizar() {
  const lista = filtrar();
  grid.innerHTML = lista
    .map(
      (curso, i) => `
      <article class="curso-card" data-categoria="${curso.categoria}" style="animation-delay:${i * 40}ms">
        <span class="curso-badge">${categorias[curso.categoria]}</span>
        <h3 class="curso-title">${curso.titulo}</h3>
        <p class="curso-desc">${curso.descricao}</p>
        <div class="curso-tags">
          ${curso.tags.map((tag) => `<span class="curso-tag">${tag}</span>`).join("")}
        </div>
        <div class="curso-footer">
          <span class="curso-nivel">${curso.nivel === "Iniciante" ? "🟢" : "🔵"} ${curso.nivel}</span>
          <a class="curso-link" href="${curso.url}" target="_blank" rel="noopener">Acessar ↗</a>
        </div>
      </article>`
    )
    .join("");

  noResults.style.display = lista.length === 0 ? "block" : "none";
}

function configurarFiltros(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.addEventListener("click", (e) => {
    const btn = e.target.closest(".filter-btn");
    if (!btn) return;
    container.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    if (containerId === "filterCategoria") estado.categoria = btn.dataset.filter;
    if (containerId === "filterNivel") estado.nivel = btn.dataset.filter;
    renderizar();
  });
}

searchInput.addEventListener("input", (e) => {
  estado.busca = e.target.value.trim();
  renderizar();
});

configurarFiltros("filterCategoria");
configurarFiltros("filterNivel");

document.getElementById("statCursos").textContent = cursos.length;
document.getElementById("statTrilhas").textContent = cursos.filter((c) => c.categoria === "trilha").length;

const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");

function aplicarTema(tema) {
  document.documentElement.setAttribute("data-theme", tema);
  themeIcon.textContent = tema === "dark" ? "☀️" : "🌙";
  localStorage.setItem("portal-tema", tema);
}

aplicarTema(localStorage.getItem("portal-tema") || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"));

themeToggle.addEventListener("click", () => {
  const atual = document.documentElement.getAttribute("data-theme");
  aplicarTema(atual === "dark" ? "light" : "dark");
});

const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const nav = document.querySelector(".nav");

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

const header = document.getElementById("header");
addEventListener("scroll", () => {
  header.classList.toggle("scrolled", scrollY > 10);
});

renderizar();
