<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, watch } from "vue";
import { RouterLink, useRoute } from "vue-router";
import {
  Bars3Icon,
  XMarkIcon,
  MagnifyingGlassIcon,
  ChevronDownIcon,
  ArrowRightIcon,
  ArrowUpRightIcon,
} from "@heroicons/vue/24/outline";
import BrandLogo from "./BrandLogo.vue";
import SiteSearch from "./SiteSearch.vue";
import { primaryNav, topBarLeft, topBarNav, ZENERLINK_URL } from "../../data/navigation";

const route = useRoute();
const openMenu = ref<string | null>(null);
const mobileOpen = ref(false);
const mobileExpanded = ref<string | null>(null);
const searchOpen = ref(false);
const scrolled = ref(false);

let closeTimer: number | undefined;
const showMenu = (label: string) => {
  window.clearTimeout(closeTimer);
  openMenu.value = label;
};
const hideMenu = () => {
  closeTimer = window.setTimeout(() => (openMenu.value = null), 120);
};

const isActive = (to: string) => (to === "/" ? route.path === "/" : route.path.startsWith(to));

const onScroll = () => (scrolled.value = window.scrollY > 8);

watch(
  () => route.fullPath,
  () => {
    openMenu.value = null;
    mobileOpen.value = false;
    searchOpen.value = false;
  },
);

watch(mobileOpen, (open) => document.body.classList.toggle("overflow-hidden", open));

onMounted(() => {
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
});
onBeforeUnmount(() => {
  window.removeEventListener("scroll", onScroll);
  document.body.classList.remove("overflow-hidden");
});
</script>

