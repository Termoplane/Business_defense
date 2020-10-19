<template>
  <svg
    xmlns='http://www.w3.org/2000/svg'
    :width='width'
    :height='height'
    :viewBox='viewBox'
    :aria-labelledby='iconName'
    role='presentation'
  >
    <title :id='iconName' lang='en'>{{ iconName }} icon</title>
    <g :fill='iconColor'>
      <slot />
    </g>
  </svg>
</template>

<script>
export default {
  props: {
    iconName: {
      type: String,
      default: 'box'
    },
    width: {
      type: [Number, String],
      default: 20
    },
    viewBox: {
      type: [String],
      default: '0 0 45 45'
    },
    height: {
      type: [Number, String],
      default: 'auto'
    },
    iconColor: {
      type: String,
      default: 'currentColor'
    }
  }
}
</script>

<style>
svg {
  display: inline-block;
  margin-right: 15px;
}
</style>
