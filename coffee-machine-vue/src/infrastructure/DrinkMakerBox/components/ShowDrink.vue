<template>
  <div
    role="alert"
    :class="['drink-maker-image', `drink-maker-image--${primaryCommand}`, imageClassName]"
  >
    <template v-if="isSendingAMessage">
      <MessageBox :text="restOfCommand.join('')" />
    </template>
    <template v-else>
      <img :src="imgSrc" alt="Selected drink" />
    </template>
  </div>
</template>

<script>
import MessageBox from './MessageBox.vue';

const drinksImages = {
  T: '/images/tea.png',
  'T-1-0': '/images/tea-with-sugar-stick.png',
  'T-2-0': '/images/tea-with-two-sugar-stick.png',
  C: '/images/coffee.png',
  'C-1-0': '/images/coffee-with-sugar-stick.png',
  'C-2-0': '/images/coffee-with-two-sugar-stick.png',
  H: '/images/chocolate.png',
  'H-1-0': '/images/chocolate-with-sugar-stick.png',
  'H-2-0': '/images/chocolate-with-two-sugar-stick.png',
  O: '/images/orange.png',
  'O-1-0': '/images/orange-with-sugar-stick.png',
  'O-2-0': '/images/orange-with-two-sugar-stick.png',
};

export default {
  name: 'ShowDrink',
  components: {
    MessageBox,
  },
  props: {
    command: {
      type: String,
      default: '',
    },
  },
  computed: {
    primaryCommand() {
      return this.command.split(':')[0];
    },
    restOfCommand() {
      return this.command.split(':').slice(1);
    },
    isSendingAMessage() {
      return this.primaryCommand === 'M';
    },
    imgSrc() {
      const cleanedRestOfCommand = this.restOfCommand.filter(Boolean);
      const hasMoreCommand = cleanedRestOfCommand.length > 0;
      const imageKey =
        this.primaryCommand +
        (hasMoreCommand ? `-${cleanedRestOfCommand.join('-')}` : '');
      return drinksImages[imageKey];
    },
    imageClassName() {
      return this.command.replace(/:/g, '-');
    },
  },
};
</script>