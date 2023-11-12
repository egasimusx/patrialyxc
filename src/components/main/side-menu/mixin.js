export default {
  methods: {
    showTitle (item) {
      return this.useI18n ? this.$t(item.name) : (item.meta.title || item.name)
    },
    showChildren (item) {
      return item.children && item.children.length !== 0
    }
  }
}
