<template>
    <div>
        <ul class="portfolio-list">
            <li v-for="(site, index) in sites" :key="index" class="portfolio-item">
                <p class="header-2">{{site.title}}</p>
                <div class="portfolio-item__content">
                    <div class="">
                        <img :src="`${site.imgOfProject}`" alt="@/images/project_image.png">
                    </div>
                    <div class="portfolio-item__information-block">
                        <p class="paragraph-secondary-regular">{{site.description}}</p>
                        <div class="portfolio-item__information-block__links-list">
                            <p class="paragraph-secondary-semibold">Посилання</p>
                            <ul>
                                <li v-for="(link, index) in site.links" :key="index">
                                    <a :href="`${link.url}`" class="paragraph-secondary-regular">{{link.label}}</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
// import PortfolioCase from './PortfolioCase.vue'

export default {
    name: 'PortfolioList',
    // components: { PortfolioCase },
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