const cards = [
  { icon:"🕊️", value:"21", label:"Personas fallecidas", detail:"Informado por PDI" },
  { icon:"🏥", value:"333", label:"Personas lesionadas", detail:"Informado por SENAPRED-MINSAL" },
  { icon:"👥", value:"21.788", label:"Personas damnificadas", detail:"426 personas albergadas" },
  { icon:"🏚️", value:"4.044", label:"Viviendas destruidas", detail:"Ficha basica de emergencia" },
  { icon:"📢", value:"215", label:"Mensajes SAE enviados", detail:"Desde el 17/01/2026" },
  { icon:"🚁", value:"135", label:"Aeronaves desplegadas", detail:"CONAF, SENAPRED, EMCO y empresas forestales" },
  { icon:"👮‍♂️", value:"+1.400", label:"Carabineros desplegados", detail:"Personal policial en terreno" },
  { icon:"🤝", value:"1.237", label:"Voluntarios desplegados", detail:"Apoyo humanitario y rehabilitación" }
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
