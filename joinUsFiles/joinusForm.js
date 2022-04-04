app.component('joinus-form', {
    template:
    /*html*/
    `<form class="joinus-form" @submit.prevent="onSubmit">
        <label for="name">Username: </label>
        <input id="name" v-model="name"><br>

        <label for="discordId">Discord ID: </label>
        <input id="discordId" v-model="discordId"><br>
        
        <label for="email">Email Address: </label>
        <input id="email" v-model="email"><br>
        
        <label for="password">Create Password: </label>
        <input for="password" v-model="password"><br>
        
        <label for="passwd">Confirm Password: </label>
        <input for="passwd" v-model="passwd"><br>

        <label for="languages">Do you like to program? If so, what's your favorite language? </label>
        <select name="languages" id="languages">
            <option v-for="(lang, index) in languages" :key="lang.id" value="lang.value">
                {{ lang.name }}
            </option>
        </select><br>

        <label for="games">Are you a gamer? If so, what's your favorite game? </label>
        <select name="games" id="games">
            <option v-for="(game, index) in games" :key="game.id" value="game.value">
                {{ game.name }}
            </option>
        </select><br>
        
        <input class="button" type="submit" value="Submit">`,
    data() {
        return {
            name: '',
            discordId: '',
            email: '',
            password: '',
            passwd: '',
            languages: [
                { id: 0, value: 'select', name: 'Select One' },
                { id: 1, value: 'python', name: 'Python' },
                { id: 2, value: 'javascript', name: 'JavaScript' },
                { id: 3, value: 'jsHtmlCss', name: 'JavaScript/HTML/CSS' },
                { id: 4, value: 'rust', name: 'Rust' },
                { id: 5, value: 'go', name: 'Go' },
                { id: 6, value: 'java', name: 'Java'},
                { id: 7, value: 'cSharp', name: 'C#' },
                { id: 8, value: 'cC', name: 'C' },
                { id: 9, value: 'other', name: 'other' }
            ],
            games: [
                { id: 0, value: 'select', name: 'Select One' },
                { id: 1, value: 'factorio', name: 'Factorio' },
                { id: 2, value: 'minecraft', name: 'Minecraft' },
                { id: 3, value: 'summonersWar', name: 'Summoners War' },
                { id: 4, value: 'wow', name: 'World of Warcraft' },
                { id: 5, value: 'other', name: 'Other' }
            ]
        }
    },
    methods: {
        onSubmit() {
            if (this.name === '' || this.discordId === '' || this.email === '' || this.password === '' || this.password === '') {
                alert('All Fields Must Be Filled In!')
                return
            } else {
                if (this.password != this.passwd) {
                    alert('Passwords Do Not Match!')
                    return
                } else {
                    let newUser = {
                        name: this.name,
                        discordId: this.discordId,
                        email: this.email,
                        password: this.password
                    }

                    this.$emit('joinus-submitted', newUser)

                    this.name = ''
                    this.discordId = ''
                    this.email = ''
                    this.password = ''
                    this.passwd = ''
                }
            }
        }
    },
    components: {}
})