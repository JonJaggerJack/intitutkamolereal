<template>
  <section class="carousel-section">
    <div class="container">
      <div v-if="showTitle" class="carousel-header">
        <span class="badge">{{ badge }}</span>
        <h2>{{ title }}</h2>
      </div>

      <div class="carousel-wrapper">
        <button 
          class="carousel-btn carousel-btn-prev" 
          @click="prevSlide"
          :disabled="currentSlide === 0"
          aria-label="Previous slide"
        >
          ❮
        </button>

        <div class="carousel-container">
          <div 
            class="carousel-track"
            :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
          >
            <slot></slot>
          </div>
        </div>

        <button 
          class="carousel-btn carousel-btn-next" 
          @click="nextSlide"
          :disabled="currentSlide === totalSlides - 1"
          aria-label="Next slide"
        >
          ❯
        </button>
      </div>

      <!-- Dots -->
      <div v-if="showDots" class="carousel-dots">
        <button 
          v-for="(_, index) in totalSlides"
          :key="index"
          :class="{ active: currentSlide === index }"
          @click="currentSlide = index"
          :aria-label="`Go to slide ${index + 1}`"
        ></button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Props {
  title?: string
  badge?: string
  showTitle?: boolean
  showDots?: boolean
  autoPlay?: boolean
  interval?: number
  slidesPerView?: number
}

const props = withDefaults(defineProps<Props>(), {
  title: 'Actualités & Événements',
  badge: '📢 Dernières Nouvelles',
  showTitle: true,
  showDots: true,
  autoPlay: false,
  interval: 5000,
  slidesPerView: 3
})

const currentSlide = ref(0)
const totalSlides = ref(0)
let autoPlayInterval: NodeJS.Timeout | null = null

onMounted(() => {
  const slot = document.querySelector('.carousel-track')
  if (slot) {
    totalSlides.value = Math.ceil(slot.children.length / props.slidesPerView)
  }

  if (props.autoPlay) {
    startAutoPlay()
  }
})

onUnmounted(() => {
  if (autoPlayInterval) {
    clearInterval(autoPlayInterval)
  }
})

const nextSlide = () => {
  if (currentSlide.value < totalSlides.value - 1) {
    currentSlide.value++
  }
}

const prevSlide = () => {
  if (currentSlide.value > 0) {
    currentSlide.value--
  }
}

const startAutoPlay = () => {
  autoPlayInterval = setInterval(() => {
    if (currentSlide.value < totalSlides.value - 1) {
      currentSlide.value++
    } else {
      currentSlide.value = 0
    }
  }, props.interval)
}
</script>

<style scoped>
.carousel-section {
  padding: 4rem 0;
  background: linear-gradient(135deg, #f8f9fa 0%, #e8edf5 100%);
}

.carousel-header {
  text-align: center;
  margin-bottom: 3rem;
}

.badge {
  color: var(--accent);
  font-size: 0.9rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.carousel-header h2 {
  font-size: 2.8rem;
  color: var(--primary);
  margin: 1rem 0;
}

.carousel-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  gap: 2rem;
}

.carousel-btn {
  flex-shrink: 0;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: var(--accent);
  color: var(--primary);
  font-size: 1.5rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: none;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(251, 193, 2, 0.2);
}

.carousel-btn:hover:not(:disabled) {
  transform: scale(1.1) translateY(-2px);
  box-shadow: 0 8px 20px rgba(251, 193, 2, 0.3);
}

.carousel-btn:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

.carousel-container {
  flex: 1;
  overflow: hidden;
  border-radius: 12px;
  background: white;
}

.carousel-track {
  display: flex;
  transition: transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  gap: 2rem;
  padding: 2rem;
}

.carousel-track > * {
  flex: 0 0 calc(33.33% - 1.33rem);
  min-width: 0;
}

.carousel-dots {
  display: flex;
  justify-content: center;
  gap: 0.8rem;
  margin-top: 2rem;
}

.carousel-dots button {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #ddd;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
}

.carousel-dots button.active {
  background: var(--accent);
  width: 32px;
  border-radius: 6px;
}

@media (max-width: 1024px) {
  .carousel-track > * {
    flex: 0 0 calc(50% - 1rem);
  }
}

@media (max-width: 768px) {
  .carousel-section {
    padding: 3rem 0;
  }

  .carousel-header {
    margin-bottom: 2rem;
  }

  .badge {
    font-size: 0.85rem;
  }

  .carousel-header h2 {
    font-size: 1.6rem;
  }

  .carousel-track > * {
    flex: 0 0 100%;
  }

  .carousel-wrapper {
    gap: 0.75rem;
  }

  .carousel-btn {
    width: 40px;
    height: 40px;
    font-size: 1.2rem;
  }

  .carousel-track {
    padding: 1.5rem;
    gap: 1rem;
  }
}

@media (max-width: 480px) {
  .carousel-section {
    padding: 2.5rem 0;
  }

  .carousel-header h2 {
    font-size: 1.4rem;
  }

  .carousel-btn {
    width: 35px;
    height: 35px;
    font-size: 1rem;
  }

  .carousel-wrapper {
    gap: 0.5rem;
  }

  .carousel-track {
    padding: 1rem;
  }

  .carousel-dots button {
    width: 10px;
    height: 10px;
  }

  .carousel-dots button.active {
    width: 24px;
  }
}
</style>
