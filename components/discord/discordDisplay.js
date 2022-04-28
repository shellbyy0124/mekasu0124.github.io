app4.component('discord-display', {
    template:
    `
    <div class="discord-display">
        <div class="nav-bar">
            <div v-for="(item, index) in navBarButtons" :key="index">
                <a :href="item.link">{{ item.name }}</a>
            </div>
        </div>
        <div id="box-1">
            <h1>{{ title }}</h1>
            <h3 v-html="subtitle">{{ subtitle }}</h3>
            <h3 v-html="subtitle2">{{ subtitle2 }}</h3>
            <p>{{ information }}</p>
        </div>
        <div id="box-2">
        <table>
            <caption>Gawth3rs' Rules</caption>
            <tr>
                <div v-for="(item, index) in discordRules" :key="index">
                    <td style="border: 1px solid black; border-radius: 10px; width: 10%">{{ item.name }}</td>
                    <td style="border: 1px solid black; border-radius: 10px;" v-if="item.name == 'Sharing Code'" v-html="getLinks">{{ item.desc }}</td>
                    <td style="border: 1px solid black; border-radius: 10px;"v-else>{{ item.desc }}</td>
                </div>
            </tr>
        </table>
        </div>
        <div id="box-3">
            <table>
                <caption>Gawth3rs' Roles</caption>
                <tr>
                    <div v-for="(item, index) in discordRoles" :key="index">
                        <td style="border: 1px solid black; border-radius: 10px; width: 8.5%">{{ item.name }}</td>
                        <td style="border: 1px solid black; border-radius: 10px; width: 15%">{{ item.desc }}</td>
                        <td style="border: 1px solid black; border-radius: 10px; width: 4.24%">{{ item.memberCount }}</td>
                    </div>
                </tr>
            </table>
        </div>
    </div>
    `,
    data() {
        return {
            a: 'Gawth3rs Roles && Rules',
            b: 'If interested in becoming staff, <a href="../applications/staff/Application.html">click here</a>.',
            c: 'If interested in becoming apart of the dev team, <a href="../application/devs/Application.html">click here</a>',
            d: 'Below are two (2) charts. The first is Gawth3rs Roles and what each one is responsible for. The second are our rules which apply to both the discord, and the website as whole.',
            navBarButtons: [
                { id: 1, name: 'Home', link: '../../index.html' },
                { id: 2, name: 'About', link: '../about/About.html' },
                { id: 3, name: 'Extensions', link: '../router/Router.html' },
                { id: 4, name: 'Newsletters', link: '../newsletters/Newsletters.html' },
                { id: 5, name: 'Reviews', link: '../reviews/Reviews.html' },
                { id: 6, name: 'Sign-In', link: '../signin/SignIn.html' }
            ],
            discordRoles: [
                { id: 0, name: 'Role Name', desc: 'Role Description', memberCount: 'Member Count' },
                { id: 1, name: 'Owner', desc: 'Those who are the acting heads/active owners of the various extensions of the Gawth3r Platform ', memberCount: 0 },
                { id: 2, name: 'Gawth3r', desc: 'The main bot himself <3 give it up WOOT WOOT!', memberCount: 0 },
                { id: 3, name: 'Gawth3rs Brothers', desc: 'The main bots family, the awesome backbones!', memberCount: 0 },
                { id: 4, name: 'Head Admin', desc: 'The HBIC (Head Bravo In Charge)! He is over every staff member of each extension. He is the Owners Right-Hand Person xD', memberCount: 0 },
                { id: 5, name: 'Developers', desc: 'The backbones to the platform. The bosses in charge of keeping us electronically running and connected', memberCount: 0 },
                { id: 6, name: 'Administrators', desc: 'The beautiful ones who orchestrate events, and rules, within our discord extension', memberCount: 0 },
                { id: 7, name: 'Moderator', desc: 'The faithful ones who support in orchestrating events, and rules, within our discord extension', memberCount: 0 },
                { id: 8, name: 'Cyber Admin', desc: 'The fearless ones who battles our foes online, and help ensure our secrets are kept safe :P', memberCount: 0 },
                { id: 9, name: 'Cyber Moderator', desc: 'The minions who keep watch on the grounds\' eye level for our enemies', memberCount: 0 },
                { id: 10, name: 'Support Staff', desc: 'The medics of the family. If you are unaware of what to do, or where to go, please come to the hospital :P it\'s also a welcome center :P', memberCount: 0 },
                { id: 11, name: 'Community Helper', desc: 'The support for the Welcome Center. They clean the toilets, haha jk jk', memberCount: 0 },
                { id: 12, name: 'WoW Staff', desc: 'The hopeful battle leaders that defend us against our enemies within Azeroth! (Who knew there were so many, right?)', memberCount: 0 },
                { id: 13, name: 'WoW Member', desc: 'The wounded warriors who fight for us with metal and catapults a-blazin\'', memberCount: 0 },
                { id: 14, name: 'Nitro Member', desc: 'Our sought-out ones. Those who are the rich and famous within the kingdom.', memberCount: 0 },
                { id: 15, name: 'Streamer', desc: 'Those who live life on the edges, and live to tell the tale!', memberCount: 0 },
                { id: 16, name: 'Summoners War', desc: 'Our rune stone masters from afar, traveling all the way in from their summoning islands are our Summoners War-riors!', memberCount: 0 },
                { id: 17, name: 'Artistry', desc: 'The ones that remind us from time to time that our shoes don\'t match our socks which do not match our pants which will never match that top and with that hair? Are you kidding me?! BACK IN THE CLOSET WITH YOU!', memberCount: 0 },
                { id: 18, name: 'Programming', desc: 'The ones who literally dont care. Do not get in our way, but we will be your best friend. Also, remember we can reset your car battery from our couch, watch out Tesla owners', memberCount: 0 },
                { id: 19, name: 'Gaming', desc: 'Bruh.....where did that sniper come from?!?! AHHHHHHHHH!!!!', memberCount: 0 },
                { id: 20, name: 'Member', desc: 'I\'m bored........Can someone help me find something to do? Otherwise, I\'m just going to annoy you, hehe', memberCount: 0 },
                { id: 21, name: 'Muted', desc: 'Can you hear me? AT&T Hello?!', memberCount: 0 },
                { id: 22, name: 'Kicked', desc: 'Oof, my ass crack @_@', memberCount: 0 },
                { id: 23, name: 'Banned', desc: 'Can you see me? I see you, hehe. That\'s right. I see you through the cracks in the wall, hehe, may I have some bread please sir?', memberCount: 0 }
            ],
            discordRules: [
                { id: 1, name: 'Respect', desc: 'It does not matter what is happening or who is involved, respect is a must at all times. Calling someone out their name, calling them names, throwing around insults just because you are mad will get you permanently banned.' },
                { id: 2, name: 'Sharing Code', desc: '{{ getLinks }}' },
                { id: 3, name: 'Spamming', desc: 'If the bot has to enact a message limiter on you because you are sending too many messages within too short of a time frame, and it happens to frequently, you will automatically be placed in the muted role for the corresponding amount of time. See the puishment chart.' },
                { id: 4, name: 'Excessive Foul Language', desc: 'I understand that more than none of the members are adults, myself included. I understand that we cuss, and so do minors, however, if you start to use multiple cuss words per sentence, or you are cussing in every single sentence, you will be muted. No question about it. Be respectful. See rule one.' },
                { id: 5, name: 'NSFW Content', desc: 'At no, and I mean, NO POINT IN TIME should ANY NSFW content be posted within the discord channel if there is NOT a channel already created for it! If you are caught sending NSFW content within any channel of the discord, or within the direct messages of another member of the discord, you will be banned and the Discord Staff will be notified.' }
            ],
            codeSharingLinks: [
                { id: 1, name: 'Github Gist', link: 'https://gist.github.com' },
                { id: 2, name: 'CodePen', link: 'https://codepen.io' },
                { id: 3, name: 'JSFiddle', link: 'https://jsfiddle.net' },
                { id: 4, name: 'Codepad', link: 'https://codepad.co' },
                { id: 5, name: 'Codeshare', link: 'https://codeshare.io' },
                { id: 6, name: 'JS Bin', link: 'https://jsbin.com/?html, output' },
                { id: 7, name: 'Liveweave', link: 'https://liveweave.com' }
            ]
        }
    },
    methods: {},
    computed: {
        getLinks() {
            let sentence = 'When sharing code, please use one of the following links:<br>'

            for (let i = 0; i < this.codeSharingLinks.length; i++) {
                let x = `<a href=${this.codeSharingLinks[i].link}>${this.codeSharingLinks[i].name}</a><br>`

                sentence += x
            }

            return sentence
        },
        title() {
            return this.a
        },
        subtitle() {
            return this.b
        },
        subtitle2() {
            return this.c
        },
        information() {
            return this.d
        }
    }
})