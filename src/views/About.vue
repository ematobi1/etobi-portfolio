<template>
  <section class="about-page">
    <h2>About Me</h2>
    <p>
      I'm Emmanuel Tobi, a full-stack developer who builds web applications end to end:
      Vue and React front ends, Node.js and Python (FastAPI) services, MongoDB and Firebase data
      layers, and the CI/CD and cloud pipelines that ship them.
    </p>
    <p>
      Lately I've been focused on DevOps automation and AI agents that help operate infrastructure
      safely, with human approval gates, least-privilege credentials, and audit trails.
    </p>
    <div class="links">
      <router-link to="/projects">See my projects</router-link>
      <a href="https://github.com/ematobi1" target="_blank" rel="noopener">GitHub</a>
      <a href="https://www.linkedin.com/in/emmanuel-t-52a040118" target="_blank" rel="noopener">LinkedIn</a>
    </div>
  </section>
</template>

<style scoped>
.about-page {
  max-width: 760px;
  margin: auto;
  padding: 2rem;
  line-height: 1.6;
}
.links {
  display: flex;
  gap: 1.5rem;
  margin-top: 1.5rem;
}
</style>
