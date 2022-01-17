<template>
<div>
 <div class="container">
   <div class="row">
     <div class="col-lg-10 m-auto">
       <input v-model="search" class="search" placeholder="Search by name">
       <div class="d-flex align-items-center table-header table-mob table-contact justify-content-between">
         <div style="width:8%" class="table-item mr-2"></div>
         <div style="width:20%" class="table-item">Name</div>
         <div style="width:30%" class="table-item">Email</div>
         <div style="width:20%" class="table-item">Username</div>
         <div style="width:20%" class="table-item">Phone number</div>
         <div class="table-item"></div>
       </div>
     </div>
   </div>
 </div>
  <ContactsList
      :filteredContacts="filteredContacts"
      @editContact="editContact"
  />
  <EditContact
      :selectedContact="edit_contact"
      :getContact="getContact"
  />
</div>
</template>

<script>
import EditContact from "@/components/EditContact";
import ContactsList from "@/components/ContactsList";
export default {
  name: "Contacts",

  components:{
    ContactsList,
    EditContact
  },
  data(){
    return {
      search:'',
      edit_contact:'',
      contacts:[]
    }
  },
  computed:{

    //Search contacts
    filteredContacts(){
      return this.contacts.filter(item=>item.name.toLowerCase().includes(this.search.toLowerCase()))
    }
  },
  methods:{

    // Find the clicked contact by id an props it to modal window

    editContact(id){
      this.filteredContacts.map((item)=>{
        if(item.id === id){
          this.edit_contact = item
        }
      })
    },
    // get data from localStorage and sort by alphabit
    getContact(){
      this.contacts = JSON.parse(localStorage.getItem('contacts'))
          .sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1);
      console.log(this.contacts)
    }
  },
  mounted(){
    // calling
    this.getContact()
  }
}
</script>

<style scoped>
.search{
  height:45px;
  border:1px solid #dedede;
  border-radius:5px;
  width:100%;
  padding-left:20px;
  font-size:14px;
  color:#787878;
  margin:40px 0 ;
  display: block;
}
.search:focus{
  outline:none;
}
</style>