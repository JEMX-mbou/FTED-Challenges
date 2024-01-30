<template>
  <div class="reduce-block">
    <div class="inner">
      <h2>{{ props.count + 1 }}</h2>
      <h3>{{ props.subtitle }}</h3>
      <p>{{ props.content }}</p>
      <a href="">More</a>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  count: Number,
  subtitle: String,
  content: String
})
</script>

<style lang="scss" scoped>
.reduce-block {
  width: 100%;
  padding: 1rem;

  .inner {
    display: grid;
    height: 100%;
    padding: 1rem;
    color: #111;
    background-color: #ffffff99;
  }

  @media screen and (min-width: 768px) {
    width: 50%;
  }
  @media screen and (min-width: 992px) {
    width: calc(100% / 3);
  }

  h2 {
    margin: 0;
    color: #346473;
    font-size: 7em;
    line-height: 1em;
  }
  h3 {
    font-size: 1.8em;
    font-weight: normal;
  }

  a {
    align-self: flex-end;
    color: #111;
    font-weight: bold;

    &:hover {
      color: #346473;
    }
  }
}
</style>
