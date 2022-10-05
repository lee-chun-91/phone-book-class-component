<template>
  <div class="UpdateInfoTemplate">
    <FormWrapper :update-item="updateItem" @submit-info="handleUpdateItem" buttonText="수정하기"></FormWrapper>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import FormWrapper from "@/components/form/FormWrapper.vue";
import {InfoItem} from "@/store";
import router from "@/router";

@Component({
  components: {FormWrapper}
})
export default class UpdateInfoTemplate extends Vue {
  updateItem = {}

  getUpdateItem() {
    let items = this.$store.state.infoList;
    let foundIndex = this.$store.state.infoList.findIndex((item: InfoItem) => item.id = Number(this.$route.params.id));
    this.updateItem = items[foundIndex];
  }

  created() {
    this.getUpdateItem();
  }

  handleUpdateItem(data: InfoItem) {
    console.log("updateItem", data);
    this.$store.commit('updateItem', data);
    router.push('/')
  }
}
</script>

<style lang="scss">
</style>
