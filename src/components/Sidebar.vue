<template>
  <div class="sidebar">
      <div class="sidebar__youtubeNavs" v-for="(youtubeSidebarNav,index) in youtubeSidebarNavs" :key="index">
          <i :class="youtubeSidebarNav.icon"></i>
          <span>{{ youtubeSidebarNav.name }}</span>
      </div>
      <hr>
      <div class="sidebar__subsNavs" v-for="(subsSidebarNav, index2) in subsSidebarNavs" :key="index2">
          <i :class="subsSidebarNav.icon"></i>
          <span>{{ subsSidebarNav.name }}</span>
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            youtubeSidebarNavs: [
                {icon: 'fas fa-home', name: 'Ana Sayfa'},
                {icon: 'fas fa-fire', name: 'Trendler'},
                {icon: 'fas fa-book', name: 'Abonelikler'},
            ],
            subsSidebarNavs: [
                {icon: 'fas fa-images', name: 'Kitaplık'},
                {icon: 'fas fa-history', name: 'Geçmiş'},
                {icon: 'fab fa-youtube-square', name: 'Videolarınız'},
                {icon: 'fas fa-clock', name: 'Daha Sonra İzle'},
                {icon: 'fas fa-thumbs-up', name: 'Beğendiğim Videolar'}
            ]
        }
    }
}
</script>

<style>

</style>