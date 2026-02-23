<template>
  <section 
    :class="sectionClasses"
    :style="backgroundStyle"
  >
    <div class="container">
      <slot></slot>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Props {
  // Image de fond - peut être une URL ou un chemin local dans /public/images/
  backgroundImage?: string
  // Type d'overlay : 'none', 'light', 'dark', 'primary', 'secondary'
  overlay?: 'none' | 'light' | 'dark' | 'primary' | 'secondary'
  // Activer l'effet parallaxe
  parallax?: boolean
  // Classe CSS personnalisée
  customClass?: string
  // Padding de la section
  padding?: 'small' | 'medium' | 'large'
}

const props = withDefaults(defineProps<Props>(), {
  backgroundImage: '',
  overlay: 'none',
  parallax: false,
  customClass: '',
  padding: 'medium'
})

const sectionClasses = computed(() => {
  const classes = []
  
  if (props.backgroundImage) {
    if (props.overlay !== 'none') {
      classes.push('section-bg-overlay')
      classes.push(`section-bg-overlay-${props.overlay}`)
    } else {
      classes.push('section-bg')
    }
    
    if (props.parallax) {
      classes.push('section-bg-parallax')
    }
  }
  
  classes.push(`padding-${props.padding}`)
  
  if (props.customClass) {
    classes.push(props.customClass)
  }
  
  return classes.join(' ')
})

const backgroundStyle = computed(() => {
  if (!props.backgroundImage) return {}
  
  // Si l'image commence par http ou https, utiliser directement
  // Sinon, considérer que c'est un chemin local
  const imageUrl = props.backgroundImage.startsWith('http') 
    ? props.backgroundImage 
    : `/images/backgrounds/${props.backgroundImage}`
  
  return {
    backgroundImage: `url('${imageUrl}')`
  }
})
</script>

<style scoped>
section {
  position: relative;
}

.padding-small {
  padding: 3rem 0;
}

.padding-medium {
  padding: 5rem 0;
}

.padding-large {
  padding: 7rem 0;
}

@media (max-width: 768px) {
  .padding-small {
    padding: 2rem 0;
  }
  
  .padding-medium {
    padding: 3rem 0;
  }
  
  .padding-large {
    padding: 4rem 0;
  }
}
</style>
