app3.component('coding-display', {
    template:
    /*html*/
    `
    <div class="coding-display">
        <img :src="image">
        <h1>{{ title }}</h1>
        <p v-html="caption">{{ caption }}</p>
    </div>
    `,
    data() {
        return {
            imageUrl: '../../assets/images/laptop.png',
            a: 'Gawth3rs\' Coding',
            info: [
                'The <i>Coding Extension</i> is a place for programmers, and those alike, to share',
                'their ideas, code, and more. As the developer that built this site, I wanted to give',
                'us a place where we could gather in more than just a few channels within the discord',
                'extension. With the <i>Website Extension</i> using a forum style chat feature to start',
                'us off, we have a place with limitless room to chat. In future times, I do plan to create',
                'a sort of online chat room for each extensions part on the <i>Website Extension</i> to',
                'allow another place for users who want to join the website, but do not want to be apart',
                'of the <i>Discord Extension</i>.'
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