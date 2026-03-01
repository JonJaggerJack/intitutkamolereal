# Guide des images — Institut Kamole

## Structure des dossiers

```
public/images/
├── backgrounds/      # Images de fond pour les sections (composant Section.vue)
├── logos/            # Logo de l'institut
├── direction/        # Photos de l'équipe de direction
├── enseignants/      # Photos des enseignants
├── campus/           # Photos des installations et bâtiments
└── README.md         # Ce fichier
```

---

## `backgrounds/`
Images de fond utilisées via le composant `Section.vue`.

Taille recommandée : **1920×1080px** minimum, format JPG ou WebP.

Exemples de noms :
- `hero-home.jpg`
- `about-history.jpg`
- `campus-aerial.jpg`

Utilisation :
```vue
<Section background-image="hero-home.jpg" overlay="dark">
  ...
</Section>
```

---

## `logos/`
- `logo.svg` — Logo principal (utilisé dans le Header)
- `logo-white.svg` — Version blanche pour fonds sombres

---

## `direction/`
Photos de l'équipe de **Direction & Administration** (page Personnel).

Taille recommandée : **400×400px**, format JPG.

| Fichier | Description |
|---|---|
| `directeur.jpg` | Photo du Directeur |
| `prefet.jpg` | Photo du Préfet des études |
| `econome.jpg` | Photo de l'Économe |

Utilisation dans `pages/staff.vue` :
```js
image: '/images/direction/directeur.jpg'
```

---

## `enseignants/`
Photos des **enseignants par département** (page Personnel).

Taille recommandée : **300×300px**, format JPG.

| Fichier | Description |
|---|---|
| `prof-sciences-1.jpg` | Professeur Sciences |
| `prof-sciences-2.jpg` | Professeur Sciences |
| `prof-lettres-1.jpg` | Professeur Lettres |
| `prof-langues-1.jpg` | Professeur Langues |
| `prof-arts-1.jpg` | Professeur Arts |

Utilisation dans `pages/staff.vue` :
```js
image: '/images/enseignants/prof-sciences-1.jpg'
```

---

## `campus/`
Photos des **installations et bâtiments** (pages À propos, Campus).

Taille recommandée : **800×600px**, format JPG.

| Fichier | Description |
|---|---|
| `internat.jpg` | Vue de l'internat |
| `batiment-principal.jpg` | Bâtiment principal |
| `labo.jpg` | Laboratoire |
| `bibliotheque.jpg` | Bibliothèque |
| `terrain-sport.jpg` | Terrain de sport |
| `salle-classe.jpg` | Salle de classe |

Utilisation dans `pages/about.vue` et `pages/campus-life.vue` :
```html
<img src="/images/campus/internat.jpg" alt="Internat">
```
