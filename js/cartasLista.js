
function cargarJSON() {

    var infoJson = [{ numero: 7, carta: "Picas", cantidad: 0}, 
    { numero: 9, carta: "Corazones", cantidad: 0 }]

    localStorage.setItem("datos", JSON.stringify(infoJson))

}

var div = document.getElementsByClassName("btn-carta");

for (let i of div) {

    i.addEventListener('click', function() {

        var datos = localStorage.getItem('datos');

        datos = JSON.parse(datos);

        for (let cont of datos) {

            if (cont.numero == this.dataset.carta)  cont.cantidad++;
            
        }

        localStorage.setItem('datos', JSON.stringify(datos));

        llenarTabla();

    });

}


function mostrarSelect() {

    const select = document.getElementById("num");

    for (let i = 1; i < 14; i++) {

        const num = document.createElement("option")

         num.textContent = i

        num.value = i

        select.appendChild(num)

    }
}


function llenarTabla() {
    const table = document.getElementById("table");
    const tr = document.getElementById("tr");

    let datos = localStorage.getItem("datos");

    datos = JSON.parse(datos)

    console.log(datos);

    table.innerHTML = "";
    table.appendChild(tr)
    for (let i = 0; i < datos.length; i++) {

        table.innerHTML += `<tr>
                            <td> ${datos[i].numero} </td>
                            <td> ${datos[i].carta} </td>
                            <td> ${datos[i].cantidad} </td>
                        </tr>`
    }

}

function guardarDatosCarta() {

    const descp = document.getElementById("descripcion");
    
    const num = document.getElementById("num");

    
    var datos = localStorage.getItem("datos");

    datos = JSON.parse(datos);

    console.log(datos)

    var dato = { numero: num.value, carta: descp.value, cantidad: '0' };
    datos.push(dato)


    localStorage.setItem("datos", JSON.stringify(datos))
    llenarTabla();
}


cargarJSON();

mostrarSelect();

llenarTabla();