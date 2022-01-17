<template>
  <div class="header-app">
    <Header/>
  </div>
  <Contacts />

</template>

<script>
import Contacts from "@/components/Contacts";
import Header from "@/components/Header";
export default {
  name: 'App',
  components: {
    Contacts,
    Header
  },

  methods:{

    // get data from api and saving it to localStorage
    async getContactList(){
     await this.$axios.get('https://demo.sibers.com/users')
      .then(res=>{
        localStorage.setItem('contacts', JSON.stringify(res.data))
      })
      .catch(err=>{
        console.log(err)
      })
    }
  },
  mounted(){

    this.getContactList()
  }
}
</script>

<style>

.header-app{
  border-bottom:1px solid #dedede;
}

</style>
