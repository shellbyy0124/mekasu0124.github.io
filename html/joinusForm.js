app.component('joinus-form', {
    template:
    /*html*/
    `<form class="joinus-form" @submit.prevent="onSubmit">
        <h3>Come Join The Family!<h3>
        
        <label for="name">Discord Username</label>
        <input id="name" v-model="name">
        
        <label for="email">Email Address</label>
        <input id="email" v-model="email">
        
        <label for="password">Create Password</label>
        <input for="password" v-model="password">
        
        <label for="passwd">Confirm Password</label>
        <input for="passwd" v-model="passwd">
        
        <input class="button" type="submit" value="Submit">`,
    data() {
        return {
            name: '',
            email: '',
            password: '',
            passwd: ''
        }
    },
    methods: {
        onSubmit() {
            if (this.name === '' || this.email === '' || this.password === '' || this.password === '') {
                alert('All Fields Must Be Filled In!')
                return
            } else {
                if (this.password != this.passwd) {
                    alert('Passwords Do Not Match!')
                    return
                } else {
                    let newUser = {
                        name: this.name,
                        email: this.email,
                        password: this.password
                    }

                    this.$emit('joinus-submitted', newUser)

                    this.name = ''
                    this.email = ''
                    this.password = ''
                    this.passwd = ''
                }
            }
        }
    },
    components: {}
})