<script setup lang="ts">
import { sidebarItems } from "@/public/data/sidebarItem";
import { Icon } from "@iconify/vue";
const router = useRouter();

defineProps<{
  isSidebarOpen: boolean;
}>();

const topItems = sidebarItems.slice(0, 2);
const bottomItems = sidebarItems.slice(2);

function handleNavigate(href: string) {
  router.push(`/${href}`);
}
</script>

<template>
  <main
    v-auto-animate
    :class="
      isSidebarOpen
        ? 'flex w-[220px] fixed inset-0 bg-black z-20 xl:hidden'
        : 'xl:absolute xl:flex hidden w-[220px] h-[100vh] shadow-xl bg-[#0f0f0f]'
    "
  >
    <aside
      class="p-4 mobile:hidden tablet:hidden xl:visible h-full flex flex-col justify-between"
    >
      <!-- top items -->
      <section>
        <div
          v-for="item in topItems"
          class="flex flex-col justify-start text-white"
        >
          <button
            :key="item.id"
            :to="item.id"
            @click="handleNavigate(item.href)"
            :disabled="item.comingSoon"
            class="flex gap-2 items-center p-2 my-2"
          >
            <Icon :icon="item.icon" />
            <span>{{ item.title }}</span>
            <div v-if="item.comingSoon">
              <span
                className="rounded-full text-black text-[6px] bg-yellow-300 p-1"
              >
                Coming Soon
              </span>
            </div>
          </button>
        </div>
      </section>

      <!-- bottom items -->
      <section>
        <div v-for="item in bottomItems" class="flex flex-col justify-end">
          <button
            :key="item.id"
            :to="item.id"
            @click="handleNavigate(item.href)"
            :disabled="item.comingSoon"
            class="flex gap-2 items-center p-2 my-2"
          >
            <Icon :icon="item.icon" />
            <span>{{ item.title }}</span>
            <div v-if="item.comingSoon">
              <span
                className="rounded-full text-black text-[6px] bg-yellow-300 p-1"
              >
                Coming Soon
              </span>
            </div>
          </button>
        </div>
      </section>
    </aside>
  </main>
</template>
