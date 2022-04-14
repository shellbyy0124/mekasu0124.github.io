app6.component('rules-display', {
    template:
    /*html*/
    `<div class="rules-display">
        <div id="box-1">
            <h1>{{ title }}</h1>
            <h3>{{ subTitle }}</h3>
            <table>
                <tr v-for="(role, index) in role_names" :key="role.id">
                    <th>{{ role.id }}</th>
                    <td>{{ role.name }}</td>
                    <td>{{ role.info }}</td>
                </tr>
            </table>
        </div>
        <div id="box-2">
            <h3>{{ subTitle2 }}</h3>
            <p>{{ getInfo }}</p>
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
            a: 'Gawth3r Platform - Discord Extension Roles',
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
            role_names: [
                { id: 1, name: 'Owner', info: 'The role for the Website and Discord Extension Owners' },
                { id: 2, name: 'Devs', info: 'The role for those who are on the development team' },
                { id: 3, name: 'Gawth3r', info: 'The role for the main bot himself, Gawth3r' },
                { id: 4, name: 'Gawth3rs Brothers', info: 'The role for the bots whom assist Gawth3r' },
                { id: 5, name: 'Head Administrator', info: 'The role for the Administrator in charge of everyone' },
                { id :6, name: 'Administrator', info: 'The role for those who only help administrate the Discord Extension of the Gawth3r Platform' },
                { id: 7, name: 'Moderator', info: 'The role for those who only help moderate the Discord Extension of the Gawth3r Platform' },
                { id: 8, name: 'Cyber Administrator', info: 'The role for those who only help administrate the Website Extension of the Gawth3r Platform' },
                { id: 9, name: 'Cyber Moderator', info: 'The role for those who only help moderate the Website Extension of the Gawth3r Platform' },
                { id: 10, name: 'Support Staff', info: 'The role for those who assist within the Support Extension of the Gawth3r Platform' },
                { id: 11, name: 'Community Helper', info: 'The role for those who assist within the community as whole' },
                { id: 12, name: 'WoW Staff', info: 'The role for those who are staff members within our World of Warcraft Guild' },
                { id: 13, name: 'WoW Member', info: 'The role for those who are members within our World of Warcraft Guild' },
                { id: 14, name: 'Nitro Member', info: 'The role for those who are Discord Nitro Subscribers' },
                { id: 15, name: 'Summoners War Staff', info: 'The role for those who are the GM and Co-GM of our Summoners War Guild' },
                { id: 16, name: 'Summoners War', info: 'The role for those who are members within our Summoners War Guild' },
                { id: 17, name: 'Artistry Administrator', info: 'The role for those who help administrate the Art Extension of the Gawth3r Platform' },
                { id: 18, name: 'Artistry', info: 'The role for those who are members within the Art Extension of the Gawth3r Platform' },
                { id: 19, name: 'Programming Administrator', info: 'The role for those who help adminstrate the Coding Extension of the Gawth3r Platform' },
                { id: 20, name: 'Programming', info: 'The role for those who are members within the Coding Extension of the Gawth3r Platform' },
                { id: 21, name: 'Gaming Administrator', info: 'The role for those who help administrate the Gaming Extension of the Gawth3r Platform' },
                { id: 22, name: 'Gaming', info: 'The role for those who are members within the Gaming Extension of the Gawth3r Platform' },
                { id: 23, name: 'Member', info: 'The role for those who are members within the Discord Extension as a whole. (all members are given this role regardless)' },
                { id: 24, name: 'Muted', info: 'The role for those members who are within their first tier of the Punishment Table' },
                { id: 25, name: 'Kicked', info: 'The role for those members who are within their second tier of the Punishment Table' },
                { id: 26, name: 'Banned', info: 'The role for those members who are within their third tier of the Punishment Table' },
                { id: 27, name: 'Perma-Banned', info: 'The role for those members who are in the final tier of the Punishment Table' }
            ],
            punishTable: [
                { id: 1, name: 'Tier 1', desc: '0-5 Warnings = 15 minutes in the Muted Role' },
                { id: 2, name: '', desc: '5-10 Warnings = 25 minutes in the Muted Role' },
                { id: 3, name: '', desc: '10+ Warnings = 1 day in the Muted Role' },
                { id: 4, name: 'Tier 2', desc: '0-5 Mutes = 1 day in the Kicked Role' },
                { id: 5, name: '', desc: '5-10 Mutes = 3 days in the Kicked Role' },
                { id: 6, name: '', desc: '10+ Mutes = 1 week in the Kicked Role' },
                { id: 7, name: 'Tier 3', desc: '0-5 Kicks = 1 week in the Banned Role' },
                { id: 8, name: '', desc: '5-10 Kicks = 2 weeks in the Banned Role' },
                { id: 9, name: '', desc: '10+ Kicks = 1 month in the Banned Role' },
                { id: 10, name: 'Tier 4', desc: '0-5 bans = 6 months in the Perma-Banned Role' },
                { id: 11, name: '', desc: '5-10 Bans = 9 months in the Perma-Banned Role' },
                { id: 12, name: '', desc: '10+ Bans = Permanently Banned. No Appeals' }
            ]
        }
    },
    methods: {},
    computed: {
        title() {
            return this.a
        },
        subTitle() {
            return this.b
        },
        subTitle2() {
            return this.c
        },
        getInfo() {
            let sentence = ''

            for (let i = 0; i < this.d.length; i++) {
                let x = this.d[i] + ' '

                sentence += x
            }

            return sentence
            }
    }
})