function loadHabits() {
    let savedHabits = JSON.parse(localStorage.getItem("my_habits")) || [];
    const table = document.getElementById("table");

    table.innerHTML = "";

    if(savedHabits.length > 0) {
        savedHabits.forEach(habit => {
            const tr = document.createElement("tr");
            tr.innerHTML = `<td>${habit.name}</td>
      <td>${habit.description}</td>`;
        table.appendChild(tr);
    });
    }

    
}

function addStreak(habitName) {
    let habits = JSON.parse(localStorage.getItem("my_habits"));

    let foundHabit = habits.find(h => h.name === habitName);
    foundHabit.number = foundHabit + 1;

    localStorage.setItem("my_habits", JSON.stringify(habits));
    location.reload();
}

const form = document.getElementById("my_habits");
form.addEventListener("submit", function (event){
    event.preventDefault();

    let name = document.getElementById("name").value;
    let number = document.getElementById("number").value;

    if (name.trim() === "") {
        alert("This space is required.");
    }
    else if (number.trim() === "") {
        alert("This space is required.");
    }
    else {
        let savedHabits = JSON.parse(localStorage.getItem("my_habits")) || [];
        savedHabits.push({"name": name, "description": number});
        localStorage.setItem("my_habits", JSON.stringify(savedHabits));
        const habitInscription = document.getElementById("my_habits");
        const sucessMessage = document.createElement("h3");
        sucessMessage.innerText = "Sucessfully created task!";
        habitInscription.appendChild(sucessMessage);
        loadHabits();
    }
});

document.addEventListener("DOMContentLoaded", loadHabits());