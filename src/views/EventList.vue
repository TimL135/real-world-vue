<template>
  <h1>Events For Good</h1>
  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import EventCard from "@/components/EventCard.vue";
import EventService from "@/services/EventService";
import { AxiosResponse } from "axios";
export interface Event {
  id: number;
  category: string;
  title: string;
  description: string;
  location: string;
  date: string;
  time: string;
  organizer: string;
}
export default defineComponent({
  name: "EventList",
  components: {
    EventCard,
  },
  data() {
    return {
      events: [] as Event[],
    };
  },
  created() {
    EventService.getEvents()
      .then((response: AxiosResponse<any>) => {
        this.events = response.data;
      })
      .catch((error: string) => {
        console.log(error);
      });
  },
});
</script>
<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
