<template>
  <main>
    <Hero 
      title="Nos Facultés & Programmes"
      subtitle="Explorez nos formations académiques professionnelles et modernes"
      badge="Formations Académiques"
    >
      <template #buttons>
        <NuxtLink to="/contact" class="btn btn-primary">Demande d'Admission</NuxtLink>
      </template>
    </Hero>

    <!-- Programs Overview -->
    <section class="programs-section">
      <div class="container">
        <h2>Nos Programmes Académiques</h2>
        <p class="section-description">Des programmes complets du primaire au secondaire</p>
        
        <div class="programs-grid">
          <div v-for="program in programs" :key="program.id" class="program-card">
            <div class="program-icon"><Icon :name="program.icon" size="xlarge" color="var(--secondary)" /></div>
            <h3>{{ program.title }}</h3>
            <p class="program-level">{{ program.level }}</p>
            <p>{{ program.description }}</p>
            <ul class="program-features">
              <li v-for="(feature, index) in program.features" :key="index">
                <span class="check">✓</span> {{ feature }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Departments -->
    <section class="departments-section">
      <div class="container">
        <h2>Nos Départements</h2>
        <p class="section-description">Excellence dans chaque discipline</p>
        
        <div class="departments-grid">
          <div v-for="dept in departments" :key="dept.id" class="department-card">
            <div class="department-header" :style="{ background: dept.color }">
              <span class="department-icon"><Icon :name="dept.icon" size="large" color="white" /></span>
              <h3>{{ dept.name }}</h3>
            </div>
            <div class="department-content">
              <p>{{ dept.description }}</p>
              <div class="department-subjects">
                <h4>Matières enseignées :</h4>
                <div class="subject-tags">
                  <span v-for="(subject, index) in dept.subjects" :key="index" class="subject-tag">
                    {{ subject }}
                  </span>
                </div>
              </div>
              <div class="department-head">
                <strong>Chef de département :</strong> {{ dept.head }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Curriculum Features -->
    <section class="curriculum-section">
      <div class="container">
        <h2>Notre Approche Pédagogique</h2>
        
        <div class="curriculum-grid">
          <div class="curriculum-item">
            <div class="curriculum-icon"><Icon name="target" size="large" color="var(--secondary)" /></div>
            <h3>Apprentissage Personnalisé</h3>
            <p>Chaque élève bénéficie d'un suivi individualisé pour maximiser son potentiel.</p>
          </div>
          
          <div class="curriculum-item">
            <div class="curriculum-icon"><Icon name="laptop" size="large" color="var(--secondary)" /></div>
            <h3>Technologies Modernes</h3>
            <p>Intégration des outils numériques et plateformes d'apprentissage interactives.</p>
          </div>
          
          <div class="curriculum-item">
            <div class="curriculum-icon"><Icon name="globe" size="large" color="var(--secondary)" /></div>
            <h3>Ouverture Internationale</h3>
            <p>Programmes bilingues (français/anglais) et échanges culturels.</p>
          </div>
          
          <div class="curriculum-item">
            <div class="curriculum-icon"><Icon name="lab" size="large" color="var(--secondary)" /></div>
            <h3>Approche Pratique</h3>
            <p>Expériences en laboratoire, projets concrets et sorties pédagogiques.</p>
          </div>
          
          <div class="curriculum-item">
            <div class="curriculum-icon"><Icon name="trophy" size="large" color="var(--secondary)" /></div>
            <h3>Excellence Académique</h3>
            <p>Préparation rigoureuse aux examens nationaux et internationaux.</p>
          </div>
          
          <div class="curriculum-item">
            <div class="curriculum-icon"><Icon name="users" size="large" color="var(--secondary)" /></div>
            <h3>Développement Holistique</h3>
            <p>Formation académique, sportive, artistique et citoyenne.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Success Stats -->
    <section class="success-section">
      <div class="container">
        <h2>Nos Résultats</h2>
        <p class="section-description">La preuve de notre excellence</p>
        
        <div class="stats-grid">
          <div class="stat-card">
            <div class="stat-number">98%</div>
            <div class="stat-label">Taux de Réussite</div>
            <p>aux examens d'état</p>
          </div>
          
          <div class="stat-card">
            <div class="stat-number">92%</div>
            <div class="stat-label">Mentions</div>
            <p>très bien & bien</p>
          </div>
          
          <div class="stat-card">
            <div class="stat-number">15+</div>
            <div class="stat-label">Années</div>
            <p>d'excellence académique</p>
          </div>
          
          <div class="stat-card">
            <div class="stat-number">500+</div>
            <div class="stat-label">Diplômés</div>
            <div class="stat-label">Diplômés</div>
            <p>en universités prestigieuses</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Admission Process -->
    <section class="admission-section">
      <div class="container">
        <h2>Processus d'Admission</h2>
        
        <div class="admission-steps">
          <div v-for="(step, index) in admissionSteps" :key="index" class="admission-step">
            <div class="step-number">{{ index + 1 }}</div>
            <div class="step-content">
              <h3>{{ step.title }}</h3>
              <p>{{ step.description }}</p>
            </div>
          </div>
        </div>
        
        <div class="admission-cta">
          <h3>Prêt à rejoindre Institut Kamole?</h3>
          <NuxtLink to="/contact" class="btn btn-primary btn-large">Commencer Votre Inscription</NuxtLink>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Facultés & Programmes - Institut Kamole',
  description: 'Découvrez nos programmes académiques, départements et notre approche pédagogique d\'excellence.'
})

