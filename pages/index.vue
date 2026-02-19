<template>
  <main>
    <!-- Hero Section -->
    <Hero 
      title="Façonnons l'Avenir des Meilleurs Élèves"
      subtitle="Collège prestigieux offrant une éducation d'excellence combinée à un cadre de vie stimulant. Développez vos talents académiques et personnels depuis 1952."
      badge="🌟 Excellence Académique depuis 1952"
      background-image="https://images.unsplash.com/photo-1427504494785-cdea0d66d310?w=1200&q=80"
    >
      <template #buttons>
        <NuxtLink to="/contact" class="btn btn-primary">📝 Demander une Admission</NuxtLink>
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
                <h4>🎓 Éducation Holistique</h4>
                <p>Nous développons l'esprit critique, la créativité et le leadership.</p>
              </div>
              <div class="highlight">
                <h4>🌍 Perspective Globale</h4>
                <p>Programmes alignés aux normes internationales pour une meilleure insertion.</p>
              </div>
              <div class="highlight">
                <h4>💪 Encadrement Personnel</h4>
                <p>Suivi individualisé pour chaque élève et sa trajectoire académique.</p>
              </div>
            </div>

            <NuxtLink to="/about" class="btn btn-primary">En Savoir Plus →</NuxtLink>
          </div>

          <div class="about-image">
            <img src="https://images.unsplash.com/photo-1509909756405-479006a77f0f?w=800&q=80" alt="Institut Kamole">
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
            <div class="program-icon">{{ program.icon }}</div>
            <h3>{{ program.title }}</h3>
            <p>{{ program.description }}</p>
            <ul class="program-list">
              <li v-for="item in program.items" :key="item">✓ {{ item }}</li>
            </ul>
          </div>
        </div>

        <div class="text-center">
          <NuxtLink to="/faculty" class="btn btn-large">Voir Tous Les Programmes →</NuxtLink>
        </div>
      </div>
    </section>

    <!-- Carousel Section - Actualités -->
    <Carousel 
      title="Actualités & Événements"
      badge="📢 Dernières Nouvelles"
      :showDots="true"
      :showTitle="true"
    >
      <div class="carousel-item">
        <div class="carousel-card">
          <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&q=80" alt="Événement 1">
          <div class="carousel-card-content">
            <span class="carousel-date">15 Feb 2026</span>
            <h4>Cérémonie d'Excellence Académique</h4>
            <p>Célébration des meilleur étudiants de l'année avec remise de prix et honneurs.</p>
          </div>
        </div>
      </div>

      <div class="carousel-item">
        <div class="carousel-card">
          <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&q=80" alt="Événement 2">
          <div class="carousel-card-content">
            <span class="carousel-date">10 Feb 2026</span>
            <h4>Journée Portes Ouvertes</h4>
            <p>Visitez nos installations et rencontrez notre équipe pédagogique exceptionnelle.</p>
          </div>
        </div>
      </div>

      <div class="carousel-item">
        <div class="carousel-card">
          <img src="https://images.unsplash.com/photo-1511379938547-c1f69b13d835?w=400&q=80" alt="Événement 3">
          <div class="carousel-card-content">
            <span class="carousel-date">05 Feb 2026</span>
            <h4>Atelier Entrepreneuriat</h4>
            <p>Formation pratique en création d'entreprise et développement du leadership.</p>
          </div>
        </div>
      </div>

      <div class="carousel-item">
        <div class="carousel-card">
          <img src="https://images.unsplash.com/photo-1543269865-cbdf26ce6c5e?w=400&q=80" alt="Événement 4">
          <div class="carousel-card-content">
            <span class="carousel-date">01 Feb 2026</span>
            <h4>Compétition Scientifique</h4>
            <p>Les étudiants présentent leurs projets de recherche innovants.</p>
          </div>
        </div>
      </div>
    </Carousel>

    <!-- Testimonials Section -->
    <section id="testimonials" class="testimonials-section">
      <div class="container">
        <div class="section-header text-center">
          <span class="badge">Retours de nos Familles</span>
          <h2>Ce que Disent Nos Étudiants</h2>
        </div>

        <div class="testimonials-grid">
          <div v-for="(testimonial, index) in testimonials" :key="index" class="testimonial-card">
            <div class="testimonial-stars">
              <span v-for="i in 5" :key="i">★</span>
            </div>
            <p class="testimonial-text">{{ testimonial.text }}</p>
            <div class="testimonial-author">
              <div class="author-avatar">{{ testimonial.initials }}</div>
              <div>
                <h4>{{ testimonial.name }}</h4>
                <p>{{ testimonial.role }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container">
        <h2>Prêt à Rejoindre Institut Kamole?</h2>
        <p>Rejoignez une communauté d'excellence où chaque élève est valorisé et accompagné vers la réussite</p>
        <div class="cta-buttons">
          <NuxtLink to="/contact" class="btn btn-cta-primary">📝 Demander Une Admission</NuxtLink>
          <NuxtLink to="/contact" class="btn btn-cta-secondary">💬 Nous Contacter</NuxtLink>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
const programs = [
  {
    id: 1,
    icon: '📚',
    title: 'Lettres & Humanités',
    description: 'Littérature, philosophie, histoire pour former les penseurs critiques.',
    items: ['Littérature Française', 'Philosophie', 'Histoire & Géographie', 'Langues Étrangères']
  },
  {
    id: 2,
    icon: '🔬',
    title: 'Sciences Exactes',
    description: 'Mathématiques, physique et chimie pour les futurs scientifiques.',
    items: ['Mathématiques', 'Physique', 'Chimie', 'Biologie']
  },
  {
    id: 3,
    icon: '⚙️',
    title: 'Ingénierie & Tech',
    description: 'Informatique et technologie pour les innovateurs numériques.',
    items: ['Informatique', 'Programmation', 'Robotique', 'Électronique']
  },
  {
    id: 4,
    icon: '💼',
    title: 'Commerce & Gestion',
    description: 'Économie et gestion pour les futurs leaders entrepreneuriaux.',
    items: ['Économie', 'Gestion d\'Entreprise', 'Comptabilité', 'Gestion Financière']
  },
  {
    id: 5,
    icon: '⚕️',
    title: 'Santé & Sciences',
    description: 'Médecine et sciences de la santé pour les futurs professionnels.',
    items: ['Biologie Médicale', 'Chimie de Santé', 'Santé Publique', 'Génétique']
  },
  {
    id: 6,
    icon: '🌍',
    title: 'Environnement & Durable',
    description: 'Durabilité et écologie pour habitants responsables de la planète.',
    items: ['Écologie', 'Développement Durable', 'Agronomie', 'Gestion Environnementale']
  }
]

const testimonials = [
  {
    text: 'Institut Kamole a transformé mon parcours académique. Les enseignants sont passionnés et véritablement à l\'écoute.',
    name: 'Marc Jean',
    role: 'Élève - Classe de Terminale',
    initials: 'MJ'
  },
  {
    text: 'L\'internat m\'a permis de me concentrer sur mes études. L\'environnement est sain, sécurisé et stimulant.',
    name: 'Sandra Antoine',
    role: 'Élève - Classe de 2nde',
    initials: 'SA'
  },
  {
    text: 'Mes enfants adorent venir à Institut Kamole. La qualité pédagogique est exceptionnelle et nous voyons de vrais progrès.',
    name: 'Pierre Mathurin',
    role: 'Parent',
    initials: 'PM'
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
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
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
  transition: all 0.4s ease;
  cursor: pointer;
}

.program-card:hover {
  transform: translateY(-12px);
  background: rgba(251, 193, 2, 0.2);
  border-color: var(--accent);
}

.program-icon {
  font-size: 3.5rem;
  margin-bottom: 1rem;
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
  color: rgba(255, 255, 255, 0.85);
}

.testimonials-section {
  padding: 9em 0;
  background: linear-gradient(135deg, #f8f9fa 0%, #e8edf5 100%);
}

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2.5rem;
}

.testimonial-card {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
}

.testimonial-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.12);
}

