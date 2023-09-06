// Array of objects
const team = [
   {nome: "Wayne Barnett", ruolo: "Founder & CEO", foto: "./assets/img/wayne-barnett-founder-ceo.jpg"},
   {nome: "Angela Caroll", ruolo: "Chief Editor", foto: "./assets/img/angela-caroll-chief-editor.jpg"},
   {nome: "Walter Gordon", ruolo: "Office Manager", foto: "./assets/img/walter-gordon-office-manager.jpg"},
   {nome: "Angela Lopez", ruolo: "Social Media Manager", foto: "./assets/img/angela-lopez-social-media-manager.jpg"},
   {nome: "Scott Estrada", ruolo: "Developer", foto: "./assets/img/scott-estrada-developer.jpg"},
   {nome: "Barbara Ramos", ruolo: "Graphic Designer", foto: "./assets/img/barbara-ramos-graphic-designer.jpg"}
];

const rowEl = document.querySelector(".row");

// Cicle to adding dynamically all the value of the objects in the array
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

const buttonEl = document.querySelector("button");

// Constant used to change dynamically the image of new members in Lorem Picsum
let i = 1;

buttonEl.addEventListener("click", function(e){

   // Get the input fields
   const newName = document.getElementById("nameInput");
   const newSurname = document.getElementById("surnameInput");
   const newJob = document.getElementById("ruoloInput");
   const newImg = `https://picsum.photos/400/429?random=${i}`;

   // Control if the form is empty
   if (newName.value != "" && newSurname.value != "" && newJob.value != "") {
      const markupEl =
      `<div class="col-12 col-md-3">
         <div class="card border-0 shadow">
            <img src="${newImg}" class="card-img-top">
            <div class="card-body">
               <h4 class="card-title">${newName.value} ${newSurname.value}</h4>
               <div class="card-text">${newJob.value}</div>
            </div>
         </div>
      </div>`;
      rowEl.insertAdjacentHTML("beforeend", markupEl);
      
      // Reset input fields
      newName.value = "";
      newSurname.value = "";
      newJob.value = "";

      // Increment i to change image
      i++;
   } else {
      alert("Fill all the fields!")
   }

   e.preventDefault();
});
