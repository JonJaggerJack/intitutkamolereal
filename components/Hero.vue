<template>
  <section class="hero" :style="heroStyle">
    <div class="hero-overlay"></div>
    <div class="container hero-content">
      <div class="hero-text">
        <span class="hero-badge">{{ badge }}</span>
        <h1 class="hero-title">{{ title }}</h1>
        <p class="hero-subtitle">{{ subtitle }}</p>
        <div class="hero-buttons">
          <slot name="buttons"></slot>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Props {
  title: string
  subtitle: string
  badge?: string
  backgroundImage?: string
}

const props = withDefaults(defineProps<Props>(), {
  badge: 'Excellence Scolaire depuis 1952'
})

const heroStyle = computed(() => ({
  backgroundImage: props.backgroundImage ? `linear-gradient(135deg, rgba(37, 60, 86, 0.85) 0%, rgba(70, 132, 203, 0.85)), url('${props.backgroundImage}')` : 'linear-gradient(135deg, rgba(37, 60, 86, 0.85) 0%, rgba(70, 132, 203, 0.85))',
  backgroundSize: 'cover',
  backgroundPosition: 'center'
}))
</script>

<style scoped>
.hero {
  padding: 12em 0 8em;
  position: relative;
  overflow: hidden;
  margin-top: 70px;
  background: linear-gradient(135deg, rgba(37, 60, 86, 0.85) 0%, rgba(70, 132, 203, 0.85));
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: none;
  z-index: 0;
}

.hero-shapes {
  display: none;
}

.shape {
  display: none;
}

.shape-1 {
  display: none;
}

.shape-2 {
  display: none;
}

.hero-content {
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.hero-text {
  color: white;
  max-width: 900px;
}

.hero-badge {
  color: var(--accent);
  font-size: 1rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
  display: inline-block;
  margin-bottom: 1rem;
  background: rgba(251, 193, 2, 0.2);
  padding: 0.5rem 1.5rem;
  border-radius: 30px;
}

.hero-title {
  font-size: 4rem;
  font-weight: 800;
  margin: 1rem 0;
  color: white;
  line-height: 1.1;
}

.hero-subtitle {
  color: rgba(255, 255, 255, 0.95);
  margin: 2rem 0;
  line-height: 1.8;
  font-size: 1.25rem;
}

.hero-buttons {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 2rem;
}

@media (max-width: 768px) {
  .hero {
    padding: 6em 0 3em;
    margin-top: 60px;
  }

  .hero-title {
    font-size: 2rem;
  }

  .hero-subtitle {
    font-size: 1rem;
    margin: 1.2rem 0;
  }

  .hero-badge {
    font-size: 0.85rem;
    padding: 0.4rem 1rem;
  }

  .hero-buttons {
    flex-direction: column;
    gap: 1rem;
  }

  .shape-1 {
    width: 300px;
    height: 300px;
  }

  .shape-2 {
    width: 250px;
    height: 250px;
  }
}

@media (max-width: 480px) {
  .hero {
    padding: 5em 0 2.5em;
  }

  .hero-title {
    font-size: 1.75rem;
  }

  .hero-subtitle {
    font-size: 0.95rem;
    line-height: 1.6;
  }

  .hero-badge {
    font-size: 0.75rem;
    letter-spacing: 1px;
  }
}
</style>
