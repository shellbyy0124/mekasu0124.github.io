app9.component('review-display', {
    template: 
    /*html*/
    `
    <div class="review-display">
        <div class="review-container">
            <h1>{{ title }}</h1>
        </div>
        <div class="ifVerified" v-if="signIn">
            <review-form @review-submitted="addReview"></review-form>
        </div>
        <review-list v-if="reviews.length" :reviews="reviews"></review-list>
    </div>
    `,
    data() {
        return {
            a: 'Gawth3rs\' Reviews',
            signIn: true,
            reviews: []
        }
    },
    methods: {
        addReview(review) {
            this.reviews.push(review)
        }
    },
    computed: {
        title() {
            return this.a
        }
    }
})