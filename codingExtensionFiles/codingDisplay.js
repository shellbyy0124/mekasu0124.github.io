app.component('coding-display', {
    template:
    /*html*/
    `<div class='coding-display'>
        <div class="coding-container">
            <div class='box-1'>
                <h1>{{ title }}</h1>
                <h3>{{ subTitle }}
            </div>
            <div class="box-2">
                <h3>Language Documentation links</h3>
                <div v-for="(lang, index) in languages" :key="lang.id">
                    <p>{{ lang.id }}. <a :href="lang.url">{{ lang.name }}</a></p>
                </div>
            </div>
        </ol>
    </div>`,
    data() {
        return {
            title: 'Gawth3r\'s Coding Extension',
            subTitle: 'A Place For All Programmers To Do Programmer Things',
            languages: [
                { id: 1, name: 'Python', url: 'https://www.python.org/' },
                { id: 2, name: 'JavaScript', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
                { id: 3, name: 'HTML', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
                { id: 4, name: 'CSS', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
                { id: 5, name: 'Rust', url: 'https://www.rust-lang.org/learn' },
                { id: 6, name: 'Go', url: 'https://go.dev/doc/' },
                { id: 7, name: 'C#', url: 'https://docs.microsoft.com/en-us/dotnet/csharp/' },
                { id: 8, name: 'C', url: 'https://devdocs.io/c/' }
            ]
        }
    },
    methods: {
        title() {
            return this.title
        },
        subTitle() {
            return this.subTitle
        }
    }
})