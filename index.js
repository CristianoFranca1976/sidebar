const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  const aside = document.querySelector("aside");
  const aList = document.querySelectorAll("a"); // Seleciona todas as tags <a>
  const p = document.querySelectorAll("p");
  const c = document.querySelectorAll(".links");
  const d = document.querySelectorAll(".div");
  const input = document.querySelector("input");
  const footer = document.querySelector("footer");
  const btn1 = document.querySelector(".btn1");

  if (aside.style.width === "" || aside.style.width === "78px") {
    aside.style.width = "250px";
    btn.classList.add("expanded");

    // Adiciona a classe "a" a todas as tags <a>
    aList.forEach((a) => {
      a.classList.add("a");
    });
    p.forEach((p) => {
      p.classList.add("paragraph");
    });
    c.forEach((c) => {
      c.classList.add("c");
    });
    d.forEach((d) => {
      d.classList.add("dd");
    });
    input.style.display = "flex";
    footer.style.justifyContent = "space-between";
    btn1.style.marginRight = "20px";
  } else {
    aside.style.width = "78px";
    btn.classList.remove("expanded");

    // Remove a classe "a" de todas as tags <a>
    aList.forEach((a) => {
      a.classList.remove("a");
    });
    p.forEach((p) => {
      p.classList.remove("paragraph");
    });
    c.forEach((c) => {
      c.classList.remove("c");
    });
    d.forEach((d) => {
      d.classList.remove("dd");
    });
    input.style.display = "none";
    footer.style.justifyContent = "center";
    btn1.style.marginRight = "0";
  }
});
