<template>
  <client-only>
    <div v-html="twigHtml"></div>
  </client-only>
</template>
<script>
export default {
  name: 'ComponentWrapper',
  props: {
    templatePath: {
      type: String,
      required: true,
    },
    options: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      twigHtml: null,
    };
  },
  mounted() {
    this.$nextTick(() => {
      if (this.templatePath) {
        this.loadTwigTemplate(this.templatePath, this.options);
      }
    });
  },

  methods: {
    loadTwigTemplate(file, options) {
      import(`@/${file}`).then((module) => {
        this.twigHtml = module.default(options);
      });
    },
  },
};
</script>
