<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-10 m-auto">
        <div v-if="filteredContacts.length">
          <div class="d-flex align-items-center table-contact justify-content-between" v-for="contact in filteredContacts" :key="contact.id">
            <div style="width:8%" class="table-item mr-3"><img class="table-img" src="../assets/img/image.jpg"></div>
            <div style="width:20%" class="table-item table-name">{{contact.name}}</div>
            <div style="width:30%" class="table-item table-mob">{{contact.email}}</div>
            <div style="width:20%" class="table-item table-mob">{{contact.username}}</div>
            <div style="width:20%" class="table-item table-mob">{{contact.phone}}</div>
            <div class="table-item edit-contact"><img @click="$emit('editContact', contact.id)"  data-toggle="modal" data-target="#edit-client" src="../assets/img/three-dot-hover.svg"/></div>
          </div>
        </div>
        <div v-else class="empty-contact">
          You don't have any contacts...
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FilteredContacts",
  props:['filteredContacts']
}
</script>

<style scoped>
.empty-contact{
  height:300px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.edit-contact{
  cursor:pointer;
}
</style>