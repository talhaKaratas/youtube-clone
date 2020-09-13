<template>
  <div class="login">
    <h1>Login</h1>
    <hr />
    <div class="form">
      <div class="input-group">
        <input type="email" placeholder="Email" v-model="user.email"/>
      </div>
      <div class="input-group">
        <input type="password" placeholder="Password" v-model="user.password"/>
      </div>
    </div>
      <button @click="signIn" class="access__button">Login</button>
  </div>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/auth'
export default {
    data() {
        return {
            user: {
                email: '',
                password: ''
            }
        }
    },
    methods: {
        signIn() {
            firebase.auth().signInWithEmailAndPassword(this.user.email, this.user.password)
            .then(() => {
                this.$router.push({path: '/home'})
            })
            .catch((err) => {
                alert(err.message)
            })
        }
    }
};
</script>

<style>
</style>