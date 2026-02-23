# Logo de l'Institut Kamole

## Instructions

Il y a actuellement un logo SVG temporaire (`logo.svg`). Vous pouvez le remplacer par votre propre logo.

### Option 1 : Remplacer le logo SVG (recommandé)
- **Nom du fichier** : `logo.svg`
- **Format** : SVG
- **Avantage** : Qualité parfaite à toutes les tailles, fichier léger

### Option 2 : Utiliser un logo PNG
- **Nom du fichier** : `logo.png`
- **Format** : PNG avec fond transparent
- **Dimensions recommandées** : 
  - Hauteur : 150-200px
  - Largeur : proportionnelle (le logo sera redimensionné automatiquement)
- **Note** : Si vous utilisez PNG, vous devrez modifier le fichier `components/Header.vue` pour changer `logo.svg` en `logo.png`

### Logo alternatif (optionnel)
- **Nom du fichier** : `logo-white.png` ou `logo-white.svg`
- **Usage** : Pour utilisation sur des fonds sombres

### Favicon
- **Nom du fichier** : `favicon.ico`
- **Dimensions** : 32x32px ou 64x64px
- **Format** : ICO
- **Usage** : Icône affichée dans l'onglet du navigateur

## Comment remplacer le logo

1. Placez votre logo dans ce dossier (`public/images/logos/`)
2. Si vous gardez le même nom (`logo.svg`), le changement sera automatique
3. Si vous utilisez un autre nom ou format :
   - Ouvrez `components/Header.vue`
   - Changez la ligne `src="/images/logos/logo.svg"` avec votre fichier

## Notes importantes

1. Le logo sera automatiquement redimensionné pour s'adapter au header (45px de hauteur sur desktop, 38px sur tablette, 35px sur mobile)
2. Assurez-vous que le logo soit lisible à différentes tailles
3. Pour de meilleures performances, optimisez vos images avant de les ajouter
4. Le logo SVG actuel affiche "IK" (Institut Kamole) - c'est un placeholder temporaire
