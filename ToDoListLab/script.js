const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("taskList");

addBtn.addEventListener("click", addTask);
input.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        addTask();
    }
});

function addTask() {
    const text = input.value.trim();

    if (text === "") {
        alert("Please enter a task.");
        return;
    }

    const li = document.createElement("li");
    li.textContent = text;

    li.addEventListener("click", function() {
        li.classList.toggle("done");
    });

    const del = document.createElement("button");
    del.textContent = "Delete";
    del.className = "delete-btn";

    del.addEventListener("click", function(e) {
        e.stopPropagation();
        li.remove();
    });

    li.appendChild(del);
    list.appendChild(li);

    input.value = "";
}
