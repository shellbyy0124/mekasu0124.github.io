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
                <p>{{ description }}</p>
            </div>
            <div class="roles">
                <h3>{{ title2 }}</h3>
                <p>{{ subSection }}</p>
                <table>
                    <div v-for="(role, index) in roles" :key="role.id">
                        <tr>
                            <td style="width:600px;">{{ role.name }}</td>
                            <td>{{ role.desc }}</td>
                        </tr>
                    </div>
                </table>
            </div>
            <div class="punish-table">
                <h3>{{ title3 }}</h3>
                <p>{{ description2 }}</p>
                <table>
                    <div v-for="(pun, index) in punTable" :key="pun.id">
                        <tr>
                            <td style="width: 100px;">{{ pun.name }}</td>
                            <td>{{ pun.a }}</td>
                            <td>{{ pun.b }}</td>
                            <td>{{ pun.c }}</td>
                        </tr>
                    </div>
                </table>
            </div>
        </div>
    </div>`,
    data() {
        return {
            title: 'Gawth3rs\' Discord Extension',
            subTitle: 'A Place for any and all things relating to the Discord Extension of Gawth3r',
            a: 'Gawth3r Platform - Discord Extensions Roles',
            b: 'The roles listed below are in order from highest heirarchy to lowest.',
            c: 'The discord extension of the Gawth3r Platform is the home for those who are just regular members of the discord. Here you can find various games to play to obtain in-discord currency, lotteries that are currently going on within the discord, and more.',
            d: 'The point of the punishment table is to prevent users from being kicked from the server, and to allow people chances they deserver (if any). This table is designed in a mannor that will discourage misuses of power, abilities, or for other rules that have been broken. This table is used as a guide for staff when handling any given situation, and the tier chosen may change given the severity of the infraction.',
            e: 'Gawth3rs\' Punishment Table',
            roles: [
                { id: 1, name: "Owner", desc: "The role for the Website and Discord Extension Owners." },
                { id: 2, name: "Devs", desc: "The role for those who are on the development team." },
                { id: 3, name: "Gawth3r", desc: "The role for the main bot himself, Gawth3r." },
                { id: 4, name: "Gawth3rs Brothers", desc: "The role for the bots whom assist Gawth3r." },
                { id: 5, name: "Head Administrator", desc: "The role for the Administrator in charge of everyone." },
                { id: 6, name: "Administrator", desc: "The role for those who only help administrate the Discord Extension of the Gawth3r Platform." },
                { id: 7, name: "Moderator", desc: "The role for those who only help moderate the Discord Extension of the Gawth3r Platform." },
                { id: 8, name: "Cyber Administrator", desc: "The role for those who only help administrate the Website Extension of the Gawth3r Platform." },
                { id: 9, name: "Cyber Moderator", desc: "The role for those who only help moderate the Website Extension of the Gawth3r Platform." },
                { id: 10, name: "Support Staff", desc: "The role for those who assist within the Support Extension of the Gawth3r Platform." },
                { id: 11, name: "Community Helper", desc: "The role for those who assist within the community as whole." },
                { id: 12, name: "WoW Staff", desc: "The role for those who are staff members within our World of Warcraft Guild." },
                { id: 13, name: "WoW Member", desc: "The role for those who are members within our World of Warcraft Guild." },
                { id: 14, name: "Nitro Member", desc: "The role for those who are Discord Nitro Subscribers." },
                { id: 15, name: "Summoners War Staff", desc: "The role for those who are the GM and Co-GM of our Summoners War Guild." },
                { id: 16, name: "Summoners War", desc: "The role for those who are members within our Summoners War Guild." },
                { id: 17, name: "Artistry Administrator", desc: "The role for those who help administrate the Art Extension of the Gawth3r Platform." },
                { id: 18, name: "Artistry", desc: "The role for those who are members within the Art Extension of the Gawth3r Platform." },
                { id: 19, name: "Programming Administrator", desc: "The role for those who help adminstrate the Coding Extension of the Gawth3r Platform." },
                { id: 20, name: "Programming", desc: "The role for those who are members within the Coding Extension of the Gawth3r Platform." },
                { id: 21, name: "Gaming Administrator", desc: "The role for those who help administrate the Gaming Extension of the Gawth3r Platform." },
                { id: 22, name: "Gaming", desc: "The role for those who are members within the Gaming Extension of the Gawth3r Platform." },
                { id: 23, name: "Member", desc: "The role for those who are members within the Discord Extension as a whole. (all members are given this role regardless)" },
                { id: 24, name: "Muted", desc: "The role for those members who are within their first tier of the Punishment Table." },
                { id: 25, name: "Kicked", desc: "The role for those members who are within their second tier of the Punishment Table." },
                { id: 26, name: "Banned", desc: "The role for those members who are within their third tier of the Punishment Table." },
                { id: 27, name: "Perma-Banned", desc: "The role for those members who are in the final tier of the Punishment Table." }
            ],
            punTable: [
                { id: 1, name: 'Tier 1', a: '0-5 Warnings = 15 minutes in the Muted role', b: '5-10 Warnings = 25 minutes in the Muted role', c: '10+ Warnings = 1 day in the Muted role' },
                { id: 2, name: 'Tier 2', a: '0-5 Mutes = 1 day in the Kicked role', b: '5-10 Mutes = 3 days in the Kicked role', c: '10+ Mutes = 1 week in the Kicked role' },
                { id: 3, name: 'Tier 3', a: '0-5 Kicks = 1 week in the Banned role', b: '5-10 Kicks = 2 weeks in the Banned role', c: '10+ Kicks = 1 Month in the Banned role' },
                { id: 4, name: 'Tier 4', a: '0-5 Bans = 6 months in the Perma-Banned role', b: '5-10 Bans = 9 months in the Perma-Banned role', c: '10+ Bans = Permenantly Banned. No appeals.' }
            ]
        }
    },
    methods: {},
    computed: {
        title() {
            return this.title
        },
        subTitle() {
            return this.subTitle
        },
        title2() {
            return this.a
        },
        subSection() {
            return this.b
        },
        description() {
            return this.c
        },
        title3 () {
            return this.e
        },
        description2() {
            return this.d
        }
    }
})