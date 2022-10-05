<template>
  <div class="InfoListTemplate">
    <h1>This is an Info List Page</h1>
    <SearchBar @search-input="searchItem" @sort-by-name-click="sortByName" @delete-all-click="deleteAllItem"></SearchBar>
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

  searchItem(value: string) {
    this.infoList = this.$store.state.infoList.filter((item: InfoItem) => item.phoneNumber === value);
  }

  sortByName() {
    console.log("sortByName");
    this.infoList = this.$store.state.infoList.sort((a: InfoItem, b: InfoItem) => {
      if(a.name > b.name) {
        return 1
      }
      else if (a.name < b.name) {
        return -1
      }
      return 0
    })
  }

  deleteAllItem() {
    console.log("deleteAllItem");
    this.$store.commit('deleteAll');
    this.infoList = this.$store.state.infoList;

  }


}
</script>

<style lang="scss">
@import "@/assets/scss/views/AddInfoView.scss";
</style>
