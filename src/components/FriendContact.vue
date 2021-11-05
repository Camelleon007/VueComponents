<template class="block">

  <div class="box"> 

  <li>
      <h2 class="title">{{ name }} {{isFavourite ? '(favourite)' : ''}}</h2>
      <button class="button is-warning" @click="toggleFav">
          Toggle Fav
      </button>
      <button class="button is-info" @click="toggleDetails">
          {{ detailsAreVisible ? 'Hide' : 'Show' }} details
      </button>
      <div class="content is-medium">
    
      <ul v-if="detailsAreVisible">
          <li><strong>Phone:</strong>{{phoneNumber}}</li>
          <li><strong>Email:</strong>{{emailAddress}}</li>
      </ul>
      </div>
  </li>

  </div>

</template>

<script>
export default {    
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