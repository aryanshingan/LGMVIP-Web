const form = document.querySelector('form');
const username = document.getElementById('name');
const email = document.getElementById('email');
const male = document.getElementById('male');
const female = document.getElementById('female');
const image = document.getElementById('image');
const dataset = document.querySelector('.dataset');
var img;

form.addEventListener('submit',(e) =>{
    e.preventDefault();
    let checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    let values = [];
    checkboxes.forEach((ele) =>{
        values.push(ele.value);
    });

    dataset.innerHTML += `
        <div class="data">
            <div class="data_body">
                 <h4>${username.value}</h4>
                 <p class="gender">${male.checked ? male.value : female.checked ? female.value : 'other'}</p>
                 <p class="email">${email.value}</p>
                 <p class="contactno">${contactno.value}</p>
            </div>
            <div class="image">
                <img src=${img} alt="Image"/>
            </div>
        </div>
        `;
    form.reset();
});

image.addEventListener('change',(e) => {
    img = URL.createObjectURL(e.target.files[0]);
})