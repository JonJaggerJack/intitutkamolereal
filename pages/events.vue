<template>
  <main>
    <Hero 
      title="Événements & Actualités"
      subtitle="Restez informés de nos activités, célébrations et moments importants"
      badge="Nos Événements"
      background-image="/images/campus/8.jpg"
    >
      <template #buttons>
        <NuxtLink to="/contact" class="btn btn-primary">S'inscrire à un Événement</NuxtLink>
      </template>
    </Hero>

    <!-- Upcoming Events -->
    <section class="events-section">
      <div class="container">
        <h2>Événements à Venir</h2>
        <p class="section-description">Ne manquez pas ces moments importants</p>
        
        <div class="events-grid">
          <div v-for="event in upcomingEvents" :key="event.id" class="event-card upcoming">
            <div class="event-date">
              <span class="day">{{ event.day }}</span>
              <span class="month">{{ event.month }}</span>
            </div>
            <div class="event-content">
              <span class="event-category">{{ event.category }}</span>
              <h3>{{ event.title }}</h3>
              <p>{{ event.description }}</p>
              <div class="event-meta">
                <span><Icon name="clock" size="small" color="var(--secondary)" /> {{ event.time }}</span>
                <span><Icon name="pin" size="small" color="var(--secondary)" /> {{ event.location }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Past Events -->
    <section class="past-events-section">
      <div class="container">
        <h2>Événements Passés</h2>
        <p class="section-description">Revivez nos moments mémorables</p>
        
        <div class="past-events-grid">
          <div v-for="event in pastEvents" :key="event.id" class="past-event-card">
            <img :src="event.image" :alt="event.title">
            <div class="past-event-content">
              <span class="event-date-badge">{{ event.date }}</span>
              <h3>{{ event.title }}</h3>
              <p>{{ event.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Annual Calendar -->
    <section class="calendar-section">
      <div class="container">
        <h2>Calendrier Annuel</h2>
        <p class="section-description">Les événements récurrents de l'année scolaire</p>
        
        <div class="calendar-grid">
          <div v-for="month in annualCalendar" :key="month.name" class="calendar-month">
            <h3>{{ month.name }}</h3>
            <ul>
              <li v-for="(event, index) in month.events" :key="index">
                <span class="bullet">•</span> {{ event }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- News Section -->
    <section class="news-section">
      <div class="container">
        <h2>Actualités Récentes</h2>
        
        <div class="news-grid">
          <div v-for="news in recentNews" :key="news.id" class="news-card">
            <img :src="news.image" :alt="news.title">
            <div class="news-content">
              <span class="news-date">{{ news.date }}</span>
              <h3>{{ news.title }}</h3>
              <p>{{ news.summary }}</p>
              <a href="#" class="read-more">Lire la suite →</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Événements - Institut Kamole',
  description: 'Découvrez tous les événements, actualités et moments importants de l\'Institut Kamole.'
})

const upcomingEvents = [
  {
    id: 1,
    day: '25',
    month: 'FÉV',
    category: 'Académique',
    title: 'Portes Ouvertes 2026',
    description: 'Visitez notre campus, rencontrez nos professeurs et découvrez nos programmes.',
    time: '9h00 - 16h00',
    location: 'Campus Principal'
  },
  {
    id: 2,
    day: '15',
    month: 'MAR',
    category: 'Sport',
    title: 'Tournoi Inter-Scolaire',
    description: 'Compétition de football et basketball avec d\'autres institutions.',
    time: '10h00 - 17h00',
    location: 'Terrains de Sport'
  },
  {
    id: 3,
    day: '28',
    month: 'MAR',
    category: 'Culturel',
    title: 'Festival des Arts',
    description: 'Exposition de peinture, sculptures et performances artistiques de nos étudiants.',
    time: '14h00 - 19h00',
    location: 'Salle Polyvalente'
  },
  {
    id: 4,
    day: '10',
    month: 'AVR',
    category: 'Académique',
    title: 'Foire Scientifique',
    description: 'Présentation des projets scientifiques innovants de nos élèves.',
    time: '8h00 - 16h00',
    location: 'Laboratoires'
  }
]

const pastEvents = [
  {
    id: 1,
    title: 'Cérémonie de Remise des Diplômes 2025',
    date: 'Juillet 2025',
    image: '/images/events/1.svg',
    description: 'Célébration de la réussite de nos 120 diplômés lors d\'une cérémonie mémorable.'
  },
  {
    id: 2,
    title: 'Journée Culturelle Congolaise',
    date: 'Janvier 2026',
    image: '/images/events/2.svg',
    description: 'Célébration de notre patrimoine avec musique, danse et cuisine traditionnelle.'
  },
  {
    id: 3,
    title: 'Compétition de Robotique',
    date: 'Décembre 2025',
    image: '/images/events/3.svg',
    description: 'Nos étudiants ont remporté le 2ème prix national de robotique.'
  }
]

const annualCalendar = [
  {
    name: 'Septembre',
    events: ['Rentrée scolaire', 'Réunion parents-professeurs']
  },
  {
    name: 'Octobre',
    events: ['Fête de l\'indépendance', 'Examens du 1er trimestre']
  },
  {
    name: 'Novembre',
    events: ['Journée des anciens élèves', 'Tournoi sportif']
  },
  {
    name: 'Décembre',
    events: ['Fête de Noël', 'Vacances d\'hiver']
  },
  {
    name: 'Janvier',
    events: ['Journée culturelle', 'Début 2ème semestre']
  },
  {
    name: 'Février',
    events: ['Carnaval scolaire', 'Journées portes ouvertes']
  },
  {
    name: 'Mars',
    events: ['Festival des arts', 'Examens mi-parcours']
  },
  {
    name: 'Avril',
    events: ['Foire scientifique', 'Pâques']
  },
  {
    name: 'Mai',
    events: ['Fête des mères', 'Compétitions académiques']
  },
  {
    name: 'Juin',
    events: ['Examens finaux', 'Fête de fin d\'année']
  },
  {
    name: 'Juillet',
    events: ['Remise des diplômes', 'Vacances d\'été']
  },
  {
    name: 'Août',
    events: ['Formation des enseignants', 'Préparation rentrée']
  }
]

const recentNews = [
  {
    id: 1,
    title: 'Nouveau Partenariat International',
    date: '10 Février 2026',
    image: '/images/events/4.svg',
    summary: 'Institut Kamole signe un accord de coopération avec une université canadienne pour des échanges académiques.'
  },
  {
    id: 2,
    title: 'Rénovation de la Bibliothèque',
    date: '5 Février 2026',
    image: '/images/events/5.svg',
    summary: 'Notre bibliothèque a été entièrement rénovée avec 5000 nouveaux livres et des espaces numériques modernes.'
  },
  {
    id: 3,
    title: 'Succès aux Examens Nationaux',
    date: '1 Février 2026',
    image: '/images/events/6.svg',
    summary: '98% de taux de réussite pour nos élèves aux examens d\'état - le meilleur score de la région!'
  }
]
</script>

<style scoped>
.events-section,
.calendar-section {
  padding: 6rem 0;
  background: var(--bg-secondary);
}

.past-events-section,
.news-section {
  padding: 6rem 0;
  background: var(--bg-primary);
}

h2 {
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

.events-grid {
  display: grid;
  gap: 2rem;
  margin-top: 3rem;
}

.event-card {
  display: flex;
  gap: 2rem;
  background: var(--bg-primary);
  padding: 2rem;
  border-radius: 12px;
  border-left: 4px solid var(--primary);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.event-card:hover {
  transform: translateX(5px);
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
}

.event-date {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: var(--primary);
  color: white;
  padding: 1rem;
  border-radius: 8px;
  min-width: 80px;
  height: 80px;
}

.event-date .day {
  font-size: 2rem;
  font-weight: bold;
  line-height: 1;
}

.event-date .month {
  font-size: 0.9rem;
  text-transform: uppercase;
}

.event-content {
  flex: 1;
}

.event-category {
  display: inline-block;
  background: var(--secondary);
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.85rem;
  margin-bottom: 0.5rem;
}

.event-content h3 {
  color: var(--primary);
  margin-bottom: 0.5rem;
}

.event-meta {
  display: flex;
  gap: 2rem;
  margin-top: 1rem;
  color: var(--text-secondary);
  font-size: 0.9rem;
}

.event-meta .icon {
  margin-right: 0.25rem;
}

.past-events-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.past-event-card {
  background: var(--bg-secondary);
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.3s ease;
}

.past-event-card:hover {
  transform: translateY(-5px);
}

.past-event-card img {
  width: 100%;
  height: 220px;
  object-fit: cover;
}

.past-event-content {
  padding: 1.5rem;
}

.event-date-badge {
  display: inline-block;
  background: var(--primary);
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.85rem;
  margin-bottom: 0.75rem;
}

.past-event-content h3 {
  color: var(--text-primary);
  margin-bottom: 0.5rem;
}

.calendar-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.calendar-month {
  background: var(--bg-primary);
  padding: 1.5rem;
  border-radius: 12px;
}

.calendar-month h3 {
  color: var(--primary);
  margin-bottom: 1rem;
  text-align: left;
}

.calendar-month ul {
  list-style: none;
}

.calendar-month li {
  padding: 0.5rem 0;
  border-bottom: 1px solid #f0f0f0;
  display: flex;
  align-items: start;
  gap: 0.5rem;
}

.calendar-month li:last-child {
  border-bottom: none;
}

.bullet {
  color: var(--primary);
  font-weight: bold;
}

.news-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.news-card {
  background: var(--bg-secondary);
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.3s ease;
}

.news-card:hover {
  transform: translateY(-5px);
}

.news-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.news-content {
  padding: 1.5rem;
}

.news-date {
  color: var(--text-secondary);
  font-size: 0.9rem;
  display: block;
  margin-bottom: 0.5rem;
}

.news-content h3 {
  color: var(--text-primary);
  margin-bottom: 0.75rem;
}

.read-more {
  color: var(--primary);
  font-weight: 600;
  text-decoration: none;
  display: inline-block;
  margin-top: 1rem;
  transition: color 0.3s;
}

.read-more:hover {
  color: var(--secondary);
}

@media (max-width: 768px) {
  .events-section h2,
  .past-events-section h2,
  .calendar-section h2,
  .news-section h2 {
    font-size: 1.8rem;
  }

  .section-description {
    font-size: 1rem;
    margin-bottom: 2rem;
  }

  .event-card {
    flex-direction: column;
    gap: 1rem;
    padding: 1.5rem;
  }

  .event-date {
    width: 70px;
    height: 70px;
    min-width: 70px;
  }

  .event-date .day {
    font-size: 1.75rem;
  }

  .event-meta {
    flex-direction: column;
    gap: 0.5rem;
    align-items: start;
  }

  .past-events-grid,
  .news-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .calendar-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .calendar-month {
    padding: 1.2rem;
  }
}

@media (max-width: 480px) {
  .events-section,
  .past-events-section,
  .calendar-section,
  .news-section {
    padding: 3rem 0;
  }

  .events-section h2,
  .past-events-section h2,
  .calendar-section h2,
  .news-section h2 {
    font-size: 1.5rem;
  }

  .event-card {
    padding: 1.2rem;
  }

  .event-date {
    width: 60px;
    height: 60px;
    min-width: 60px;
  }

  .event-date .day {
    font-size: 1.5rem;
  }

  .event-date .month {
    font-size: 0.8rem;
  }

  .event-content h3 {
    font-size: 1.1rem;
  }

  .past-event-card img,
  .news-card img {
    height: 180px;
  }
}
</style>
