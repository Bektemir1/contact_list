<template>
  <div class="modal fade right"  id="edit-client" tabindex="-1" role="dialog" aria-labelledby="edit-client" aria-hidden="true">
    <div class="modal-dialog modal-full-height myModal-dialog mr-0 mt-0 mb-0 mr-0 h-100" style="max-width: 580px" role="document" >
      <div class="modal-content myModal-content h-100">
        <div class="modal-header align-items-center">
          <h3 class="modal-title">Edit contact</h3>
          <button type="button" data-dismiss="modal" aria-label="Close" class="close">
              <span aria-hidden="true">
                <img src="../assets/img/xBlack.svg" alt="">
              </span>
          </button>
        </div>
        <div class=" myModal-body">
          <form  class="modal-form ">
            <div class="mb-3">
              <img class="edit-img" src="../assets/img/image.jpg">
            </div>
            <div>
              <label>Name</label>
              <input v-model="currentContact.name" class="main-input">
            </div>
            <div>
              <label>Email</label>
              <input v-model="currentContact.email" class="main-input">
            </div>
            <div>
              <label>Username</label>
              <input v-model="currentContact.username" class="main-input">
            </div>

            <div>
              <label>Phone</label>
              <input v-model="currentContact.phone" class="main-input">
            </div>
            <div class="mt-3">
              <button class="btn btn-outline-info" @click.prevent="editContact">Save contact</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery';
export default {
  name: "EditContact",
  props:['selectedContact', 'getContact'],
  data(){
    return {
      currentContact:'',
      updateContact:[]
    }
  },
 methods:{
   editContact(){
     this.updateContact = JSON.parse(localStorage.getItem('contacts'))
     this.updateContact.forEach((item,index)=>{
       if(item.id === this.currentContact.id){
         this.updateContact[index] = this.currentContact
       }
     })
     localStorage.setItem('contacts', JSON.stringify(this.updateContact))
     this.getContact()
     $('#edit-client').modal("hide")
   },
 },
  watch:{
    selectedContact(val){
      this.currentContact = Object.assign({}, val)
    }
  },
}
</script>

<style scoped>
.edit-img{
  width:100px;
  height:100px;
  border-radius:50%;
  object-fit: cover;
}
label{
  font-size:14px;
}

</style>