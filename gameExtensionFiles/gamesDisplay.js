app.component('game-display', {
    template:
    /*html*/
    `<div class="game-display">
        <div class="game-container">
            <div class="box-1">
                <h1>{{ title }}</h1>
                <h3>{{ subTitle }}</h3>
            </div>
            <div class="box-2">
                <div v-for="(game, index) in games" :key="game.id">
                    <figure>
                        <img :src="game.image">
                        <figcaption>
                            Game: <a :href="game.url">{{ game.name }}</a><br>
                            Players: {{ game.playerCount }}
                        </figcaption>
                    </figure>
                </div>
            </div>
        </div>
    </div>`,
    data() {
        return {
            title: 'Gawth3r\'s Gaming Extension',
            subTitle: 'A Place For All Things Gaming Related',
            games: [ // find a way to get discord integration to pull the number of members in each games role in the discord
                { id: 1, name: 'Factorio', image: '../assets/images/factorio.jpg', url: 'https://www.factorio.com/', playerCount: 0 },
                { id: 2, name: 'Minecraft', image: '../assets/images/minecraft.jpg', url: 'https://www.minecraft.net', playerCount: 0 },
                { id: 3, name: 'Summoners War', image: '../assets/images/summonersWar.jpg', url: 'https://sw.com2us.com/', playerCount: 0 },
                { id: 4, name: 'World of Warcraft', image: '../assets/images/wow.jpg', url: 'https://www.battle.net/', playerCount: 0 }
            ]
        }
    },
    methods: {
        title() {
            return this.title
        },
        subTitle() {
            return this.subTitle
        }
    }
})