app4.component('discord-display',{
    template:
    /*html*/
    `
    <div class="discord-display">
        <img :src="image">
        <h1>{{ title }}</h1>
        <p v-html="caption">{{ caption }}</p>
    </div>
    `,
    data() {
        return {
            imageUrl: '../../assets/images/chatBubbles.png',
            a: 'Gawth3r Platform - Discord Extension',
            info: [
                'The Discord Extension of the Gawth3r Platform is the home for those who are',
                'just regular members of the discord. Here you can find various games to play',
                'to obtain in-discord currency (Gawth3r Coins), participate in lotteries',
                'and test your knowledge in quiz games, and more!'
            ]
        }
    },
    methods: {},
    computed: {
        image() {
            return this.imageUrl
        },
        title() {
            return this.a
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