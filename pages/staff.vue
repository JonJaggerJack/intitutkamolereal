<template>
  <main>
    <Hero 
      title="Notre Personnel"
      subtitle="Rencontrez l'équipe dévouée qui fait la différence à Institut Kamole"
      badge="Notre Équipe"
    >
      <template #buttons>
        <NuxtLink to="/contact" class="btn btn-primary">Rejoignez Notre Équipe</NuxtLink>
      </template>
    </Hero>

    <!-- Leadership Team -->
    <section class="leadership-section">
      <div class="container">
        <h2>Direction & Administration</h2>
        <p class="section-description">L'équipe de direction qui guide notre vision</p>
        
        <div class="leadership-grid">
          <div v-for="leader in leadership" :key="leader.id" class="leader-card">
            <div class="leader-image">
              <img :src="leader.image" :alt="leader.name">
            </div>
            <h3>{{ leader.name }}</h3>
            <p class="leader-title">{{ leader.title }}</p>
            <p class="leader-bio">{{ leader.bio }}</p>
            <div class="leader-contact">
              <a :href="`mailto:${leader.email}`"><Icon name="email" size="small" color="var(--secondary)" /> {{ leader.email }}</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Teaching Staff by Department -->
    <section class="teachers-section">
      <div class="container">
        <h2>Corps Enseignant</h2>
        <p class="section-description">Des professeurs qualifiés et passionnés</p>
        
        <div class="department-tabs">
          <button 
            v-for="dept in teachingDepartments" 
            :key="dept.id"
            :class="{ active: activeTab === dept.id }"
            @click="activeTab = dept.id"
            class="tab-button"
          >
            <Icon :name="dept.icon" size="small" color="var(--secondary)" /> {{ dept.name }}
          </button>
        </div>
        
        <div class="teachers-grid">
          <div v-for="teacher in filteredTeachers" :key="teacher.id" class="teacher-card">
            <div class="teacher-image">
              <img :src="teacher.image" :alt="teacher.name">
              <div class="teacher-badge">{{ teacher.specialization }}</div>
            </div>
            <div class="teacher-info">
              <h3>{{ teacher.name }}</h3>
              <p class="teacher-subject">{{ teacher.subject }}</p>
              <p class="teacher-credentials">{{ teacher.credentials }}</p>
              <p class="teacher-experience">{{ teacher.experience }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Support Staff -->
    <section class="support-section">
      <div class="container">
        <h2>Personnel de Soutien</h2>
        <p class="section-description">L'équipe qui assure le bon fonctionnement quotidien</p>
        
        <div class="support-grid">
          <div v-for="staff in supportStaff" :key="staff.id" class="support-card">
            <div class="support-icon"><Icon :name="staff.icon" size="large" color="var(--secondary)" /></div>
            <h3>{{ staff.department }}</h3>
            <p class="support-head">{{ staff.head }}</p>
            <p>{{ staff.description }}</p>
            <ul class="support-services">
              <li v-for="(service, index) in staff.services" :key="index">
                <span class="bullet">•</span> {{ service }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Join Our Team -->
    <section class="careers-section">
      <div class="container">
        <div class="careers-content">
          <h2>Rejoignez Notre Équipe</h2>
          <p>Institut Kamole est toujours à la recherche de professionnels talentueux et passionnés par l'éducation.</p>
          
          <div class="careers-grid">
            <div class="career-benefit">
              <div class="benefit-icon"><Icon name="award" size="large" color="white" /></div>
              <h3>Environnement Professionnel</h3>
              <p>Travaillez dans un cadre moderne et stimulant</p>
            </div>
            
            <div class="career-benefit">
              <div class="benefit-icon"><Icon name="trending" size="large" color="white" /></div>
              <h3>Développement de Carrière</h3>
              <p>Formations continues et opportunités d'avancement</p>
            </div>
            
            <div class="career-benefit">
              <div class="benefit-icon"><Icon name="users" size="large" color="white" /></div>
              <h3>Équipe Solidaire</h3>
              <p>Collaborez avec des collègues passionnés</p>
            </div>
            
            <div class="career-benefit">
              <div class="benefit-icon"><Icon name="target" size="large" color="white" /></div>
              <h3>Impact Positif</h3>
              <p>Contribuez à former la prochaine génération</p>
            </div>
          </div>
          
          <div class="careers-cta">
            <h3>Postes Actuellement Disponibles</h3>
            <ul class="open-positions">
              <li>Professeur de Mathématiques (Secondaire)</li>
              <li>Professeur d'Anglais (Tous niveaux)</li>
              <li>Conseiller Pédagogique</li>
              <li>Assistant Administratif</li>
            </ul>
            <NuxtLink to="/contact" class="btn btn-primary btn-large">Envoyez Votre Candidature</NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Personnel - Institut Kamole',
  description: 'Découvrez l\'équipe dévouée de l\'Institut Kamole : direction, enseignants et personnel de soutien.'
})

