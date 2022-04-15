app10.component('newsletter-display', {
    template:
    /*html*/
    `
    <div class="newsletter-display">
        <div class="newsletter-container">
            <div class="newsletter-info">
                <h1>{{ title }}</h1>
            </div>
        </div>
        <newsletter-list v-if="newsletters.length" :newsletters="newsletters"></newsletter-list>
        <div class="newsletter-something" v-if="signIn">
            <newsletter-form @newsletter-submitted="addNewsletter"></newsletter-form>
        </div>
    </div>
    `,
    data() {
        return {
            a: 'Gawth3rs\' Newsletters',
            signIn: false,
            newsletters: []
        }
    },
    methods: {
        addNewsletter(letter) {
            this.newsletters.push(letter)
        }
    },
    computed: {
        title() {
            return this.a
        }
    }
})