<template>
  <li>
      <h2>{{ name }} {{friendIsFavourite === '1' ? '(favourite)' : ''}}</h2>
      <real-button @click="toggleFav" button-color="#ff0077" edge-color="#a0098c">
          Toggle Fav
      </real-button>
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
        'emailAddress',
        'isFavourite'
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
                },
            friendIsFavourite: this.isFavourite,
            
        }
    },
    methods: {
        toggleDetails() {
            this.detailsAreVisible = !this.detailsAreVisible;
        },
        toggleFav() {
            if(this.friendIsFavourite === '1') {
                this.friendIsFavourite = '0';
            } else  {
                this.friendIsFavourite = '1';
            }
        }
    }

}
</script>

<style>

</style>