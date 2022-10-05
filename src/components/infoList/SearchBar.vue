<template>
  <div class="SearchBar">
    <div class="input-area">
      <label for="검색"></label>
      <input type="text" id="검색" placeHolder="검색할 전화번호를 입력해주세요" @input="searchInput" />
    </div>
    <div class="button-area">
      <button class="sortByNameButton" @click="sortByNameClick" >
        이름 순 정렬
      </button>
      <button class="deleteAllButton" @click="deleteAllClick">전체삭제</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Emit } from "vue-property-decorator";

@Component
export default class SearchBar extends Vue {

  @Emit()
  searchInput(event: InputEvent) {
    console.log(event);
    return event;
  }

  @Emit()
  sortByNameClick(event: MouseEvent) {
    return event;
  }

  @Emit()
  deleteAllClick(event: MouseEvent) {
    return event;
  }

}

</script>

<style lang="scss">

</style>
