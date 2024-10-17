var todoListForm = document.getElementById('todoListForm')
var todoContainer = document.querySelector('.todoContainer');
var todoList= []

function addTask(userName,userID,userBalance) {
    
    var todo ={
        userName:userName,
        userID:userID,
        userBalance:userBalance
    }
    todoList.push(todo)
    console.table(todoList)
}

function ShowTask() {
    todoContainer.innerHTML = ""
        var div = document.createElement('div')
        div.classList.add('table-responsive')

        var table = document.createElement('table')
        table.classList.add('table','table-striped','table-bordered','table-hover','table-sm','table-light')

        var thead = document.createElement('thead')
        thead.classList.add('thead-dark')
        var tr = document.createElement('tr')

        // put the header in an array w hn3ml foreach l kol index 

        var headers = ['#', 'Name', 'ID', 'Balance', 'Actions']

        headers.forEach((header)=>{
            var th = document.createElement('th')
            th.innerText = header
            th.setAttribute('scope', 'col')
            tr.appendChild(th)


        })
        
    thead.appendChild(tr)
    table.appendChild(thead)

        var tbody = document.createElement('tbody')
        
    todoList.forEach((ele,i)=>{
        var tr2 = document.createElement('tr')
        tr2.classList.add('table-striped')

        var th2 = document.createElement('th')
        th2.textContent = i+1
        th2.setAttribute('scope', 'row')

        var td2_1 = document.createElement('td')
        td2_1.innerText = ele.userName
        
        var td2_2 = document.createElement('td')
        td2_2.innerText =  ele.userID

        var td2_3 = document.createElement('td')
        td2_3.innerText = ele.userBalance

        var td2_4 = document.createElement('td')


        var Edit = document.createElement('button');
        Edit.classList.add('btn', 'btn-sm', 'btn-warning', 'mr-2');
        Edit.innerText = 'Edit';
        Edit.addEventListener('click', function() {
            var newBal = prompt("Enter new balance");
        
            if (newBal !== null && !isNaN(newBal)) {
                ele.userBalance = parseFloat(newBal);
                ShowTask();
            } else {
                console.log('Invalid input. Please enter a numeric value.');
            }
        });


        var Delete = document.createElement('button')
        Delete.classList.add('btn', 'btn-sm', 'btn-danger');
        Delete.innerText = 'Delete';
        Delete.addEventListener('click', function() {
            todoList.splice(i, 1); 
            ShowTask();
        });


        td2_4.appendChild(Edit)
        td2_4.appendChild(Delete)

        tr2.appendChild(th2)
        tr2.appendChild(td2_1)
        tr2.appendChild(td2_2)
        tr2.appendChild(td2_3)
        tr2.appendChild(td2_4)

        tbody.appendChild(tr2)


        
        table.appendChild(tbody);
        div.appendChild(table);
        todoContainer.appendChild(div);


    })
    
}

todoListForm.addEventListener('submit' , function (e) {
    e.preventDefault()
    // console.log(e.target.elements.uName.value)
    // console.log(e.target.elements.uID.value)
    // console.log(e.target.elements.uBal.value)

    addTask(e.target.elements.uName.value,e.target.elements.uID.value,e.target.elements.uBal.value)
    ShowTask()
})



// local Storage




localStorage.setItem('userName', 'mostafa');
localStorage.setItem('userId', '2');
localStorage.setItem('userBalance', '5000');

var address = localStorage.getItem('userBalance');
document.getElementById('uBal').innerText = address;  // Ensure 'uBal' element exists in your HTML

// Define an array of user objects
var users = [
    {name: 'mostafa', id: 2, balance: 5000},
    {name: 'mohamed', id: 1, balance: 8000},
];

var usersString = JSON.stringify(users);
localStorage.setItem('usersList', usersString);

var newUsersList = JSON.parse(localStorage.getItem('usersList'));

console.log('Before modification:', newUsersList);

var newUser = {name: 'new user', id: 3, balance: 1000}; // Example new user
newUsersList.push(newUser);  

localStorage.setItem('usersList', JSON.stringify(newUsersList));

localStorage.removeItem('userName');

console.log(newUsersList);