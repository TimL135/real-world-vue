<template>
  <div v-if="event"> 
    <h1>{{ event.title }}</h1>
    <div id="nav">
<router-link :to="{name: 'EventDetails'}"
>Details</router-link> |
<router-link :to="{name: 'EventRegister'}"
>Register</router-link> |
<router-link :to="{name: 'EventEdit'}"
>Edit</router-link>

    </div>
    <router-view :event='event'/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import EventService from "@/services/EventService";
import type { Event } from "@/views/EventList.vue";
export default defineComponent({
  props: ["id"],
  data() {
    return {
      event: {} as Event,
    };
  },
  created() {
    EventService.getEvent(this.id)
      .then((response) => {
        this.event = response.data; 
      })
      .catch((error) => {
        if(error.response&&error.response.status==404){
this.$router.push({
          name: "404Resource",
          params:{resource: "event"}
        })
        }
        else{
this.$router.push({name: "NetworkError"})
        }
        
      });
  },
});
</script>

<style>
</style>