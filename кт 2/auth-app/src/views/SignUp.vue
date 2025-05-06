<template>
    <div class="signup-container">
      <h1 class="signup-title">Sign Up</h1>
      <form @submit.prevent="handleSubmit" class="signup-form">
        <div class="form-group">
          <label for="username">Username:</label>
          <input type="text" id="username" v-model="username" required />
        </div>
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="email" required />
        </div>
        <div class="form-group">
          <label for="password">Password:</label>
          <input type="password" id="password" v-model="password" required />
        </div>
        <button type="submit" class="signup-button">Register</button>
      </form>
      <router-link to="/" class="back-link">Back to Home</router-link>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SignUp',
    data() {
      return {
        username: '',
        email: '',
        password: '',
      };
    },
    methods: {
      handleSubmit() {
        console.log('User registered:', this.username, this.email);
      },
    },
  };
  </script>
  
  <style scoped>
  .signup-container {
    max-width: 400px;
    margin: auto;
    padding: 20px;
    text-align: center;
  }
  
  .signup-title {
    font-size: 32px;
  }
  
  .signup-form {
    display: flex;
    flex-direction: column;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  label {
    margin-bottom: 5px;
  }
  
  input {
    padding: 10px;
    border-radius: 4px;
    border: 1px solid #ccc;
  }
  
  .signup-button {
    padding: 10px;
    background-color: #007bff;
    color: white;
    border-radius: 4px;
  }
  
  .signup-button:hover {
     background-color:#0056b3 ; 
  }
  
  .back-link {
     display:inline-block ;   
     margin-top :20px ;   
     text-decoration:none ;   
     color:#007bff ;   
  }  
  
  .back-link:hover {  
     text-decoration :underline ;  
  }
  </style>