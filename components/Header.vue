<template>
  <header class="header">
    <div class="container header-container">
      <div class="logo">
        <span class="logo-emoji">🎓</span>
        <NuxtLink to="/" class="logo-text">Institut Kamole</NuxtLink>
      </div>
      
      <nav class="navbar">
        <ul class="nav-menu">
          <li><NuxtLink to="/" class="nav-link active">Accueil</NuxtLink></li>
          <li><NuxtLink to="/about" class="nav-link">À propos</NuxtLink></li>
          <li><NuxtLink to="/faculty" class="nav-link">Faculté</NuxtLink></li>
          <li><NuxtLink to="/staff" class="nav-link">Personnel</NuxtLink></li>
          <li><NuxtLink to="/events" class="nav-link">Événements</NuxtLink></li>
          <li><NuxtLink to="/campus-life" class="nav-link">Campus</NuxtLink></li>
          <li><NuxtLink to="/contact" class="nav-link">Contact</NuxtLink></li>
        </ul>
      </nav>

      <button class="hamburger" :class="{ active: isMenu }" @click="isMenu = !isMenu" aria-label="Menu">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>

    <!-- Mobile menu -->
    <nav v-if="isMenu" class="mobile-menu">
      <ul>
        <li><NuxtLink to="/">Accueil</NuxtLink></li>
        <li><NuxtLink to="/about">À propos</NuxtLink></li>
        <li><NuxtLink to="/faculty">Faculté</NuxtLink></li>
        <li><NuxtLink to="/staff">Personnel</NuxtLink></li>
        <li><NuxtLink to="/events">Événements</NuxtLink></li>
        <li><NuxtLink to="/campus-life">Campus</NuxtLink></li>
        <li><NuxtLink to="/contact">Contact</NuxtLink></li>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts">
const isMenu = ref(false)

watch(() => useRoute().path, () => {
  isMenu.value = false
})
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 0.8rem 0;
}

.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
}

.logo {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: bold;
  color: var(--primary);
}

.logo-emoji {
  font-size: 1.5rem;
}

.logo-text {
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--primary);
  text-decoration: none;
}

.navbar {
  display: flex;
}

.nav-menu {
  display: flex;
  list-style: none;
  gap: 2rem;
  margin: 0;
  padding: 0;
}

.nav-link {
  text-decoration: none;
  color: var(--primary);
  font-weight: 500;
  transition: color 0.3s;
}

.nav-link.active {
  color: var(--accent);
  font-weight: 700;
}

.nav-link:hover {
  color: var(--accent);
}

.hamburger {
  display: none;
  flex-direction: column;
  cursor: pointer;
  gap: 5px;
  background: none;
  border: none;
  padding: 0;
}

.hamburger span {
  width: 25px;
  height: 3px;
  background: var(--primary);
  border-radius: 2px;
  transition: all 0.3s;
}

.hamburger.active span:nth-child(1) {
  transform: rotate(45deg) translateY(10px);
}

.hamburger.active span:nth-child(2) {
  opacity: 0;
}

.hamburger.active span:nth-child(3) {
  transform: rotate(-45deg) translateY(-10px);
}

.mobile-menu {
  display: none;
  position: absolute;
  top: 70px;
  left: 0;
  right: 0;
  background: white;
  border-top: 1px solid #eee;
  padding: 1rem 0;
}

.mobile-menu ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
}

.mobile-menu li {
  padding: 1rem 2rem;
  border-bottom: 1px solid #eee;
}

.mobile-menu a {
  text-decoration: none;
  color: var(--primary);
  font-weight: 500;
}

@media (max-width: 768px) {
  .header {
    padding: 0.5rem 0;
  }

  .header-container {
    height: 60px;
  }

  .logo-text {
    font-size: 1.1rem;
  }

  .logo-emoji {
    font-size: 1.3rem;
  }

  .hamburger {
    display: flex;
  }

  .nav-menu {
    display: none;
  }

  .mobile-menu {
    display: block;
    top: 60px;
  }

  .mobile-menu li {
    padding: 0.9rem 1rem;
  }

  .mobile-menu a {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .header-container {
    height: 55px;
  }

  .logo-text {
    font-size: 1rem;
  }

  .logo-emoji {
    font-size: 1.2rem;
  }

  .hamburger span {
    width: 22px;
  }
}
</style>
