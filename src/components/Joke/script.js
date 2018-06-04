export default {
  name: 'Joke',
  created () {
    if (this.$route.params.id) {
      this.$store.dispatch('getJoke', this.$route.params.id)
    } else {
      this.$store.dispatch('asyncAction', 'fetchJoke')
    }
  },
  methods: {
    getNewJoke: function () {
      this.$store.dispatch('asyncAction', 'fetchJoke')
    },
    rateJoke: function (currentJoke, rating) {
      this.$store.dispatch('rateJoke', {currentJoke, rating})
      this.$store.dispatch('asyncAction', 'fetchJoke')
    }
  }
}
