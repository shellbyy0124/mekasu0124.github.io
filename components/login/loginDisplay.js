app8.component('login-display', {
    template:
    /*html*/
    `<div class="login-display">
        <img :src="image">
        <h1>{{ information }}</h1>
    </div>`,
    data() {
        return {
            url: '../../assets/images/under_construction.png',
            a: 'Gawth3r\'s Login Extension is currently under construction. Once this extension is ready to go, a newsletter job position will become avaialable. Please stay tuned for future updates!'
        }
    },
    methods: {},
    computed: {
        image() {
            return this.url
        },
        information() {
            return this.a
        }
    }
})