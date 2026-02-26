<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <!-- About -->
        <div class="footer-col">
          <h4>Institut Kamole</h4>
          <p>Excellence académique depuis 1952. Collège St François de Sales formant les leaders de demain.</p>
          <div class="social-links">
            <a href="#" aria-label="Facebook">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="#" aria-label="Twitter/X">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a href="#" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            <a href="#" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div class="footer-col">
          <h4>Menu</h4>
          <ul>
            <li><NuxtLink to="/">Accueil</NuxtLink></li>
            <li><NuxtLink to="/about">À propos</NuxtLink></li>
            <li><NuxtLink to="/faculty">Faculté</NuxtLink></li>
            <li><NuxtLink to="/campus-life">Campus</NuxtLink></li>
          </ul>
        </div>

        <!-- Info -->
        <div class="footer-col">
          <h4>Informations</h4>
          <ul>
            <li>
              <a href="tel:+243990977925">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.64 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.55 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.54a16 16 0 0 0 6.29 6.29l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                +243 990 977 925
              </a>
            </li>
            <li>
              <a href="mailto:contact@institutkamole.cd">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                contact@institutkamole.cd
              </a>
            </li>
            <li>
              <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                BP: 162 Bukavu, RDC
              </a>
            </li>
            <li>
              <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                Lun-Ven: 8h-17h
              </a>
            </li>
          </ul>
        </div>

        <!-- Legal -->
        <div class="footer-col">
          <h4>Légal</h4>
          <ul>
            <li><a href="#">Politique de Confidentialité</a></li>
            <li><a href="#">Conditions d'Utilisation</a></li>
            <li><a href="#">Plan du Site</a></li>
            <li><a href="/contact">Nous Contacter</a></li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <p>&copy; 2026 Institut Kamole / Collège St François de Sales. Tous droits réservés.</p>
        <p>Devise : « Ponctualité - Discipline - Travail »</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
// Footer logic here
</script>

<style scoped>
.footer {
  background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
  color: white;
  padding: 4rem 0 2rem;
}

.footer-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 3rem;
  margin-bottom: 3rem;
}

.footer-col h4 {
  margin-bottom: 1.5rem;
  font-size: 1.1rem;
}

.footer-col p {
  opacity: 0.9;
  margin-bottom: 1rem;
  line-height: 1.6;
}

.footer-col ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-col li {
  margin-bottom: 0.8rem;
}

.footer-col a {
  color: rgba(255, 255, 255, 0.9);
  text-decoration: none;
  transition: color 0.3s;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.footer-col a svg {
  width: 16px;
  height: 16px;
  flex-shrink: 0;
  opacity: 0.8;
}

.footer-col a:hover {
  color: var(--accent);
}

.social-links {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
}

.social-links a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: rgba(251, 193, 2, 0.2);
  border-radius: 50%;
  font-weight: 700;
  color: white;
}

.social-links a svg {
  width: 18px;
  height: 18px;
}

.social-links a:hover {
  background: var(--accent);
  color: var(--primary);
}

.footer-bottom {
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  opacity: 0.8;
}

.footer-bottom p {
  margin: 0.5rem 0;
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .footer {
    padding: 3rem 0 1.5rem;
  }

  .footer-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
    margin-bottom: 2rem;
  }

  .footer-col h4 {
    font-size: 1rem;
    margin-bottom: 1rem;
  }

  .footer-col p,
  .footer-col li {
    font-size: 0.95rem;
  }

  .footer-bottom {
    padding-top: 1.5rem;
  }

  .footer-bottom p {
    font-size: 0.85rem;
  }
}

@media (max-width: 480px) {
  .footer {
    padding: 2.5rem 0 1rem;
  }

  .footer-grid {
    gap: 1.5rem;
  }

  .footer-col {
    text-align: center;
  }

  .footer-col ul {
    text-align: center;
  }

  .social-links {
    justify-content: center;
  }

  .social-links a {
    width: 36px;
    height: 36px;
    font-size: 0.9rem;
  }
}
</style>
