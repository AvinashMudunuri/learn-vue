export default {
  name: 'Summary',
  data () {
    return {
      fields: ['id', 'joke', 'rating'],
      items: this.$store.state.ratedJokes,
      rating: 'All',
      ratingOptions: ['All', 'Like', 'Dislike']
    }
  },
  methods: {
    tamperJokes: function () {
      return Object.keys(this.items).map((key) => this.items[key])
    }
  }
}
