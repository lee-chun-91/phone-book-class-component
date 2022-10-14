<template>
  <div class="UpdateInfoTemplate">
    <FormWrapper :update-item="updateItem" @submit-info="handleUpdateItem" buttonText="수정하기"></FormWrapper>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import FormWrapper from "@/components/form/FormWrapper.vue";
import {$infoListStore, InfoItem} from "@/store";

@Component({
  components: {FormWrapper}
})
export default class UpdateInfoTemplate extends Vue {
  updateItem = {}

  getUpdateItem() {
    let foundIndex = $infoListStore.infoList.findIndex((item: InfoItem) => item.id === this.$route.params.id);
    this.updateItem = $infoListStore.infoList[foundIndex];
  }

  created() {
    this.getUpdateItem();
  }

  handleUpdateItem(data: InfoItem) {
    console.log("updateItem", data);
    $infoListStore.fetchUpdateItem(data);
  }
}
</script>

<style lang="scss">
</style>
