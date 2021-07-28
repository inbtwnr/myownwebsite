<template>
  <div class="about-me-block">
    <p class="header-2">{{ aboutMeHeader }}</p>
    <p class="paragraph-primary-regular">{{ aboutMeText }}</p>
  </div>
</template>
<script>
export default {
  name: "AboutMe",
  data() {
    return {
      aboutMeHeader: "About me",
      aboutMeText:
        "Hi, my name is Sasha and I am a front-end developer. I love to design and develop interfaces and websites. I like working in a team: you can always learn a lot and it's fun. From the design side, I work with site layout and design systems.",
    };
  },
};
</script>
