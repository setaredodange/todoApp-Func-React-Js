import React , {useState} from 'react'
import Todo from "../Todo/Todo"
import './TodoList.css';



function TodoList () {

//   constructor(props){
//     super(props)
//     this.state={
//       todos :[],
//       todoTitle : '',
//       status :'all'
//     }


const [todos, setTodos]= useState([])
const [todoTitle, setTodoTitle]= useState("")
const [status, setStatus]= useState("all")

// Metods

   const todoTitleHandler = (event)=> {
    console.log(event.target.value);

    // this.setState({
    //   todoTitle: event.target.value
    // })

    setTodoTitle(event.target.value);
    
  }

   const addTodo = (event) =>{
    event.preventDefault();
    //  if (!this.state.todoTitle.length) return;

//    let  newTodoObject = {
//       id: this.state.todos.length + 1,
//       title : this.state.todoTitle,
//       completed : false
//     }

//     this.setState (prevState => {
//       return {
//         todos : [...prevState.todos, newTodoObject],
//         todoTitle : '',
//       }
//     })


let  newTodoObject = {
    id: todos.length + 1,
    title : todoTitle,
    completed : false
  }


  setTodos( prevState =>{
    return  [...prevState, newTodoObject] 
  })
  setTodoTitle ('')
  }


 const  removeTodo = (todoId) => {
    console.log(todoId);
    let newTodo= todos.filter (todo => {
      return todo.id !== todoId
    })
    console.log(newTodo);
    // this.setState({
    //   todos: newTodo
    // })
    setTodos (newTodo)

  }

 const  editTodo = (todoId)=> {
    console.log(todoId);

    let newTodos= [...todos]

    newTodos.forEach (todo => {
           if (todo.id === todoId){
             todo.completed = !todo.completed  
}
    })
    console.log(newTodos);
    // this.setState({
    //     todos : newTodos})

    setTodos(newTodos)
  }


  const statusHandler = (event) => {
    // this.setState({
    //   status : event.target.value
    // })
    setStatus (event.target.value)
  }



    return (
      <>
        <form onSubmit={addTodo}>
            <input class="todo-input" type="text" maxLength="40" value={todoTitle}
             onChange={todoTitleHandler} />
           <button class="todo-button" type="submit"> + </button>
           <div class="select">
            <select name="todos" class="filter-todo" onChange= {statusHandler}>
                <option value="all">All</option>
                <option value="completed">completed</option>
                <option value="uncompleted">uncompleted</option>

            </select>

           </div>

        </form>

        <div className="todo-container">
          <ul className="todo-list">

          {status === 'completed' && todos.filter(todo => todo.completed).map ( todo => (
              <Todo {...todo} key={todo.id}  onRemove={removeTodo} onEdit= {editTodo}/>
            ))}  

         {status === 'uncompleted' && todos.filter(todo => !todo.completed).map ( todo => (
              <Todo {...todo} key={todo.id}  onRemove={removeTodo} onEdit= {editTodo}/>
            ))}  

            {status=== 'all' && todos.map(todo => (
              <Todo {...todo} key={todo.id}  onRemove={removeTodo} onEdit= {editTodo}/>
            ))}

          </ul>
        </div>
      </>
    )
  }

export default TodoList
