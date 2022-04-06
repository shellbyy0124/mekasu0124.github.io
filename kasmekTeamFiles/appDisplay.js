app.component('application-display', {
    template:
    /*html*/
    `<div class="application-display">
        <div class="application-container">
            <h1>{{ title }}</h1>
            <p>{{ requiredText }}</p>
        </div>
        <application-form></application-form>
    </div>`,
    data() {
        return {
            a: 'KasMek Programming Teams\' Application',
            b: 'All Inputs Are Required!'
        }
    },
    methods: {},
    computed: {
        title() {
            return this.a
        },
        requiredText() {
            return this.b
        }
    }
})