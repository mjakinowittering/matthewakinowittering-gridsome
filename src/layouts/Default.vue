<template>
  <div class="layout">
    <ul>
      <li>
        <g-link class="nav__link" to="/">Home</g-link>
      </li>
      <li>
        <g-link class="nav__link" to="/blog">Blog</g-link>
      </li>
      <li>
        <g-link class="nav__link" to="/resume">Resume</g-link>
      </li>
    </ul>
    <slot/>
  </div>
</template>

<static-query>
  query {
    metadata {
      siteName
    }
  }
</static-query>

<style>

</style>
