document.addEventListener("DOMContentLoaded", function () {
  let videosGenerated = localStorage.getItem("videosGenerated") || "0";
  document.getElementById("status").innerText = `Você já gerou ${videosGenerated} de 2 vídeos grátis.`;

  if (parseInt(videosGenerated) >= 2) {
    document.getElementById("form-container").style.display = "none";
    document.getElementById("upgrade-box").style.display = "block";
  }

  document.getElementById("videoForm").addEventListener("submit", function (e) {
    e.preventDefault();
    let prompt = document.getElementById("prompt").value;
    let language = document.getElementById("language").value;

    alert("Gerando seu vídeo... Isso pode levar alguns segundos!");

    // Simulação de geração
    videosGenerated = parseInt(videosGenerated) + 1;
    localStorage.setItem("videosGenerated", videosGenerated);

    document.getElementById("status").innerText = `Você já gerou ${videosGenerated} de 2 vídeos grátis.`;

    if (videosGenerated >= 2) {
      document.getElementById("form-container").style.display = "none";
      document.getElementById("upgrade-box").style.display = "block";
    }
  });

  document.getElementById("checkoutButton").addEventListener("click", function () {
    window.location.href = "https://seusite.com/checkout";
  });
});