app.component('title-details', {
    template:
    /*html*/
    `<div class="main-display">
        <div class="display-container">
            <div class="platform-image">
                <img :src="image">
            </div>

            <div class="title">
                <h1>{{ subTitle }}</h1>
            </div>
        </div>
    </div>`,
    data() {
        return {
            subTitle: 'A Place For Everyone; By The People => For The People',
            image: './assets/images/gawth3r_one.jpg'
        }
    },
    methods: {},
    computed: {
        subTitle() {
            return this.subTitle
        },
        image() {
            return this.image
        }
    }
})