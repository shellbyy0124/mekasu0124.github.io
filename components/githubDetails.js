app.component('github-details',{
    template:
    /*html*/
    `<div class="github-details">
        <div class="github-container">
            <h2>{{ title }}</h2>
            <h5>{{ information }} <a href="https://www.github.com/gawth3rPlatform">here</a>. {{ information2 }}</h5>`,
    data() {
        return {
            title: 'Curious About How Gawth3r Works?',
            information: 'You can find our Public Github Respository',
            information2: 'For those who are interested in forking the repository, please contact <insert_person_here>'
        }
    }
})