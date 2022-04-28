app.component('home-display', {
    template:
    /*html*/
    `<div class="home-display">
        <div class="nav-bar">
            <div v-for="(item, index) in navBarButtons" :key="index">
                <a :href="item.link">{{ item.name }}</a>
            </div>
        </div>
        <div id="box-1">
            <h1>{{ title }}</h1>
            <h3 v-html="titleCaption">{{ titleCaption }}</h3>
            <p v-html="story">{{ story }}</p>
        </div>
        <div id="box-2">
            <iframe src="https://discord.com/widget?id=779290532622893057&theme=dark"
                width="350" height="300"
                allowtransparency="true" frameborder="0"
                sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
            >
            </iframe>
        </div>
    </div>
    `,
    data() {
        return {
            signedIn: true,
            imageUrl: '../assets/images/homeImage.png',
            a: 'Gawth3r Platform Main Hub',
            b: '<i><u>A Place For Everyone</u> ~ <u>By The People</u> ~ <u>For The People</u></i>',
            c: [
                'Hi and Welcome! Here on the home page, you can obtain access',
                'to all of our content by clicking the <i>Join Us</i> button at',
                'the top of the page, and sign up to become a member. We also',
                'encourage you to join our',
                '<a href="https://discord.gg/paeKabbHQ6">Discord Extension</a>',
                'so that you can stay current with our latest bot,',
                'website, game, and programming events and updates plus chat with',
                'other members across the globe! We even have sections for members',
                'to be able to ask questions and further their knowledge, post',
                'useful resource links, and more. Also, with a dedicated support',
                'section (and staff), we will be able to bring you more adequate',
                'support with members from various parts of the community readily',
                'available (when online) to help you with your latest bug, or issue!',
                'So come join us and be apart of something bigger and better!'
            ],
            navBarButtons: [
                { id: 1, name: 'About', link: "./components/about/About.html" },
                { id: 2, name: 'Extensions', link: "./components/router/Router.html" },
                { id: 3, name: 'Newsletters', link: "./components/newsletters/Newsletters.html" },
                { id: 4, name: 'Reviews', link: "./components/reviews/Reviews.html" },
                { id: 5, name: 'Sign-In', link: "./components/signin/SignIn.html" }
            ]
        }
    },
    methods: {},
    computed: {
        image() {
            return this.imageUrl
        },
        title() {
            return this.a
        },
        titleCaption() {
            return this.b
        },
        story() {
            let sentence = ''

            for (let i = 0; i < this.c.length; i++) {
                let x = this.c[i] + ' '

                sentence += x
            }

            return sentence
        }
    }
})