const activeTab = ref(1)

const leadership = [
  {
    id: 1,
    name: 'Dr. Jean-Claude Pierre',
    title: 'Directeur Général',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    bio: 'Plus de 20 ans d\'expérience en gestion éducative. Docteur en Sciences de l\'Éducation.',
    email: 'jc.pierre@institutkamole.edu'
  },
  {
    id: 2,
    name: 'Marie-Jeanne Joseph',
    title: 'Directrice Académique',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
    bio: 'Spécialiste en curriculum et méthodes pédagogiques innovantes. Master en Pédagogie.',
    email: 'mj.joseph@institutkamole.edu'
  },
  {
    id: 3,
    name: 'Pierre-Louis Beauvoir',
    title: 'Directeur Administratif',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
    bio: 'Expert en gestion administrative et financière des institutions éducatives.',
    email: 'pl.beauvoir@institutkamole.edu'
  }
]

const teachingDepartments = [
  { id: 1, name: 'Sciences', icon: 'lab' },
  { id: 2, name: 'Lettres', icon: 'book' },
  { id: 3, name: 'Sciences Humaines', icon: 'globe' },
  { id: 4, name: 'Arts & Sports', icon: 'palette' }
]

const teachers = [
  // Sciences
  {
    id: 1,
    name: 'Dr. Marc Antoine Dufief',
    subject: 'Chimie & Physique',
    department: 1,
    specialization: 'Docteur',
    credentials: 'Doctorat en Chimie Organique',
    experience: '15 ans d\'enseignement',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop'
  },
  {
    id: 2,
    name: 'Prof. Nadine Saint-Louis',
    subject: 'Mathématiques',
    department: 1,
    specialization: 'Professeur',
    credentials: 'Master en Mathématiques Appliquées',
    experience: '12 ans d\'expérience',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop'
  },
  {
    id: 3,
    name: 'Prof. James Etienne',
    subject: 'Biologie',
    department: 1,
    specialization: 'Professeur',
    credentials: 'Licence en Biologie Moléculaire',
    experience: '8 ans d\'enseignement',
    image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=300&h=300&fit=crop'
  },
  // Lettres
  {
    id: 4,
    name: 'Prof. Marie-Claude Beauvoir',
    subject: 'Français & Littérature',
    department: 2,
    specialization: 'Professeur',
    credentials: 'Master en Lettres Modernes',
    experience: '18 ans d\'expérience',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop'
  },
  {
    id: 5,
    name: 'Prof. Sarah Johnson',
    subject: 'Anglais',
    department: 2,
    specialization: 'Professeur',
    credentials: 'Master TESOL - Native Speaker',
    experience: '10 ans d\'enseignement',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=300&h=300&fit=crop'
  },
  {
    id: 6,
    name: 'Prof. Carlos Rodriguez',
    subject: 'Espagnol',
    department: 2,
    specialization: 'Professeur',
    credentials: 'Licence en Langues Romanes',
    experience: '7 ans d\'expérience',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=300&fit=crop'
  },
  // Sciences Humaines
  {
    id: 7,
    name: 'Prof. Jean-Baptiste Laurent',
    subject: 'Histoire & Géographie',
    department: 3,
    specialization: 'Professeur',
    credentials: 'Master en Histoire Contemporaine',
    experience: '14 ans d\'enseignement',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop'
  },
  {
    id: 8,
    name: 'Prof. Fabienne Moreau',
    subject: 'Sciences Sociales',
    department: 3,
    specialization: 'Professeur',
    credentials: 'Licence en Sociologie',
    experience: '9 ans d\'expérience',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop'
  },
  // Arts & Sports
  {
    id: 9,
    name: 'Prof. Nadège Pierre-Louis',
    subject: 'Arts Plastiques',
    department: 4,
    specialization: 'Professeur',
    credentials: 'Master en Beaux-Arts',
    experience: '11 ans d\'enseignement',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop'
  },
  {
    id: 10,
    name: 'Prof. Ricardo Joseph',
    subject: 'Éducation Physique',
    department: 4,
    specialization: 'Coach',
    credentials: 'Diplôme STAPS - Ex-athlète national',
    experience: '13 ans d\'expérience',
    image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=300&h=300&fit=crop'
  }
]

