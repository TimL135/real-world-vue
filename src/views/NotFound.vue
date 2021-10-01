<template>
  <h1>ERROR 404</h1>
  <h3>The {{ resource }} you're looking for is not found.</h3>
  <router-link :to="{name: 'EventList'}"> Back to the home page </router-link>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props:{
      resource:{
          type: String,
          required: true,
          default:"page"
      }
  },
});
</script>