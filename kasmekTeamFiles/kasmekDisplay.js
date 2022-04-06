app.component('kasmek-display', {
    template:
    /*html*/
    `<div class="kasmek-display">
        <div class="kasmek-container">
            <div id="title">
                <h3>{{ title }}</h3>
            </div>
            <div id="members">
                <h3>&ensp; {{ title2 }}</h3>
                <ul>
                    <div v-for="(member, index) in members" :key="member.id">
                        <li>{{ member.name }} / {{ member.role }}</li>
                    </div>
                </ul>
            </div>
            <div id="about">
                <h3>{{ title3 }}</h3>
                <p>
                    KasMek's Programming Team was created roughly a year ago 
                    not too long after Gawth3r was created. It was a space for 
                    the three of us to be able to work on the Gawht3r Platform 
                    without having to talk in other friends servers, or in group 
                    dm's. In addition to that, it began to grow into a place where 
                    we shared memes, coding styles/examples, and just really helped
                    each other become a better version of ourselves. Thus the team 
                    was created. We have then started to spread the team out and adapt 
                    other areas of life (art, gaming, etc.) and started inviting our 
                    friends to the platform as well, thus creating the Gawth3r Platform 
                    Community. While the commity is still out on renaming the server
                    from KasMek's Programming Team to Gawth3r, we're all still one
                    big happy family! With the name change, however, the programming
                    team is still very much there. Instead of getting rid of the team,
                    we have just created them their own category within the Discord 
                    Platform, and are looking into other areas to help them expand
                    as well.
                </p>
            </div>
            <div id="application">
                <p v-if="appStatus">
                    Application Status: Open
                    
                    <p>
                        <a href="./application.html"><h3>{{ title4 }}</h3></a>. 
                    </p>
                </p>
                <p v-else>Application Status: Closed</p>
            </div>
        </div>
        <application-form></application-form>
    </div>`,
    data() {
        return {
            a: 'KasMeks\' Programming Team',
            b: 'Our Members',
            c: 'About The Team:',
            d: 'Interested In Applying?',
            members: [
                { id: 1, name: 'Mekasu', role: 'Administrator' },
                { id: 2, name: 'KataReborn', role: 'Administrator' },
                { id: 3, name: 'GamingBuddhist', role: 'Administrator' }
            ],
            appStatus: true
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
        title3() {
            return this.c
        },
        title4() {
            return this.d
        }
    }
})