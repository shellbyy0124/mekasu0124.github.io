app8.component('login-display', {
    template:
    /*html*/
    `
    <div class="login-display">
        <h1>{{ title }}</h1>
        <login-form @login-submitted="checkCreds"></login-form>
    </div>
    `,
    data() {
        return {
            a: 'Please Sign In To Continue :D'
        }
    },
    methods: {
        checkCreds(user) {
            let nameResults = ''
            let passResults = ''

            if (user.name != nameResults || user.password != passResults) {
                alert('Username/Password Does Not Exist. Try Again!')
                return
            } else {
                this.signIn = true
            }
        }
    },
    computed: {
        title() {
            return this.a
        }
    }
})