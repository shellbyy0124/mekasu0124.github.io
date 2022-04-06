app.component('github-details',{
    template:
    /*html*/
    `<div class="github-details">
        <div class="github-container">
            <h2>{{ title }}</h2>
            <h5 v-html="information">{{ information }}</h5>`,
    data() {
        return {
            title: 'Curious About How Gawth3r Works?',
            information: 'You can find our Public Github Respository <a href="https://www.github.com/gawth3rPlatform">here</a>. For those who are interested in forking the repository, please contact KataReborn for futher information/instructions.'
        }
    }
})