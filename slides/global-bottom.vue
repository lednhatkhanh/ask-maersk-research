<template>
  <footer v-if="$slidev.nav.currentPage > 1 && $slidev.nav.currentPage !== 15" class="deck-footer">
    <span class="footer-brand"><img src="/one-logo.svg" alt="ONE" /> {{ $slidev.nav.currentPage > 15 ? 'ASK ONE · TECHNICAL CONCEPTS' : 'ASK ONE · PROJECT PROPOSAL' }}</span>
    <span>{{ String($slidev.nav.currentPage).padStart(2, '0') }}</span>
  </footer>
</template>
