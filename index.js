const elForm = document.querySelector(".form");
// const elInput = document.querySelector(".input");
const elDelete = document.querySelector(".delete");
const elList = document.querySelector(".list");


elForm.addEventListener('submit'), (e)=>{
    e.preventDefault();
    const inputValue = elForm["input"].value.trim();
    elList.innerHTML =`
            <div class="item">
            <p class="todo-text">${inputValue}</p>
            <div class="fix">
                <div><i class="ri-calendar-2-line"> </i>
                <span>22.11.2025</span>
            </div>
            <i class="ri-mail-check-fill"></i>
            <i class="ri-delete-bin-6-line"></i>
            </div>
        </div>
    `
    inputValue.textContent = "";
    console.log('salom');

}

