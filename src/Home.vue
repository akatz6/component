<template>
  <!-- Always have a div to wrap all html -->
  <div >
   <p>Server Status {{status}}</p>
   <br>
   <button class="btn btn-success" type="button" name="button" @click="changeStatus">
     change status
   </button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      status: 'Critical'
    }
  },
  methods:{
      changeStatus(){
          this.status = "Normal";
      }
  }
}
</script>
