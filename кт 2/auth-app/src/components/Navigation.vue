<template>
    <nav class="navbar">
        <router-link to="/" class="nav-link">Home</router-link>
        <router-link to="/about" class="nav-link">About</router-link>
        <router-link to="/login" class="nav-link">Login</router-link>
        <router-link to="/profile" class="nav-link">Profile</router-link>
        <router-link to="/users" class="nav-link">Users</router-link>
    </nav>
    </template>
    
    <script>
    export default {
        name: 'AppNavigation',
    };
    </script>
    
    <style scoped>
    .navbar {
        display: flex;
        justify-content: space-around;
        background-color: #333;
        padding: 10px;
    }
    
    .nav-link {
        color: white;
        text-decoration: none;
    }
    
    .nav-link:hover {
        text-decoration: underline;
    }
    </style>