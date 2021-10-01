<template>
    <p>Register for the event</p>
    <button @click="register">Register Me</button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: ["event"],
  methods:{
    register(){
      this.$router.push({
        name: "EventDetails",
        params:{id: this.event.id}
      })
    }
  }
});
</script>
