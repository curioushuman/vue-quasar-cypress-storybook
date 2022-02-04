<template>
  <q-page class="row items-center justify-evenly">
    <a-button preset="search" />
    <a-button preset="favourite" type="secondary" />
    <a-button type="tertiary" label="Tertiary is an outline" />
    <a-button type="primary" label="" />
  </q-page>
</template>

<script lang="ts">
import AButton from 'src/components/atoms/button/a-button.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PageIndex',
  components: { AButton },
});
</script>
