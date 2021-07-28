<template>
  <div class="portfolio-block">
    <p class="header-1">Portfolio</p>
    <portfolio-list></portfolio-list>
  </div>
</template>

<script>
import PortfolioList from "@/components/portfolio_components/PortfolioList.vue";

export default {
  components: {
    PortfolioList,
  },
};
</script>