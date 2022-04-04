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
        <input for="passwd" v-model="passwd">`,
    data() {},
    methods: {},
    components: {}
})