<template>
  <div class="enter">
      <component :is="switchComp"></component>
      <div class="switch__button">
          <button @click="switchComp = 'appLogin'" class="login__button">Login</button>
          <button @click="switchComp = 'appCreate'" class="create__button">Create Account</button>
      </div>
  </div>
</template>

<script>
import Login from '../components/Login'
import Create from '../components/Create'
export default {
    data() {
        return {
            switchComp: 'appLogin'
        }
    },
    components: {
        appLogin: Login,
        appCreate: Create
    }
}
</script>

<style>

</style>