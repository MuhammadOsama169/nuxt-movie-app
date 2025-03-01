<template>
  <div>
    <h1>Simple Form</h1>
    <form @submit.prevent="handleSubmit" class="">
      <div>
        <label for="name">Name:</label>
        <input
          class="text-black"
          id="name"
          v-model="formData.name"
          type="text"
          required
        />
      </div>
      <div>
        <label for="email">Email:</label>
        <input
          id="email"
          class="text-black"
          v-model="formData.email"
          type="email"
          required
        />
      </div>
      <button type="submit" :disabled="loading">
        {{ loading ? "Submitting..." : "Submit" }}
      </button>
    </form>

    <div v-if="error" style="color: red; margin-top: 1em">
      <p>Error: {{ error }}</p>
    </div>

    <div v-if="responseData" style="margin-top: 1em">
      <h2>Response</h2>
      <pre>{{ responseData }}</pre>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

// Define our reactive form data
const formData = ref({
  name: "",
  email: "",
});

// Reactive references for handling state
const responseData = ref(null);
const error = ref(null);
const loading = ref(false);

// Handle the form submission
async function handleSubmit() {
  error.value = null;
  loading.value = true;

  try {
    const res = await $fetch("http://localhost:8000/users", {
      method: "POST",
      body: formData.value,
    });
    responseData.value = res;
  } catch (err) {
    error.value = err.message || "An error occurred";
  } finally {
    loading.value = false;
  }

  const user = useCookie("user");
  definePageMeta({
    middleware: ["auth"],
  });
}
</script>
