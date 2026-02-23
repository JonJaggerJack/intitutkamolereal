# Guide d'utilisation des images

## Structure des dossiers

```
public/images/
├── backgrounds/     # Images de fond pour les sections
├── logos/          # Logos de l'institut
└── README.md       # Ce fichier
```

## Comment ajouter des images de fond

### 1. Placer vos images
- Ajoutez vos images dans `public/images/backgrounds/`
- Formats recommandés : JPG, PNG, WebP
- Taille recommandée : 1920x1080px ou plus pour la qualité

### 2. Utiliser le composant Section

#### Exemple basique avec image de fond
```vue
<Section background-image="hero-bg.jpg">
  <h2>Titre de la section</h2>
  <p>Contenu de la section</p>
</Section>
```

#### Exemple avec overlay sombre
```vue
<Section 
  background-image="campus.jpg"
  overlay="dark"
>
  <h2>Notre Campus</h2>
  <p>Découvrez nos installations</p>
</Section>
```

#### Exemple avec overlay clair
```vue
<Section 
  background-image="students.jpg"
  overlay="light"
>
  <h2>Nos Étudiants</h2>
  <p>Excellence académique</p>
</Section>
```

#### Exemple avec effet parallaxe
```vue
<Section 
  background-image="building.jpg"
  overlay="primary"
  :parallax="true"
  padding="large"
>
  <h2>Notre Histoire</h2>
  <p>Depuis 1952</p>
</Section>
```

### 3. Options disponibles

#### background-image
- Nom du fichier dans `public/images/backgrounds/`
- Ou URL complète (ex: "https://example.com/image.jpg")

#### overlay
- `none` - Pas d'overlay (défaut)
- `light` - Overlay blanc transparent
- `dark` - Overlay noir transparent
- `primary` - Overlay couleur primaire (#253C56)
- `secondary` - Overlay couleur secondaire (#4684CB)

#### parallax
- `true` - Active l'effet parallaxe
- `false` - Désactivé (défaut)

#### padding
- `small` - 3rem (mobile: 2rem)
- `medium` - 5rem (mobile: 3rem) - défaut
- `large` - 7rem (mobile: 4rem)

#### customClass
- Ajouter des classes CSS personnalisées

### 4. Utiliser des classes CSS directement

Si vous préférez ne pas utiliser le composant Section :

```vue
<section 
  class="section-bg-overlay section-bg-overlay-dark" 
  style="background-image: url('/images/backgrounds/hero.jpg')"
>
  <div class="container">
    <!-- Contenu -->
  </div>
</section>
```

#### Classes disponibles
- `.section-bg` - Image de fond simple
- `.section-bg-overlay` - Image avec overlay
- `.section-bg-overlay-light` - Overlay blanc
- `.section-bg-overlay-dark` - Overlay noir
- `.section-bg-overlay-primary` - Overlay couleur primaire
- `.section-bg-overlay-secondary` - Overlay couleur secondaire
- `.section-bg-parallax` - Effet parallaxe

## Exemples de noms de fichiers suggérés

- `hero-home.jpg` - Image hero de la page d'accueil
- `about-history.jpg` - Section histoire (À propos)
- `campus-aerial.jpg` - Vue aérienne du campus
- `students-class.jpg` - Étudiants en classe
- `library.jpg` - Bibliothèque
- `sports-field.jpg` - Terrain de sport
- `graduation.jpg` - Cérémonie de graduation
- `faculty-team.jpg` - Équipe des professeurs

## Logo

Placez le logo de l'institut dans `public/images/logos/` :
- `logo.png` - Logo principal
- `logo-white.png` - Logo en blanc (pour fonds sombres)
- `favicon.ico` - Favicon du site
