<template>
  <UApp :locale="locales[locale]">
    <UHeader title="ZettaScale">
      <template #title>
        <div class="flex gap-4 flex-row">
          <ZettaLogo class="logo invert" />
          <div class="brand-name text-3xl">ZettaScale</div>
        </div>
      </template>

      <UNavigationMenu :items />

      <template #body>
        <UNavigationMenu :items orientation="vertical" class="-mx-2.5" />
      </template>

      <template #right>
        <SettingsLanguageToggle />
      </template>
    </UHeader>

    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>
<script setup lang="ts">
import * as locales from "@nuxt/ui/locale";
import type { NavigationMenuItem } from "@nuxt/ui";
import ZettaLogo from "@/components/ZettaLogo.vue";

const { locale } = useI18n();

const route = useRoute();
const { t } = useI18n();

const items = computed<NavigationMenuItem[]>(() => [
  {
    label: t("navigation.home"),
    to: "/",
    icon: "i-tabler-home",
    active: route.path === "/",
  },
  {
    label: t("navigation.products"),
    to: "/",
    icon: "i-tabler-trademark",
    active: route.path === "/products",
  },
  {
    label: t("navigation.about"),
    to: "/about",
    icon: "i-tabler-info-square-rounded",
    active: route.path === "/about",
  },
  {
    label: "Zetta",
    to: "/",
    icon: ZettaLogo,
    class: "logo-opacity-30",
    active: route.path === "/zetta",
  },
  //   Home
  // About us
  // Zetta
  // News
  // Resources
  // Industries
  // Partners & Clients
  // Contact Us
]);
</script>
<style lang="scss">
.logo {
  width: 30px;

  &-opacity-30 {
    .zetta-logo {
      filter: invert(100%) opacity(0.3);
      width: 18px;
      height: 18px;
    }
  }
}
</style>
