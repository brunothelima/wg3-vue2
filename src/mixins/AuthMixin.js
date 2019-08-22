export default {
  methods: {
    async login(user = {}) {
      await this.$store.dispatch('auth/login', user)
      this.$router.push('/wg-kit')
    },
    async logout() {
      await this.$store.dispatch('auth/logout')
      this.$router.push('/login')
    }
  }
}
