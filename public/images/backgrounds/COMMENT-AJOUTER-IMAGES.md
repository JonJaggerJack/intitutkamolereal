# Comment ajouter des images de fond

## 📸 Ajout d'images dans les sections

### 1. Pour le Hero (page d'accueil)

Dans `pages/index.vue`, ajoutez la propriété `background-image` au composant Hero :

```vue
<Hero 
  title="Façonnons l'Avenir des Meilleurs Élèves"
  subtitle="..."
  badge="Excellence Académique depuis 1952"
  background-image="/images/backgrounds/hero-home.jpg"
>
```

**Placez l'image :** `public/images/backgrounds/hero-home.jpg`

### 2. Pour les autres images

Remplacez le placeholder dans la section "À propos" :

```vue
<!-- Trouvez cette section -->
<div class="about-image">
  <img src="/images/about-school.jpg" alt="Institut Kamole">
</div>
```

**Placez l'image :** `public/images/about-school.jpg`

### 3. Utiliser le composant Section avec image de fond

Pour n'importe quelle section :

```vue
<Section 
  background-image="nom-de-votre-image.jpg"
  overlay="dark"
  padding="large"
>
  <h2>Votre contenu</h2>
</Section>
```

**Placez les images dans :** `public/images/backgrounds/`

## 📁 Organisation des images

```
public/
└── images/
    ├── backgrounds/
    │   ├── hero-home.jpg          # Image hero de la page d'accueil
    │   ├── about-section.jpg       # Section à propos
    │   ├── campus.jpg              # Section campus
    │   └── ...
    ├── logos/
    │   └── logo.svg                # Logo actuel (remplacez par le vôtre)
    └── about-school.jpg            # Image section à propos
```

## 🎨 Recommandations

- **Format :** JPG pour les photos, PNG pour les illustrations
- **Taille :** 1920x1080px minimum pour les images de fond
- **Poids :** Optimisez vos images avant de les ajouter (500KB-2MB max)
- **Outils d'optimisation :** TinyPNG, Squoosh, ImageOptim

## 🔧 Overlays disponibles

Utilisez ces overlays pour améliorer la lisibilité du texte :

- `overlay="none"` - Pas d'overlay
- `overlay="light"` - Overlay blanc (texte sombre)
- `overlay="dark"` - Overlay noir (texte clair)
- `overlay="primary"` - Overlay couleur primaire (#253C56)
- `overlay="secondary"` - Overlay couleur secondaire (#4684CB)

## 💡 Exemple complet

```vue
<Section 
  background-image="students-campus.jpg"
  overlay="dark"
  :parallax="true"
  padding="large"
  custom-class="campus-section"
>
  <div class="section-header text-center">
    <h2>Notre Campus</h2>
    <p>Un environnement d'apprentissage exceptionnel</p>
  </div>
</Section>
```

N'oubliez pas de placer `students-campus.jpg` dans `public/images/backgrounds/` !
