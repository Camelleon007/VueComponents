<template>
  <li>
      <h2>{{ friend.name }}</h2>
      <button @click="toggleDetails">{{ detailsAreVisible ? 'Hide' : 'Show' }} details</button>
      <ul v-if="detailsAreVisible">
          <li><strong>Phone:</strong>{{friend.phone}}</li>
          <li><strong>Email:</strong>{{friend.email}}</li>
      </ul>
  </li>
</template>

<script>
export default {
    data() {
        return {
            detailsAreVisible: false,
            friend: 
                {
                    id: 'beniu',
                    name: 'Beniamin Wiśniewski',
                    phone: '1234',
                    email: 'beniu@gmail.pl',
                }
            
        }
    },
    methods: {
        toggleDetails() {
            this.detailsAreVisible = !this.detailsAreVisible;
        }
    }

}
</script>

<style>

</style>