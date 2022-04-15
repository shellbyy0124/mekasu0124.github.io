app10.component('newsletter-display', {
    template:
    /*html*/
    `
    <div class="newsletter-display">
        <div class="newsletter-container">
            <div class="newsletter-image">
                <img :src="image">
            </div>
            <div class="newsletter-info">
                <h1>{{ title }}</h1>
            </div>
        </div>
        <div class="newsletter-something">
            <newsletter-list v-if="newsletters.length" :newsletters="newsletters"></newsletter-list>
            <!-- move newsletter-form to another page for me, you, and the person in charge of 
                newsletters and posting them have permissions to do so -->
            <newsletter-form @newsletter-submitted="addNewsletter"></newsletter-form>
        </div>
    </div>
    `,
    data() {
        return {
            a: 'Gawth3r Platform - Newsletter Extension',
            imagePath: '../../assets/images/gawth3r_one.jpg',
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
        },
        image() {
            return this.imagePath
        }
    }
})