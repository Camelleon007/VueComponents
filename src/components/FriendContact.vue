<template>
  <li>
      <h2>{{ name }}</h2>
      <real-button @click="toggleDetails" button-color="#ff0077" edge-color="#a0098c">
          {{ detailsAreVisible ? 'Hide' : 'Show' }} details
      </real-button>
      <ul v-if="detailsAreVisible">
          <li><strong>Phone:</strong>{{phoneNumber}}</li>
          <li><strong>Email:</strong>{{emailAddress}}</li>
      </ul>
  </li>
</template>

<script>
import RealButton from "vue-real-button";
export default {
    components: {
        RealButton,
    },
    props: [
        'name',
        'phoneNumber',
        'emailAddress'
    ],
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