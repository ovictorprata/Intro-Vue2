var app = new Vue({
  el: "#app",
  data: {
    course: "D-Já Vue - Uma jornada pela Web",
    image: "./images/dejavu_matrix.jpg",
    description: "Como construir aplicações web com agilidade e qualidade.",
    duration: 42,
    ativo: true,
    valor: 100,
    courses: [
      {
        id: 1,
        course: "D-Já Vue - Uma jornada pela Web",
        image: "./images/dejavu_matrix.jpg",
        description: "Como construir aplicações web com agilidade e qualidade.",
        duration: 42,
        ativo: true,
      },
      {
        id: 2,
        course: "Git - Via terminal para aprender da forma correta!",
        image: "./images/logo-git-430-215-v3.jpg",
        description:
          "Entendendo Git através dos primeiros comandos via linha de comando.",
        duration: 21,
        ativo: true,
      },
      {
        id: 3,
        course: "Linux - Entendendo a tela preta!",
        image: "./images/logo-linux960x430.jpg",
        description:
          "Entendendo Git através dos primeiros comandos via linha de comando.",
        duration: 21,
        ativo: false,
      },
    ],
  },
});
