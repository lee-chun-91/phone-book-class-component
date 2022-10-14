<template>
  <div class="InfoListTemplate">
    <SearchBar :search-word="searchWord" @search-input="searchItem" @sort-by-name-click="sortByName" @delete-all-click="deleteAllItem"></SearchBar>
    <TableArea :info-list="infoList" @deleteitem="deleteItem"></TableArea>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import {$infoListStore, InfoItem} from "@/store";
import SearchBar from "@/components/infoList/SearchBar.vue";
import TableArea from "@/components/infoList/TableArea.vue";

@Component({
  components: {TableArea, SearchBar}
})
export default class InfoListTemplate extends Vue {
  infoList = [] as InfoItem[]
  searchWord = ""

  async created() {
    await $infoListStore.fetchGetInfoList();
    this.infoList = $infoListStore.infoList;
  }

  updateSearchWord(value: string) {
    this.searchWord = value;
  }

  searchItem(value: string) {
    this.updateSearchWord(value);
    this.infoList = $infoListStore.infoList.filter((item: InfoItem) => item.phoneNumber.includes(this.searchWord));
  }

  sortByName() {
    this.infoList = $infoListStore.infoList.sort((a: InfoItem, b: InfoItem) => {
      if(a.name > b.name) {
        return 1
      }
      else if (a.name < b.name) {
        return -1
      }
      return 0
    })
  }

  deleteItem() {
    this.infoList = $infoListStore.infoList;
  }

  deleteAllItem() {
    console.log("deleteAllItem");
    // this.infoList = $infoListStore.infoList;
  }


}
</script>

<style lang="scss">
//@import "@/assets/scss/views/AddInfoView.scss";
</style>
