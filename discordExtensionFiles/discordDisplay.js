app.component('discord-display', {
    template:
    /*html*/
    `<div class="discord-display">
        <div class="discord-container">
            <div class="box-1">
                <h1>{{ title }}</h1>
                <h3>{{ subTitle }}</h3>
            </div>
            <div class="box-2">
                <p>
                    The discord extension of the Gawth3r Platform is the home 
                    for those who are just regular members of the discord. Here 
                    you can find various games to play to obtain in-discord
                    currency, lotteries that are currently going on within the discord,
                    and more.
                </p>
            </div>
        </div>
    </div>`,
    data() {
        return {
            title: 'Gawth3rs\' Discord Extension',
            subTitle: 'A Place for any and all things relating to the Discord Extension of Gawth3r'
        }
    },
    methods: {
        title() {
            return this.title
        },
        subTitle() {
            return this.subTitle
        }
    },
    computed: {}
})