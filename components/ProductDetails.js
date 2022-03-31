app.component('product-details', {
    props: {
        details: {
            type: Array,
            require: true
        }
    },
    template:
    /*html*/
    `
    <h3>Materials:</h3>
    <ul>
      <li v-for="detail in details">{{ detail }}</li>
    </ul>
    `
})