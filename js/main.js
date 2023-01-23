const items = [
    {
        id: 1,
        task: "buy milk",
        done: false,
        priority: 0,
        dueDate: new Date
    },
    {
        id: 2,
        task: "buy cake",
        done: true,
        priority: 1,
        dueDate: new Date
    }
]


const chooseAction = () => {
    let choice = prompt("please choose an action:\n1- Add a Task\n2- Remove a task\n3- Display tasks\n4- Change task to done\n5- Search for a task")
    console.log("");
    if (choice != null) {
        switch (choice) {
            case "1":
                let taskName = prompt("please enter the task's name")
                let taskPriority = prompt("please enter the task's priority")
                let taskDueDate = prompt("please enter the task's Due Date")
                addItem(taskName, taskPriority, taskDueDate)
            case "2":
                items.forEach(el => console.log(el))
                // displayItems()
                let taskToRemove = prompt("please enter the task id")
                const x = removeItem(1)

            case "3":
            case "4":
            case "5":
            case "6":
        }
    }
}

chooseAction()


const addItem = (items, name, priority, date) => { // items.push(newTask)
    const escapedName = name.replace(/[\u00A0-\u9999<>\&]/g, (i) => {
        return "&#" + i.charCodeAt(0) + ";";
    });
    if (!escapedName.length) {
        console.log("Error. Task name is empty or contain improper symbols.");
        return -1;
    }
    if (!(Number.isInteger(priority) && priority >= 0)) {
        console.log("Error. Task priority has an improper value.");
        return -2;
    }
    if (!date.length || !str.find("/") || !str.find("-")) {
        console.log("Error in the due date.");
        return -3;
    }
    const id = Math.floor(Math.random() * 10000) + 1000;
    const dueDate = new Date(date);
    const task = {
        id: id,
        task: escapedName,
        done: false,
        priority,
        dueDate: dueDate
    };
    items.push(task);
    return task;
}; // this accept arr and new item as par/

const markAsDone = input => {
    // id form user , array, state 
    // 
}
const removeItem = (input) => {
    // id from user, array
    items.pop()
    console.log(items);
}
const displayItems = () => {
    // array 

    console.log(items);
    let x = prompt("idd")
}
const sortBy = input => {
    // array

    /* function sortById() {
  items.map(key => key.id);
  return( sortById)   
}
function sortByDate() {
    items.map(key => key.Date);
    return( sortByDate)
}
function sortByPriority() {
    items.map(key => key.priority);
    return( sortByPriority)
}
function sortByTask() {
    items.map(key => key.task);
    return( sortByTask)
}


function sort(by) {
    switch (by) {
        case id:
            sortById()
            break;
            case Date:
                sortByDate()
            break;

            case priority:
                sortByPriority()
            break;
            case task:
                sortByTask()
            break
    
        default:
            console.log('not a category in the list')
            break;
    }
    
} */
}
const search = input => {
    // array 
    // searchTerm from user

    /* const searchResults = items.filter(item => 
        item.{searchTerm}.includes(input));
        console.log(searchResults); */


    // choose search by : 
    // 1 - dueDate 
    // 2 - task 
}


/* 
const sortItems = (sortBy) => {
  if(sortBy === 'date'){
    toDoList.sort((a, b) => new Date(a.date) - new Date(b.date));
  }
  else if(sortBy === 'name'){
    toDoList.sort((a, b) => a.name.localeCompare(b.name));
  }
  else if(sortBy === 'priority'){
    toDoList.sort((a, b) => a.priority - b.priority);
  }
  else{
    console.log("Invalid sort parameter!");
  }
  console.log("List sorted!");
} */