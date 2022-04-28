app6.component('game-display', {
    template:
    /*html*/
    `
    <div class="game-display">
        <div class="nav-bar">
            <div v-for="(item, index) in navBarButtons" :key="index">
                <a :href="item.link">{{ item.name }}</a>
            </div>
        </div>
        <p>
            THE ART DISPLAY WEBSITE WILL BE SET UP AS THE COMMUNITY GROWS.
            AS FOR NOW THIS PAGE WILL REMAIN UNDER CONSTRUCTION<br>
            <img src="../../assets/images/under_construction.png">
        </p>
    </div>
    `,
    data() {
        return {
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
    computed: {}
})