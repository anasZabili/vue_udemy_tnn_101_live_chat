<template>
  <nav v-if="user">
    <div>
      <p>Hey there {{ user.displayName }}</p>
      <p class="email">Currently logged in as {{ user.email }}</p>
    </div>
    <button @click="handleClick">Logout</button>
  </nav>
</template>

<script>
import useLogout from "../composable/useLogout";
import getUser from "../composable/getUser";

export default {
  setup() {
    const { logout, error } = useLogout();
    const { user } = getUser();

    const handleClick = async () => {
      await logout();
      if (!error.value) {
        console.log("user logged out");
      }
    };
    return { handleClick, user };
  },
};
</script>

<style>
</style>