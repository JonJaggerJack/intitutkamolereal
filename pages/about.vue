<template>
  <main>
    <Hero 
      title="À Propos de nous"
      subtitle="Découvrez l'histoire, la mission et les valeurs qui font de Institut Kamole un leader en éducation depuis 1952."
      badge="Notre Histoire"
    >
      <template #buttons>
        <NuxtLink to="/contact" class="btn btn-primary">Nous Contacter</NuxtLink>
      </template>
    </Hero>

    <!-- Brief History -->
    <section class="history-brief">
      <div class="container">
        <h2>Bref Historique de l'École</h2>
        
        <div class="history-card creation">
          <div class="history-icon"><Icon name="calendar" size="large" color="var(--secondary)" /></div>
          <div class="history-content">
            <h3>Date de Création</h3>
            <p>L'Institut KAMOLE a été créé le <strong>8 Mai 1952</strong> sur numéro d'agrément <strong>22/2962/2062</strong> par Ordonnance du Gouverneur Général de la République Démocratique du Congo.</p>
            <p>Elle a été créée par le <strong>Révérend Père HENRI VAN DEN NIEUWENHUYZEN</strong>.</p>
          </div>
        </div>

        <div class="timeline-section">
          <h3>Les Grandes Étapes</h3>
          <div class="timeline">
            <div v-for="stage in stages" :key="stage.period" class="timeline-item">
              <div class="timeline-marker"></div>
              <div class="timeline-content">
                <h4>{{ stage.period }}</h4>
                <h5>{{ stage.title }}</h5>
                <p>{{ stage.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Leadership History -->
    <section class="leadership-history">
      <div class="container">
        <h2>Succession des Chefs d'Établissement</h2>
        <p class="section-intro">À 72 ans d'existence, l'école a connu 26 dirigeants</p>
        
        <!-- Statistics -->
        <div class="leadership-stats">
          <div class="stat-item">
            <div class="stat-number">26</div>
            <div class="stat-label">Dirigeants</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">12</div>
            <div class="stat-label">Prêtres</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">14</div>
            <div class="stat-label">Laïcs</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">72</div>
            <div class="stat-label">Années</div>
          </div>
        </div>
        
        <!-- Timeline -->
        <div class="leaders-timeline">
          <div v-for="(leader, index) in leaders" :key="leader.period" class="leader-card" :class="{ 'highlighted': leader.note }">
            <div class="timeline-connector" v-if="index < leaders.length - 1"></div>
            <div class="leader-badge" :class="leader.type">
              <span v-if="leader.type === 'pretre'"><Icon name="cross" size="small" color="white" /></span>
              <span v-else><Icon name="user" size="small" color="white" /></span>
            </div>
            <div class="leader-content">
              <div class="leader-period">{{ leader.period }}</div>
              <h4>{{ leader.name }}</h4>
              <p class="leader-title">{{ leader.role }}</p>
              <p v-if="leader.note" class="leader-note">
                <span class="note-icon"><Icon name="pin" size="small" color="var(--secondary)" /></span>
                {{ leader.note }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Current Programs -->
    <section class="programs-today">
      <div class="container">
        <h2>Options Organisées</h2>
        <p class="section-description">L'école organise 4 options d'excellence</p>
        
        <div class="options-grid">
          <div v-for="option in options" :key="option.id" class="option-card">
            <div class="option-icon"><Icon :name="option.icon" size="large" color="var(--secondary)" /></div>
            <h3>{{ option.title }}</h3>
            <p>{{ option.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Internat Section -->
    <section class="internat-info">
      <div class="container">
        <div class="internat-content">
          <div class="internat-image">
            <img src="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800&h=600&fit=crop" alt="Internat">
          </div>
          <div class="internat-text">
            <h2>L'Internat</h2>
            <p><strong>L'internat a réouvert ses portes en Septembre 2023</strong> sur demande de Mgr l'Archevêque de Bukavu, François Xavier Maroy RUSENGO, avec l'implication des anciens et la bienveillance de certains notables de Kabare et autres personnes de bonne volonté.</p>
            
            <div class="internat-details">
              <div class="detail-item">
                <span class="detail-icon"><Icon name="home" size="medium" color="var(--secondary)" /></span>
                <div>
                  <h4>Réouverture</h4>
                  <p>Septembre 2023 après fermeture en 1996 (suite à la guerre de l'AFDL)</p>
                </div>
              </div>
              <div class="detail-item">
                <span class="detail-icon"><Icon name="graduation" size="medium" color="var(--secondary)" /></span>
                <div>
                  <h4>Accueil</h4>
                  <p>Actuellement réservé aux garçons</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Current Stats -->
    <section class="current-stats">
      <div class="container">
        <h2>Kamole Aujourd'hui</h2>
        <div class="stats-grid">
          <div class="stat-item">
            <div class="stat-number">916</div>
            <div class="stat-label">Élèves</div>
            <p class="stat-detail">473 garçons • 443 filles</p>
          </div>
          <div class="stat-item">
            <div class="stat-number">33</div>
            <div class="stat-label">Enseignants</div>
            <p class="stat-detail">3 femmes • 30 hommes</p>
          </div>
          <div class="stat-item">
            <div class="stat-number">72</div>
            <div class="stat-label">Ans d'Existence</div>
            <p class="stat-detail">Depuis 1952</p>
          </div>
          <div class="stat-item">
            <div class="stat-number">4</div>
            <div class="stat-label">Options</div>
            <p class="stat-detail">Programmes diversifiés</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Mission, Vision, Values -->
    <section class="values-section">
      <div class="container">
        <div class="values-grid">
          <div class="value-card">
            <div class="value-icon"><Icon name="target" size="large" color="var(--secondary)" /></div>
            <h3>Notre Mission</h3>
            <p>Former des jeunes leaders responsables, compétents et innovants, capables de contribuer activement au développement de la RDC et du monde.</p>
          </div>

          <div class="value-card">
            <div class="value-icon"><Icon name="star" size="large" color="var(--secondary)" /></div>
            <h3>Notre Vision</h3>
            <p>Être l'institution éducative de référence reconnue pour son excellence académique, son encadrement personnalisé et son impact sociétal positif.</p>
          </div>

          <div class="value-card">
            <div class="value-icon"><Icon name="award" size="large" color="var(--secondary)" /></div>
            <h3>Nos Valeurs</h3>
            <p>Ponctualité, Discipline, Travail, Excellence, Intégrité et Solidarité. Ce sont les piliers qui guident toutes nos actions.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Team Section -->
    <section class="team-section">
      <div class="container">
        <h2>Direction Actuelle</h2>
        <p class="section-description">Une équipe dévouée au service de l'excellence éducative</p>
        
        <div class="team-grid">
          <div class="team-card">
            <div class="team-image">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop" alt="Recteur">
            </div>
            <h3>Abbé BURUME BISHIKWABO Rodrigue</h3>
            <p class="team-role">Recteur</p>
            <p class="team-bio">En fonction depuis 2021. Sous sa direction, l'internat a réouvert en 2023 et l'option commerciale et gestion a été lancée.</p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'À Propos - Institut Kamole',
  ogTitle: 'À Propos de Institut Kamole',
  description: 'Découvrez l\'histoire, la mission et les valeurs de Institut Kamole depuis 1952.',
  ogDescription: 'Découvrez l\'histoire, la mission et les valeurs de Institut Kamole depuis 1952.'
})

const stages = [
  {
    period: '1952-1956',
    title: 'École Normale d\'Apprentissage Pédagogique (E.A.P)',
    description: 'Formation rapide d\'enseignants de deux ans en matière pédagogique.'
  },
  {
    period: '1957-1958',
    title: 'École Professionnelle Agricole et Horticole (EPAH)',
    description: 'Formation des Agronomes du niveau A3 pendant 1 an, créée à côté de l\'EPA.'
  },
  {
    period: '1958-1965',
    title: 'École Moyenne Pédagogique (EMP)',
    description: 'Formation d\'enseignants diplômés de 4 ans.'
  },
  {
    period: '1965-1972',
    title: 'École Normale Primaire (ENP)',
    description: 'Cycle long des Humanités Pédagogiques. Première promotion des Examens d\'État sortie en 1968.'
  },
  {
    period: '1972 à nos jours',
    title: 'Collège KAMOLE puis Institut KAMOLE',
    description: 'Évolution vers l\'institution moderne que nous connaissons aujourd\'hui.'
  }
]

const leaders = [
  { period: '1952-1958', name: 'Rév. Père HENRI VAN DEN NIEUWENHUYZEN', role: 'Directeur - EAP', type: 'pretre' },
  { period: '1958-1960', name: 'Rév. Père Georges VAN KRUNKLESSVEN', role: 'Directeur - École Moyenne Pédagogique', type: 'pretre' },
  { period: '1960-1961', name: 'Rév. Père Y. GUISSON', role: 'Directeur', type: 'pretre' },
  { period: '1961-1965', name: 'Rév. Père Pierre KNOOPS', role: 'Directeur', type: 'pretre' },
  { period: '1965-1968', name: 'Rév. Père RAISS WILLY', role: 'Directeur - ENP', type: 'pretre' },
  { period: '1968-1972', name: 'Rév. Père Roger CARBONEZ', role: 'Directeur - ENP (St François de Sales)', type: 'pretre' },
  { period: '1972-1974', name: 'Rév. Abbé KAGARAGU NTABAZA Aristide', role: 'Directeur - Collège Kamole', type: 'pretre' },
  { period: '1974-1976', name: 'M. NDIRHUHIRWE MUJUNGWE Victor', role: 'Directeur - Institut Kamole', type: 'laic' },
  { period: '1976-1977', name: 'M. MUSHAGASHA CAKIRWA Pierre', role: 'Préfet', type: 'laic' },
  { period: '1977-1978', name: 'KUSINZ KULIMUSHI MEDARD', role: 'Préfet', type: 'laic' },
  { period: '1978-1980', name: 'MUFUNGIZI MIGABO Xavier', role: 'Préfet', type: 'laic' },
  { period: '1980-1983', name: 'BUHENDWA NYANTANGA Dénis', role: 'Préfet', type: 'laic' },
  { period: '12-20 Sept 1983', name: 'MITIMA MPANANO Rémy', role: 'Préfet', type: 'laic' },
  { period: '1983-1985', name: 'MARHEGANE BISHANVU Pascal', role: 'Préfet', type: 'laic' },
  { period: '1985-Oct 1986', name: 'BIRINGANINE KALENDE Maurice', role: 'Préfet', type: 'laic' },
  { period: 'Oct 1986-1987', name: 'MIGABO NYAMUGUKA KANGE Emmanuel', role: 'Préfet', type: 'laic' },
  { period: '1987-1990', name: 'MAHESHE MUSOLE BIN RUHANA Venant', role: 'Préfet', type: 'laic' },
  { period: '1990-1996', name: 'KAYEYE BIN RAMAZANI Michel', role: 'Préfet', type: 'laic' },
  { period: '1996-2001', name: 'KAHUYEGE NZONGA Benoit Martin', role: 'Préfet', type: 'laic' },
  { period: '2001-2006', name: 'MAHESHE MUSOLE Venant de Marie', role: 'Préfet', type: 'laic', note: 'Modification de l\'ordonnance d\'agrément par arrêté ministériel N°MINEPSP/CABMIN 0610/2005 du 21 Février 2005' },
  { period: '2006-2010', name: 'Abbé SHAMAVU RUDAHABA Léon', role: 'Recteur', type: 'pretre', note: 'Reconnaissance de la section sociale par arrêté N°MINEPSP/CABM/0327/2010' },
  { period: '2010-2014', name: 'Abbé Rogatien MASIRIKA CIRHAKARHULA', role: 'Recteur', type: 'pretre' },
  { period: '2014-2016', name: 'Abbé RWIZIBUKA MUPENDA Dieudonné', role: 'Recteur', type: 'pretre' },
  { period: '2016-2021', name: 'Abbé MURHABAZI BALOLA Jean-Pierre', role: 'Recteur', type: 'pretre', note: 'Construction d\'un nouveau bâtiment de 7 classes et 2 bureaux pour la section sociale' },
  { period: '2021 à nos jours', name: 'Abbé BURUME BISHIKWABO Rodrigue', role: 'Recteur', type: 'pretre', note: 'Réouverture de l\'internat en septembre 2023 et création de l\'option commerciale et gestion' }
]

const options = [
  {
    id: 1,
    icon: 'book',
    title: 'L\'Éducation de Base',
    description: 'Ancien cycle d\'orientation, fondation solide pour tous les élèves.'
  },
  {
    id: 2,
    icon: 'graduation',
    title: 'Humanités Pédagogiques',
    description: 'Formation des futurs enseignants avec excellence académique.'
  },
  {
    id: 3,
    icon: 'users',
    title: 'Humanités Techniques Sociales',
    description: 'Préparation aux métiers du social et de l\'accompagnement.'
  },
  {
    id: 4,
    icon: 'award',
    title: 'Humanités Commerciales et Gestion',
    description: 'Nouvelle option pour former les gestionnaires et commerciaux de demain.'
  }
]
</script>

<style scoped>
.history-brief {
  padding: 6rem 0;
  background: var(--bg-primary);
}

.history-brief h2 {
  text-align: center;
  font-size: 2.5rem;
  color: var(--primary);
  margin-bottom: 3rem;
}

.history-card {
  background: var(--bg-secondary);
  padding: 2.5rem;
  border-radius: 12px;
  margin-bottom: 3rem;
  display: flex;
  gap: 2rem;
  align-items: start;
}

.history-icon {
  flex-shrink: 0;
}

.history-content h3 {
  color: var(--primary);
  font-size: 1.8rem;
  margin-bottom: 1rem;
}

.history-content p {
  color: var(--text-secondary);
  line-height: 1.8;
  margin-bottom: 0.75rem;
}

.timeline-section {
  margin-top: 4rem;
}

.timeline-section h3 {
  text-align: center;
  font-size: 2rem;
  color: var(--primary);
  margin-bottom: 3rem;
}

.timeline {
  position: relative;
  padding-left: 2rem;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 3px;
  background: linear-gradient(to bottom, var(--primary), var(--secondary));
}

.timeline-item {
  position: relative;
  padding-bottom: 2.5rem;
}

.timeline-marker {
  position: absolute;
  left: -2.5rem;
  top: 0.5rem;
  width: 1rem;
  height: 1rem;
  background: var(--accent);
  border-radius: 50%;
  border: 3px solid white;
  box-shadow: 0 0 0 3px var(--primary);
}

.timeline-content {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.08);
}

.timeline-content h4 {
  color: var(--secondary);
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.timeline-content h5 {
  color: var(--primary);
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
}

.timeline-content p {
  color: var(--text-secondary);
  line-height: 1.6;
}

.leadership-history {
  padding: 6rem 0;
  background: linear-gradient(to bottom, var(--bg-secondary) 0%, var(--bg-primary) 100%);
}

.leadership-history h2 {
  text-align: center;
  font-size: 2.5rem;
  color: var(--primary);
  margin-bottom: 1rem;
}

.section-intro {
  text-align: center;
  color: var(--text-secondary);
  font-size: 1.2rem;
  max-width: 800px;
  margin: 0 auto 2rem;
  line-height: 1.6;
}

.leadership-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 2rem;
  max-width: 800px;
  margin: 0 auto 4rem;
  padding: 2rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

.stat-item {
  text-align: center;
}

.stat-number {
  font-size: 3rem;
  font-weight: 700;
  color: var(--primary);
  line-height: 1;
  margin-bottom: 0.5rem;
}

.stat-label {
  color: var(--text-secondary);
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 600;
}

.leaders-timeline {
  max-width: 1000px;
  margin: 0 auto;
  position: relative;
  padding-left: 80px;
}

.leaders-timeline::before {
  content: '';
  position: absolute;
  left: 32px;
  top: 0;
  bottom: 0;
  width: 3px;
  background: linear-gradient(to bottom, var(--primary), var(--secondary));
}

.leader-card {
  position: relative;
  background: white;
  padding: 1.5rem 2rem;
  border-radius: 12px;
  margin-bottom: 2rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
}

.leader-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
}

.leader-card.highlighted {
  border-left: 4px solid var(--accent);
  background: linear-gradient(to right, rgba(251, 193, 2, 0.05), white);
}

.timeline-connector {
  position: absolute;
  left: -48px;
  top: 50%;
  width: 16px;
  height: 2px;
  background: var(--secondary);
}

.leader-badge {
  position: absolute;
  left: -62px;
  top: 1.5rem;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  z-index: 2;
}

.leader-badge.pretre {
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  color: white;
}

.leader-badge.laic {
  background: white;
  color: var(--primary);
  border: 2px solid var(--primary);
}

.leader-content {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.leader-period {
  color: var(--secondary);
  font-weight: 700;
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.leader-content h4 {
  color: var(--primary);
  font-size: 1.15rem;
  margin: 0;
}

.leader-title {
  color: var(--accent);
  font-weight: 600;
  font-size: 0.95rem;
  margin: 0;
}

.leader-note {
  color: var(--text-secondary);
  font-size: 0.9rem;
  margin-top: 0.5rem;
  padding: 1rem;
  background: rgba(251, 193, 2, 0.08);
  border-radius: 8px;
  line-height: 1.6;
  display: flex;
  gap: 0.5rem;
  align-items: start;
}

.note-icon {
  flex-shrink: 0;
  font-size: 1rem;
}

.programs-today {
  padding: 6rem 0;
  background: var(--bg-primary);
}

.programs-today h2 {
  text-align: center;
  font-size: 2.5rem;
  color: var(--primary);
  margin-bottom: 1rem;
}

.section-description {
  text-align: center;
  color: var(--text-secondary);
  font-size: 1.1rem;
  margin-bottom: 3rem;
}

.options-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.option-card {
  background: white;
  padding: 2.5rem;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.option-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
}

.option-icon {
  margin-bottom: 1rem;
}

.option-card h3 {
  color: var(--primary);
  font-size: 1.3rem;
  margin-bottom: 0.75rem;
}

.option-card p {
  color: var(--text-secondary);
  line-height: 1.6;
}

.internat-info {
  padding: 6rem 0;
  background: var(--bg-secondary);
}

.internat-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.internat-image img {
  width: 100%;
  border-radius: 12px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
}

.internat-text h2 {
  font-size: 2.5rem;
  color: var(--primary);
  margin-bottom: 1.5rem;
}

.internat-text p {
  color: var(--text-secondary);
  line-height: 1.8;
  margin-bottom: 2rem;
}

.internat-details {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.detail-item {
  display: flex;
  gap: 1rem;
  align-items: start;
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
}

.detail-icon {
  font-size: 2rem;
  flex-shrink: 0;
}

.detail-item h4 {
  color: var(--primary);
  margin-bottom: 0.3rem;
}

.detail-item p {
  margin: 0;
  color: var(--text-secondary);
  line-height: 1.5;
}

.current-stats {
  padding: 6rem 0;
  background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
  color: white;
}

.current-stats h2 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: white;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 2rem;
}

.stat-item {
  text-align: center;
  background: rgba(255, 255, 255, 0.1);
  padding: 2.5rem 1.5rem;
  border-radius: 12px;
  backdrop-filter: blur(10px);
}

.stat-number {
  font-size: 3.5rem;
  font-weight: 800;
  color: var(--accent);
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.stat-detail {
  opacity: 0.9;
  font-size: 0.95rem;
}

.values-section {
  padding: 6em 0;
  background: var(--bg-primary);
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.value-card {
  background: white;
  padding: 2.5rem;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
}

.value-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
}

.value-icon {
  margin-bottom: 1rem;
}

.value-card h3 {
  color: var(--primary);
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.value-card p {
  color: var(--text);
  line-height: 1.7;
}

.team-section {
  padding: 6em 0;
  background: var(--bg-secondary);
}

.team-section h2 {
  font-size: 2.5rem;
  color: var(--primary);
  text-align: center;
  margin-bottom: 1rem;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2.5rem;
  max-width: 500px;
  margin: 0 auto;
}

.team-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
}

.team-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
}

.team-image {
  width: 100%;
  height: 300px;
  overflow: hidden;
}

.team-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.team-card h3 {
  color: var(--primary);
  padding: 1.5rem 1.5rem 0;
  margin: 0;
  font-size: 1.4rem;
}

.team-role {
  color: var(--accent);
  font-weight: 600;
  padding: 0 1.5rem;
  margin: 0.5rem 0 1rem;
  font-size: 1rem;
  text-transform: uppercase;
}

.team-bio {
  color: var(--text);
  padding: 0 1.5rem 1.5rem;
  margin: 0;
  line-height: 1.6;
  font-size: 0.95rem;
}

@media (max-width: 768px) {
  .history-brief,
  .leadership-history,
  .programs-today,
  .internat-info,
  .current-stats,
  .values-section,
  .team-section {
    padding: 3rem 0;
  }

  .history-brief h2,
  .leadership-history h2,
  .programs-today h2,
  .internat-text h2,
  .current-stats h2,
  .team-section h2 {
    font-size: 1.8rem;
  }

  .history-card {
    flex-direction: column;
    padding: 2rem;
    gap: 1rem;
  }

  .history-icon {
    font-size: 3rem;
  }

  .timeline {
    padding-left: 1.5rem;
  }

  .timeline-marker {
    left: -2rem;
  }

  .leadership-stats {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    padding: 1.5rem;
  }

  .stat-number {
    font-size: 2rem;
  }

  .stat-label {
    font-size: 0.8rem;
  }

  .leaders-timeline {
    padding-left: 50px;
  }

  .leaders-timeline::before {
    left: 16px;
  }

  .leader-badge {
    left: -46px;
    width: 28px;
    height: 28px;
    font-size: 0.9rem;
  }

  .timeline-connector {
    left: -32px;
  }

  .leader-card {
    padding: 1.2rem 1.5rem;
  }

  .leader-content h4 {
    font-size: 1rem;
  }

  .leader-title {
    font-size: 0.85rem;
  }

  .leader-note {
    font-size: 0.85rem;
    padding: 0.8rem;
  }

  .options-grid,
  .values-grid {
    grid-template-columns: 1fr;
  }

  .internat-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .internat-image {
    order: -1;
  }

  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }

  .stat-number {
    font-size: 2.5rem;
  }

  .stat-label {
    font-size: 1.1rem;
  }

  .team-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .history-brief,
  .leadership-history,
  .programs-today,
  .internat-info,
  .current-stats,
  .values-section,
  .team-section {
    padding: 2.5rem 0;
  }

  .history-brief h2,
  .leadership-history h2,
  .programs-today h2,
  .internat-text h2,
  .current-stats h2,
  .team-section h2 {
    font-size: 1.5rem;
  }

  .leadership-stats {
    grid-template-columns: repeat(2, 1fr);
    gap: 0.8rem;
    padding: 1rem;
  }

  .stat-number {
    font-size: 1.8rem;
  }

  .stat-label {
    font-size: 0.75rem;
  }

  .leaders-timeline {
    padding-left: 40px;
  }

  .leaders-timeline::before {
    left: 12px;
    width: 2px;
  }

  .leader-badge {
    left: -38px;
    width: 24px;
    height: 24px;
    font-size: 0.75rem;
  }

  .timeline-connector {
    left: -26px;
    width: 12px;
  }

  .leader-card {
    padding: 1rem;
  }

  .leader-period {
    font-size: 0.75rem;
  }

  .leader-content h4 {
    font-size: 0.95rem;
  }

  .leader-title {
    font-size: 0.8rem;
  }

  .leader-note {
    font-size: 0.8rem;
    padding: 0.7rem;
  }

  .history-card {
    padding: 1.5rem;
  }

  .history-icon,
  .option-icon,
  .value-icon {
    font-size: 2.5rem;
  }

  .timeline-content h5 {
    font-size: 1.1rem;
  }

  .leader-card {
    padding: 1.2rem;
  }

  .stats-grid {
    grid-template-columns: 1fr;
  }

  .stat-number {
    font-size: 2.2rem;
  }

  .detail-icon {
    font-size: 1.75rem;
  }

  .team-image {
    height: 250px;
  }

  .section-intro,
  .section-description {
    font-size: 1rem;
  }
}
</style>
