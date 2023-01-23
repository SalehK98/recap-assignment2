const items = [
    {
      id: 1,
      task: "buy milk",
      done: false,
      priority: 1,
      dueDate: "2022-01-15",
    },
    {
      id: 2,
      task: "buy cola",
      done: true,
      priority: 0,
      dueDate: "2022-01-20",
    },
    {
      id: 3,
      task: "buy chocolate",
      done: false,
      priority: 3,
      dueDate: "2022-02-05",
    },
  ];

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
const sortBy = (input) => {
    if (input === "dueDate") {
      items.sort((a, b) => new Date(a.date) - new Date(b.date));
    } else if (input === "id") {
      items.sort((a, b) => a.id-b.id);
    } else if (input === "priority") {
      items.sort((a, b) => a.priority - b.priority);
    } else {
      console.log("Invalid sort parameter!");
    }
    console.log("List sorted!");
  };
  sortBy("dueDate");
  console.log(items);


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