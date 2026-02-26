<template>
  <main>
    <!-- Hero Section -->
    <Hero 
      title="Façonnons l'Avenir des Meilleurs Élèves"
      subtitle="Collège prestigieux offrant une éducation d'excellence combinée à un cadre de vie stimulant. Développez vos talents académiques et personnels depuis 1952."
      badge="Excellence Académique depuis 1952"
    >
      <template #buttons>
        <NuxtLink to="/contact" class="btn btn-primary">Demander une Admission</NuxtLink>
        <a href="#programs" class="btn btn-secondary">En Savoir Plus ↓</a>
      </template>
    </Hero>

    <!-- Stats Section -->
    <StatsSection />

    <!-- Features Section -->
    <FeaturesSection />

    <!-- About Section -->
    <section class="about-section">
      <div class="container">
        <div class="about-grid">
          <div class="about-text">
            <span class="badge">Qui Sommes-Nous?</span>
            <h2>L'Excellence en Action depuis 72 Ans</h2>
            <p>Institut Kamole / Collège St François de Sales est bien plus qu'une école. C'est une communauté dédiée à l'épanouissement académique et personnel de chaque élève. Depuis 1952, nous formons les leaders de demain en République Démocratique du Congo.</p>
            
            <div class="about-highlights">
              <div class="highlight">
                <h4>Éducation Holistique</h4>
                <p>Nous développons l'esprit critique, la créativité et le leadership.</p>
              </div>
              <div class="highlight">
                <h4>Perspective Globale</h4>
                <p>Programmes alignés aux normes internationales pour une meilleure insertion.</p>
              </div>
              <div class="highlight">
                <h4>Encadrement Personnel</h4>
                <p>Suivi individualisé pour chaque élève et sa trajectoire académique.</p>
              </div>
            </div>

            <NuxtLink to="/about" class="btn btn-primary">En Savoir Plus →</NuxtLink>
          </div>

          <div class="about-image">
            <!-- Placez votre image dans /public/images/about-school.jpg -->
            <div class="image-placeholder">
              <p>Ajoutez votre image: /public/images/about-school.jpg</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Programs Section -->
    <section id="programs" class="programs-section">
      <div class="container">
        <div class="section-header text-center">
          <span class="badge">Formations de Qualité</span>
          <h2>Nos Programmes & Formations</h2>
          <p>Des cursus académiques complets et modernes, préparant les élèves aux enjeux du 21e siècle</p>
        </div>

        <div class="programs-grid">
          <div 
            v-for="program in programs" 
            :key="program.id"
            class="program-card"
          >
            <Icon :name="program.icon" size="xlarge" color="white" class="program-icon" />
            <h3>{{ program.title }}</h3>
            <p>{{ program.description }}</p>
            <ul class="program-list">
              <li v-for="item in program.items" :key="item">
                <Icon name="check" size="small" color="var(--accent)" />
                {{ item }}
              </li>
            </ul>
          </div>
        </div>

        <div class="text-center">
          <NuxtLink to="/faculty" class="btn btn-large">Voir Tous Les Programmes →</NuxtLink>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container">
        <h2>Prêt à Rejoindre Institut Kamole?</h2>
        <p>Rejoignez une communauté d'excellence où chaque élève est valorisé et accompagné vers la réussite</p>
        <div class="cta-buttons">
          <NuxtLink to="/contact" class="btn btn-cta-primary">Demander Une Admission</NuxtLink>
          <NuxtLink to="/contact" class="btn btn-cta-secondary">Nous Contacter</NuxtLink>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
const programs = [
  {
    id: 1,
    icon: 'book',
    title: 'Lettres & Humanités',
    description: 'Littérature, philosophie, histoire pour former les penseurs critiques.',
    items: ['Littérature Française', 'Philosophie', 'Histoire & Géographie', 'Langues Étrangères']
  },
  {
    id: 2,
    icon: 'lightbulb',
    title: 'Sciences Exactes',
    description: 'Mathématiques, physique et chimie pour les futurs scientifiques.',
    items: ['Mathématiques', 'Physique', 'Chimie', 'Biologie']
  },
  {
    id: 4,
    icon: 'award',
    title: 'Commerce & Gestion',
    description: 'Économie et gestion pour les futurs leaders entrepreneuriaux.',
    items: ['Économie', 'Gestion d\'Entreprise', 'Comptabilité', 'Gestion Financière']
  },
  {
    id: 5,
    icon: 'heart',
    title: 'Santé & Sciences',
    description: 'Médecine et sciences de la santé pour les futurs professionnels.',
    items: ['Biologie Médicale', 'Chimie de Santé', 'Santé Publique', 'Génétique']
  }
]

</script>

<style scoped>
.about-section {
  padding: 8em 0;
  background: #f8f9fa;
}

.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.about-text .badge {
  color: var(--accent);
  font-size: 0.9rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  display: block;
  margin-bottom: 1rem;
}

.about-text h2 {
  font-size: 2.8rem;
  color: var(--primary);
  margin-bottom: 1.5rem;
}

.about-text p {
  color: var(--text);
  line-height: 1.8;
  margin-bottom: 2rem;
  font-size: 1.1rem;
}

