export class TodoItem {
    id: number
    dateCreated: string
    dateTodo: string
    todoName: string
    todoDescription: string
    todoCompleted: boolean

    constructor(
        id: number, 
        dateCreate: Date, 
        dateTodo: string,
        todoName: string,
        todoDescription: string,
        todoCompleted: boolean
    ) 
    {
        this.id = id
        this.dateCreated = dateCreate.toISOString().split('T')[0]
        this.dateTodo = dateTodo
        this.todoName = todoName
        this.todoDescription = todoDescription
        this.todoCompleted = todoCompleted
    }
}