const app = () => {
  // Funcion para navegacion con los links
  const navigateLinks = () => {
    // Capturar todos los links dentro de la variable
    const links = document.querySelectorAll(".nav-link");
    // ForEach para que itere por todos los links dentro de la variable
    // Se define como parametros los links individuales y los indices de cada uno
    links.forEach((link, index) => {
      // Se añade el evento click para que funcione la navegacion
      link.addEventListener("click", () => {
        // Se añade la funcion de Gsap Scroll to
        // Se coloca como destino los contenedores .issue- + la ubicacion del indice de cada link a la inversa para que hagan match
        gsap.to(window, {
          duration: 0.01,
          scrollTo: { y: ".issue-" + (links.length - 1 - index + 1) },
        });
      });
    });
  };
  const changeBg = () => {
    const body = document.querySelector(".body-content");
    const sections = document.querySelectorAll(".issue-section");

    const updateBackground = () => {
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();

        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          switch (index) {
            case 0:
              body.style.backgroundColor = "#f6e0a4";
              console.log("Estoy en la seccion 8");
              break;
            case 1:
              body.style.backgroundColor = "#ff608c";
              break;
            case 2:
              body.style.backgroundColor = "#ffffff";
              break;
            case 3:
              body.style.backgroundColor = "#00c1b5";
              break;
            case 4:
              body.style.backgroundColor = "#ff6519";
              break;
            case 5:
              body.style.backgroundColor = "#ffbe00";
              break;
            case 6:
              body.style.backgroundColor = "#1d3fbb";
              break;
            case 7:
              body.style.backgroundColor = "#e30512";
              break;
          }
        }
      });
    };
    updateBackground();
    window.addEventListener("scroll", updateBackground);
  };

  document.addEventListener("DOMContentLoaded", changeBg);
  navigateLinks();
  changeBg();
};
app();
