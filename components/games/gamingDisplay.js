app5.component('game-display', {
    template:
    /*html*/
    `
    <div class="game-display">
        <h1>{{ title }}</h1>
        <img :src="image">
        <p>{{ caption }}</p>
    </div>
    `,
    data() {
        return {
            a: 'Gawth3r Platform - Gaming Extension',
            imageUrl: '../../assets/images/gamingStation.png',
            info: [
                'The greatest place ever for gamers was, and still is, the arcade!',
                'Gawth3rs\' Arcade is your web version of the Gawth3r Gaming Extension.',
                'Here you can find all of our latest games that we currently have members',
                'playing in, and ones we are possibly bringing to the platform in future',
                'events. So stay tuned for more!'
            ]
        }
    },
    methods: {},
    computed: {
        title() {
            return this.a
        },
        image() {
            return this.imageUrl
        },
        caption() {
            let sentence = ''

            for (let i = 0; i < this.info.length; i++) {
                let x = this.info[i] + ' '

                sentence += x
            }

            return sentence
        }
    }
})