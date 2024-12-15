const app = Vue.createApp({
    data () {
        return {
            showBook : true,
            books : [
                {title : "Name of the Wind", director : "Patrick Rofthuss",img : "images/1.jpg", isFav: true},
                {title : "The way of kings", director : "Brandon Sanderson", img : "images/2.jpg", isFav:true},
                {title : "The final Empire", director : "Brandon Sanderson", img : "images/3.jpg",isFav:true}
            ]
        }
    },
    methods: {
        showBookName()
        {
            this.showBook = !this.showBook
        },
        toggleFav(book)
        {
            book.isFav = !book.isFav
        }
    },

    computed: {
        filteredBooks() {
            return this.books.filter((book) => book.isFav)
        }
    }
})

app.mount('#app')