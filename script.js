
let personas = [];

function agregarPersona() {
  const nombre = document.getElementById('nombre').value;
  const funcion = document.getElementById('funcion').value;
  const telefono = document.getElementById('telefono').value;
  const email = document.getElementById('email').value;
  const foto = document.getElementById('foto').value;

  const persona = { nombre, funcion, telefono, email, foto };
  personas.push(persona);
  mostrarPersonas();
}

function mostrarPersonas() {
  const listado = document.getElementById('listado');
  listado.innerHTML = '';

  personas.forEach(p => {
    listado.innerHTML += `
      <div style="border:1px solid #ccc; padding:10px; margin:10px;">
        <img src="${p.foto}" alt="${p.nombre}" style="width:100px;"><br>
        <strong>${p.nombre}</strong><br>
        ${p.funcion}<br>
        Tel: ${p.telefono}<br>
        Mail: ${p.email}
      </div>
    `;
  });
}
