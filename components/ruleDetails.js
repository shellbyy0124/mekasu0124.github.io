app.component('rule-details',{
    template:
    /*html*/
    `<div class="rule-details">
        <div class="rule-container">
            <h3>Rules For The Website Extension</h3>
            <h5>These rules are subject to change at any time. In this event, Gawth3r will make an announcement</h5>
            <ol>
                <div v-for="(rule, index) in rules" :key="rule.id">
                    <li><h3>{{ rule.title }}</h3>
                        <ul>
                            <li>{{ rule.rule }}</li>
                        </ul>
                    </li>
                </div>
            </ol>
        </div>
    </div>`,
    data() {
        return {
            rules: [
                { id: 1, title: 'Be Respectful!', rule: 'It does not matter if it is a staff member or another member of the discord, or website, extension.' },
                { id: 2, title: 'Superior/Inferior Does Not Exist!', rule: 'No one person was born or created better than anyone else. We are all people living in the same messed up world as the person next to us. Each persons\' reality is different, and each persons\' reality is real. <strong>WE DO NOT BULLY!</strong>' },
                { id: 3, title: 'What\'s A Stupid Question?', rule: 'There is no such thing as a stupid question! We are all here to learn. That is not to say that if you continuously ask help on the same thing that someone has already explained, and you\'re showing no signs of learnable progress, then a member of staff <i>may</i> say something to you.' },
                { id: 4, title: 'How Much Knowledge Should I Have?', rule: 'When it comes to programming, there is no specific amount of knowledge one person needs. However, when it comes to programming one does need to know the basics. Please do not ask for support on HTTPS connections when developing websites if you cannot explain to me how to do create a clickable image. (not specifically, but as a reference).' },
                { id: 5, title: 'No Spamming!', rule: 'If you send more than 5 messages within a 3 second range, you are techincally spamming the channel and Gawth3r will mute you for 30 seconds each time. If you ask for help, and someone doesn\'t respond fast enough so you ask again, and again until someone finally answers......DON\'T DO THAT. Post your question in the support channel, and leave it alone! We are not paid to help you. We will respond when we have the time.' },
                { id: 6, title: 'Appropriate General Chat Rules', rule: 'We have members of all ages that are apart of this discord community. Under no circumstances is anyone allowed to speak of, or use, sexual misconduct within or around minors or in the general channels that all members have access to. Furthermore, there is no NSFW content allowed anywhere within the community. Any such conduct will result in Gawther instantly sending a message to the discord staff themselves, and deleting plus blocking you from the server without hesitation. Anyone who is removed from the server this way will not be allowed to re-join the Gawth3r Platforms under no circumstances. <strong>NO EXCUSES!</strong>' },
                { id: 7, title: 'Channels and Their Topics', rule: 'When you click to enter the text channel, if you will look at the top of the channel you will see a channel topic. Each channel has been uniquely designed, and setup to be run by Gawth3r to bring you the best content possible is the smoothest manner possible. Gawth3r is, in the future, going to be setup so that when messages are entered into channels that don\'t match the topic, they are removed, and placed in the correct channel and the author of that message is sent a notification of where the message was moved to and why. TL:DR => you don\'t want your message moved, then ensure that you\'re staying on topic! :P' },
                { id: 8, title: 'How Should I Submit My Code?', rule: 'For those who are requesting support on their coding materials, please use <a href="https://paste.pythondiscord.com/">Hastebin</a> as posting code using back ticks can cause a wall of code to have answers to other questions get lost in the mix. All message that have been sent with stuff in code blocks will be removed. To be specific, when the bot scans the message, it will scan for a language and if a language is detected, then it will move the message, otherwise, your message <i>should</i> be safe.' }
            ]
        }
    },
    methods: {},
    computed: {}
})