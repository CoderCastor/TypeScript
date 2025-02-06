import "./style.css";

interface Todo {
  title: string;
  isCompleted: boolean;
  readonly id: string;
}

const todos: Todo[] = [];
// const Todos : Array<Todo> = []  //generic type declaration

const todosContainer = document.querySelector(
  ".todoContainer"
) as HTMLDivElement;

const todoInput = document.getElementsByName("title")[0] as HTMLInputElement;

const myForm = document.getElementById("myForm") as HTMLFormElement;

myForm.onsubmit = (e: SubmitEvent) => {
  e.preventDefault();

  const todo: Todo = {
    title: todoInput.value,
    isCompleted: false,
    id: String(Math.floor(Math.random() * 1000)),
  };

  todos.push(todo);
  todoInput.value = "";
  RenderTodos(todos);
};

const generateTodoItem = (item:Todo) => {
  const todo : HTMLDivElement = document.createElement('div')
  todo.className = 'todo';

  //creating checkbox
  const checkBox : HTMLInputElement = document.createElement('input')
  checkBox.setAttribute('type','checkbox')
  checkBox.className = 'isCompleted'
  checkBox.checked = item.isCompleted
  checkBox.onchange = () =>{
    paragraph.className = checkBox.checked ? 'textCut' : ''
    item.isCompleted = checkBox.checked
    // console.log(item.id , " : ",item.isCompleted)

  }

  //creating paragraoh
  const paragraph : HTMLParagraphElement = document.createElement('p')
  paragraph.innerText = item.title
  paragraph.className = checkBox.checked ? 'textCut' : ''

  //creating button
  const button : HTMLButtonElement = document.createElement('button')
  button.innerText='X'
  button.className='DeleteBtn'
  button.onclick = () => deleteTodo(item.id)

  //Appending all to TodoItem
  todo.append(checkBox,paragraph,button)

  //appending todo to Todo container
  todosContainer.append(todo)

}

const deleteTodo = (id:string) => {
  const idx = todos.findIndex(item => item.id === id)
  todos.splice(idx,1)
  RenderTodos(todos)
}

const RenderTodos = (todos:Todo[]) =>{
  todosContainer.innerHTML = ''
  todos.forEach(item => {
    generateTodoItem(item)
  })
}