const supportStaff = [
  {
    id: 1,
    icon: 'heart',
    department: 'Service de Santé',
    head: 'Infirmière Rose-Marie Charles',
    description: 'Soins de santé et bien-être des élèves',
    services: [
      'Premiers soins et urgences',
      'Suivi médical des internes',
      'Campagnes de prévention',
      'Coordination avec les parents'
    ]
  },
  {
    id: 2,
    icon: 'book',
    department: 'Bibliothèque',
    head: 'Mme. Josette Lafleur',
    description: 'Gestion des ressources documentaires',
    services: [
      'Prêt de livres et ressources',
      'Recherche documentaire',
      'Ateliers de lecture',
      'Ressources numériques'
    ]
  },
  {
    id: 3,
    icon: 'award',
    department: 'Administration',
    head: 'M. Patrick Noel',
    description: 'Services administratifs et académiques',
    services: [
      'Inscriptions et admissions',
      'Gestion des dossiers',
      'Communication parents',
      'Organisation événements'
    ]
  },
  {
    id: 4,
    icon: 'utensils',
    department: 'Restauration',
    head: 'Chef Claude Destin',
    description: 'Préparation des repas pour la cantine',
    services: [
      'Menus équilibrés quotidiens',
      'Gestion des allergies',
      'Hygiène et sécurité alimentaire',
      'Service internat'
    ]
  },
  {
    id: 5,
    icon: 'wrench',
    department: 'Maintenance',
    head: 'M. Frantz Augustin',
    description: 'Entretien et maintenance des infrastructures',
    services: [
      'Réparations et entretien',
      'Propreté des locaux',
      'Sécurité des installations',
      'Gestion des équipements'
    ]
  },
  {
    id: 6,
    icon: 'target',
    department: 'Orientation',
    head: 'Conseillère Michèle Sanon',
    description: 'Accompagnement et orientation des élèves',
    services: [
      'Conseil scolaire',
      'Orientation professionnelle',
      'Soutien psychologique',
      'Médiation conflits'
    ]
  }
]

const filteredTeachers = computed(() => {
  return teachers.filter(teacher => teacher.department === activeTab.value)
})
</script>

<style scoped>
.leadership-section,
.teachers-section,
.support-section,
.careers-section {
  padding: 6rem 0;
}

.leadership-section {
  background: var(--bg-secondary);
}

.teachers-section {
  background: var(--bg-primary);
}

.support-section {
  background: var(--bg-secondary);
}

.careers-section {
  background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
  color: white;
}

h2 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: var(--text-primary);
}

.careers-section h2 {
  color: white;
}

.section-description {
  text-align: center;
  color: var(--text-secondary);
  font-size: 1.1rem;
  margin-bottom: 3rem;
}

.leadership-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3rem;
  margin-top: 3rem;
}

.leader-card {
  background: var(--bg-primary);
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.leader-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0,0,0,0.15);
}

.leader-image {
  margin-bottom: 1.5rem;
  text-align: center;
}

.leader-image img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid var(--primary);
}

.leader-card h3 {
  color: var(--text-primary);
  margin-bottom: 0.5rem;
  font-size: 1.3rem;
}

.leader-title {
  color: var(--primary);
  font-weight: 600;
  margin-bottom: 1rem;
}

.leader-bio {
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 1rem;
}

.leader-contact a {
  color: var(--primary);
  text-decoration: none;
  font-size: 0.9rem;
}

.department-tabs {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
  margin: 3rem 0;
}

.tab-button {
  padding: 0.8rem 1.5rem;
  border: 2px solid var(--primary);
  background: transparent;
  color: var(--text-primary);
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 600;
}

.tab-button:hover {
  background: var(--primary);
  color: white;
}

.tab-button.active {
  background: var(--primary);
  color: white;
}

.teachers-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
}

.teacher-card {
  background: var(--bg-secondary);
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.3s ease;
}

.teacher-card:hover {
  transform: translateY(-5px);
}

.teacher-image {
  position: relative;
  height: 250px;
}

