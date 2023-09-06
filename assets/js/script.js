const team = [
   {nome: "Wayne Barnett", ruolo: "Founder & CEO", foto: "./assets/img/wayne-barnett-founder-ceo.jpg"},
   {nome: "Angela Caroll", ruolo: "Chief Editor", foto: "./assets/img/angela-caroll-chief-editor.jpg"},
   {nome: "Walter Gordon", ruolo: "Office Manager", foto: "./assets/img/walter-gordon-office-manager.jpg"},
   {nome: "Angela Lopez", ruolo: "Social Media Manager", foto: "./assets/img/angela-lopez-social-media-manager.jpg"},
   {nome: "Scott Estrada", ruolo: "Developer", foto: "./assets/img/scott-estrada-developer.jpg"},
   {nome: "Barbara Ramos", ruolo: "Graphic Designer", foto: "./assets/img/barbara-ramos-graphic-designer.jpg"}
];

const rowEl = document.querySelector(".row");

for (let i = 0; i < team.length; i++) {
   const member = team[i];
   const markupEl =
   `<div class="col-12 col-md-3">
      <div class="card border-0 shadow">
         <img src="${member["foto"]}" class="card-img-top">
         <div class="card-body">
            <h4 class="card-title">${member["nome"]}</h4>
            <div class="card-text">${member["ruolo"]}</div>
         </div>
      </div>
   </div>`;
   rowEl.insertAdjacentHTML("beforeend", markupEl)
}

