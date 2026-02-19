<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <!-- About -->
        <div class="footer-col">
          <h4>Institut Kamole</h4>
          <p>Excellence académique depuis 1952. Collège St François de Sales formant les leaders de demain.</p>
          <div class="social-links">
            <a href="#" aria-label="Facebook">f</a>
            <a href="#" aria-label="Twitter">𝕏</a>
            <a href="#" aria-label="LinkedIn">in</a>
            <a href="#" aria-label="Instagram">📷</a>
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
            <li><a href="tel:+243990977925">📞 +243 990 977 925</a></li>
            <li><a href="mailto:contact@institutkamole.cd">📧 contact@institutkamole.cd</a></li>
            <li><a href="#">📍 BP: 162 Bukavu, RDC</a></li>
            <li><a href="#">🕐 Lun-Ven: 8h-17h</a></li>
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
  margin-top: 5rem;
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
    margin-top: 3rem;
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
    margin-top: 2rem;
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
