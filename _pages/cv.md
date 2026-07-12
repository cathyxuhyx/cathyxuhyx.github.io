---
layout: page
permalink: /cv/
title: cv
nav: true
nav_order: 5
# cv_pdf: Hanyong_Xu_cv_20251119_short.pdf
description: 
# toc:
#   sidebar: left
---
<!-- 
<iframe
  src="{{ '/assets/pdf/Hanyong_Xu_cv_20251119_short.pdf' | relative_url }}"
  style="border:none;width:100%; height:calc(100vh - 300px);"
>
  Your browser does not support PDFs.
  <a href="{{ '/assets/pdf/Hanyong_Xu_cv_20251119_short.pdf' | relative_url }}">Download my CV</a>.
</iframe> -->

<p>
  <!-- Always provide a direct link -->
  <a href="{{ '/assets/pdf/HanyongXu_cv_20260712.pdf' | relative_url }}" target="_blank">
    👉 Open CV as PDF (best on mobile)
  </a>
</p>

<style>
  /* Desktop / tablet: show iframe */
  .cv-iframe {
    border: none;
    width: 100%;
    height: calc(100vh - 310px); /* adjust if needed */
  }

  /* On small screens: hide iframe, rely on link above */
  @media (max-width: 768px) {
    .cv-iframe {
      display: none;
    }
  }
</style>

<iframe
  class="cv-iframe"
  src="{{ '/assets/pdf/HanyongXu_cv_20260712.pdf' | relative_url }}"
>
</iframe>