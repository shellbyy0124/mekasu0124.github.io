app7.component('about-display', {
    template:
    /*html*/
    `
    <div class="about-display">
        <h1>{{ title }}</h1>
        <code v-html="backStory">{{ backStory }}</code>
        <a href="https://www.github.com/gawth3rPlatform">
            Curious About How Gawth3r Works Now?
        </a>
        <div class="buttler-list">
            <h3>{{ subTitle }}</h3>
            <ul v-for="(link, index) in bbLinks" :key="link.id">
                <li><a href="link.url">{{ link.name }}</a></li>
            </ul>
        </div>
        <div class="gawth3r-list">
            <h3>{{ subTitle2 }}</h3>
            <ul v-for="(link2, index2) in gaLinks" :key="link2.id">
                <li><a href="link2.url">{{ link2.name }}</a></li>
            </ul>
        </div>
  </div>
    `,
    data() {
        return {
            a: 'Gawth3rs\' History',
            b: [
                'Gawth3r started out as ButtlerBot just before christmas of 2019.',
                'I had been curious before with computer programming and had started',
                'with Java, but I could never figure it out. I ld notcou even figure',
                'out a basic timer. After giving up on that project, and then a series',
                'of events happening that wound me up in Philly with KataReborn (my friend',
                '/my best friend), I decided I wanted to give programming another try.',
                'after watching my friend do his programming stuff (with what I was allowed',
                'to see), I asked him to teach me. After the struggles of picking a language,',
                'we decided upon starting with Python. We watched some videos, did some ',
                'exercises and I thought I knew it all and was good to go....Boy was I wrong..',
                '..what I mean is after a few days of working some basics, and learning how to ',
                'properly import libraries to use and such, I dove deep into the',
                '<a href="https://discordpy.readthedocs.io/en/stable/">Discord Python Docs</a>',
                'and started building myself my first ever robot. I was excited to! Thus begun',
                'the adventures of ButtlerBot. You can see a list of the respositories I went ',
                'through attempting to create my first robot. With consistently asking multiple ',
                'questions on everything I did in various discord servers, I was driving everyone ',
                'nuts. My friend even told me to stop and go back to fully learn the basics, and I',
                'basically refused. I was determined to figure this stuff out. A little while goes by',
                'of trying to create this robot and I just cannot seem to find a way that I want to',
                'build it, or how I wanted each to lay out and respond to users so I finally scratched',
                'ButtlerBot, took a break from programming al-together and now I am back to try and',
                'bring you the best platform possible for any user ever anywhere. With the help of my',
                'best friend, and a <a href="../kasmekTeamFiles/kasmek.html">KasMeks\' Programming</a> team member',
                '(and close friend of mine as well), we plan to bring you the best content possible.',
                'With myself, Mekasu, heading the Website Extension - KataReborn spearheading the Discord',
                'Extension -- and I am hoping to get our other buddy on board with running, all things',
                'member and staff appropriate. He is already our Head Administrator that runs any and',
                'all other things member or staff related. Just need a little bit of elbow grease to',
                'get him locked in to the title haha!'
            ],
            c: 'ButtlerBots Previous Stages:',
            d: 'Gawth3rs Previous Stages:',
            bbLinks: [
                { id: 1, name: 'ButtlerBotDiscord', url: 'https://github.com/shellbyy0124/ButtlerBotDiscord' },
                { id: 2, name: 'All_Bots_Repo', url: 'https://github.com/shellbyy0124/All_Bots_Repo' },
                { id: 3, name: 'new_bot_code', url: 'https://github.com/shellbyy0124/new_bot_code' },
                { id: 4, name: 'ButtlerBot', url: 'https://github.com/shellbyy0124/ButtlerBot' }
            ],
            gaLinks: [
                { id: 1, name: 'Gother_discord', url: 'https://github.com/shellbyy0124/Gother_discord' },
                { id: 2, name: 'Gother', url: 'https://github.com/shellbyy0124/Gother' },
                { id: 3, name: 'Gawth3r-Bot', url: 'https://github.com/mekasu0124/Gawth3r-Bot' },
                { id: 4, name: 'Gawth3r', url: 'https://github.com/mekasu0124/Gawther' },
                { id: 5, name: 'Gawth3r-Bot-PY', url: 'https://github.com/mekasu0124/Gawth3r-Bot-PY' },
                { id: 6, name: 'Gawth3r-Website', url: 'https://github.com/mekasu0124/Gawth3r-Website' },
                { id: 7, name: 'gawth3rPlatform', url: 'https://github.com/mekasu0124/gawth3rPlatform' }
            ]
        }
    },
    methods: {},
    computed: {
        title() {
            return this.a
        },
        backStory() {
            let sentence = ''

            for (let i = 0; i < this.b.length; i++) {
                let x = this.b[i] + ' '

                sentence += x 
            }

            return sentence
        },
        subTitle() {
            return this.c
        },
        subTitle2() {
            return this.d
        }
    }
})