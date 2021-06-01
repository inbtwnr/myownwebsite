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
                    title: 'LinkBase v1.0',
                    description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit, litora metus porta integer consequat quisque fringilla, mi dictum neque ultrices maximus diam. In proin iaculis venenatis diam purus.',
                    imgOfProject: require('@/images/smile.png'),
                    links:[
                        {
                            label: 'behance',
                            url: 'https://behance.net/'
                        },
                        {
                            label: 'github',
                            url: 'https://github.com/'
                        }
                    ]
                },
                {
                    title: 'LinkBase v1.0',
                    description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit, litora metus porta integer consequat quisque fringilla, mi dictum neque ultrices maximus diam.',
                    imgOfProject: require('@/images/project_image.png'),
                    links:[
                        {
                            label: 'behance',
                            url: 'https://behance.net/'
                        },
                    ]
                },
                {
                    title: 'LinkBase v1.0',
                    description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit, litora metus porta integer consequat quisque fringilla, mi dictum neque ultrices maximus diam. In proin iaculis venenatis diam purus dis nostra volutpat auctor ornare.',
                    imgOfProject: require('@/images/project_image.png'),
                    links:[
                        {
                            label: 'behance',
                            url: 'https://behance.net/'
                        },
                        {
                            label: 'github',
                            url: 'https://github.com/'
                        },
                        {
                            label: 'вебсайт',
                            url: 'https://github.com/'
                        }
                    ]
                },
            ]
        }
    }
}
</script>