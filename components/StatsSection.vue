<template>
  <section class="stats-section">
    <div class="container">
      <div class="stats-grid">
        <div v-for="(stat, index) in stats" :key="index" class="stat-card" :style="{ animationDelay: `${index * 0.1}s` }">
          <div class="stat-number">{{ stat.number }}</div>
          <p class="stat-label">{{ stat.label }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Stat {
  number: string
  label: string
}

interface Props {
  stats?: Stat[]
}

const props = withDefaults(defineProps<Props>(), {
  stats: () => [
    { number: '72+', label: 'Ans d\'Excellence' },
    { number: '95%', label: 'Taux de Réussite' },
    { number: '916', label: 'Étudiants' },
    { number: '33', label: 'Enseignants' }
  ]
})
</script>

<style scoped>
.stats-section {
  padding: 4em 0;
  background: var(--primary);
  color: white;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  text-align: center;
}

.stat-card {
  animation: fadeInUp 0.8s ease-in-out;
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 800;
  color: var(--accent);
}

.stat-label {
  font-size: 1.1rem;
  margin-top: 0.5rem;
  opacity: 0.95;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .stats-section {
    padding: 3rem 0;
  }

  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }

  .stat-number {
    font-size: 2rem;
  }

  .stat-label {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .stats-section {
    padding: 2.5rem 0;
  }

  .stats-grid {
    grid-template-columns: 1fr;
    gap: 1.2rem;
  }

  .stat-number {
    font-size: 1.8rem;
  }

  .stat-label {
    font-size: 0.95rem;
  }
}
</style>
