<template>
    <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
    <p>{{ event.description }}</p>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: ["event"],
  
});
</script>
