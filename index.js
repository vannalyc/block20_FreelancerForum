function main() {
    const users = [
        { name: "John", age: 25, occupation: "gardener" },
        { name: "Lenny", age: 51, occupation: "programmer" },
        { name: "Andrew", age: 43, occupation: "teacher" },
        { name: "Peter", age: 81, occupation: "teacher" },
        { name: "Anna", age: 43, occupation: "teacher" },
        { name: "Albert", age: 76, occupation: "programmer" },
        { name: "Adam", age: 47, occupation: "teacher" },
        { name: "Robert", age: 72, occupation: "driver" },
    ];
    
const root = document.getElementById("root");
const h1 = document.createElement("h1");
h1.innerHTML = "FREELANCERS"
root.appendChild(h1);

const ul = document.createElement ('ul') 
root.appendChild(ul)

users.forEach(user => {
    let listItem = document.createElement("li");
    listItem.textContent = `Name: ${users.name}, Age: ${users.age}, Occupation: ${users.occupation}`;
})

ul.appendChild(listItem);
ul.appendChild(li);

//call the main function
}
main();
