app9.component('review-list', {
    props: {
        reviews: {
            type: Array,
            required: true
        }
    },
    template:
    /*html*/
    `
    <div class="review-list">
        <h3>Our Current Reviews</h3>
        <ul>
            <li v-for="(review, index) in reviews" :key="index" style="border: 5px solid black; width: 600px; padding: 5px; border-radius: 20px; background-color: lightgray; mragin-bottom: 10px;">
                <li>Title: {{ review.title }}</li>
                <li>Author: {{ review.author }}</li>
                <li>Date: {{ review.date }}</li>
                <li>Stars: {{ review.stars }}</li>
                <li>Recommend? {{ review.recommend }}</li>
                <li>Review: {{ review.details }}</li>
            </li>
        </ul>
    </div>
    `
})