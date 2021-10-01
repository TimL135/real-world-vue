<template>
    <p>Edit the event</p>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: ["event"],
  data: function(){
    return{
      unsavedChanges: true
    }
  },
  beforeRouteLeave(routeTo,touteFrom,next){
    if(this.unsavedChanges){
      const answer= window.confirm("Do you really want to leave? You have unsaved changes")
      if(answer){
        next()
      }
      else{
        next(false)
      }
      }
      else{
        next()
        }
    }
  
});
</script>
