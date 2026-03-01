<template>
  <main>
    <Hero 
      title="Nous Contacter"
      subtitle="Avez des questions? Nous serions heureux de vous entendre. Contactez-nous dès aujourd'hui!"
      badge="Envoyez-nous un Message"
      background-image="/images/backgrounds/8.jpg"
    >
      <template #buttons>
        <a href="#contact-form" class="btn btn-primary">Remplir le Formulaire</a>
      </template>
    </Hero>

    <section class="contact-section">
      <div class="container">
        <div class="contact-grid">
          <!-- Contact Info -->
          <div class="contact-info">
            <h2>Informations de Contact</h2>
            
            <div class="info-item">
              <div class="info-icon"><Icon name="building" size="large" color="var(--secondary)" /></div>
              <div>
                <h4>Institut</h4>
                <p><strong>Institut Kamole / Collège St François de Sales</strong></p>
                <p>BP: 162 BUKAVU</p>
                <p>Matricule: 4/13769 P</p>
                <p>N° SECOPE: 6005279</p>
              </div>
            </div>

            <div class="info-item">
              <div class="info-icon"><Icon name="pin" size="large" color="var(--secondary)" /></div>
              <div>
                <h4>Adresse</h4>
                <p>Bukavu, Sud-Kivu</p>
                <p>République Démocratique du Congo</p>
              </div>
            </div>

            <div class="info-item">
              <div class="info-icon"><Icon name="phone" size="large" color="var(--secondary)" /></div>
              <div>
                <h4>Téléphone</h4>
                <p><a href="tel:+243990977925">+243 990 977 925</a></p>
              </div>
            </div>

            <div class="info-item">
              <div class="info-icon"><Icon name="email" size="large" color="var(--secondary)" /></div>
              <div>
                <h4>Email</h4>
                <p><a href="mailto:contact@institutkamole.cd">contact@institutkamole.cd</a></p>
              </div>
            </div>

            <div class="info-item">
              <div class="info-icon"><Icon name="clock" size="large" color="var(--secondary)" /></div>
              <div>
                <h4>Heures d'Ouverture</h4>
                <p>Lun-Ven: 8:00 - 17:00<br>Sam: 9:00 - 12:00<br>Dim: Fermé</p>
              </div>
            </div>
          </div>

          <!-- Contact Form -->
          <form id="contact-form" class="contact-form" @submit.prevent="submitForm">
            <h2>Envoyez-nous un Message</h2>
            
            <div class="form-group">
              <label for="name">Nom Complet *</label>
              <input v-model="form.name" type="text" id="name" required>
            </div>

            <div class="form-group">
              <label for="email">Email *</label>
              <input v-model="form.email" type="email" id="email" required>
            </div>

            <div class="form-group">
              <label for="phone">Téléphone</label>
              <input v-model="form.phone" type="tel" id="phone">
            </div>

            <div class="form-group">
              <label for="subject">Sujet *</label>
              <input v-model="form.subject" type="text" id="subject" required>
            </div>

            <div class="form-group">
              <label for="message">Message *</label>
              <textarea v-model="form.message" id="message" rows="5" required></textarea>
            </div>

            <button type="submit" class="btn btn-primary">Envoyer le Message</button>
          </form>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Contact - Institut Kamole',
  description: 'Contactez Institut Kamole pour vos questions ou pour une admission.'
})

const form = ref({
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: ''
})

const submitForm = () => {
  console.log('Form submitted:', form.value)
  // Handle form submission (send email, etc.)
  alert('Merci! Nous avons reçu votre message. Nous vous contacterons bientôt.')
  form.value = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  }
}
</script>

<style scoped>
.contact-section {
  padding: 6em 0;
  background: #f8f9fa;
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
}

.contact-info h2,
.contact-form h2 {
  font-size: 2rem;
  color: var(--primary);
  margin-bottom: 2rem;
}

.info-item {
  display: flex;
  gap: 1.5rem;
  margin-bottom: 2.5rem;
}

.info-icon {
  font-size: 2.5rem;
  flex-shrink: 0;
}

.info-item h4 {
  color: var(--primary);
  margin-bottom: 0.5rem;
}

.info-item p {
  color: var(--text);
  margin: 0;
}

.info-item a {
  color: var(--accent);
  text-decoration: none;
}

.info-item a:hover {
  text-decoration: underline;
}

.contact-form {
  background: white;
  padding: 2.5rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  color: var(--primary);
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-family: inherit;
  font-size: 1rem;
  transition: border-color 0.3s;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--accent);
}

@media (max-width: 768px) {
  .contact-section {
    padding: 3rem 0;
  }

  .contact-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .contact-info h2,
  .contact-form h2 {
    font-size: 1.6rem;
  }

  .info-item {
    gap: 1rem;
    margin-bottom: 2rem;
  }

  .contact-form {
    padding: 2rem;
  }

  .form-group {
    margin-bottom: 1.2rem;
  }
}

@media (max-width: 480px) {
  .contact-section {
    padding: 2.5rem 0;
  }

  .contact-info h2,
  .contact-form h2 {
    font-size: 1.4rem;
    margin-bottom: 1.5rem;
  }

  .info-item {
    gap: 0.8rem;
    margin-bottom: 1.5rem;
  }

  .info-item h4 {
    font-size: 1rem;
  }

  .contact-form {
    padding: 1.5rem;
  }

  .form-group input,
  .form-group textarea {
    padding: 0.7rem;
    font-size: 0.95rem;
  }

  .form-group label {
    font-size: 0.95rem;
  }
}
</style>
