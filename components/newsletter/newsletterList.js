app2.component('newsletter-list', {
    props: {
        newsletters: {
            type: Array,
            required: true
        }
    },
    template:
    /*html*/
    `
    <div class="newsletter-list">
        <h3>Our Current Newsletters</h3>
        <ul>
            <li v-for="(news, index) in newsletters" :key="index" style="border: 5px solid black; width: 600px; padding: 5px; border-radius: 20px; background-color: lightgray; margin-bottom: 10px;">
                <li>Title: {{ news.title }}</li>
                <li>Author: {{ news.author }}</li>
                <li>Date: {{ news.date }}</li>
                <li>Message: {{ news.details }}</li>
            </li>
        </ul>
    </div>
    `
})