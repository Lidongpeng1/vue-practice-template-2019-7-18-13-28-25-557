<template>
  <div id="filters">
    <ul>
      <li>
        <a @click="$emit('status', 0)">ALL</a>
      </li>
      <li>
        <a @click="$emit('status', 1)">Active</a>
      </li>
      <li>
        <a @click="$emit('status', 2)">Complete</a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "MyFilter"
  };
</script>
