<template>
  <div class="m-about-me">
    <div class="container">
      <div class="columns">
        <div class="column is-two-thirds-desktop">
          <h2>About Me</h2>
          <div class="content">
            <p>Currently, I work for <a href="https://acorn-i.com/" target="_blank">Acorn Intelligence</a>, an eCommerce and Advertising agency that supports brands to grow their revenues on Amazon. I am their <a href="https://www.mindtheproduct.com/product-management-hierarchy/" target="_blank">Lead Product Manager</a>, responsible for our SaaS platform used by clients and colleagues alike, <a href="https://acorn-i.com/our-platform/" target="_blank">Ignite by Acorn-i</a>.</p>
            <p>Along with being a Product Manager, I am a husband, <a href="https://www.bdadyslexia.org.uk/dyslexia/about-dyslexia/what-is-dyslexia" target="_blank">Dyslexic</a>, hobbyist programmer, <a href="https://www.lboro.ac.uk" target="_blank">Loughborough University</a> graduate, occasional baker and open-source admirer, among other things.</p>
            <p>Previously was a Senior Product Manager at <a href="https://www.linkedin.com/company/the-exchange-lab/about/" target="_blank">The Exchange Lab</a>, a <a href="https://www.wpp.com/" target="_blank">WPP</a> company. WPP acquired The Exchange Lab for our proprietary Programmatic Advertising technology, <a href="https://www.wpp.com/news/2015/12/groupm-acquires-programmatic-marketing-solutions-company-the-exchange-lab" target="_blank">Proteus</a>. Before that, I was a Product Manager at <a href="https://uk.ask.com" target="_blank">Ask.com</a>. If you want to learn more, please read my <g-link to="/resume/">Resume</g-link>.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
  export default {
  }
</script>


<style lang="scss" scoped>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap');

  .m-about-me {
    background: #f2fbfa;
    padding: 2.5rem 1rem;

    h2 {
      color: #1e2425;
      font-family: 'Poppins', sans-serif;
      font-size: 32px;
      font-weight: 500;
      line-height: 32px;
      margin: 0 0 1rem;
    }
  }

  @media screen and (min-width: 1024px) {
    .m-about-me {
      padding: 5rem 0;
    }
  }
</style>
