const app = Vue.createApp({
    data() {
        return {
            newItem: '',
            items: []
        };
    },
    methods: {
        addItem() {
            if (this.newItem.trim() !== '') {
                this.items.push(this.newItem.trim());
                this.newItem = '';
            }
        }
    }
});

app.mount('#app');