<template>
  <footer v-if="$slidev.nav.currentPage > 1" class="deck-footer">
    <span class="footer-brand"><img src="/one-logo.svg" alt="ONE" /> ASK ONE · POC PROPOSAL</span>
    <span>{{ String($slidev.nav.currentPage).padStart(2, '0') }}</span>
  </footer>
</template>
