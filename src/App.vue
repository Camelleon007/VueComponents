<template class="container">
  <div class="container">
    <header><h1 class="title is-2 has-text-white">my friends</h1></header>
    <ul>
      <friend-contact
        v-for="friend in friends"
        :key="friend.id"
        :id="friend.id"
        :name="friend.name"
        :phone-number="friend.phone"
        :email-address="friend.mail"
        :is-favourite="friend.isFavourite"
        @toggle-fav="toggleFrientdFav"
        @del-friend="deleteFriend"
      ></friend-contact>
    </ul>
    <new-contact @add-friend="addNewFriend"></new-contact>
  </div>
</template>

<script>
export default {
  data() {
    return {
      friends: [
        {
          id: "beniu",
          name: "Baniamin Wiśniewski",
          phone: "1234",
          mail: "beniu@gmail.pl",
          isFavourite: true,
        },
        {
          id: "krychu",
          name: "Krystian Ciemniecki",
          phone: "5678",
          mail: "krychu@gmail.pl",
          isFavourite: false,
        },
      ],
    };
  },
  methods: {
    toggleFrientdFav(friendID) {
      const identifiedFriend = this.friends.find(
        (friend) => friend.id === friendID
      );
      identifiedFriend.isFavourite = !identifiedFriend.isFavourite;
    },
    addNewFriend(name, phone, email) {
      const newFriend = {
        id: new Date().toISOString(),
        name: name,
        phone: phone,
        mail: email,
        isFavourite: false,
      };
      this.friends.push(newFriend);
    },
    deleteFriend(friendID) {
      this.friends = this.friends.filter((friend) => friend.id !== friendID);
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Jost&display=swap");

* {
  box-sizing: border-box;
}

html {
  font-family: "Jost", sans-serif;
}

body {
  margin: 0;
}

header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  background-color: #58004d;
  color: white;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

#app li {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app h2 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #58004d;
  margin: 0 0 1rem 0;
}
</style>
