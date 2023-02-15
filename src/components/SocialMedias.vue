<script setup lang="ts"></script>
<template>
  <ul id="socialmedias" class="header-list">
    <li>
      <a target="_blank" href="https://github.com/Zayoxy">
        <img class="glyphs" src="@/assets/images/github.png" alt="github" />
      </a>
    </li>
    <li>
      <a target="_blank" href="https://twitter.com/Zayoxy">
        <img class="glyphs" src="@/assets/images/twitter.svg" alt="twitter" />
      </a>
    </li>
    <li>
      <a
        target="_blank"
        href="https://www.youtube.com/channel/UCXPqhJeWX9XWMD61w5kcQfg"
      >
        <img class="glyphs" src="@/assets/images/youtube.png" alt="youtube" />
      </a>
    </li>
    <li>
      <a target="_blank" href="https://twitch.tv/Zayoxy">
        <img class="glyphs" src="@/assets/images/twitch.svg" alt="twitch" />
      </a>
    </li>
  </ul>
</template>

<style scoped>
#socialmedias {
  grid-column: 2;
}

#socialmedias {
  display: block;
  float: right;
}

#socialmedias li {
  margin: 5px 0 5px 5px;
}
</style>
