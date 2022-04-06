app.component('about-display', {
    template:
    /*html*/
    `<div class="about-display">
        <div class="about-container">
            <div id="box-1">
                <h1><i><u>{{ title }}<u><i></h1>
                <h3 v-html="titleCaption">{{ titleCaption}}</h3>
                <p>
                    Hi and Welcome! Here on the home page, you can obtain access 
                    to all of our content by clicking the <i>Join Us</i> button at
                    the top of the page, and sign up to become a member. We also
                    encourage you to join our 
                    <a href="https://discord.gg/paeKabbHQ6">Discord Extension</a> 
                    so that you can stay current with our latest bot, 
                    website, game, and programming events and updates plus chat with
                    other members across the globe! We even have sections for members 
                    to be able to ask questions and further their knowledge, post 
                    useful resource links, and more. Also, with a dedicated support 
                    section (and staff), we will be able to bring you more adequate 
                    support with members from various parts of the community readily 
                    available (when online) to help you with your latest bug, or issue! 
                    So come on in, the waters' great! Come join us and be apart of 
                    something bigger, and better!
                </p>
            </div>
            <div id="box-2">
                <h3>{{ subTitle }}</h3>
                <p>
                    Gawth3r started out as ButtlerBot just before christmas of 2019.
                    I had been curious before with computer programming and had started
                    with Java, but I could never figure it out. I could not even figure out a basic timer.
                    After giving up on that project, and then a series of events happening that wound me
                    up in Philly with KataReborn (my friend/my best friend), I decided I wanted to give programming another try.
                    after watching my friend do his programming stuff (with what I was allowed to see), I
                    asked him to teach me. After the struggles of picking a language, we decided upon starting
                    with Python. We watched some videos, did some exercises and I thought I knew it all and was
                    good to go....Boy was I wrong....what I mean is after a few days of working some basics, and
                    learning how to properly import libraries to use and such, I dove deep into the 
                    <a href="https://discordpy.readthedocs.io/en/stable/">Discord Python Docs</a>
                    and started building myself my first ever robot. I was excited to! Thus begun the adventures of ButtlerBot.
                    and you can see a list of the respositories I went through attempting to create my first robot.
                    With consistently asking multiple questions on everything I did in various discord servers, I was
                    driving everyone nuts. My friend even told me to stop and go back to fully learn the basics, and
                    I basically refused. I was determined to figure this stuff out. A little while goes by of trying
                    to create this robot and I just cannot seem to find a way that I want to build it, or how I wanted each
                    to lay out and respond to users so I finally scratched ButtlerBot, took a break from programming al-together
                    and now I am back to try and bring you the best platform possible for any user ever anywhere. With the
                    help of my best friend, and a <a href="../kasmekTeamFiles/kasmek.html">KasMek\'s Programming</a> team member 
                    (and close friend of mine as well), we plan to bring you the best content possible. With myself, Mekasu, heading 
                    the Website Extension - KataReborn spearheading the Discord Extension -- and I am hoping to get our other buddy on 
                    board with running, all things member and staff appropriate. He is already our Head Administrator that runs any and 
                    all other things member or staff related. Just need a little bit of elbow grease to get him locked in to the title haha!
                </p>
            </div>
            <div id="box-3">
                <h3>{{ title2 }}</h3>
                <ul>
                    <div v-for="(repo, index) in buttlerBot" :key="repo.id">
                        <li><a :href="repo.link" target="_blank">{{ repo.title }}</a></li>
                    </div>
                </ul>
                <h3>{{ title3 }}</h3>
                <ul>
                    <div v-for="(repo, index) in gawth3r" :key="repo.id">
                        <li><a :href="repo.link" target="_blank">{{ repo.title }}</a></li>
                    </div>
                </ul>
            </div
        </div>
    </div>`,
    data() {
        return {
            title: 'Welcome To Gawth3r Platform\'s Home Page',
            subTitleOne: 'Gawth3rs History',
            titleCaption: '<u>A Place For Everyone</u> => <u>By The People</u> => <u>For The People</u>',
            a: 'ButtlerBot\'s Previous Stages:',
            buttlerBot: [
                { id: 1, title: 'ButtlerBotDiscord', link: 'https://github.com/shellbyy0124/ButtlerBotDiscord' },
                { id: 2, title: 'All_Bots_Repo', link: 'https://github.com/shellbyy0124/All_Bots_Repo' },
                { id: 3, title: 'new_bot_code', link: 'https://github.com/shellbyy0124/new_bot_code' },
                { id: 4, title: 'ButtlerBot', link: 'https://github.com/shellbyy0124/ButtlerBot' }
            ],
            b: 'Gawth3r\'s Previous Stages:',
            gawth3r: [
                { id: 1, title: 'Gother_discord', link: 'https://github.com/shellbyy0124/Gother_discord' },
                { id: 2, title: 'Gother', link: 'https://github.com/shellbyy0124/Gother' },
                { id: 3, title: 'Gawth3r-Bot', link: 'https://github.com/mekasu0124/Gawth3r-Bot' },
                { id: 4, title: 'Gawth3r', link: 'https://github.com/mekasu0124/Gawther' },
                { id: 5, title: 'Gawth3r-Bot-PY', link: 'https://github.com/mekasu0124/Gawth3r-Bot-PY' },
                { id: 6, title: 'Gawth3r-Website', link: 'https://github.com/mekasu0124/Gawth3r-Website' },
                { id: 7, title: 'gawth3rPlatform', link: 'https://github.com/mekasu0124/gawth3rPlatform' }

            ]
        }
    },
    methods: {},
    computed: {
        title() {
            return this.subTitleOne
        },
        subTitle() {
            return this.subTitleOne
        },
        titleCaption() {
            return this.titleCaption
        },
        title2() {
            return this.a
        },
        title3() {
            return this.b
        }
    }
})