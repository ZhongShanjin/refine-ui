<template>
  <aside class="sidebar">
    <div>
      <ul>
        <li v-for="route in routesList" :key="route.path">
          <router-link :to="route.path">{{ route.name }}</router-link>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script>
// 假设你的路由配置是默认导出的，可以这样导入它
import routes from "../router/router.js";

export default {
  computed: {
    routesList() {
      // 过滤掉不想显示的路由
      // console.log(routes);
      return routes.options.routes[0].children;
    },
  },
};
</script>

<style scoped>
.sidebar {
  width: 250px;
  background-color: #f0f0f0;
  padding: 20px;
}

.sidebar ul {
  list-style: none;
  padding: 0;
}

.sidebar ul li {
  margin-bottom: 10px;
}

.sidebar ul li a {
  text-decoration: none;
  color: #333;
}

.sidebar ul li.active a {
  font-weight: bold;
}
</style>