const programs = [
  {
    id: 1,
    icon: 'book',
    title: 'Enseignement Primaire',
    level: '1ère à 6ème année fondamentale',
    description: 'Fondation solide en lecture, écriture, mathématiques et sciences.',
    features: [
      'Classes à effectif réduit',
      'Méthodes pédagogiques modernes',
      'Éveil artistique et sportif',
      'Suivi personnalisé'
    ]
  },
  {
    id: 2,
    icon: 'graduation',
    title: 'Enseignement Secondaire',
    level: '7ème à 9ème année fondamentale',
    description: 'Approfondissement des connaissances et développement de l\'esprit critique.',
    features: [
      'Programmes enrichis',
      'Laboratoires scientifiques',
      'Initiation à l\'informatique',
      'Langues étrangères'
    ]
  },
  {
    id: 3,
    icon: 'trophy',
    title: 'Cycle Terminal',
    level: 'Rhéto, Philo, Math Elem',
    description: 'Préparation intensive aux examens d\'état et à l\'enseignement supérieur.',
    features: [
      'Spécialisations scientifiques',
      'Orientation universitaire',
      'Examens blancs réguliers',
      'Conseil d\'orientation'
    ]
  }
]

const departments = [
  {
    id: 1,
    name: 'Sciences & Mathématiques',
    icon: 'lab',
    color: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    description: 'Formation rigoureuse en sciences exactes avec des laboratoires modernes.',
    subjects: ['Mathématiques', 'Physique', 'Chimie', 'Biologie', 'Informatique'],
    head: 'Dr. Marc Antoine Dufief'
  },
  {
    id: 2,
    name: 'Lettres & Langues',
    icon: 'book',
    color: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    description: 'Maîtrise du français, de l\'anglais et développement des compétences littéraires.',
    subjects: ['Français', 'Anglais', 'Espagnol', 'Littérature', 'Philosophie'],
    head: 'Prof. Marie-Claude Beauvoir'
  },
  {
    id: 3,
    name: 'Sciences Humaines',
    icon: 'globe',
    color: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    description: 'Compréhension du monde, de l\'histoire et des sociétés.',
    subjects: ['Histoire', 'Géographie', 'Sciences Sociales', 'Économie', 'Civisme'],
    head: 'Prof. Jean-Baptiste Laurent'
  },
  {
    id: 4,
    name: 'Arts & Sports',
    icon: 'palette',
    color: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    description: 'Développement de la créativité et du bien-être physique.',
    subjects: ['Arts Plastiques', 'Musique', 'Éducation Physique', 'Théâtre', 'Danse'],
    head: 'Prof. Nadège Pierre-Louis'
  }
]

const admissionSteps = [
  {
    title: 'Demande d\'Information',
    description: 'Contactez-nous ou remplissez le formulaire en ligne pour recevoir notre dossier d\'admission.'
  },
  {
    title: 'Visite du Campus',
    description: 'Planifiez une visite guidée pour découvrir nos installations et rencontrer notre équipe.'
  },
  {
    title: 'Dossier d\'Inscription',
    description: 'Soumettez votre dossier complet avec les documents requis (bulletins, acte de naissance, photos).'
  },
  {
    title: 'Test d\'Admission',
    description: 'Passez notre évaluation pour déterminer le niveau approprié (selon le cycle).'
  },
  {
    title: 'Entretien',
    description: 'Rencontre avec la direction académique pour discuter des objectifs et attentes.'
  },
  {
    title: 'Confirmation',
    description: 'Recevez votre lettre d\'acceptation et finalisez votre inscription.'
  }
]
</script>

<style scoped>
.programs-section,
.curriculum-section,
.admission-section {
  padding: 6rem 0;
  background: var(--bg-secondary);
}

