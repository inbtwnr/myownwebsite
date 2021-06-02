<template>
    <div class="portfolio-list">
        <ul>
            <li v-for="(site, index) in sites" :key="index" class="portfolio-item">
                <portfolio-case
                    :title="site.title"
                    :description="site.description"
                    :img-of-project="site.imgOfProject"
                    :links="site.links">
                </portfolio-case>
            </li>
        </ul>
    </div>
</template>

<script>
import PortfolioCase from './PortfolioCase.vue'

export default {
    name: 'PortfolioList',
    components: { PortfolioCase },
    data() {
        return {
            sites:[
                {
                    title: 'Мій вебсайт',
                    description: 'Сайт-візитка з резюме та портфоліо.',
                    imgOfProject: require('@/images/portfolio_website.png'),
                    links:[
                        {
                            label: 'github',
                            url: 'https://github.com/such-an-inbetweener/myownwebsite'
                        }
                    ]
                }
            ]
        }
    }
}
</script>