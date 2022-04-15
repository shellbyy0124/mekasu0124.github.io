app9.component('review-form', {
    template: 
    /*html*/
    `
    <div class="review-form" @submit.prevent="onSubmit">
        <h3>Please Leave Us A Review!</h3>

        <label for="title">Review Title</label>
        <input id="title" v-model="title">

        <label for="name">Review Author</label>
        <input id="name" v-model="name">

        <label for="date">Review Date</label>
        <input id="date" v-model="date">

        <label for="stars">Select Number Of Stars</label>
        <select name="stars" id="stars" v-model.number="stars">
            <option>Select One</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
        </select>

        <label for="recommend">Recommend?</label>
        <select name="recommend" id="recommend" v-model="recommend">
            <option>Select One</option>
            <option>Yes</option>
            <option>No</option>
        </select>

        <input class="button" type="submit" value="Create Review!">
    </div>
    `,
    data() {
        return {
            title: '',
            name: '',
            date: '', 
            stars: null,
            recommend: null
        }
    },
    methods: {
        onSubmit() {
            if (this.title === '' || this.author === '' || this.date === '' || this.stars === this.stars[0] || this.recommend === this.recommend[0]) {
                alert('All Fields Must Be Filled Out!')
                return
            }

            let review = {
                title: this.title,
                author: this.name,
                date: this.date,
                stars: this.stars,
                recommend: this.recommend
            }

            this.$emit('review-submitted', review)

            this.title = ''
            this.author = ''
            this.date = '' 
            this.stars = null
            this.recommend = null
        }
    }
})