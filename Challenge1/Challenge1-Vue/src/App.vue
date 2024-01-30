<template>
  <main>
    <ReduceBlock
      v-for="(block, index) in blocks"
      :key="block.id"
      :count="index"
      :subtitle="block.subtitle"
      :content="block.content"
    />
  </main>
</template>

<script setup>
import ReduceBlock from './components/ReduceBlock.vue'

const blocks = [
  {
    subtitle: 'Change your car driving habits',
    content:
      "We don't all have the luxury of walking everywhere, but vehicles are the biggest compromise to our air. Those tailpipes are at street level"
  },
  {
    subtitle: 'Notice how you use water',
    content:
      'We have a lot of water in Canada, but we also use a lot of water, and of What we use is in the bathroom. Have shorter showers.'
  },
  {
    subtitle: 'Reduce paper in your life.',
    content:
      "Do you know that 40% of world's commercially cut timber is used for paper? This endangers natural habitats and uses a ton of water."
  },
  {
    subtitle: 'Use a refillable water bottle',
    content:
      'Bottled water and throw away packaging is wasteful. Landflls are overfilling with water bottles alone- It is also estimated that 3 litres'
  },

  {
    subtitle: 'Borrow or fix rather than buy',
    content:
      'Buying throwaway fashion is detrimental for the environment - 1 kg of fabric generstes 23 kg of greenhouse gases! Start thinking about'
  },
  {
    subtitle: 'Stop eating So Many meat',
    content:
      'The Environmental Working Group found that red meat is responsible for 10 to 40 times many greenhouse emissions as common vegetables'
  }
]
</script>

<style lang="scss">
body {
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(./assets/img/bg.jpeg);
  background-repeat: no-repeat;
  background-size: cover;
}

main {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    width: 740px;
  }
  @media screen and (min-width: 992px) {
    width: 970px;
  }
}
</style>
