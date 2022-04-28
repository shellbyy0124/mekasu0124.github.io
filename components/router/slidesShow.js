app3.component('slideshow-display', {
    template:
    `
    <div class="slideshow-display">
        <div v-for="(x, index) in gawParts" :key="index">
            <div class="mySlide">
                <div class="text">
                    <div v-html="item.stuff" v-for="(item, index2) in x.description" :key="index2">
                        {{ item.stuff }}
                    </div>
                </div>
            </div>
        </div>
    </div>                        
    `,
    data() {
        return {
            gawParts: [
                {
                    id: 1,
                    description: [
                        { id: 0, stuff: "<a href='../art/Art.html'>Artistry</a>" },
                        { id: 1, stuff: "The corner stone for modern day colors" },
                        { id: 2, stuff: "and designs. The Art Website Portion is a place for" },
                        { id: 3, stuff: "all of our members who are artists, and enjoy viewing" },
                        { id: 4, stuff: "or purchasing artwork." }
                    ]
                },
                {
                    id: 2,
                    description: [
                        { id: 0, stuff: "<a href='../discord/Discord.html'>Discord</a>" },
                        { id: 1, stuff: "A very popular voice/video/text chat application" },
                        { id: 2, stuff: "that is used by a wide variety of communities. Our goal here" },
                        { id: 3, stuff: "is to bring you the best server possible that will not only" },
                        { id: 4, stuff: "make you feel at home, but also give you the help you need," },
                        { id: 5, stuff: "or the friends you did not want or expect to have!" }
                    ]
                },
                {
                    id: 3,
                    description: [
                        { id: 0, stuff: "<a href='../games/Games.html'>Video Games</a>" },
                        { id: 1, stuff: "To have a video game to play is fun and all, but to have a" },
                        { id: 2, stuff: "video game that you play with people who know how to have fun" },
                        { id: 3, stuff: "get things accomplished, and still end up being someone you" },
                        { id: 4, stuff: "eventually see as a really cool person just makes it all better" },
                        { id: 5, stuff: "right? Well, that is why you should join our Discord and see the" },
                        { id: 6, stuff: "latest games we currently support, suggest the ones we don't that" },
                        { id: 7, stuff: "you enjoy playing a lot, and we will see about getting them added!" }
                    ]
                },
                {
                    id: 4,
                    description: [
                        { id: 0, stuff: "<a href='../programming/Programming.html'>Programming</a>" },
                        { id: 1, stuff: "Come share your knowledge, gain more knowledge, or even build" },
                        { id: 2, stuff: "something together with your own team and showcase it! The" },
                        { id: 3, stuff: "possibilities are endless with this rowdy crowd :D Come join" },
                        { id: 4, stuff: "fun and see what's happening in the realm of computed and code." }
                    ]
                }
            ]
        }
    },
    methods: {},
    computed: {}
})