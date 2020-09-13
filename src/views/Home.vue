<template>
  <div class="home">
      <app-header></app-header>
      <div class="content">
          <app-sidebar></app-sidebar>
          <app-recommended-video></app-recommended-video>
      </div>
  </div>
</template>

<script>
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import RecommendedVideo from '../components/RecommendedVideo'
export default {
    components: {
        appHeader: Header,
        appSidebar: Sidebar,
        appRecommendedVideo: RecommendedVideo 
    }
}
</script>

<style>

</style>