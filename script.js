const cards = [
  { icon:"🕊️", value:"21", label:"Personas fallecidas", detail:"Informado por PDI" },
  { icon:"🏥", value:"330", label:"Personas lesionadas", detail:"Informado por SENAPRED-MINSAL" },
  { icon:"👥", value:"21.712", label:"Personas damnificadas", detail:"394 personas albergadas" },
  { icon:"📢", value:"214", label:"Mensajes SAE enviados", detail:"Desde el 17/01/2026" },
  { icon:"🏚️", value:"3.074", label:"Viviendas destruidas", detail:"FIBE" },
  { icon:"🚁", value:"140", label:"Aeronaves desplegadas", detail:"CONAF, SENAPRED, EMCO y empresas forestales" },
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
