app.component('title-details', {
    template:
    /*html*/
    `<div class="main-display">
        <div class="display-container">
            <div class="platform-image">
                <img :src="image">
            </div>

            <div class="title">
                <h1>{{ title }}</h1>
                <h3>{{ subTitle }}</h3>
            </div>
        </div>
    </div>`,
    data() {
        return {
            title: 'Gawth3r Platform',
            subTitle: 'A Place For Everyone; By The People => For The People',
            image: './assets/images/gawth3r_one.jpg'
        }
    },
    methods: {},
    computed: {
        title() {
            return this.title
        },
        subTitle() {
            return this.subTitle
        },
        image() {
            return this.image
        }
    }
})