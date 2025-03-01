export default defineNuxtRouteMiddleware((to, from) => {
  const authenticated = useCookie("app_token");

  if (!authenticated.value) {
    return navigateTo("/register");
  }
});
