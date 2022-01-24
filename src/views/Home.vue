<template>
  <div class="home">
    <form @submit="submit">
      <input type="radio" id="one" value="1" v-model="status" />
      <label for="one">Підтвердити</label>
      <br />
      <input type="radio" id="two" value="2" v-model="status" />
      <label for="two">Скасувати</label>
      <input type="radio" id="three" value="3" v-model="status" />
      <label for="two">Зателефонувати мені</label>
      <button @click.prevent="submit" type="submit">Відправити</button>
    </form>
  </div>
</template>

<script>
// @ is an alias to /src
import api from "../api/api";

export default {
  name: "Home",
  components: {},
  data: () => ({
    picked: null,
    key: "D3C6D997-8CBE-42CA-81FC-EE56DA3F4418",
    uid: "1d397054-792a-11ec-85d6-b2601fe30ff7",
    func: "checkUID",
    status: null,
  }),
  created() {
    api.fetchTrackingInfo(this.key, "checkUID", this.uid);
  },
  methods: {
    submit() {
      api.fetchTrackingInfo(this.key, "confirm", this.uid, this.status);
    },
  },
};
</script>
