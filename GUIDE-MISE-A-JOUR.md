# Guide de mise à jour - Institut Kamole

Ce document récapitule les améliorations apportées au site.

## ✅ Améliorations réalisées

### 1. Navigation active dynamique

**Problème résolu** : Le bouton "Accueil" restait toujours actif quelle que soit la page visitée.

**Solution** : 
- Utilisation de `exact-active-class` sur tous les liens de navigation
- La classe `active` est maintenant appliquée automatiquement au lien correspondant à la page actuelle
- Fonctionne sur le menu desktop et mobile

**Résultat** : Le menu affiche maintenant correctement quelle page est active.

---

### 2. Système d'images de fond pour les sections

**Fonctionnalité ajoutée** : Possibilité d'ajouter facilement des images de fond sur n'importe quelle section du site.

**Comment utiliser** :

#### Option A : Utiliser le composant Section (recommandé)

```vue
<Section 
  background-image="hero.jpg"
  overlay="dark"
  :parallax="true"
  padding="large"
>
  <h2>Titre de la section</h2>
  <p>Contenu...</p>
</Section>
```

**Propriétés disponibles** :
- `background-image` : Nom du fichier dans `/public/images/backgrounds/` ou URL complète
- `overlay` : `none`, `light`, `dark`, `primary`, `secondary`
- `parallax` : Active l'effet parallaxe (true/false)
- `padding` : `small`, `medium`, `large`
- `custom-class` : Classes CSS personnalisées

#### Option B : Utiliser les classes CSS directement

```vue
<section 
  class="section-bg-overlay section-bg-overlay-dark padding-medium"
  style="background-image: url('/images/backgrounds/hero.jpg')"
>
  <div class="container">
    <!-- Contenu -->
  </div>
</section>
```

**Classes CSS disponibles** :
- `.section-bg` - Image de fond simple
- `.section-bg-overlay` - Image avec overlay
- `.section-bg-overlay-light` - Overlay blanc (85% opacité)
- `.section-bg-overlay-dark` - Overlay noir (70% opacité)
- `.section-bg-overlay-primary` - Overlay couleur primaire
- `.section-bg-overlay-secondary` - Overlay couleur secondaire
- `.section-bg-parallax` - Effet parallaxe

---

### 3. Système de logo

**Fonctionnalité ajoutée** : Support du logo de l'institut dans le header.

**Comment ajouter votre logo** :

1. Placez votre logo dans : `/public/images/logos/`
2. Nommez-le : `logo.png`
3. Format recommandé : PNG transparent, hauteur 150-200px
4. Le logo apparaîtra automatiquement !

**Comportement** :
- Si le logo existe → il s'affiche
- Si le logo n'existe pas → l'emoji 🎓 s'affiche par défaut

**Logos optionnels** :
- `logo-white.png` - Pour fonds sombres
- `favicon.ico` - Icône du navigateur

---

## 📁 Structure des fichiers

```
public/
└── images/
    ├── backgrounds/      # Placez vos images de fond ici
    ├── logos/           # Placez vos logos ici
    │   ├── LIRE-MOI.md
    │   └── logo.png     # À ajouter
    └── README.md        # Documentation complète

components/
├── Section.vue         # Nouveau composant pour sections avec fond
└── Header.vue          # Mis à jour pour navigation active + logo

assets/
└── css/
    └── main.css        # Classes utilitaires ajoutées
```

---

## 🎨 Prochaines étapes

### À faire manuellement :

1. **Ajouter les images de fond**
   - Placez vos photos dans `/public/images/backgrounds/`
   - Noms suggérés : `hero-home.jpg`, `about-history.jpg`, `campus.jpg`, etc.
   - Format : JPG ou PNG, taille recommandée : 1920x1080px

2. **Ajouter le logo**
   - Placez `logo.png` dans `/public/images/logos/`
   - Le logo apparaîtra automatiquement dans le header

3. **Mettre à jour les sections existantes** (optionnel)
   - Vous pouvez progressivement remplacer les sections par le composant `<Section>` pour ajouter des images de fond

---

## 📖 Exemples d'utilisation

### Exemple 1 : Section hero avec fond sombre

```vue
<Section 
  background-image="students-graduation.jpg"
  overlay="dark"
  padding="large"
>
  <h1>Bienvenue à l'Institut Kamole</h1>
  <p>Excellence académique depuis 1952</p>
</Section>
```

### Exemple 2 : Section à propos avec fond clair

```vue
<Section 
  background-image="campus-view.jpg"
  overlay="light"
  padding="medium"
>
  <h2>Notre Histoire</h2>
  <p>Découvrez notre héritage...</p>
</Section>
```

### Exemple 3 : Section avec effet parallaxe

```vue
<Section 
  background-image="library.jpg"
  overlay="primary"
  :parallax="true"
>
  <h2>Nos Installations</h2>
  <div class="facilities-grid">
    <!-- Contenu -->
  </div>
</Section>
```

---

## 🔧 Support technique

Pour plus d'informations :
- Consultez `/public/images/README.md` pour le guide complet des images
- Consultez `/public/images/logos/LIRE-MOI.md` pour les spécifications du logo

---

## ✨ Résumé des améliorations

- ✅ Navigation active fonctionne correctement
- ✅ Système flexible pour ajouter des images de fond
- ✅ Support du logo de l'institut
- ✅ Documentation complète fournie
- ✅ Prêt pour l'ajout manuel des images

**Tout est prêt pour que vous ajoutiez vos images et votre logo !**
