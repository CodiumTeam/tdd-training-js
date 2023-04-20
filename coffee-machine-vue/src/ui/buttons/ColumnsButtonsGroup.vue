<template>
  <ul class="button-group" @click="handleClick">
    <slot></slot>
  </ul>
</template>

<script>
export default {
  name: 'ButtonsGroup',
  data() {
    return {
      selectedButton: null,
    }
  },
  methods: {
    handleClick: (event) => {
      const target = event.target;
      const parent = event.target.parentElement;
      const children = parent.childNodes;
      children.forEach((x) => {
        if (!x.classList) return;
        x.classList.remove('button--is-selected');
      })

      target.classList.add('button--is-selected');
    }
  }
}
</script>
