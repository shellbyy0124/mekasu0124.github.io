app4.component('discord-display',{
    template:
    /*html*/
    `
    <div class="discord-display">
        <h1>{{ title }}</h1>
        <p v-html="caption">{{ caption }}</p>
        <h1>{{ title2 }}</h1>
        <table>
            <tr v-for="(role, index) in role_names" :key="role.id">
                <th>{{ role.id }}</th>
                <td>{{ role.name }}</td>
                <td>{{ role.info }}</td>
            </tr>
        </table>
    </div>
    `,
    data() {
        return {
            a: 'Gawth3rs\' Discord',
            info: [
                'The Discord Extension of the Gawth3r Platform is the home for those who are',
                'just regular members of the discord. Here you can find various games to play',
                'to obtain in-discord currency (Gawth3r Coins), participate in lotteries',
                'and test your knowledge in quiz games, and more!'
            ],
            role_names: [
                { id: '', name: 'Gawth3rs\' Roles', info: '' },
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
            ]
        }
    },
    methods: {},
    computed: {
        title() {
            return this.a
        },
        title2() {
            return this.b
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