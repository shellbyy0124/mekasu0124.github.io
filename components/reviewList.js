app.component('review-list', {
    props: {
        reviews: {
            type: Array,
            required: true
        },
        recommendations: {
            type: Boolean,
            required: true
        }
    },
    template:
    /*html*/
    `
    <div class="review-container">
      <h3>Reviews:</h3>
        <ul>
          <li v-for="(review, index) in reviews" :key="index">
            Name: {{ review.name }}<br>
            Stars: {{ review.rating }}<br>
            Recommend? {{ review.recommendation }}<br>
            Review: {{ review.review }}
          </li>
        </ul>
    </div>
    `
})