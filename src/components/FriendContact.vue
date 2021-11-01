<template>
  <li>
      <h2>{{ name }} {{isFavourite ? '(favourite)' : ''}}</h2>
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
    props: {
        id: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        phoneNumber: {
            type: String,
            required: true
        },
        emailAddress: {
            type: String,
            required: true
        },
        isFavourite: {
            type: Boolean,
            required: false,
            default: true            
        },

    },
    //emits: ['toggle-fav']
    emits: {
        'toggle-fav': function (id) {
            if (id) {
                return true;
            } else {
                console.log("Missing ID");
            }
        }
    },
    /* props: [
        'name',
        'phoneNumber',
        'emailAddress',
        'isFavourite'
    ], */

    data() {
        return {
            detailsAreVisible: false,
            friendIsFavourite: this.isFavourite,
            
        }
    },
    methods: {
        toggleDetails() {
            this.detailsAreVisible = !this.detailsAreVisible;
        },
        toggleFav() {
            this.$emit('toggle-fav', this.id);
            this.friendIsFavourite = !this.friendIsFavourite;
        }
    }

}
</script>

<style>

</style>