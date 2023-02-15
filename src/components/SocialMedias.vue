<script setup lang="ts"></script>
<template>
  <div class="socialmedias">
    <ul class="header-list">
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
  </div>
</template>

<style scoped>
#socialmedias {
  grid-column: 2;
}

.glyphs {
  width: 40px;
  margin: 5px;
}

ul {
  display: block;
  float: right;
}

ul li {
  margin: 7px;
}
</style>
