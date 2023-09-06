const divEl = document.querySelector("div");
const team = [
   {nome: "Wayne Barnett", ruolo: "Founder & CEO", foto: "./assets/img/wayne-barnett-founder-ceo.jpg"},
   {nome: "Angela Caroll", ruolo: "Chief Editor", foto: "./assets/img/angela-caroll-chief-editor.jpg"},
   {nome: "Walter Gordon", ruolo: "Office Manager", foto: "./assets/img/walter-gordon-office-manager.jpg"},
   {nome: "Angela Lopez", ruolo: "Social Media Manager", foto: "./assets/img/angela-lopez-social-media-manager.jpg"},
   {nome: "Scott Estrada", ruolo: "Developer", foto: "./assets/img/scott-estrada-developer.jpg"},
   {nome: "Barbara Ramos", ruolo: "Graphic Designer", foto: "./assets/img/barbara-ramos-graphic-designer.jpg"}
];

for (let i = 0; i < team.length; i++) {
   const member = team[i];
   
   for (const key in member) {

      if (key == "foto") {
         divEl.insertAdjacentHTML("beforeend", `<img src="${member[key]}">`);
      } else {
         divEl.insertAdjacentHTML("beforeend", `<div>${member[key]}</div>`);
      }
   }
}