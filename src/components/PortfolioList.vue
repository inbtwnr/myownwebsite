<template>
    <div>
        <ul>
            <li v-for="(site, index) in sites" 
                :key="index">
                <portfolio-case
                    :title="site.title"
                    :text="site.text"
                    :img-of-project="site.imgOfProject"
                    :links="site.links"                
                />
            </li>
        </ul>
    </div>
</template>

<script>
import PortfolioCase from '../components/PortfolioCase.vue'

export default {
    name: 'PortfolioList',
    components: { PortfolioCase },
    data() {
        return {
            sites:[
                {
                    title: 'LinkBase v1.0',
                    text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit, litora metus porta integer consequat quisque fringilla, mi dictum neque ultrices maximus diam. In proin iaculis venenatis diam purus dis nostra volutpat auctor ornare, convallis vestibulum posuere varius eget dictumst aliquet potenti tristique mollis condimentum, laoreet enim arcu metus odio nullam maximus aenean pharetra.',
                    imgOfProject: require('@/images/image1.jpg'),
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
                    text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit, litora metus porta integer consequat quisque fringilla, mi dictum neque ultrices maximus diam.',
                    imgOfProject: require('@/images/image1.jpg'),
                    links:[
                        {
                            label: 'behance',
                            url: 'https://behance.net/'
                        },
                    ]
                },
                {
                    title: 'LinkBase v1.0',
                    text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit, litora metus porta integer consequat quisque fringilla, mi dictum neque ultrices maximus diam. In proin iaculis venenatis diam purus dis nostra volutpat auctor ornare.',
                    imgOfProject: require('@/images/image1.jpg'),
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