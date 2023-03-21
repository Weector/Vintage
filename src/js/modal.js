import { price } from "../../assets/price/price";

const modals = document.querySelectorAll("[data-modal]");
const priceContainer = document.querySelector('.modal-container')
const modalBg = document.querySelector('.modal-bg')
const body = document.querySelector("body")



modals.forEach(function (trigger) {
  trigger.addEventListener("click", function (event) {
      event.preventDefault();

      const [priceMarkupData] = price.filter(item => item.id === trigger.id)

      body.classList.add("no-scroll")
      const priceMarkup = priceMarkupData.data.map(item => `
        <li class="modal__item"> 
            <div class="modal__markup-title">
                <h5 class="modal__markup-name">${item.name}</h5>
                <span class="modal__markup-type">${item.type}</span>
            </div>
            <div class="modal__markup-data">
                <span class="modal__markup-time">${item.time}</span>
                <span class="modal__markup-price">${item.price}</span>        
            </div>   
        </li>
     `).join('')

    priceContainer.innerHTML = `
      <ul class="modal__list">${priceMarkup}</ul>`
    
        modalBg.innerHTML = `
      <h3 class="modal__title">${priceMarkupData.desc}</h3>
   `

      const modal = document.getElementById(trigger.dataset.modal);
      modal.classList.add("open");
      
    const exits = modal.querySelectorAll(".modal-exit");
    exits.forEach(function (exit) {
      exit.addEventListener("click", function (event) {
        event.preventDefault();
          modal.classList.remove("open");
          body.classList.remove("no-scroll")
      });
    });
  });
});