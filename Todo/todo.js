document.querySelector("form").addEventListener("submit",toDofunction);

function toDofunction(){
    event.preventDefault();
    var name = document.querySelector("#name").value;
    var Qty = document.querySelector("#qty").value;
    var priority = document.querySelector("#priority").value
    var tr = document.createElement("tr");
    var th = document.createElement("th");
    th.innerText = name;
    var td1 = document.createElement("td");
    td1.innerText=Qty;
    var td2 = document.createElement("td");
    td2.innerText = priority;
    tr.append(th,td1,td2);
    document.querySelector("tbody").append(tr)
    
}