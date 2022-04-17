// index.html
const app = Vue.createApp({
    data() {},
    methods: {}
})

// ArtExtension.html
const app2 = Vue.createApp({
    data() {},
    methods: {},
    computed: {}
})

// CodingExtension.html
const app3 = Vue.createApp({
    data() {},
    methods: {},
    computed: {}    
})

// DiscordExtension.html
const app4 = Vue.createApp({
    data() {},
    methods: {},
    computed: {}
})

// GamingExtension.html
const app5 = Vue.createApp({
    data() {},
    methods: {},
    computed: {}
})

// RulesExtension.html
const app6 = Vue.createApp({
    data() {},
    methods: {},
    computed: {}
})

// AboutExtension.html
const app7 = Vue.createApp({
    data() {},
    methods: {},
    computed: {}
})

// LoginExtension.html
const app8 = Vue.createApp({
    data() {},
    methods: {},
    computed: {}
})

// ReviewsExtension.html
const app9 = Vue.createApp({
    data() {},
    methods: {},
    computed: {}
})

// NewsletterExtension.html
const app10 = Vue.createApp({
    data() {},
    methods: {},
    computed: {}
})

// hangman.html
const app11 = Vue.createApp({
    el: "#app",
	data: () => ({
		letters: Array.from('ABCDEFGHIJKLMNOPQRSTUVWXYZ'),
		quotes: [], //Filled by the mounted hook
		currentQuote: '', //Filled by the mounted hook
		quoteAuthor: '',
		guesses: [],
		strikes: [...defaultStrikes],
		gameOver: false
	}),
	mounted() {
		fetch('https://type.fit/api/quotes')
			.then((response) => response.json())
			.then((fetchedQuotes) => {
				fetchedQuotes = fetchedQuotes.filter(quote => quote.text.length <= maxLength) // Get rid of any quotes that are too long
				this.quotes = fetchedQuotes
				this.pickAQuote()
			})
	},
	methods: {
		//Can enter guesses with a keyboard, but it doesn't work super great because you need to be focusing a non-disabled element to use it currently. Needs some refinement.
		handleKeyPress(e) {
			const key = e.key.toUpperCase()		
			if(key.length === 1 && key.match(/[a-zA-Z]/) && !this.guesses.includes(key)) {
				console.log(key)
				this.guess(key)
			}
		},
		pickAQuote() {
			console.log(this.quotes)
			const random = Math.floor(Math.random() * this.quotes.length)
			this.currentQuote = this.quotes[random].text.toUpperCase()
			this.quoteAuthor = this.quotes[random].author
		},
		//The function that turns unguessed letters into blank spots
		isRevealed(letter) {
			if (!letter.match(/[a-zA-Z\s]/)) {
				return letter
			}
			return this.guesses.includes(letter) || this.gameOver ? letter : '_'
		},
		//Handles the guess and all possible results
		guess(letter) {
			console.log(letter)
			this.guesses.push(letter)
			if (!this.currentQuote.includes(letter)) {
				this.strikes.pop()
				this.strikes = [{ icon: '🚫', guess: letter }, ...this.strikes]
			}
			if (this.strikeout || this.puzzleComplete) {
				this.gameOver = true
				if(this.puzzleComplete) fireEmAll();
			}
		},
		newGame() {
			const confirmation = confirm('End this game and start a new one?')
			if (!confirmation) return
			this.pickAQuote()
			this.guesses = []
			this.strikes = [...defaultStrikes]
			this.gameOver = false
		}
	},
	computed: {
		splitQuote() {
			return this.currentQuote.split(' ')
		},
		badGuesses() {
			return this.strikes.filter(s => s.guess).map(s => s.guess)
		},
		strikeout() {
			return this.badGuesses.length >= allowedStrikes
		},
		puzzleComplete() {
			return this.unrevealed === 0
		},
		unrevealed() {
			return [...this.currentQuote].filter(letter => {
				return letter.match(/[a-zA-Z]/) && !this.guesses.includes(letter)
			}).length
		},
		message() {
			if(!this.gameOver) {
				return '☝️ Pick a letter'
			} else if (this.strikeout) {
				return '❌ You lost this round. Try again?'
			} else if (this.puzzleComplete) {
				return '🎉 You win!'
			}
			//You can never be too safe ¯\_(ツ)_/¯
			return '😬 Unforeseen error state, maybe try a new game?'
		}
	}
})