.departments-section,
.success-section {
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

.programs-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.program-card {
  background: var(--bg-primary);
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.program-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0,0,0,0.15);
}

.program-icon {
  font-size: 3.5rem;
  margin-bottom: 1rem;
}

.program-card h3 {
  color: var(--primary);
  margin-bottom: 0.5rem;
}

.program-level {
  color: var(--secondary);
  font-weight: 600;
  margin-bottom: 1rem;
}

.program-features {
  list-style: none;
  text-align: left;
  margin-top: 1.5rem;
}

.program-features li {
  padding: 0.5rem 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.check {
  color: var(--primary);
  font-weight: bold;
  font-size: 1.2rem;
}

.departments-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.department-card {
  background: var(--bg-secondary);
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.3s ease;
}

.department-card:hover {
  transform: translateY(-5px);
}

.department-header {
  padding: 2rem;
  color: white;
  text-align: center;
}

.department-icon {
  font-size: 3rem;
  display: block;
  margin-bottom: 0.5rem;
}

.department-header h3 {
  color: white;
  font-size: 1.5rem;
}

.department-content {
  padding: 1.5rem;
}

.department-subjects {
  margin: 1.5rem 0;
}

.department-subjects h4 {
  color: var(--text-primary);
  margin-bottom: 0.75rem;
  font-size: 0.95rem;
}

.subject-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.subject-tag {
  background: var(--bg-primary);
  padding: 0.4rem 0.8rem;
  border-radius: 20px;
  font-size: 0.85rem;
  color: var(--text-secondary);
  border: 1px solid #e0e0e0;
}

.department-head {
  color: var(--text-secondary);
  font-size: 0.9rem;
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid #e0e0e0;
}

.curriculum-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.curriculum-item {
  background: var(--bg-primary);
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
}

.curriculum-icon {
  margin-bottom: 1rem;
}

.curriculum-item h3 {
  color: var(--primary);
  margin-bottom: 0.75rem;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.stat-card {
  background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
  color: white;
  padding: 2.5rem 1.5rem;
  border-radius: 12px;
  text-align: center;
}

.stat-number {
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
}

.stat-card p {
  opacity: 0.9;
  font-size: 0.9rem;
}

.admission-steps {
  max-width: 800px;
  margin: 3rem auto;
}

.admission-step {
  display: flex;
  gap: 2rem;
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: var(--bg-primary);
  border-radius: 12px;
  align-items: start;
}

.step-number {
  width: 50px;
  height: 50px;
  background: var(--primary);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: bold;
  flex-shrink: 0;
}

.step-content h3 {
  color: var(--primary);
  margin-bottom: 0.5rem;
}

.admission-cta {
  text-align: center;
  margin-top: 4rem;
  padding: 3rem;
  background: var(--bg-primary);
  border-radius: 12px;
}

.admission-cta h3 {
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
}

.btn-large {
  padding: 1rem 2.5rem;
  font-size: 1.1rem;
}

@media (max-width: 768px) {
  h2 {
    font-size: 1.8rem;
  }

  .section-description {
    font-size: 1rem;
    margin-bottom: 2rem;
  }

  .programs-grid,
  .departments-grid,
  .curriculum-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .program-card,
  .department-card,
  .curriculum-item {
    padding: 1.5rem;
  }

  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }

  .stat-card {
    padding: 2rem 1rem;
  }

  .stat-number {
    font-size: 2.5rem;
  }

  .stat-label {
    font-size: 1rem;
  }

  .admission-step {
    flex-direction: column;
    text-align: center;
    padding: 1.2rem;
  }
  
  .step-number {
    margin: 0 auto 1rem;
  }

  .admission-cta {
    padding: 2rem 1.5rem;
  }

  .admission-cta h3 {
    font-size: 1.4rem;
  }
}

@media (max-width: 480px) {
  .programs-section,
  .departments-section,
  .curriculum-section,
  .success-section,
  .admission-section {
    padding: 3rem 0;
  }

  h2 {
    font-size: 1.5rem;
  }

  .program-icon,
  .curriculum-icon {
    font-size: 2.5rem;
  }

  .department-icon {
    font-size: 2.5rem;
  }

  .stats-grid {
    grid-template-columns: 1fr;
    gap: 1.2rem;
  }

  .stat-card {
    padding: 1.5rem 1rem;
  }

  .stat-number {
    font-size: 2.2rem;
  }

  .subject-tags {
    gap: 0.4rem;
  }

  .subject-tag {
    font-size: 0.8rem;
    padding: 0.3rem 0.6rem;
  }

  .step-number {
    width: 45px;
    height: 45px;
    font-size: 1.3rem;
  }
}
</style>