<template>
  <header class="fixed inset-x-0 top-0 z-50 bg-white text-ink-900" :class="scrolled && 'shadow-card'">
    <!-- Top bar, as on large corporate sites: a few quick links above the menu -->
    <div class="hidden bg-ink-900 text-white lg:block">
      <div class="container flex h-9 items-center justify-end gap-6 text-[12.5px]">
        <a :href="topBarLeft.to" target="_blank" rel="noopener" class="mr-auto inline-flex items-center gap-1 text-white/70 transition-colors hover:text-white">
          {{ topBarLeft.label }} <ArrowUpRightIcon class="h-3 w-3" />
        </a>
        <template v-for="link in topBarNav" :key="link.label">
          <a v-if="link.external" :href="link.to" target="_blank" rel="noopener" class="inline-flex items-center gap-1 text-white/80 transition-colors hover:text-white">
            {{ link.label }} <ArrowUpRightIcon class="h-3 w-3" />
          </a>
          <RouterLink v-else :to="link.to" class="text-white/80 transition-colors hover:text-white">{{ link.label }}</RouterLink>
        </template>
      </div>
    </div>

    <div class="border-b border-line/70">
      <div class="container flex h-16 items-center gap-10 lg:h-[72px]">
        <BrandLogo variant="full" />

        <nav aria-label="Primary" class="hidden h-full lg:block">
          <ul class="flex h-full items-center">
            <li
              v-for="item in primaryNav"
              :key="item.label"
              class="relative flex h-full items-center"
              @mouseenter="item.menu && showMenu(item.label)"
              @mouseleave="item.menu && hideMenu()"
            >
              <RouterLink
                :to="item.to"
                class="flex h-full items-center gap-1 px-3.5 text-[14px] font-medium text-ink-700 transition-colors hover:text-ink-900"
                :class="(isActive(item.to) || openMenu === item.label) && 'text-ink-900'"
                :aria-expanded="item.menu ? openMenu === item.label : undefined"
                :aria-current="isActive(item.to) ? 'page' : undefined"
                @focus="item.menu && showMenu(item.label)"
              >
                {{ item.label }}
                <ChevronDownIcon
                  v-if="item.menu"
                  class="h-3.5 w-3.5 transition-transform"
                  :class="{ 'rotate-180': openMenu === item.label }"
                />
              </RouterLink>
              <!-- Current page underline -->
              <span
                class="pointer-events-none absolute inset-x-3.5 bottom-0 h-[3px] rounded-t bg-brand-500 transition-opacity"
                :class="isActive(item.to) || openMenu === item.label ? 'opacity-100' : 'opacity-0'"
              />
            </li>
          </ul>
        </nav>

        <div class="ml-auto flex items-center gap-1">
          <button
            type="button"
            class="flex h-9 w-9 items-center justify-center rounded transition-colors hover:bg-ink-50"
            aria-label="Search"
            @click="searchOpen = true"
          >
            <MagnifyingGlassIcon class="h-5 w-5" />
          </button>
          <RouterLink to="/contact" class="btn-primary ml-2 hidden !min-w-0 !px-4 !py-2 text-[13px] sm:inline-flex">
            Request a quote
          </RouterLink>
          <button
            type="button"
            class="flex h-9 w-9 items-center justify-center rounded lg:hidden"
            :aria-expanded="mobileOpen"
            aria-label="Toggle navigation"
            @click="mobileOpen = !mobileOpen"
          >
            <XMarkIcon v-if="mobileOpen" class="h-6 w-6" />
            <Bars3Icon v-else class="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>

    <!-- Desktop mega menu -->
    <template v-for="item in primaryNav" :key="`menu-${item.label}`">
      <Transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="opacity-0 -translate-y-2"
        leave-active-class="transition duration-150 ease-in"
        leave-to-class="opacity-0 -translate-y-2"
      >
        <div
          v-if="item.menu && openMenu === item.label"
          class="absolute inset-x-0 top-full hidden border-t border-line/70 bg-white text-ink-900 shadow-card-hover lg:block"
          @mouseenter="showMenu(item.label)"
          @mouseleave="hideMenu"
        >
          <div class="container grid grid-cols-12 gap-10 py-10">
            <RouterLink :to="item.menu.intro.to" class="group col-span-4 block">
              <div class="aspect-[16/9] overflow-hidden">
                <img
                  :src="item.menu.intro.image"
                  alt=""
                  class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <p class="mt-4 font-semibold">{{ item.menu.intro.title }}</p>
              <p class="mt-1 text-sm text-ink-500">{{ item.menu.intro.text }}</p>
              <span class="link-arrow mt-3">View all <ArrowRightIcon /></span>
            </RouterLink>
            <div class="col-span-8 grid grid-cols-3 gap-8">
            <div v-for="group in item.menu.groups" :key="group.title">
              <p class="mb-4 border-b border-line pb-3 text-xs font-semibold uppercase tracking-[0.14em] text-ink-400">
                {{ group.title }}
              </p>
              <ul class="space-y-3">
                <li v-for="link in group.links" :key="link.to">
                  <a
                    v-if="link.external"
                    :href="link.to"
                    target="_blank"
                    rel="noopener"
                    class="inline-flex items-center gap-1 text-sm text-ink-700 hover:text-brand-500"
                  >
                    {{ link.label }} <ArrowUpRightIcon class="h-3.5 w-3.5" />
                  </a>
                  <RouterLink v-else :to="link.to" class="text-sm text-ink-700 hover:text-brand-500">
                    {{ link.label }}
                  </RouterLink>
                </li>
              </ul>
            </div>
            </div>
          </div>
        </div>
      </Transition>
    </template>

    <!-- Mobile drawer -->
    <div
      v-if="mobileOpen"
      class="fixed inset-x-0 bottom-0 top-16 z-40 overflow-y-auto bg-white text-ink-900 lg:hidden"
    >
      <nav aria-label="Mobile" class="container py-4">
        <ul class="divide-y divide-line border-b border-line">
          <li v-for="item in primaryNav" :key="item.label">
            <div class="flex items-center justify-between">
              <RouterLink :to="item.to" class="flex-1 py-3.5 text-[15px] font-medium">{{ item.label }}</RouterLink>
              <button
                v-if="item.menu"
                type="button"
                class="p-3"
                :aria-label="`Expand ${item.label}`"
                :aria-expanded="mobileExpanded === item.label"
                @click="mobileExpanded = mobileExpanded === item.label ? null : item.label"
              >
                <ChevronDownIcon class="h-5 w-5 transition-transform" :class="{ 'rotate-180': mobileExpanded === item.label }" />
              </button>
            </div>
            <div v-if="item.menu && mobileExpanded === item.label" class="space-y-5 pb-5 pl-4">
              <div v-for="group in item.menu.groups" :key="group.title">
                <p class="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-ink-400">{{ group.title }}</p>
                <template v-for="link in group.links" :key="link.to">
                  <a v-if="link.external" :href="link.to" target="_blank" rel="noopener" class="flex items-center gap-1 py-1.5 text-ink-700">
                    {{ link.label }} <ArrowUpRightIcon class="h-3.5 w-3.5" />
                  </a>
                  <RouterLink v-else :to="link.to" class="block py-1.5 text-ink-700">{{ link.label }}</RouterLink>
                </template>
              </div>
            </div>
          </li>
        </ul>
        <a :href="ZENERLINK_URL" target="_blank" rel="noopener" class="mt-4 flex items-center gap-1 py-2 font-medium text-brand-600">
          Buy units on Zenerlink <ArrowUpRightIcon class="h-4 w-4" />
        </a>
        <ul class="mt-2 space-y-1">
          <li v-for="link in [...topBarNav, topBarLeft]" :key="link.label">
            <a v-if="link.external" :href="link.to" target="_blank" rel="noopener" class="flex items-center gap-1 py-2 text-ink-500">
              {{ link.label }} <ArrowUpRightIcon class="h-3.5 w-3.5" />
            </a>
            <RouterLink v-else :to="link.to" class="block py-2 text-ink-500">{{ link.label }}</RouterLink>
          </li>
        </ul>
        <RouterLink to="/contact" class="btn-primary mt-6 w-full">Request a quote</RouterLink>
      </nav>
    </div>
  </header>

  <SiteSearch v-if="searchOpen" @close="searchOpen = false" />
</template>
