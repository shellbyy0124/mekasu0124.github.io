app.component('joinus-form', {
    template:
    /*html*/
    `<form class="joinus-form" @submit.prevent="onSubmit">
        <label for="name">Username:</label>
        <input id="name" v-model="name"><br>

        <label for="discordId">Discord ID:</label>
        <input id="discordId" v-model="discordId"><br>
        
        <label for="email">Email Address:</label>
        <input id="email" v-model="email"><br>
        
        <label for="password">Create Password:</label>
        <input for="password" v-model="password"><br>
        
        <label for="passwd">Confirm Password:</label>
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

        <label for="artists">Are you an artist? If so, who is your favorite artist?</label>
        <select name="artists" id="artists">
            <option v-for="(artist, index) in artist" :key="artist.id" value="artist.value">
                {{ artist.name }} - {{ artist.year }}
            </option>
        </select>
        
        <input class="button" type="submit" value="Add Me To The Family!" style="width: 838px;">
    </form>`,
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
            ],
            artist: [
                { id: 1, value: 'select', name: 'Select One' },
                { id: 2, value: 'sandroBotticelli', name: 'Sandro Botticelli', year: '1445-1510' },
                { id: 3, value: 'leonardoDaVinci', name: 'Leonardo Da Vinci', year: '1452-1519' },
                { id: 4, value: 'michaelangelo', name: 'Michaelangelo', year: '1475-1564' },
                { id: 5, value: 'carvaggio', name: 'Carvaggio', year: '1571-1610' },
                { id: 6, value: 'rembrandt', name: 'Rembrandt', year: '1606-1669' },
                { id: 7, value: 'janVermeer', name: 'Jan Vermeer', year: '1632-1675' },
                { id: 8, value: 'eugeneDelcroix', name: 'Eugène Delacroix', year: '1798-1863' },
                { id: 9, value: 'claudeMonet', name: 'Claude Monet', year: '1840-1926' },
                { id: 10, value: 'vincentVanGogh', name: 'Vincent Van Gogh', year: '1853-1890' },
                { id: 11, value: 'gustavKlimt', name: 'Gustav Klimt', year: '1862-1918' },
                { id: 12, value: 'henriMatisse', name: 'Henri Matisse', year: '1869-1954' },
                { id: 13, value: 'pabloPicasso', name: 'Pablo Picasso', year: '1881-1973' },
                { id: 14, value: 'georgiaKeeffee', name: 'Georgia O\'Keeffe', year: '1887-1986' },
                { id: 15, value: 'reneMagritte', name: 'Renè Magritte', year: '1989-1967' },
                { id: 16, value: 'salvadorDali', name: 'Salvador Dalì', year: '1904-1989' },
                { id: 17, value: 'fridaKahlo', name: 'Frida Kahlo', year: '1907-1954' },
                { id: 18, value: 'jacksonPollock', name: 'Jackson Pollock', year: '1912-1956' },
                { id: 19, value: 'andyWarhol', name: 'Andy Warhol', year: '1928-1987' },
                { id: 20, value: 'jeanMichelBasquiat', name: 'Jean-Michel Basquiat', year: '1960-1988' },
                { id: 21, value: 'yayoiKusama', name: 'Yayoi Kusama', year: '1929-PRESENT' }
            ],
            answers: []
        }
    },
    methods: {
        onSubmit() {
            // create a method that takes the users inputs and writes them to a shared
            // stored database with the discord extension so that properties are accessible
            // cross platform or whatever
            
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