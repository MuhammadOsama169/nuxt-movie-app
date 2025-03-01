<script setup lang="ts">
import type { RegisterErrorTypes } from "@/types/auth/RegisterTypes";
import { ref } from "vue";
const token = useCookie("app_token", { maxAge: 86400 });

const responseData = ref<any>(null);
const error = ref<RegisterErrorTypes | null>(null);
const loading = ref<boolean>(false);

const formData = ref({
  name: "",
  email: "",
  password: "",
});

async function handleSubmit() {
  error.value = null;
  loading.value = true;

  try {
    const res: any = await $fetch("http://localhost:8000/api/register", {
      method: "POST",
      body: formData.value,
    });
    responseData.value = res;
    token.value = res.token;
  } catch (err: any) {
    error.value = err.data || {
      message: err.message || "An error occurred",
      errors: {},
    };
  } finally {
    loading.value = false;
  }
}
</script>

<template>
  <main class="bg-black h-screen flex items-center justify-center">
    <form
      @submit.prevent="handleSubmit"
      class="w-full max-w-md bg-gray-800 p-8 rounded-lg shadow-lg"
    >
      <h2 class="text-2xl font-bold mb-6 text-center text-white">Register</h2>

      <div class="mb-4">
        <label for="name" class="block mb-2 text-sm font-medium text-gray-300">
          Username
        </label>
        <input
          v-model="formData.name"
          type="text"
          id="name"
          placeholder="Your username"
          class="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
        />
      </div>

      <div class="mb-4">
        <label for="email" class="block mb-2 text-sm font-medium text-gray-300">
          Email
        </label>
        <input
          v-model="formData.email"
          type="email"
          id="email"
          placeholder="you@example.com"
          class="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
        />
        <span v-if="error && error.errors?.email" class="text-red-500 text-xs">
          {{ error.errors.email[0] }}
        </span>
      </div>

      <div class="mb-6">
        <label
          for="password"
          class="block mb-2 text-sm font-medium text-gray-300"
        >
          Password
        </label>
        <input
          v-model="formData.password"
          type="password"
          id="password"
          placeholder="••••••••"
          class="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
        />
        <span
          v-if="error && error.errors?.password"
          class="text-red-500 text-xs"
        >
          {{ error.errors.password[0] }}
        </span>
      </div>

      <button
        type="submit"
        class="text-white w-full py-2 bg-blue-600 hover:bg-blue-700 transition-colors rounded-lg font-semibold"
        :disabled="loading"
      >
        Submit
      </button>
      <!-- {/* seperator line */} -->
      <div className="w-full h-[2px] bg-gray-500 mt-4 mb-2"></div>

      <NuxtLink to="/login" class="text-white w-full justify-center flex">
        Or Login
      </NuxtLink>
    </form>
  </main>
</template>
