<template>
  <div class="contacts-block">
    <p class="header-2">Contacts</p>
    <!-- <p class="paragraph-secondary-regular">{{ contactText }}</p> -->
    <div class="business-card-block">
      <div class="business-card-block__coordinates">
        <p class="paragraph-primary-regular">ALEXANDER PRYSYAZHNII</p>
        <p class="paragraph-primary-regular">UZHHOROD, UKRAINE</p>
      </div>
      <ul class="business-card-block__links-list">
        <li
          v-for="(contact, index) in contacts"
          :key="index"
          class="business-card-block__link-item"
        >
          <a
            :href="`${contact.contactLink}`"
            class="header-2"
            target="_blank"
            >{{ contact.contactName }}</a
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contacts",
  data() {
    return {
      contactText:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit, litora metus porta integer consequat quisque fringilla, mi dictum neque ultrices maximus diam. In proin iaculis venenatis diam purus dis nostra volutpat auctor ornare.",
      contacts: [
        {
          contactName: "portfolio in Behance",
          contactLink: "https://www.behance.net/alexanderprysiazhnii",
        },
        {
          contactName: "telegram",
          contactLink: "https://t.me/suchaninbetweener",
        },
        {
          contactName: "github",
          contactLink: "https://github.com/such-an-inbetweener",
        },
        {
          contactName: "alexanderjuror@gmail.com",
          contactLink: "mailto:alexanderjuror@gmail.com",
        },
      ],
    };
  },
};
</script>

<style>
</style>