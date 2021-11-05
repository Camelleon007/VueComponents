<template class="block">
  <div class="box">
    <form @submit.prevent="AddNewFriend">
      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">Name</label>
        </div>
        <div class="field-body">
          <div class="field">
            <p class="control">
              <input class="input" type="text" v-model="enteredName" />
            </p>
          </div>
        </div>
      </div>
      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">Phone</label>
        </div>
        <div class="field-body">
          <div class="field">
            <p class="control">
              <input class="input" type="text" v-model="enteredPhone" />
            </p>
          </div>
        </div>
      </div>
      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">Email</label>
        </div>
        <div class="field-body">
          <div class="field">
            <p class="control">
              <input class="input" type="text" v-model="enteredMail" />
            </p>
          </div>
        </div>
      </div>

      <div class="field is-horizontal">
        <div class="field-label is-normal"></div>
        <div class="field-body">
          <div class="field">
            <button class="button is-primary">Add</button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  emits: ["add-friend"],
  data() {
    return {
      enteredName: "",
      enteredPhone: "",
      enteredMail: "",
    };
  },
  methods: {
    AddNewFriend() {
      this.$emit(
        "add-friend",
        this.enteredName,
        this.enteredPhone,
        this.enteredMail
      );
    },
  },
};
</script>

<style>
</style>