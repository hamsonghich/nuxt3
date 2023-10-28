export const useToDoListStore = defineStore({
    id: 'todoList',
    state: () => ({
        toDoList: [],
        id: 0
    }),
    actions: {
        addToDo (item) {
           this.toDoList.push({
                item,
                id: this.id++,
                completed: false
            })
        },
        deleteToDo(itemId){
            this.toDoList = this.toDoList.filter(item => {
                return item.id !== itemId
            })
        }
    }
})