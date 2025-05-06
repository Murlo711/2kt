<template>
    <div class="about-container">
        <h1 class="about-title">About Us</h1>
        <p class="about-description">We are a team of passionate developers dedicated to creating amazing applications.</p>
        <router-link to="/" class="about-link">Back to Home</router-link>
    </div>
    </template>
    
    <script>
    export default {
        name: 'AboutPage',
    };
    </script>
    
    <style scoped>
    .about-container {
        max-width: 600px;
        margin: auto;
        padding: 20px;
        text-align: center;
    }
    
    .about-title {
        font-size: 32px;
        color: #333;
    }
    
    .about-description {
        font-size: 18px;
        color: #666;
    }
    
    .about-link {
        display: inline-block;
        margin-top: 20px;
        padding: 10px 20px;
        background-color: #007bff;
        color: white;
        border-radius: 4px;
        text-decoration: none;
    }
    
    .about-link:hover {
        background-color: #0056b3;
    }
    </style>