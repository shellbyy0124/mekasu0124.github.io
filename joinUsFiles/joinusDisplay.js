app.component('joinus-display', {
    template:
    /*html*/
    `<div class="joinus-display">
        <div class="joinus-container">
            <h1 v-html:="title">{{ title }}</h1>
            <p>
                By joining the Gawth3r Family, you will gain access to numerous commands, 
                a weekly newsletter, VIP benefits (<a href="https://discord.ccom/nitro">Discord Nitro Required</a>), 
                and access to our various extensions like our Programming Knook, Arcade Street, Art Alley, and more!
            </p>
        </div>
        <joinus-form></joinus-form>
    </div>`,
    data() {
        return {
            a: '<i>W</i>e<i>l</i>c<i>o</i>m<i>e</i> T<i>o</i> T<i>h</i>e <i>F</i>a<i>m</i>i<i>l</i>y<i>!</i>'
        }
    },
    methods: {},
    computed: {
        title() {
            return this.a
        },
        subTitleOne() {
            return this.subTitleOne
        }
    }
})