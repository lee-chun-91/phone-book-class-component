<template>
  <div class="SearchBar">
    <div class="input-area">
      <label for="검색"></label>
      <input type="text" id="검색" placeHolder="검색할 전화번호를 입력해주세요" :value="searchWord" @input="searchInput" />
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
import { Vue, Component, Prop, Emit } from "vue-property-decorator";

@Component
export default class SearchBar extends Vue {
  @Prop(String) readonly searchWord!: string

  @Emit()
  searchInput(event: InputEvent) {
    if(!event.target) {
      return
    }
    const eventTarget = event.target as HTMLInputElement;
    // console.log("event", event);
    // console.log("eventTarget", eventTarget)
    // console.log("eventTarget.value", eventTarget.value);
    return eventTarget.value;
  }

  @Emit()
  sortByNameClick(event: PointerEvent) {
    console.log("event", event)
  }

  @Emit()
  deleteAllClick(event: MouseEvent) {
    return event;
  }

}

</script>

<style lang="scss">

</style>
