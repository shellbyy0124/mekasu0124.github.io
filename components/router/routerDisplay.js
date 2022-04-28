app3.component('router-display', {
    template:
    `
    <div class="nav-bar">
        <div v-for="(item, index) in navBarButtons" :key="index">
            <a :href="item.link">{{ item.name }}</a>
        </div>
    </div>
    <div class="router-display">
        <div id="box-1">
            <h1>{{ title }}</h1>
        </div>
    </div>
    `,
    data() {
        return {
            a: 'Our Currently Supported Extensions',
            navBarButtons: [
                { id: 1, name: 'Home', link: '../../index.html' },
                { id: 2, name: 'About', link: '../about/About.html' },
                { id: 3, name: 'Extensions', link: '../router/Router.html' },
                { id: 4, name: 'Newsletters', link: '../newsletters/Newsletters.html' },
                { id: 5, name: 'Reviews', link: '../reviews/Reviews.html' },
                { id: 6, name: 'Sign-In', link: '../signin/SignIn.html' }
            ]
        }
    },
    methods: {},
    computed: {
        title() {
            return this.a
        }
    }
})