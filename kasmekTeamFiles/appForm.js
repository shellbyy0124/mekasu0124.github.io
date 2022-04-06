app.component('application-form', {
    template:
    /*html*/
    `<form class="application-form" @submit.prevent="onSubmit">
        <label for="name">Discord Tag: </label>
        <input id="name" v-model="name">

        <label for="email">Email Address: </label>
        <input id="email" v-model="email">

        <label for="questionOne">What Is ((2+2)/5*(6+8+8))? </label>
        <input id="questionOne" v-model="questionOne">

        <label for="questionTwo">What Are The 4 Main DataTypes in Python?</label>
        <input id="questionTwo" v-model="questionTwo">

        <label for="questionThree" id="questionThree" style="text-align: left;">
            What will the following code print to the console?<br><br>
            <code>
                const numbers = [1, 3, 8, 16, 16, 7]<br>

                for (let i = 0; i < numbers.length; i++){<br>
                &ensp;    if (i % 2 === 0) {<br>
                &emsp;&emsp;        console.log("insert_answer_here")<br>
                &ensp;    }<br>
                }
            </code>
        </label>
        <input id="questionThree" v-model="questionThree">

        <label for="questionFour">Insert Fourth Question Here</label>
        <input id="questionFour" v-model="questionFour">

        <label for="questionFive">Insert Fifth Question Here</label>
        <input id="questionFive" v-model="questionFive">

        <label for="questionSix">Insert Sixth Question Here</label>
        <input id="questionSix" v-model="questionSix">

        <label for="questionSeven">Insert Seventh Question Here</label>
        <input id="questionSeven" v-model="questionSeven">

        <label for="questionEight">Insert Eight Question Here</label>
        <input id="questionEight" v-model="questionEight">
        
        <label for="questionNine">Insert Ninth Question Here</label>
        <input id="questionNine" v-model="questionNine">

        <label for="questionTen">Insert Tenth Question Here</label>
        <input id="questionTen" v-model="questionTen">

        <input class="button" type="submit" value="Submit" style="border-radius: 20px; width: 400px; margin-top: 10px;">
    </form>`,
    data() {
        return {
            name: '',
            email: '',
            questionOne: '',
            questionTwo: '',
            questionThree: '',
            questionFour: '',
            questionFive: '',
            questionSix: '',
            questionSeven: '',
            questionEight: '',
            questionNine: '',
            questionTen: ''
        }
    },
    methods: {
        onSubmit() {}
    },
    computed: {}
})