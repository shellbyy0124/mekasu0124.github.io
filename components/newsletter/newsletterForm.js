app10.component('newsletter-form', {
    template: 
    /*html*/
    `<form class="newsletter-form" @submit.prevent="onSubmit">
        <h3>Create A New Newsletter!</h3>
        
        <label for="title">Newsletter Title</label>
        <input id="title" v-model="title">

        <label for="author">Newsletter Author</label>
        <input id="author" v-model="author">

        <label for="date">Date To Release Newsletter</label>
        <input id="date" placeholder="MM/DD/YYYY HH:MM" v-model="date">

        <label for="message">Newsletter Details</label>
        <textarea id="message" v-model="message"></textarea>

        <input class="button" type="submit" value="Create Newsletter!" style="width: 606px;">
    </form>`,
    data() {
        return {
            title: '',
            author: '',
            date: '',
            message: ''
        }
    },
    methods: {
        onSubmit() {
            if (this.title === '' || this.author === '' || this.date === '' || this.message === '') {
                alert('Newsletter Incomplete! All Inputs Required!')
                return
            }

            let letter = {
                title: this.title,
                author: this.author,
                date: this.date,
                message: this.message
            }

            this.$emit('newsletter-submitted', letter)

            this.title = ''
            this.author = ''
            this.date = ''
            this.message = ''
        }
    }
})