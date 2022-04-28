app2.component('about-display', {
    template:
    /*html*/
    `
    <div class="about-display">
        <div class="nav-bar">
            <div v-for="(item, index) in navBarButtons" :key="index">
                <a :href="item.link">{{ item.name }}</a>
            </div>
        </div>
        <div id="box-1">
          <p>{{ question }}</p>
        </div>
        <div id="box-2">
          <p v-html="answer">{{ answer }}</p>
        </div>
    </div>
    `,
    data() {
        return {
            a: 'Did you know that Gawth3r used to be ButtlerBot?',
            b: [
                'Yep! Gawth3r was once known as Buttlerbot. Buttlerbot came about',
                'back around the year 2019 with my best friend, Chris. We were chill\'n',
                'one day and I was watching him program and found it to be quite interesting.',
                'I started asking questions, and what different things did plus I would name',
                'things and bet that he couldn\'t do it. Boy..he sure could, haha! I decided at',
                'that point that I wanted to learn how to do this. The first thing I had to',
                'decide on was, "What is something you can bring to the table that someone else',
                'already hasn\'t?" -Chris. I told him that I use discord and wondered if the bots',
                'were just simply premade, and you got them from the website or were they created',
                'by people like he and i? He replied that we could make one ourselves, so then the',
                'adventure began. To fast-forward a bit, though, he tried to get me to understand',
                'that mastering the basics was a very important building-block, but I refused to',
                'listen. After numerous hours of begging for help, pissing people off, getting pissed',
                'off, throwing my computer across the room....you get the point, I had finally',
                'started understanding the code and how it worked, but it was just with building a',
                'discord bot. Outside of the <a href="https://discordpy.readthedocs.io/en/stable/">discord.py</a>',
                'library, I couldn\'t tell you, or show you, how to do anything. However, I digress.',
                'After much struggle with trying to figure out who and what I wanted my bot to be',
                'I decided I wanted to make him my own type of smart assistant that worked within',
                'the discord platform. Multiple, Multiple repositories later, I switched gears and',
                'started working ButtlerBot from being a discord assistant to being an at-home',
                'assistant like Alexa, Google, and Amazon. It was going alright for a while, but then',
                'my work environment became corrupt and I just couldn\'t bring myself to re-construct',
                'the project. So then I took a break from coding, played some video games, and now we',
                '(Chris and I) are back to bring you the best platform available to any and all members',
                'within the discord community, and more.'
            ],
            navBarButtons: [
                { id: 1, name: 'Home', link: '../../index.html' },
                { id: 2, name: 'About', link: './About.html' },
                { id: 3, name: 'Extensions', link: '../router/Router.html' },
                { id: 4, name: 'Newsletters', link: '../newsletters/Newsletters.html' },
                { id: 5, name: 'Reviews', link: '../reviews/Reviews.html' },
                { id: 6, name: 'Sign-In', link: '../signin/SignIn.html' }
            ]
        }
    },
    methods: {},
    computed: {
        question() {
            return this.a
        },
        answer() {
            let sentence = ''

            for (let i = 0; i < this.b.length; i++) {
                let x = this.b[i] + ' '

                sentence += x
            }

            return sentence
        }
    }
})