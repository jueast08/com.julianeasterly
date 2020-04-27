<template>
  <svg 
     viewBox="0 0 50.609 50" enable-background="new 0 0 50.609 50">
  <g id="secondary">
      <path :class="compassClassName" d="M11.978,38.469c-7.358-7.359-7.358-19.288,0-26.646c6.404-6.406,16.275-7.235,23.576-2.487l4.43-4.43
      C30.206-2.204,16.44-1.351,7.622,7.467c-9.764,9.763-9.764,25.592,0,35.356c8.716,8.716,22.268,9.65,32.021,2.802l-4.444-4.444
      C27.934,45.673,18.279,44.769,11.978,38.469z"/>
  </g>
  <g id="main">
    <path :class="arrowClassName" d="M25.292,34.603l16.968-9.044l-16.426-9.836c2.101,2.456,3.377,5.648,3.377,9.14
      C29.211,28.648,27.717,32.071,25.292,34.603z"/>
    <path :class="directionClassName" d="M38.624,38.466l4.355,4.354l0,0c9.664-9.665,9.759-25.274,0.288-35.058l-4.357,4.356
      C45.978,19.496,45.881,31.206,38.624,38.466z"/>
  </g>
  </svg>
</template>

<script>
export default {
  name: 'BaseLogo',
  props: {
    compassClassName: {
      type: String,
      required: false,
      default: ''
    },
    arrowClassName: {
      type: String,
      required: false,
      default: '',
    },
    directionClassName: {
      type: String,
      required: false,
      default: '',
    }
  }
}
</script>