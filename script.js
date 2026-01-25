const cards = [
  { icon:"🔔", value:"7", label:"Regiones con alertas", detail:"1 Roja, 2 Amarilla y 4 Temprana Preventiva" },
  { icon:"🔥", value:"47", label:"Incendios activos", detail:"12 en combate, 34 controlados y 1 extinguidos" },
  { icon:"📢", value:"214", label:"Mensajes SAE enviados", detail:"Desde el 17/01/2026" },
  { icon:"📋", value:"2.707", label:"FIBE", detail:"Hogares con ficha terminada" },
  { icon:"👥", value:"21.649", label:"Personas damnificadas", detail:"341 personas albergadas" },
  { icon:"🚁", value:"141", label:"Aeronaves desplegadas", detail:"CONAF, SENAPRED, EMCO y empresas forestales" },
  { icon:"👩‍🚒", value:"+4.900", label:"Bomberos movilizados", detail:"Recursos de respuesta y combate" },
  { icon:"🤝", value:"1.303", label:"Voluntarios desplegados", detail:"Apoyo humanitario y rehabilitación" }
];

const grid = document.querySelector(".grid");

grid.innerHTML = cards.map(c => `
  <article class="card">
    <div class="card__top">
      <div class="badge" aria-hidden="true">${c.icon}</div>
      <div class="value">${c.value}</div>
    </div>
    <div class="label">${c.label}</div>
    <div class="detail">${c.detail}</div>
  </article>
`).join("");
