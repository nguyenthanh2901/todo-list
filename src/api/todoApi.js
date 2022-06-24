class todoApi {
    todos = [
        {
            id: 1, 
            status: 0,
            name: 'Learn JS'
        },
        {
            id: 2, 
            status: 1,
            name: 'Learn HTML'
        },
        {
            id: 3, 
            status: 2,
            name: 'Learn CSS'
        }
    ]

    get(id=false) {
        if(!id) {
            return this.todos
        }
        return this.todos.find((item) => item.id === id)
    }
}

export default new todoApi();