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
import { primaryNav, ZENERLINK_URL } from "../../data/navigation";

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
  <header
    class="fixed inset-x-0 top-0 z-50 border-t-[3px] border-brand-600 bg-white/95 text-ink-900 backdrop-blur"
    :class="scrolled ? 'shadow-card' : ''"
  >
    <div class="border-b border-line">
      <div class="container flex h-[61px] items-center gap-8 lg:h-[69px]">
        <BrandLogo />

        <nav aria-label="Primary" class="hidden h-full flex-1 justify-center lg:flex">
          <ul class="flex h-full items-center gap-1">
            <li
              v-for="item in primaryNav"
              :key="item.label"
              class="flex h-full items-center"
              @mouseenter="item.menu && showMenu(item.label)"
              @mouseleave="item.menu && hideMenu()"
            >
              <RouterLink
                :to="item.to"
                class="flex items-center gap-1 rounded-md px-3.5 py-2 font-display text-[14.5px] font-medium transition-colors"
                :class="isActive(item.to) || openMenu === item.label ? 'bg-brand-50 text-brand-700' : 'text-ink-600 hover:text-ink-900'"
                :aria-expanded="item.menu ? openMenu === item.label : undefined"
                :aria-current="isActive(item.to) ? 'page' : undefined"
                @focus="item.menu && showMenu(item.label)"
              >
                {{ item.label }}
                <ChevronDownIcon v-if="item.menu" class="h-3.5 w-3.5 transition-transform" :class="{ 'rotate-180': openMenu === item.label }" />
              </RouterLink>
            </li>
          </ul>
        </nav>

        <div class="ml-auto flex items-center gap-1 lg:ml-0">
          <a :href="ZENERLINK_URL" target="_blank" rel="noopener" class="mr-2 hidden items-center gap-1 text-[13px] font-medium text-ink-500 hover:text-ink-900 xl:inline-flex">
            Buy units <ArrowUpRightIcon class="h-3.5 w-3.5" />
          </a>
          <button
            type="button"
            class="flex h-9 w-9 items-center justify-center rounded-md transition-colors hover:bg-ink-50"
            aria-label="Search"
            @click="searchOpen = true"
          >
            <MagnifyingGlassIcon class="h-5 w-5" />
          </button>
          <RouterLink to="/contact" class="btn-primary ml-2 hidden !min-w-0 !px-4 !py-2.5 text-[13px] sm:inline-flex">Request a quote</RouterLink>
          <button
            type="button"
            class="flex h-9 w-9 items-center justify-center rounded-md lg:hidden"
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
        enter-from-class="opacity-0 -translate-y-1"
        leave-active-class="transition duration-150 ease-in"
        leave-to-class="opacity-0 -translate-y-1"
      >
        <div
          v-if="item.menu && openMenu === item.label"
          class="absolute inset-x-0 top-full hidden border-b border-line bg-white shadow-card-hover lg:block"
          @mouseenter="showMenu(item.label)"
          @mouseleave="hideMenu"
        >
          <div class="container grid grid-cols-12 gap-10 py-9">
            <div class="col-span-8 grid grid-cols-3 gap-8">
              <div v-for="group in item.menu.groups" :key="group.title">
                <p class="mb-4 font-display text-xs font-semibold uppercase tracking-[0.16em] text-ink-400">{{ group.title }}</p>
                <ul class="space-y-3">
                  <li v-for="link in group.links" :key="link.to">
                    <a v-if="link.external" :href="link.to" target="_blank" rel="noopener" class="inline-flex items-center gap-1 text-[15px] text-ink-700 hover:text-brand-700">
                      {{ link.label }} <ArrowUpRightIcon class="h-3.5 w-3.5" />
                    </a>
                    <RouterLink v-else :to="link.to" class="text-[15px] text-ink-700 hover:text-brand-700">{{ link.label }}</RouterLink>
                  </li>
                </ul>
              </div>
            </div>
            <RouterLink :to="item.menu.intro.to" class="group col-span-4 flex gap-4 rounded-lg border border-line p-4 hover:border-brand-300">
              <img :src="item.menu.intro.image" alt="" class="h-24 w-28 shrink-0 rounded-md object-cover" />
              <span>
                <span class="block font-display font-semibold">{{ item.menu.intro.title }}</span>
                <span class="mt-1 block text-sm text-ink-500">{{ item.menu.intro.text }}</span>
                <span class="link-arrow mt-2">View all <ArrowRightIcon /></span>
              </span>
            </RouterLink>
          </div>
        </div>
      </Transition>
    </template>

    <!-- Mobile drawer -->
    <div v-if="mobileOpen" class="fixed inset-x-0 bottom-0 top-16 z-40 overflow-y-auto bg-white lg:hidden">
      <nav aria-label="Mobile" class="container py-4">
        <ul class="divide-y divide-line border-b border-line">
          <li v-for="item in primaryNav" :key="item.label">
            <div class="flex items-center justify-between">
              <RouterLink :to="item.to" class="flex-1 py-3.5 font-display text-[16px] font-medium">{{ item.label }}</RouterLink>
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
        <a :href="ZENERLINK_URL" target="_blank" rel="noopener" class="mt-4 flex items-center gap-1 py-2 font-medium text-brand-700">
          Buy units online <ArrowUpRightIcon class="h-4 w-4" />
        </a>
        <RouterLink to="/contact" class="btn-primary mt-6 w-full">Request a quote</RouterLink>
      </nav>
    </div>
  </header>

  <SiteSearch v-if="searchOpen" @close="searchOpen = false" />
</template>
