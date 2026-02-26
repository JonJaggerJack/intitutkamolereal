<template>
  <main>
    <Hero 
      title="La Vie du Campus"
      subtitle="Découvrez notre environnement d'apprentissage dynamique et notre communauté accueillante"
      badge="Campus Life"
    >
      <template #buttons>
        <NuxtLink to="/contact" class="btn btn-primary">Visitez Notre Campus</NuxtLink>
        <NuxtLink to="/events" class="btn btn-secondary">Voir les Événements</NuxtLink>
      </template>
    </Hero>

    <!-- Campus Facilities -->
    <section class="facilities-section">
      <div class="container">
        <h2>Nos Installations</h2>
        <p class="section-description">Des infrastructures modernes pour un apprentissage optimal</p>
        
        <div class="facilities-grid">
          <div v-for="facility in facilities" :key="facility.id" class="facility-card">
            <div class="facility-icon">{{ facility.icon }}</div>
            <h3>{{ facility.title }}</h3>
            <p>{{ facility.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Internat Section -->
    <section class="internat-section">
      <div class="container">
        <div class="internat-content">
          <div class="internat-text">
            <h2>Notre Internat</h2>
            <p>L'Institut Kamole offre un internat moderne et sécurisé qui accueille des étudiants venant de toutes les régions de la République Démocratique du Congo.</p>
            
            <div class="internat-features">
              <div class="feature">
                <span class="feature-icon">🛏️</span>
                <div>
                  <h4>Chambres Confortables</h4>
                  <p>Chambres doubles et triples équipées avec tout le nécessaire</p>
                </div>
              </div>
              
              <div class="feature">
                <span class="feature-icon">🍽️</span>
                <div>
                  <h4>Restauration Équilibrée</h4>
                  <p>3 repas par jour préparés par notre chef cuisinier</p>
                </div>
              </div>
              
              <div class="feature">
                <span class="feature-icon">👨‍🏫</span>
                <div>
                  <h4>Études Surveillées</h4>
                  <p>Encadrement et soutien académique tous les soirs</p>
                </div>
              </div>
              
              <div class="feature">
                <span class="feature-icon">🔒</span>
                <div>
                  <h4>Sécurité 24/7</h4>
                  <p>Surveillance et sécurité assurées jour et nuit</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="internat-image">
            <img src="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800&h=600&fit=crop" alt="Internat">
          </div>
        </div>
      </div>
    </section>

    <!-- Student Activities -->
    <section class="activities-section">
      <div class="container">
        <h2>Activités Étudiantes</h2>
        <p class="section-description">Un équilibre parfait entre études et loisirs</p>
        
        <div class="activities-grid">
          <div v-for="activity in activities" :key="activity.id" class="activity-card">
            <img :src="activity.image" :alt="activity.title">
            <div class="activity-content">
              <h3>{{ activity.title }}</h3>
              <p>{{ activity.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Daily Schedule -->
    <section class="schedule-section">
      <div class="container">
        <h2>Emploi du Temps Type</h2>
        <div class="schedule-grid">
          <div class="schedule-column">
            <h3>Journée d'un Externe</h3>
            <div class="schedule-item" v-for="item in externalSchedule" :key="item.time">
              <span class="schedule-time">{{ item.time }}</span>
              <span class="schedule-activity">{{ item.activity }}</span>
            </div>
          </div>
          
          <div class="schedule-column">
            <h3>Journée d'un Interne</h3>
            <div class="schedule-item" v-for="item in internalSchedule" :key="item.time">
              <span class="schedule-time">{{ item.time }}</span>
              <span class="schedule-activity">{{ item.activity }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Vie du Campus - Institut Kamole',
  description: 'Découvrez la vie quotidienne, les installations et l\'internat de l\'Institut Kamole.'
})

const facilities = [
  {
    id: 1,
    icon: '📚',
    title: 'Bibliothèque Moderne',
    description: 'Plus de 10,000 livres et ressources numériques accessibles à tous nos étudiants.'
  },
  {
    id: 2,
    icon: '🔬',
    title: 'Laboratoires Scientifiques',
    description: 'Laboratoires de chimie, physique et biologie équipés du matériel le plus récent.'
  },
  {
    id: 3,
    icon: '💻',
    title: 'Salles Informatiques',
    description: '3 salles avec 80 ordinateurs connectés à internet haute vitesse.'
  },
  {
    id: 4,
    icon: '⚽',
    title: 'Terrains de Sport',
    description: 'Terrains de football, basketball et volleyball pour le développement physique.'
  },
  {
    id: 5,
    icon: '🎭',
    title: 'Salle Polyvalente',
    description: 'Espace pour les événements culturels, théâtre et cérémonies.'
  },
  {
    id: 6,
    icon: '🍽️',
    title: 'Cantine Moderne',
    description: 'Service de restauration offrant des repas équilibrés et variés.'
  }
]

const activities = [
  {
    id: 1,
    title: 'Clubs Académiques',
    image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=600&h=400&fit=crop',
    description: 'Club de mathématiques, sciences, débat et langues pour approfondir vos connaissances.'
  },
  {
    id: 2,
    title: 'Sports & Athlétisme',
    image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600&h=400&fit=crop',
    description: 'Équipes de football, basketball, volleyball et athlétisme.'
  },
  {
    id: 3,
    title: 'Arts & Culture',
    image: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=600&h=400&fit=crop',
    description: 'Chorale, théâtre, peinture et danse pour exprimer votre créativité.'
  },
  {
    id: 4,
    title: 'Service Communautaire',
    image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&h=400&fit=crop',
    description: 'Programmes de bénévolat et projets communautaires pour développer la citoyenneté.'
  }
]

const externalSchedule = [
  { time: '7:30', activity: 'Arrivée et préparation' },
  { time: '8:00', activity: 'Début des cours' },
  { time: '10:00', activity: 'Récréation' },
  { time: '10:20', activity: 'Cours' },
  { time: '12:30', activity: 'Pause déjeuner' },
  { time: '13:30', activity: 'Reprise des cours' },
  { time: '15:30', activity: 'Activités parascolaires' },
  { time: '17:00', activity: 'Départ' }
]

const internalSchedule = [
  { time: '6:00', activity: 'Réveil et toilette' },
  { time: '6:30', activity: 'Petit déjeuner' },
  { time: '7:30', activity: 'Préparation des cours' },
  { time: '8:00', activity: 'Début des cours' },
  { time: '12:30', activity: 'Déjeuner' },
  { time: '13:30', activity: 'Reprise des cours' },
  { time: '17:00', activity: 'Activités & Sport' },
  { time: '18:30', activity: 'Dîner' },
  { time: '19:30', activity: 'Étude surveillée' },
  { time: '21:00', activity: 'Temps libre' },
  { time: '22:00', activity: 'Couvre-feu' }
]
</script>

<style scoped>
.facilities-section,
.activities-section,
.schedule-section {
  padding: 6rem 0;
  background: var(--bg-secondary);
}

.internat-section {
  padding: 6rem 0;
  background: var(--bg-primary);
}

.facilities-section h2,
.activities-section h2,
.schedule-section h2,
.internat-section h2 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: var(--text-primary);
}

.section-description {
  text-align: center;
  color: var(--text-secondary);
  font-size: 1.1rem;
  margin-bottom: 3rem;
}

.facilities-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.facility-card {
  background: var(--bg-primary);
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.facility-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
}

.facility-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.facility-card h3 {
  color: var(--primary);
  margin-bottom: 0.5rem;
}

.internat-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.internat-features {
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.feature {
  display: flex;
  gap: 1rem;
  align-items: start;
}

.feature-icon {
  font-size: 2rem;
  flex-shrink: 0;
}

.feature h4 {
  color: var(--primary);
  margin-bottom: 0.3rem;
}

.internat-image img {
  width: 100%;
  border-radius: 12px;
  box-shadow: 0 10px 40px rgba(0,0,0,0.15);
}

.activities-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.activity-card {
  background: var(--bg-primary);
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.3s ease;
}

.activity-card:hover {
  transform: translateY(-5px);
}

.activity-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.activity-content {
  padding: 1.5rem;
}

.activity-content h3 {
  color: var(--primary);
  margin-bottom: 0.5rem;
}

.schedule-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3rem;
  margin-top: 3rem;
}

.schedule-column {
  background: var(--bg-primary);
  padding: 2rem;
  border-radius: 12px;
}

.schedule-column h3 {
  color: var(--primary);
  margin-bottom: 1.5rem;
  text-align: center;
}

.schedule-item {
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  border-bottom: 1px solid #e0e0e0;
}

.schedule-item:last-child {
  border-bottom: none;
}

.schedule-time {
  font-weight: 600;
  color: var(--primary);
}

@media (max-width: 768px) {
  .facilities-section h2,
  .activities-section h2,
  .schedule-section h2,
  .internat-section h2 {
    font-size: 1.8rem;
  }

  .section-description {
    font-size: 1rem;
    margin-bottom: 2rem;
  }

  .facilities-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .facility-card {
    padding: 1.5rem;
  }

  .internat-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .internat-features {
    gap: 1.2rem;
  }

  .feature {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .activities-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .schedule-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .schedule-column {
    padding: 1.5rem;
  }
}

@media (max-width: 480px) {
  .facilities-section,
  .activities-section,
  .schedule-section,
  .internat-section {
    padding: 3rem 0;
  }

  .facilities-section h2,
  .activities-section h2,
  .schedule-section h2,
  .internat-section h2 {
    font-size: 1.5rem;
  }

  .facility-icon,
  .feature-icon {
    font-size: 2rem;
  }

  .facility-card,
  .support-card {
    padding: 1.2rem;
  }

  .schedule-item {
    padding: 0.8rem;
    flex-direction: column;
    gap: 0.3rem;
    align-items: start;
  }
}
</style>
