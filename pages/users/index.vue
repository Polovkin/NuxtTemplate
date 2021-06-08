<template>
  <section>
    <h1 :class="$style.header">
      Users page
    </h1>
    <ul>
      <li
        v-for="user of users"
        :key="user.id"
      >
        <button @click="openUser(user.id)">
          {{ user.name }}
        </button>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'Index',
  async fetch ({ store }) {
    if (store.getters['users/users'].length === 0) {
      await store.dispatch('users/fetch')
    }
  },
  computed: {
    users () {
      return this.$store.getters['users/users']
    }
  },
  methods: {
    openUser (user) {
      this.$router.push('/users/' + user)
    }
  }
}
</script>

<style module>
.header {
  color: red;
}
</style>
