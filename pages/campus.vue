<template>
  <main>
    <Hero 
      title="La Vie du Campus"
      subtitle="Découvrez notre environnement d'apprentissage dynamique et notre communauté accueillante"
      badge="Campus Life"
      background-image="/images/campus/6.jpg"
    >
      <template #buttons>
        <NuxtLink to="/contact" class="btn btn-primary">Visitez Notre Campus</NuxtLink>
      </template>
    </Hero>

    <!-- Campus Facilities -->
    <section class="facilities-section">
      <div class="container">
        <h2>Nos Installations</h2>
        <p class="section-description">Des infrastructures modernes pour un apprentissage optimal</p>
        
        <div class="facilities-grid">
          <div v-for="facility in facilities" :key="facility.id" class="facility-card">
            <div class="facility-icon"><Icon :name="facility.icon" size="large" color="var(--secondary)" /></div>
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
                <span class="feature-icon"><Icon name="bed" size="medium" color="var(--secondary)" /></span>
                <div>
                  <h4>Chambres Confortables</h4>
                  <p>Chambres doubles et triples équipées avec tout le nécessaire</p>
                </div>
              </div>
              
              <div class="feature">
                <span class="feature-icon"><Icon name="utensils" size="medium" color="var(--secondary)" /></span>
                <div>
                  <h4>Restauration Équilibrée</h4>
                  <p>3 repas par jour préparés par notre chef cuisinier</p>
                </div>
              </div>
              
              <div class="feature">
                <span class="feature-icon"><Icon name="graduation" size="medium" color="var(--secondary)" /></span>
                <div>
                  <h4>Études Surveillées</h4>
                  <p>Encadrement et soutien académique tous les soirs</p>
                </div>
              </div>
              
              <div class="feature">
                <span class="feature-icon"><Icon name="lock" size="medium" color="var(--secondary)" /></span>
                <div>
                  <h4>Sécurité 24/7</h4>
                  <p>Surveillance et sécurité assurées jour et nuit</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="internat-image">
            <img src="/images/campus/1.jpg" alt="Internat">
          </div>
        </div>
      </div>
    </section>

    <!-- Student Activities - Gallery -->
    <section class="activities-section">
      <div class="container">
        <h2>Un aperçu de chez nous</h2>
        <p class="section-description">Découvrez notre campus à travers ces images</p>
        
        <div class="gallery-grid">
          <div v-for="image in campusImages" :key="image" class="gallery-item">
            <img :src="`/images/campus/${image}`" :alt="`Campus ${image}`">
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
  title: 'Campus - Institut Kamole',
  description: 'Découvrez la vie quotidienne, les installations et l\'internat de l\'Institut Kamole.'
})

const facilities = [
  {
    id: 1,
    icon: 'book',
    title: 'Bibliothèque Moderne',
    description: 'Plus de 10,000 livres et ressources numériques accessibles à tous nos étudiants.'
  },
  {
    id: 2,
    icon: 'lab',
    title: 'Laboratoires Scientifiques',
    description: 'Laboratoires de chimie, physique et biologie équipés du matériel le plus récent.'
  },
  {
    id: 3,
    icon: 'laptop',
    title: 'Salles Informatiques',
    description: '3 salles avec 80 ordinateurs connectés à internet haute vitesse.'
  },
  {
    id: 4,
    icon: 'sport',
    title: 'Terrains de Sport',
    description: 'Terrains de football, basketball et volleyball pour le développement physique.'
  },
  {
    id: 5,
    icon: 'theater',
    title: 'Salle Polyvalente',
    description: 'Espace pour les événements culturels, théâtre et cérémonies.'
  },
  {
    id: 6,
    icon: 'utensils',
    title: 'Cantine Moderne',
    description: 'Service de restauration offrant des repas équilibrés et variés.'
  }
]

// Liste de toutes les images dans le dossier campus
const campusImages = [
  '1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg',
  '7.jpg', '8.jpg', '14.jpg', '15.jpg', '16.jpg'
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

/* Gallery Grid */
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 3rem;
}

.gallery-item {
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  aspect-ratio: 4/3;
}

.gallery-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0,0,0,0.2);
}

.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
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

  .gallery-grid {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1rem;
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

  .facility-card {
    padding: 1.2rem;
  }

  .gallery-grid {
    grid-template-columns: 1fr;
  }

  .schedule-item {
    padding: 0.8rem;
    flex-direction: column;
    gap: 0.3rem;
    align-items: start;
  }
}
</style>
