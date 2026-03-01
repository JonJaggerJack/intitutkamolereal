<template>
  <section class="features-section">
    <div class="container">
      <div class="section-header">
        <span class="badge">{{ badge }}</span>
        <h2>{{ title }}</h2>
      </div>

      <div class="features-grid">
        <div 
          v-for="(feature, index) in features" 
          :key="index"
          class="feature-card"
          :style="{ animationDelay: `${index * 0.1}s` }"
          @mouseenter="hoveredIndex = index"
          @mouseleave="hoveredIndex = -1"
          :class="{ hovered: hoveredIndex === index }"
        >
          <div class="feature-icon"><Icon :name="feature.icon" size="large" color="var(--secondary)" /></div>
          <h3>{{ feature.title }}</h3>
          <p>{{ feature.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Feature {
  icon: string
  title: string
  description: string
}

interface Props {
  title?: string
  badge?: string
  features?: Feature[]
}

const props = withDefaults(defineProps<Props>(), {
  title: 'Pourquoi Choisir Institut Kamole?',
  badge: 'Avantages Uniques',
  features: () => [
    {
      icon: 'trophy',
      title: 'Excellence Scolaire',
      description: 'Programmes pédagogiques modernes alignés sur les normes internationales.'
    },
    {
      icon: 'star',
      title: 'Internat Moderne',
      description: 'Chambres spacieuses, confortables et équipées.'
    },
    {
      icon: 'target',
      title: 'Sports & Culture',
      description: 'Plus de 15 activités parascolaires pour développer vos passions.'
    },
    {
      icon: 'users',
      title: 'Équipe Dévouée',
      description: 'Enseignants qualifiés et disponibles pour un suivi personnalisé.'
    },
    {
      icon: 'lightbulb',
      title: 'Technologie',
      description: 'Salles informatiques modernes et WiFi haut débit partout.'
    },
    {
      icon: 'award',
      title: 'Succès Garanti',
      description: '95% taux de réussite aux examens nationaux.'
    }
  ]
})

const hoveredIndex = ref(-1)
</script>

<style scoped>
.features-section {
  padding: 6em 0;
  background: linear-gradient(135deg, #f8f9fa 0%, #e8edf5 100%);
}

.section-header {
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

.section-header h2 {
  font-size: 2.8rem;
  color: var(--primary);
  margin: 1rem 0;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.feature-card {
  background: white;
  padding: 2.5rem;
  border-radius: 12px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  animation: fadeInUp 0.8s ease-in-out forwards;
  opacity: 0;
}

.feature-card.hovered {
  transform: translateY(-8px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
}

.feature-icon {
  margin-bottom: 1.2rem;
}

.feature-card h3 {
  color: var(--primary);
  font-size: 1.4rem;
  margin-bottom: 1rem;
}

.feature-card p {
  color: var(--text);
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .features-section {
    padding: 3rem 0;
  }

  .section-header {
    margin-bottom: 2rem;
  }

  .badge {
    font-size: 0.85rem;
  }

  .section-header h2 {
    font-size: 1.6rem;
  }

  .features-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }

  .feature-card {
    padding: 2rem;
  }

  .feature-card h3 {
    font-size: 1.2rem;
  }
}

@media (max-width: 480px) {
  .features-section {
    padding: 2.5rem 0;
  }

  .features-grid {
    grid-template-columns: 1fr;
  }

  .section-header h2 {
    font-size: 1.4rem;
  }

  .feature-card {
    padding: 1.5rem;
  }

  .feature-card h3 {
    font-size: 1.1rem;
  }

  .feature-card p {
    font-size: 0.95rem;
  }
}
</style>
