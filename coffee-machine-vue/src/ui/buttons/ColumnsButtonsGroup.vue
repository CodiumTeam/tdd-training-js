<template>
  <ul class="button-group">
    <li
      v-for="(child, index) in childrens"
      :key="index"
      @click="handleClick"
      :class="{'is-selected': child.props.text === selectedButton}"
    >
      <slot :name="child.props.name"></slot>
    </li>
  </ul>
</template>

<script>
import {ref} from 'vue';

export default {
  name: 'ButtonsGroup',
  props: {
    children: {
      type: Array,
      required: true,
    },
  },
  setup(props) {
    const childrens = ref([]);
    const selectedButton = ref('');

    // Initialize childrens with a ref value
    childrens.value = props.children;

    const handleClick = (event) => {
      const target = event.target;
      const classNames = target.className || '';

      if (classNames.includes('button')) {
        selectedButton.value = target.textContent;
      }
    };

    return {
      childrens,
      selectedButton,
      handleClick,
    };
  },
};
</script>

<style scoped>
@import './columns-buttons-group.css';
</style>