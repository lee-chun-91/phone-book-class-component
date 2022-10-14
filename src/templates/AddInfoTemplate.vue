<template>
  <div class="AddInfoTemplate">
    <FormWrapper @submit-info="handleAddItem" buttonText="저장하기"></FormWrapper>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import FormWrapper from "@/components/form/FormWrapper.vue";
import {$infoListStore, InfoItem, store} from "@/store";

@Component({
  components: {FormWrapper}
})
export default class AddInfoTemplate extends Vue {

  handleAddItem(data: InfoItem) {
    console.log(data);
    const test = store.state.infoList
    console.log(test);
    $infoListStore.fetchAddItem(data);
    // this.$store.dispatch('fetchAddItem', data);
    // this.$store.dispatch('fetchGetInfoList');
    // this.$store.commit('addItem', data);
  }
}
</script>

<style lang="scss">
</style>
