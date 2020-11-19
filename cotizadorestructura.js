window.onload = function () {
  var i = document.getElementById("contenido");
  i.addEventListener("mouseover", resalta);
  i.addEventListener("mouseout", resalta);
};
var a = $("#contenido");
function resalta(elEvento) {
  var evento = elEvento;
  switch (evento.type) {
    case "mouseover":
      console.log("azul");
      a.removeClass("bg-dark");
      a.addClass("bg-light");
      break;
    case "mouseout":
      console.log("plata");
      a.removeClass("bg-light");
      a.addClass("bg-dark");
      break;
  }
}

$(document).ready(function () {
  $("p").click(function () {
    $(this).hide();
  });
});

function Cotizador(marca, year, plan) {
  this.marca = marca;
  this.year = year;
  this.plan = plan;
}
Cotizador.prototype.cotizarSeguro = function () {
  var cantidad;
  const plan0 = 2000;

  switch (this.marca) {
    case "1":
      cantidad = plan0 * 1.25;
      break;
    case "2":
      cantidad = plan0 * 1.05;
      break;
    case "3":
      cantidad = plan0 * 1.55;
      break;
  }
};

function Mostrar() {
  Mostrar.prototype.mostrarMensaje = function (mensaje, plan) {
    const div = document.createElement("div");

    if (plan === "error") {
      div.classList.add("mensaje", "error");
    } else {
      div.classList.add("mensaje", "correcto");
    }
    div.innerHTML = `${mensaje}`;
    formulario.insertBefore(div, document.querySelector(".form-group"));

    setTimeout(function () {
      document.querySelector(".mensaje").remove();
    }, 3000);
  };
}

Mostrar.prototype.mostrarResultado = function (seguro, total) {
  const resultado = document.getElementById("resultado");
  var marca;
  switch (seguro.marca) {
    case "1":
      marca = "Fiat";
      break;
    case "2":
      marca = "Ford";
      break;
    case "3":
      marca = "Chevrolet";
      break;
  }

  const div = document.createElement("div");

  div.innerHTML = `
        <p class='header'>Total: </p>
        <p>Marca: ${marca} </p>
        <p>Año: ${seguro.plan} </p>
        <p>Tipo: ${seguro.plan} </p>
        <p>Total: $ ${total} </p>
    `;
  const spinner = document.querySelector("#cargando img");
  spinner.style.display = "block";
  setTimeout(function () {
    spinner.style.display = "none";
    resultado.appendChild(div);
  }, 3000);
};
// Event Listeners
const formulario = document.getElementById("cotizar-seguro");

formulario.addEventListener("submit", function (e) {
  e.preventDefault();

  const marca = document.getElementById("marca");
  const marcaSeleccionada = marca.options[marca.selectedIndex].value;

  const year = document.getElementById("year");
  const yearSelect = year.options[year.selectedIndex].value;

  const plan = document.querySelector('input[name="plan"]:checked').value;

  const mostrar = new Mostrar();

  if (marcaSeleccionada === "" || yearSelect === "" || plan === "") {
    mostrar.mostrarMensaje("Datos incompletos", "error");
  } else {
    const resultados = document.querySelector("#resultado div");
    if (resultados != null) {
      resultados.remove();
    }

    const cotizador = new Cotizador(marcaSeleccionada, yearSelect, plan);

    const cantidad = cotizador.cotizarSeguro();

    mostrar.mostrarResultado(seguro, cantidad);
    mostrar.mostrarMensaje("...", "exito");
  }
});

const max = new Date().getFullYear(),
  min = max - 20;
//array lenght

const selectYears = document.getElementById("year");
for (var i = max; i > year.options[marca.selectedIndex].lenght; i--) {
  var option = document.createElement("option");
  option.value = i;
  option.innerHTML = i;
  selectAnios.appendChild(option);
}
