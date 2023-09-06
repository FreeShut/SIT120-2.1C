const app = Vue.createApp({
    data() {
        return {
            newTodo: '',
            todos: []
        };
    },
    methods: {
        addTodo() {
            if (this.newTodo.trim() !== '') {
                this.todos.push({ text: this.newTodo.trim(), completed: false });
                this.newTodo = '';
            }
        },
        deleteTodo(index) {
            this.todos.splice(index, 1);
        }
    }
});

app.mount('#todo-app');