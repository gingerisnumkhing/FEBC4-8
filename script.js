const submitButton = document.getElementById("submitButton")
    console.log(submitButton + "Hello")
    submitButton.addEventListener("click",addTodo)
    
function addTodo(){
    console.log("To-do was added")
    const valueToDo = document.getElementById('todo').value
    // const p = document.createElement('p')
    // p.innerHTML = valueToDo
    // const result = document.getElementById('result')
    // result.appendChild(p)
    result.innerHTML += `<li>${valueToDo}</li>`
   
}
fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => {
        for(let i=0;i<json.length;i++){
            const result = document.getElementById("result");
            result.innerHTML += `<li>${json[i].id}</li>`;
        }
      })
    async function getData(){
        const response = await fetch('https://jsonplaceholder.typicode.com/todos')
        const json = await response.json()
        console.log(json)
        console.log("asdfg")
    }
    getData()

    let students = {
        name : "Numkhing",
        age : '26',
        isGraduated: false
    }