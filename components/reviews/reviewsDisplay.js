app9.component('review-display', {
    template: 
    /*html*/
    `
    <div class="review-display">
        <div class="review-container">
            <h1>{{ title }}</h1>
        </div>
        <review-list v-if="reviews.length" :reviews="reviews"></review-list>
        <review-form @review-submitted="addReview"></review-form>
    </div>
    `,
    data() {
        return {
            a: 'Gawth3r Platform - Review Extension',
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