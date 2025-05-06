<template>
  <div class="profile-container">
      <h1 class="profile-title">User Profile</h1>
      <p class="profile-info">Name: John Doe</p>
      <p class="profile-info">Email: john.doe@example.com</p>
      
      <router-link to="/users" class="profile-link">View Users List</router-link>
  </div>
  </template>
  
  <script>
  export default {
      name: 'ProfilePage',
  };
  </script>
  
  <style scoped>
  .profile-container {
     max-width:600px; 
     margin:auto; 
     padding :20px; 
     text-align:center; 
     border :1px solid #ccc; 
     border-radius :8px; 
     background-color:#f9f9f9; 
  }
  
  .profile-title {
     font-size :32px; 
     color :#333; 
  }
  
  .profile-info {
     font-size :18px; 
     color :#666; 
  }
  
  .profile-link {
     display:inline-block; 
     margin-top :20px; 
     padding :10px ; 
     background-color:#007bff ;
     color:white ;
     border-radius :4px ;
     text-decoration:none ;
  }
  
  .profile-link:hover {
     background-color:#0056b3 ;
  }
  </style>