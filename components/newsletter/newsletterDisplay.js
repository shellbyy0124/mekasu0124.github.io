app2.component('newsletter-display', {
    template:
    /*html*/
    `<div class="newsletter-display">
        <img :src="image">
        <h1>{{ information }}</h1>
    </div>`,
    data() {
        return {
            a: 'Gawth3r\'s Newsletter Extension is currently under construction. Once this extension is ready to go, a newsletter job position will become avaialable. Please stay tuned for future updates!',
            url: '../../assets/images/under_construction.png'
        }
    },
    methods: {},
    computed: {
        information() {
            return this.a
        },
        image() {
            return this.url
        }
    }
})