.testimonial-stars {
  display: flex;
  gap: 0.3rem;
  margin-bottom: 1rem;
  color: var(--accent);
}

.testimonial-text {
  color: var(--text);
  line-height: 1.7;
  margin: 1rem 0;
  font-style: italic;
}

.testimonial-author {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid #eee;
}

.author-avatar {
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, var(--accent), var(--primary));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 700;
}

.testimonial-author h4 {
  color: var(--primary);
  margin: 0;
  font-weight: 600;
}

.testimonial-author p {
  color: var(--text);
  font-size: 0.85rem;
  margin: 0;
}

.cta-section {
  padding: 8em 0;
  background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
  text-align: center;
  position: relative;
  overflow: hidden;
}

.cta-section h2 {
  font-size: 2.8rem;
  color: white;
  margin-bottom: 1rem;
}

.cta-section p {
  color: rgba(255, 255, 255, 0.95);
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
  transform: scale(1.05);
}

.btn-cta-primary {
  background: var(--accent);
  color: var(--primary);
  box-shadow: 0 10px 30px rgba(251, 193, 2, 0.3);
}

.btn-cta-primary:hover {
  background: white;
  transform: scale(1.05);
}

.btn-cta-secondary {
  background: transparent;
  color: white;
  border: 2px solid white;
}

.btn-cta-secondary:hover {
  background: white;
  color: var(--primary);
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
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .program-card {
    padding: 1.5rem;
  }

  .program-icon {
    font-size: 2.5rem;
  }

  .cta-section h2 {
    font-size: 1.6rem;
  }

  .cta-buttons {
    flex-direction: column;
    gap: 1rem;
  }

  .carousel-card img {
    height: 180px;
  }
}

@media (max-width: 480px) {
  .about-section,
  .programs-section,
  .cta-section {
    padding: 2.5rem 0;
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

  .program-icon {
    font-size: 2.2rem;
  }

  .program-card h3 {
    font-size: 1.2rem;
  }

  .carousel-card img {
    height: 160px;
  }

  .carousel-card-content {
    padding: 1.2rem;
  }

  .carousel-card h4 {
    font-size: 1rem;
  }
}
</style>
