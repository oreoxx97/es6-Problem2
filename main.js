class Task {
  constructor (id , description , completed = false) {
    this.id = id,
    this.description = description,
    this.completed = completed
  }

  doTask () {
    this.completed = true
  }
}

const toDoLists = []
const newTask = new Task(1, 'Go Fishing')
toDoLists.push(newTask)
console.log(toDoLists)
toDoLists[0].doTask()
console.log(toDoLists)
