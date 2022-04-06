app.component('title-details', {
    template:
    /*html*/
    `<div class="main-display">
        <div class="display-container">
            <div class="platform-image">
                <img :src="image">
            </div>
        </div>
    </div>`,
    data() {
        return {
            image: './assets/images/gawth3r_one.jpg'
        }
    },
    methods: {},
    computed: {
        image() {
            return this.image
        }
    }
})