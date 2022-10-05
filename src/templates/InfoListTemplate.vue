<template>
  <div class="InfoListTemplate">
    <h1>This is an Info List Page</h1>
    <SearchBar></SearchBar>
    <InfoListTable :info-list="infoList"></InfoListTable>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import SearchBar from "@/components/infoList/SearchBar.vue";
import InfoListTable from "@/components/infoList/InfoListTable.vue";
import {InfoItem} from "@/store";

@Component({
  components: {SearchBar, InfoListTable}
})
export default class InfoListTemplate extends Vue {
  infoList = [] as InfoItem[]


  created() {
    this.infoList = this.$store.state.infoList;
    console.log(this.infoList);
  }


}
</script>

<style lang="scss">
@import "@/assets/scss/views/AddInfoView.scss";
</style>
