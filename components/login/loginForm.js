app8.component('login-form', {
    template:
    /*html*/
    `
    <form class="login-form" @submit.prevent="onSubmit">
        <!-- <div class="popup" onClick="showPopup"> -->
            <div id="blur">
                <label for="name">Username:</label>
                <input id="name" v-model="name">

                <label for="password">Password:</label>
                <input id="password" v-model="password">

                <input class="button" type="submit" value="Log In">
            </div>
        <!-- </div> -->
    </form>
    `,
    data() {
        return {
            name: '',
            password: ''
        }
    },
    methods: {
        onSubmit() {
            let user = {
                name: this.name,
                password: this.password
            }

            this.$emit('login-submitted', user)

            this.name = ''
            this.password = ''
        },
        showPopup() {
            var popup = document.getElementById("myPopup");
            popup.classList.toggle("show");
        }
    },
    computed: {}
})