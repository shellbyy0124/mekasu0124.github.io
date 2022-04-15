app7.component('art-display', {
    template:
    /*html*/
    `<div class="art-display">
        <img :src="image">
        <h1>{{ title }}</h1>
        <p v-html="caption">{{ caption }}</p>
    </div>`,
    data() {
        return {
            imageUrl: '../../assets/images/artEasel.png',
            a: 'Gawth3rs\' Art',
            info: [
                'The <i>Art Extension</i> is a place meant for artists and their fans.',
                'To give each extension a category within the <i>Discord Extension</i>',
                'just wasn\'t enough for me. I had to give everyone their own communities',
                'on the <i>Website Extension</i> as a whole. A couple of my very close',
                'friends are artists, and I wanted to give them their own area to go explore',
                'and have fun with other artists so welcome aboard!'
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