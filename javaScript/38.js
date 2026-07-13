fetch('https://dummyjson.com/todos')
.then(res => res.json())
.then((data) => {
    console.log(data.todos.map((list) =>`Todo ${list.id}: ${list.todo}`));
});