.about-highlights {
  display: grid;
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.highlight {
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #eee;
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
}

.highlight h4 {
  color: var(--primary);
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
}

.highlight p {
  color: var(--text);
  margin: 0;
  font-size: 0.95rem;
}

.about-image img {
  border-radius: 12px;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
}

.image-placeholder {
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  border-radius: 12px;
  padding: 4rem 2rem;
  text-align: center;
  border: 2px dashed #dee2e6;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.image-placeholder p {
  color: var(--text);
  font-size: 0.9rem;
  margin: 0;
}

.programs-section {
  padding: 9em 0;
  background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
  color: white;
}

.section-header {
  margin-bottom: 4rem;
}

.section-header .badge {
  color: var(--accent);
  font-size: 0.9rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  display: inline-block;
  margin-bottom: 1rem;
}

.section-header h2 {
  font-size: 2.8rem;
  color: white;
  margin: 1rem 0;
}

.section-header p {
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.1rem;
  max-width: 700px;
  margin: 1rem auto;
}

.programs-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-bottom: 3rem;
}

.program-card {
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.15);
  border-radius: 16px;
  padding: 2.5rem;
  color: white;
  transition: all 0.3s ease;
  cursor: pointer;
}

.program-card:hover {
  transform: translateY(-8px);
  background: rgba(251, 193, 2, 0.2);
  border-color: var(--accent);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
}

.program-icon {
  margin-bottom: 1.2rem;
}

.program-card h3 {
  color: var(--accent);
  font-size: 1.6rem;
  margin: 0 0 1rem 0;
  font-weight: 700;
}

.program-card p {
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.7;
  margin: 1rem 0;
}

.program-list {
  list-style: none;
  padding: 0;
  margin-top: 1.5rem;
}

.program-list li {
  margin-bottom: 0.7rem;
  display: flex;
  align-items: center;
  gap: 0.7rem;
  color: rgba(255, 255, 255, 0.85);
}

.cta-section {
  padding: 8em 0;
  background: #ffffff;
  text-align: center;
  position: relative;
  overflow: hidden;
  border-top: 1px solid #e9ecef;
}

.cta-section h2 {
  font-size: 2.8rem;
  color: var(--primary);
  margin-bottom: 1rem;
}

.cta-section p {
  color: #555f6e;
  font-size: 1.2rem;
  margin-bottom: 2.5rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

.cta-buttons {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
}

/* Button Styles */
.btn {
  display: inline-block;
  padding: 1.2rem 3rem;
  border-radius: 50px;
  font-weight: 700;
  font-size: 1.1rem;
  text-decoration: none;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
}

.btn-primary {
  background: linear-gradient(135deg, var(--accent) 0%, #F59E0B 100%);
  color: var(--primary);
  box-shadow: 0 10px 30px rgba(251, 193, 2, 0.3);
}

.btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 40px rgba(251, 193, 2, 0.4);
}

.btn-secondary {
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border: 2px solid white;
}

.btn-secondary:hover {
  background: white;
  color: var(--primary);
}

.btn-large {
  background: white;
  color: var(--primary);
  font-size: 1.1rem;
}

.btn-large:hover {
  background: var(--accent);
  color: var(--primary);
  transform: scale(1.05);
}

.btn-cta-primary {
  background: var(--accent);
  color: var(--primary);
  box-shadow: 0 10px 30px rgba(251, 193, 2, 0.3);
}

.btn-cta-primary:hover {
  background: white;
  color: var(--primary);
  border: 2px solid var(--primary);
  transform: scale(1.05);
}

.btn-cta-secondary {
  background: transparent;
  color: var(--primary);
  border: 2px solid var(--primary);
}

.btn-cta-secondary:hover {
  background: var(--primary);
  color: white;
  transform: scale(1.05);
}

.carousel-item {
  width: 100%;
}

.carousel-card {
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.carousel-card:hover {
  transform: scale(1.02);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
}

.carousel-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.carousel-card-content {
  padding: 1.5rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.carousel-date {
  font-size: 0.8rem;
  color: var(--accent);
  font-weight: 600;
  text-transform: uppercase;
  margin-bottom: 0.5rem;
}

.carousel-card h4 {
  color: var(--primary);
  margin: 0.5rem 0;
  font-size: 1.1rem;
}

.carousel-card p {
  color: var(--text);
  font-size: 0.9rem;
  margin: 0;
  line-height: 1.6;
}

.text-center {
  text-align: center;
}

@media (max-width: 768px) {
  .about-section,
  .programs-section,
  .cta-section {
    padding: 3rem 0;
  }

  .about-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .about-text h2 {
    font-size: 1.6rem;
  }

  .about-text p {
    font-size: 1rem;
  }

  .about-highlights {
    gap: 1rem;
  }

  .highlight h4 {
    font-size: 1.1rem;
  }

  .section-header h2 {
    font-size: 1.6rem;
  }

  .section-header p {
    font-size: 1rem;
  }

  .programs-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }

  .program-card {
    padding: 1.5rem;
  }

  .cta-section h2 {
    font-size: 1.6rem;
  }

  .cta-buttons {
    flex-direction: column;
    gap: 1rem;
  }
}

@media (max-width: 480px) {
  .about-section,
  .programs-section,
  .cta-section {
    padding: 2.5rem 0;
  }

  .programs-grid {
    grid-template-columns: 1fr;
  }

  .badge {
    font-size: 0.85rem;
    padding: 0.4rem 1rem;
  }

  .about-text h2,
  .section-header h2,
  .cta-section h2 {
    font-size: 1.4rem;
  }

  .about-image {
    margin-top: 1rem;
  }

  .highlight {
    padding: 1rem;
  }

  .highlight h4 {
    font-size: 1rem;
  }

  .program-card {
    padding: 1.2rem;
  }

  .program-card h3 {
    font-size: 1.2rem;
  }
}
</style>
