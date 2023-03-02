<template>
  <client-only>
    <div v-html="twigHtml"></div>
  </client-only>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';

@Component
export default class TemplateComponentWrapper extends Vue {
  @Prop({
    required: true,
  })
  templatePath!: string;

  @Prop()
  options!: Record<string, any>;

  twigHtml = null;

  mounted(): void {
    if (this.templatePath) {
      this.loadTwigTemplate(this.templatePath, this.options);
    }
  }

  loadTwigTemplate(file: string, options: Record<string, any>) {
    import(`@/${file}`).then((module) => {
      this.twigHtml = module(options);
    });
  }
}
</script>
