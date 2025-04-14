const buttonShowAnimals = document.getElementById("button_show_animals")
const showAnimals = document.getElementById("show_animals")
const form = document.getElementById("editForm")
const id = document.getElementById('id')

const name = document.getElementById('name');
const tierart = document.getElementById('tierart');
const age = document.getElementById('age');
const gewicht = document.getElementById('gewicht');

// buttonShowAnimals.addEventListener("click", () => {
//     fetch("http://127.0.0.1:3000/tiere", )
//     .then(res => res.json())
//     .then(data => displayData(data))

//     function displayData(data) {
//         console.log(data)
//     }
// });

buttonShowAnimals.addEventListener("click", async () => {
    const res = await fetch("http://127.0.0.1:3000/tiere")
    displayData(await res.json())

    function displayData(data) {
        console.log(data)
        showAnimals.innerHTML = "";
        data.forEach(tier => {
            console.log(tier)
            const li = document.createElement("li");
            li.textContent = tier.name;
            showAnimals.appendChild(li);
        });
    }
});


const addTiere = document.getElementById("addTiere");

addTiere.addEventListener("click", (event) => {
    event.preventDefault();

    const tiere = {
        tierart: form.tierart.value,
        name: form.name.value,
        krankheit: form.krankheit.value,
        age: form.age.value,
        gewicht: form.gewicht.value,
    };

    fetch("http://127.0.0.1:3000/tiere", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(tiere),
    }).then(res => res.json())
        .then(data => {
            console.log("Response from server:", data); // 添加日志输出
            form.reset();
        });
})
