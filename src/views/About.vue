<template>
  <MatrixCanvas />
  <TypingMatrix :lines="lines" />
</template>

<script setup>
import MatrixCanvas from '@/components/MatrixCanvas.vue'
import TypingMatrix from '@/components/TypingMatrix.vue'

const lines = [
  "í±¤ About",
  "Driven by a passion for transforming complex challenges into user-centric web applications.",
  "I specialize in building scalable solutions with modern frameworks like React and Node.js.",
  "",
  "Key Achievements:",
  "â€¢ Led cross-functional teams to deliver CRM tools that boosted client productivity by 20%.",
  "â€¢ Optimized codebases, reducing load times by 30% and improving user retention.",
  "â€¢ Mentored junior devs in system design and clean code practices.",
  "",
  "Skills:",
  "Front-End: HTML5, CSS3, JavaScript, React.js, Redux.js, Vue.js, Angular, Responsive Design",
  "Back-End: Node.js, Python, RESTful APIs, GraphQL, Express.js, Django, Flask",
  "Databases: MySQL, PostgreSQL, MongoDB, Redis",
  "DevOps/Cloud: AWS, Docker, Kubernetes, Jenkins, CI/CD, Terraform",
  "Tools/Methods: Git, Agile/Scrum, Jira, Webpack, Jest"
]
</script>

<style scoped>
.typing-line {
  text-shadow: 0 0 4px #00ff66, 0 0 8px #00ff66;
  line-height: 1.8rem;
  background: repeating-linear-gradient(transparent 0px, transparent 3px, rgba(0,255,0,0.05) 3px, rgba(0,255,0,0.05) 6px);
}
</style>
