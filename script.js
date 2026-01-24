const cards = [
  { icon:"🔔", value:"6", label:"Regiones con alertas", detail:"2 Roja, 1 Amarilla y 3 Temprana Preventiva" },
  { icon:"🔥", value:"63", label:"Incendios activos", detail:"15 en combate, 46 controlados y 2 extinguidos" },
  { icon:"📢", value:"214", label:"Mensajes SAE enviados", detail:"Desde el 17/01/2026" },
  { icon:"📋", value:"2.956", label:"Hogares con ficha terminada", detail:"FIBE" },
  { icon:"👥", value:"20.485", label:"Personas damnificadas", detail:"689 personas albergadas" },
  { icon:"🚁", value:"147", label:"Aeronaves desplegadas", detail:"CONAF, SENAPRED, EMCO y empresas forestales" },
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