.teacher-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.teacher-badge {
  position: absolute;
  top: 10px;
  right: 10px;
  background: var(--primary);
  color: white;
  padding: 0.4rem 0.8rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
}

.teacher-info {
  padding: 1.5rem;
}

.teacher-info h3 {
  color: var(--text-primary);
  margin-bottom: 0.5rem;
}

.teacher-subject {
  color: var(--primary);
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.teacher-credentials,
.teacher-experience {
  color: var(--text-secondary);
  font-size: 0.9rem;
  margin-bottom: 0.3rem;
}

.support-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.support-card {
  background: var(--bg-primary);
  padding: 2rem;
  border-radius: 12px;
  transition: transform 0.3s ease;
}

.support-card:hover {
  transform: translateY(-5px);
}

.support-icon {
  margin-bottom: 1rem;
}

.support-card h3 {
  color: var(--primary);
  margin-bottom: 0.5rem;
}

.support-head {
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 0.75rem;
}

.support-services {
  list-style: none;
  margin-top: 1rem;
}

.support-services li {
  padding: 0.4rem 0;
  color: var(--text-secondary);
  display: flex;
  align-items: start;
  gap: 0.5rem;
}

.bullet {
  color: var(--primary);
  font-weight: bold;
}

.careers-content {
  max-width: 1000px;
  margin: 0 auto;
  text-align: center;
}

.careers-content > p {
  font-size: 1.2rem;
  margin-bottom: 3rem;
  opacity: 0.95;
}

.careers-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
}

.career-benefit {
  background: rgba(255,255,255,0.1);
  padding: 2rem;
  border-radius: 12px;
  backdrop-filter: blur(10px);
}

.benefit-icon {
  margin-bottom: 1rem;
}

.career-benefit h3 {
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  color: white;
}

.career-benefit p {
  opacity: 0.9;
}

.careers-cta {
  background: rgba(255,255,255,0.15);
  padding: 3rem;
  border-radius: 12px;
  margin-top: 3rem;
  backdrop-filter: blur(10px);
}

.careers-cta h3 {
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  color: white;
}

.open-positions {
  list-style: none;
  margin: 2rem 0;
  font-size: 1.1rem;
}

.open-positions li {
  padding: 0.75rem;
  margin: 0.5rem 0;
  background: rgba(255,255,255,0.1);
  border-radius: 8px;
}

.btn-large {
  padding: 1rem 2.5rem;
  font-size: 1.1rem;
  margin-top: 1rem;
}

@media (max-width: 768px) {
  h2 {
    font-size: 1.8rem;
    text-align: left;
  }

  .section-description {
    font-size: 1rem;
    margin-bottom: 2rem;
    text-align: left;
  }

  .leadership-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .leader-image img {
    width: 120px;
    height: 120px;
  }

  .leader-card {
    padding: 1.5rem;
    text-align: left;
  }

  .department-tabs {
    flex-direction: column;
    gap: 0.75rem;
  }
  
  .tab-button {
    width: 100%;
    padding: 0.7rem 1.2rem;
    font-size: 0.95rem;
  }

  .teachers-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .teacher-image {
    height: 220px;
  }

  .support-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .support-card {
    padding: 1.5rem;
  }

  .careers-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .career-benefit {
    padding: 1.5rem;
  }

  .careers-cta {
    padding: 2rem 1.5rem;
  }

  .careers-cta h3 {
    font-size: 1.4rem;
  }

  .open-positions {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  h2 {
    text-align: left;
  }

  .section-description {
    text-align: left;
  }

  .leadership-section,
  .teachers-section,
  .support-section,
  .careers-section {
    padding: 3rem 0;
  }

  h2 {
    font-size: 1.5rem;
  }

  .careers-section h2 {
    font-size: 1.5rem;
  }

  .leader-image img {
    width: 100px;
    height: 100px;
  }

  .leader-card h3 {
    font-size: 1.1rem;
  }

  .tab-button {
    padding: 0.6rem 1rem;
    font-size: 0.9rem;
  }

  .teacher-image {
    height: 200px;
  }

  .teacher-badge {
    font-size: 0.8rem;
    padding: 0.3rem 0.6rem;
  }

  .career-benefit h3 {
    font-size: 1rem;
  }

  .careers-cta {
    padding: 1.5rem 1rem;
  }

  .careers-cta h3 {
    font-size: 1.2rem;
  }

  .open-positions li {
    font-size: 0.95rem;
    padding: 0.6rem;
  }
}
</style>
