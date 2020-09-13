<template>
  <div class="create">
    <h1>Create Account</h1>
    <hr />
    <div class="form">
      <div class="input-group">
        <input type="text" placeholder="Name" v-model="user.name"/>
      </div>
      <div class="input-group">
        <input type="email" placeholder="Email" v-model="user.email"/>
      </div>
      <div class="input-group">
        <input type="password" placeholder="Password" v-model="user.password"/>
      </div>
      <button @click="createAccount" class="access__button">Create</button>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/auth'
export default {
    data() {
        return {
            user: {
                name: '',
                email: '',
                password: ''
            }
        }
    },
    methods: {
        createAccount() {
            firebase.auth().createUserWithEmailAndPassword(this.user.email, this.user.password)
            .then(() => {
                alert("Kayıı Başarılı")
                this.user.name = ''
                this.user.email = ''
                this.user.password = ''
            })
            .catch(err => {
                alert(err.message)
            })
        }
    }
};
</script>

<style>
</style>