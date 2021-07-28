<template>
  <div class="portfolio-list">
    <ul>
      <li v-for="(site, index) in sites" :key="index" class="portfolio-item">
        <portfolio-case
          :title="site.title"
          :description="site.description"
          :img-of-project="site.imgOfProject"
          :links="site.links"
        >
        </portfolio-case>
      </li>
    </ul>
  </div>
</template>

<script>
import PortfolioCase from "./PortfolioCase.vue";

export default {
  name: "PortfolioList",
  components: { PortfolioCase },
  data() {
    return {
      sites: [
        {
          title: "My website",
          description: "Website with my application and portfolio.",
          imgOfProject: require("@/images/portfolio_website.png"),
          links: [
            {
              label: "github",
              url: "https://github.com/such-an-inbetweener/myownwebsite",
            },
          ],
        },
        {
          title: "Linkbase",
          description: "Website where it is easy to save and group links.",
          imgOfProject: require("@/images/linkbase.jpg"),
          links: [
            {
              label: "github",
              url: "https://github.com/such-an-inbetweener/linkbase",
            },
            {
              label: "behance (old version)",
              url: "https://www.behance.net/gallery/114438279/Linkbase-bookmarks-storage",
            },
          ],
        },
      ],
    };
  },
};
</script>