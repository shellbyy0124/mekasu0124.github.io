app6.component('rules-display', {
    template:
    /*html*/
    `<div class="rules-display">
        <div id="box-1">
            <h3>{{ title }}</h3>
            <p>{{ getInfo }}</p>
            <table>
                <tr v-for="(rule, index) in rulesTable" :key="index">
                    <th>{{ rule.id }}</th>
                    <td>{{ rule.name }}</td>
                    <td>{{ rule.info }}</td>
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
                { id: 1, name: 'Respect Staff At All Times!', info: 'It does not matter who the staff member is, all members are required to follow given instructions when a situation may arise.' },
                { id: 2, name: 'Do Not Block Staff!', info: 'Staff Members and Gawth3r and his brothers are not to be blocked at any time. Blocking the bot will cause problems with your character profile, and blocking staff will get you perma-banned.' },
                { id: 3, name: 'Follow Channel Topics!', info: 'All Channels have a topic. It would be wise of you to follow that. All messags that are seen by staff that do not follow the channels topic will be subject to deletion.' },
                { id: 4, name: 'We Are A Community', info: 'Yes we are a community For and By the People, however, do keep in mind that where this is a democracy, there are also laws to follow. The otherside to that is remember, this is my server. I will remove you -Mekasu' },
                { id: 5, name: 'Blank Reason', info: 'Insert Reason Information Here' },
                { id: 6, name: 'Blank Reason', info: 'Insert Reason Information Here' },
                { id: 7, name: 'Blank Reason', info: 'Insert Reason Information Here' },
                { id: 8, name: 'Blank Reason', info: 'Insert Reason Information Here' }
            ],
            punishTable: [
                { id: 1, name: 'Tier 1.00', desc: '0-5 Warnings = 15 minutes in the Muted Role' },
                { id: 2, name: 'Tier 1.40', desc: '5-10 Warnings = 25 minutes in the Muted Role' },
                { id: 3, name: 'Tier 1.85', desc: '10+ Warnings = 1 day in the Muted Role' },
                { id: 4, name: 'Tier 2.28', desc: '0-5 Mutes = 1 day in the Kicked Role' },
                { id: 5, name: 'Tier 2.56', desc: '5-10 Mutes = 3 days in the Kicked Role' },
                { id: 6, name: 'Tier 2.79', desc: '10+ Mutes = 1 week in the Kicked Role' },
                { id: 7, name: 'Tier 3.05', desc: '0-5 Kicks = 1 week in the Banned Role' },
                { id: 8, name: 'Tier 3.38', desc: '5-10 Kicks = 2 weeks in the Banned Role' },
                { id: 9, name: 'Tier 3.79', desc: '10+ Kicks = 1 month in the Banned Role' },
                { id: 10, name: 'Tier 4.21', desc: '0-5 bans = 6 months in the Perma-Banned Role' },
                { id: 11, name: 'Tier 4.58', desc: '5-10 Bans = 9 months in the Perma-Banned Role' },
                { id: 12, name: 'Tier 4.97', desc: '10+ Bans = Permanently Banned. No Appeals' }
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