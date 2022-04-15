app6.component('rules-display', {
    template:
    /*html*/
    `<div class="rules-display">
        <div id="box-1">
            <h3>{{ title }}</h3>
            <p>{{ getInfo }}</p>
            <table>
                <tr v-for="(rule, index) in rulesTable" :key="index">
                    <td>{{ rule.name }}</td>
                    <td v-html="rule.info">{{ rule.info }}</td>
                </tr>
            </table>
        </div>
        <div id="box-2">
            <h3>{{ subTitle2 }}</h3>
            <p>{{ getInfo2 }}</p>
            <table>
                <tr v-for="(punish, index) in punishTable" :key="punish.id">
                    <th>{{ punish.name }}</th>
                    <td>{{ punish.desc }}</td>
                </tr>
            </table>
        </div>
    </div>`,
    data() {
        return {
            a: 'Gawth3rs\' Rules Table',
            b: 'The roles listed below are in order from highest to lowest in heirarchy',
            c: 'Gawth3rs\' Punishment Table',
            d: [
                'The point of the punishment table is to prevent members from being kicked',
                'from the server, and to allow people chances they deserve (if any). This',
                'table is designed in a mannor that will discourage misuse of power, abilities',
                'or for other rules that have been broken. This table is used as a guide for staff',
                'when handling any given situation, and the tier chosen may change given the',
                'severity of the situation.'
            ],
            e: [
                'The rules listed below are designed to allow a user-ran, user-friendly,',
                'environment. Most of Gawth3r is ran automatically through the bot and',
                'his brothers. All rules are to be followed at all times. It does not',
                'matter the scenario, or whom the staff is in the scenario, all rules and',
                'staff member directions are to be followed. If you feel a staff members',
                'decision is injust, then please create a support ticket.'
            ],
            rulesTable: [
                { id: 1, name: 'Nicknames', info: 'No Blank, Sexually Explicit, or Offensive Nicknames. Staff retain the right to change your nickname without warning.' },
                { id: 2, name: 'Pictures', info: 'No Blank, Sexually Explicity, or Offensive Profile Pictures.' },
                { id: 3, name: 'Rules', info: 'The rules are subject to change at any time. Any time the rules are updated, an announcement may be made, but is not required!' },
                { id: 4, name: 'Loopholes', info: 'If you find a loop hole in the rules, games, or other parts and aspects of the Gawth3r Platform and you do not report them, but abuse them instead, you will be perma-banned without question' },
                { id: 5, name: 'Bots', info: 'No one has permissions to create invites to any Gawth3r Discord Servers. There is a bot command created for this purpose alone. Anyone inviting bots, or other members, through self-created invites, or without the bots being cleared first, will be perma-banned.' },
                { id: 6, name: 'Spamming', info: 'Do not ask the same question twice, or more. Do not ask for perms for anything repetatively, especially if you were just promoted. Do not post repetatively in any chat channel, and do not blurt random loud noises while in voice chats. Be respectful!' },
                { id: 7, name: 'Private Messaging', info: 'Do not pop into someone\'s DM\'s without their permission === perma-banned.' },
                { id: 8, name: 'Mentioning', info: 'Gawth3r, and Staff, are the only ones who are to be pinging any other members or roles. If you need to ping someone within a channel, please reply to one of their messages. DO NOT USE @HERE, @EVERYONE UNDER NO CIRCUMSTANCES!' },
                { id: 9, name: 'Questions/Support', info: 'There is an entire support category created for you to receive the necessary support for your given topic/project. Do not request support in any other categories/channels that are not marked specifically for support!' },
                { id: 10, name: 'Sexual/Illegal Content', info: 'Sexting/Sexual/Pornographic Illegal/Hacking/Personal Information Content/Behavior/Chat Plain and simple. PG-13. Not hard to comprehend. This will get you >= 6 Months in the Perma-Banned channel and reported to Discord.' },
                { id: 11, name: 'Being Rude', info: 'Bullying/Personal Attacks/Descrimination/Racism/Judgementalism === >= 6 Months in the Perma-Banned Role and will result in a note placed in your account along with a tag on your profile for every message you send.' },
                { id: 12, name: 'Politics', info: 'This server is hosted in a free country, the USA, however, when discussin politics, do it in your own time. Any fights about politics, religion, sex, age, sexual orientation, drama, etc will be instantly perma-banned for >= 12 Hours. NO DRAMA AND NO HATRED!' },
                { id: 13, name: 'Foul Language', info: 'I understand that a majority of us are adults, however, do not over-use foul language in chat/voice channels. We respect the right to those who are minors in keeping their environments clean out of respect for them and their parents!' },
                { id: 14, name: 'Advertisements', info: 'Gawth3r is all about helping you get to the next level, however, getting to that next level has steps and procedures that have to be followed. DO NOT post ANY advertisement OF ANY KIND within the Gawth3r Platform without WRITTEN consent from appropriate parties! Those parties include, but are not limited to, Owners, Head Administrator, Administrators, Newsletter Staff' },
                { id: 15, name: 'Voice Chat', info: 'Staff Members retain the right to disconnect/mute/kick/move any member who mis-behaves inappropriately while in voice with others without reason or explanation.' },
                { id: 16, name: 'Bot Commands', info: 'There is a bot spam channel for your bot spamming needs. Anyone spamming bot commands outside of this channel will be perma-muted >= 12 Hours' },
                { id: 17, name: 'Sharing Macros', info: 'All macros are to be posted as code links through Gawth3r himself as these macros are put through a series of tests to ensure their authenticity and malicious intent. Anyone caught sharing malicious content will be perma-banned and reported to Discord.' },
                { id: 18, name: 'Respect', info: 'The Golden Rule is to Always treat others the way you want to be treated!' },
                { id: 19, name: 'Server Raiding', info: 'We do not allow members to raid other servers without asking permission. You must ask the Head Administrator or above (excluding Devs) or else you will be perma-banned and reported to Discord' },
                { id: 20, name: 'Rule In General', info: 'Along with Gawth3r\'s Rules, the Discord Guidelines are to be followed at all times accordingly!' },
                { id: 21, name: 'Joining Pre-Made Voice Channels', info: 'Do Not just POP into a channel and start talking. When joining an exisiting conversation, be patient and listen. Show conversation edicate and wait your turn to join in. When giving your response, ensure that you are on topic with the conversation as well.' }
            ],
            punishTable: [
                { id: 0, name: 'Tier', desc: 'The following information are the guidelines for our community' },
                { id: 1, name: 'Caption', desc: 'Gawth3r runs off of an Infraction Based System as follows.'},
                { id: 2, name: '1', desc: '0-5 Warnings = 15 minutes in the Muted Role' },
                { id: 3, name: '1', desc: '5-10 Warnings = 25 minutes in the Muted Role' },
                { id: 4, name: '1', desc: '10+ Warnings = 1 day in the Muted Role' },
                { id: 5, name: '2', desc: '0-5 Mutes = 1 day in the Kicked Role' },
                { id: 6, name: '2', desc: '5-10 Mutes = 3 days in the Kicked Role' },
                { id: 7, name: '2', desc: '10+ Mutes = 1 week in the Kicked Role' },
                { id: 8, name: '3', desc: '0-5 Kicks = 1 week in the Banned Role' },
                { id: 9, name: '3', desc: '5-10 Kicks = 2 weeks in the Banned Role' },
                { id: 10, name: '3', desc: '10+ Kicks = 1 month in the Banned Role' },
                { id: 11, name: '4', desc: '0-5 bans = 6 months in the Perma-Banned Role' },
                { id: 12, name: '4', desc: '5-10 Bans = 9 months in the Perma-Banned Role' },
                { id: 13, name: '4', desc: '10+ Bans = Permanently Banned. No Appeals' }
            ]
        }
    },
    methods: {},
    computed: {
        title() {
            return this.a
        },
        subTitle2() {
            return this.c
        },
        getInfo() {
            let sentence = ''

            for (let i = 0; i < this.e.length; i++) {
                let x = this.e[i] + ' '

                sentence += x 
            }

            return sentence
        },
        getInfo2() {
            let sentence = ''

            for (let i = 0; i < this.d.length; i++) {
                let x = this.d[i] + ' '

                sentence += x
            }

            return sentence
            }
    }
})