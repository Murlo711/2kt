<template>
  <div class="users-container">
      <h1 class="users-title">Users List</h1>
      
      <ul class="users-list">
          <li v-for="user in users" :key="user.id" class="user-item">{{ user.name }}</li> <!-- Пример списка пользователей -->
          <!-- Замените на реальные данные пользователей -->
          <li v-for="user in users" :key="user.id" class="user-item">{{ user.name }}</li> <!-- Пример списка пользователей -->
        </ul>
  
        <router-link to="/profile" class="users-link">Go to Profile</router-link>  
   </div>  
   </template>
  
  <script>  
  export default {  
  name:'UsersList',  
  data() {  
  return {  
  users:[  
  { id :1 , name :'User One' },  
  { id :2 , name :'User Two' },  
  { id :3 , name :'User Three' }  
  ]  
  };  
  }  
  };  
  </script>
  
  <style scoped>  
  .users-container {  
  max-width :600px ;   
  margin:auto ;   
  padding :20px ;   
  text-align:center ;   
  }  
  
  .users-title {  
  font-size :32px ;   
  color :#333 ;   
  }  
  
  .users-list {  
  list-style-type:none ;   
  padding-left :0 ;   
  }  
  
  .user-item {  
  padding :10px ;   
  border-bottom :1px solid #ccc ;   
  }  
  
  .users-link {  
  display:inline-block ;   
  margin-top :20px ;   
  padding :10px ;   
  background-color:#007bff ;  
  color:white ;  
  border-radius :4px ; 
  text-decoration:none ;  
  }  
  
  .users-link:hover {  
  background-color:#0056b3 ;  
  }  
  </style>  
  