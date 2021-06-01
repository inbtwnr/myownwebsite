<template>
    <div>
        <p class="header-2">{{title}}</p>
        <div class="portfolio-item__content">
            <img :src="`${imgOfProject}`" class="portfolio-item__img" alt="@/images/project_image.png">
            <div class="portfolio-item__information-block">
                <p class="paragraph-secondary-regular">{{description}}</p>
                <div class="portfolio-item__information-block__links-list">
                    <p class="paragraph-secondary-semibold">Посилання</p>
                    <ul>
                        <li v-for="(link, index) in links" :key="index">
                            <a :href="`${link.url}`" class="paragraph-secondary-regular">{{link.label}}</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PortfolioCase',
    props: ['title', 'description', 'imgOfProject', 'links'],
}
</script>