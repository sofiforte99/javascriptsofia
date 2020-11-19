class Cotizador {
  constructor(marca, year, plan) {
    this.marca = marca;
    this.year = year;
    this.plan = plan;
  }
  cotizarSeguro() {
    let cantidad;
    const base = 2000;

    switch (this.marca) {
      case "1":
        cantidad = base * 1.25;
        break;
      case "2":
        cantidad = base * 1.05;
        break;
      case "3":
        cantidad = base * 1.55;
        break;
    }
  }
}

class Mostrar {
  mostrarMensaje(mensaje, plan) {
    const div = document.createElement("div");

    if (tipo === "error") {
      div.classList.add("mensaje", "error");
    } else {
      div.classList.add("mensaje", "correcto");
    }
    div.innerHTML = `${mensaje}`;
    formulario.insertBefore(div, document.querySelector(".form-group"));

    setTimeout(function () {
      document.querySelector(".mensaje").remove();
    }, 3000);
  }
  mostrarResultado(seguro, total) {
    const resultado = document.getElementById("resultado");
    let marca;
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
            <p>Año: ${seguro.year} </p>
            <p>Tipo: ${seguro.plan} </p>
            <p>Total: $ ${total} </p>
        `;
    const spinner = document.querySelector("#cargando img");
    spinner.style.display = "block";
    setTimeout(function () {
      spinner.style.display = "none";
      resultado.appendChild(div);
    }, 3000);
  }
}

const formulario = document.getElementById("cotizar-seguro");

formulario.addEventListener("submit", function (e) {
  e.preventDefault();

  const marca = document.getElementById("marca");
  const marcaSeleccionada = marca.options[marca.selectedIndex].value;

  const year = document.getElementById("year");
  const yearSelect = anio.options[year.selectedIndex].value;

  const plan = document.querySelector('input[name="plan"]:checked').value;

  const mostrar = new Mostrar();

  if (marcaSeleccionada === "" || yearSelect === "" || plan === "") {
    mostrar.mostrarMensaje("Datos Incompletos", "error");
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

const selectYears = document.getElementById("year");
for (var i = max; i > year.options[marca.selectedIndex].lenght; i--) {
  var option = document.createElement("option");
  option.value = i;
  option.innerHTML = i;
  selectAnios.appendChild(option);
}
