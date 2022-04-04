app.component('joinus-display', {
    template:
    /*html*/
    `<div class="joinus-display">
        <div class="joinus-container">
            <h1>{{ title }}</h1>
            <p>
                By joining the Gawth3r Family, you'll gain access to numerous
                commands, a weekly newsletter, vip benefits (<a href="https://discord.com/nitro">discord nitro required</a>),
                and access to our various extensions like our Programming Knook, Arcade Street, Art Alley, and more.
            </p>
        </div>
        <joinus-form></joinus-form>
    </div>`,
    data() {
        return {
            title: 'Welcome To The Family!'
        }
    },
    methods: {
        title() {
            return this.title
        }
    },
    computed: {}
})