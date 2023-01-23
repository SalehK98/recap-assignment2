const items = [
    {
        id: 1,
        task: "buy milk",
        done: false,
        priority: 0,
        dueDate: new Date
    }
]

const chooseAction = () => {

}


const addItem = input => { // items.push(newTask)

} // this accept arr and new item as par/
const markAsDone = input => {
    // id form user , array, state 
    // 
}
const removeItem = input => {
    // id from user, array
}
const displayItems = input => {
    // array 
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