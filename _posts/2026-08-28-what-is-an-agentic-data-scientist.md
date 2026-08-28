---
title: "什么是 Agentic Data Scientist？从开普勒的 8 角分到 AI 的验证瓶颈"
date: 2026-08-28
permalink: /posts/2026/08/what-is-an-agentic-data-scientist/
excerpt: "《Agentic Data Scientist》第 1 章第 1 节原版页面：从科学发现史出发，定义提出问题、解决问题、创新与验证四项核心能力，并说明 Agentic 发现闭环及其系统边界。"
read_time: false
tags:
  - Agentic Data Scientist
  - AI Data Scientist
  - LLM Agents
  - Scientific Discovery
---

<style>
.page__title {
  margin-bottom: 0.7rem;
  color: #222;
  font-family: Georgia, "Noto Serif SC", serif;
  font-size: 2.35rem;
  line-height: 1.22;
  letter-spacing: -0.02em;
}
.page__content {
  max-width: 920px;
}
.pdf-book-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.65rem;
  align-items: center;
  justify-content: space-between;
  margin: 0.6rem 0 1.5rem;
  padding: 0.8rem 0.95rem;
  border: 1px solid #dce5ea;
  border-radius: 7px;
  background: #f7fafb;
}
.pdf-book-actions p {
  margin: 0 !important;
  color: #56656e;
  font-size: 0.88rem;
}
.pdf-book-pages {
  display: grid;
  gap: 1.8rem;
  margin: 0 0 2.5rem;
}
.pdf-book-page {
  margin: 0;
}
.pdf-book-page a {
  display: block;
  text-decoration: none;
}
.pdf-book-page img {
  display: block;
  width: 100%;
  height: auto;
  margin: 0;
  border: 1px solid #d7dfe4;
  border-radius: 3px;
  background: #fff;
  box-shadow: 0 12px 30px rgba(31, 52, 66, 0.11);
}
.pdf-book-page figcaption {
  margin-top: 0.45rem;
  color: #75818a;
  font-size: 0.76rem;
  text-align: center;
}
.pdf-book-citation {
  margin-top: 2.4rem;
  padding-top: 0.3rem;
  border-top: 1px solid #e2e8eb;
}
.pdf-book-citation h2 {
  margin-top: 1.7rem;
  font-size: 1.45rem;
}
@media (max-width: 620px) {
  .page__title {
    font-size: 1.85rem;
  }
  .pdf-book-actions {
    align-items: flex-start;
    flex-direction: column;
  }
  .pdf-book-pages {
    gap: 1.15rem;
  }
  .pdf-book-page img {
    box-shadow: 0 7px 18px rgba(31, 52, 66, 0.1);
  }
}
@media print {
  .pdf-book-actions,
  .pdf-book-page figcaption {
    display: none;
  }
  .pdf-book-page img {
    border: 0;
    box-shadow: none;
    page-break-after: always;
  }
}
</style>

<div class="pdf-book-actions">
  <p>以下 5 页按书稿 PDF 原版呈现，点击任一页面可打开对应的矢量 PDF 页面。</p>
  <a class="btn btn--primary" href="/assets/files/agentic-data-scientist-ch01-section01.pdf" target="_blank" rel="noopener">打开原版 PDF</a>
</div>

<div class="pdf-book-pages">
  <figure class="pdf-book-page">
    <a href="/assets/files/agentic-data-scientist-ch01-section01.pdf#page=1" target="_blank" rel="noopener">
      <img src="/assets/images/agentic-data-scientist/ch01-section01/page-1.png" width="1399" height="1966" alt="《Agentic Data Scientist》第 1 章第 1 节第 1 页：开普勒、伽利略与牛顿" loading="eager" decoding="async">
    </a>
    <figcaption>第 1 页 / 共 5 页</figcaption>
  </figure>

  <figure class="pdf-book-page">
    <a href="/assets/files/agentic-data-scientist-ch01-section01.pdf#page=2" target="_blank" rel="noopener">
      <img src="/assets/images/agentic-data-scientist/ch01-section01/page-2.png" width="1399" height="1966" alt="《Agentic Data Scientist》第 1 章第 1 节第 2 页：从验证解释到自动化发现循环" loading="lazy" decoding="async">
    </a>
    <figcaption>第 2 页 / 共 5 页</figcaption>
  </figure>

  <figure class="pdf-book-page">
    <a href="/assets/files/agentic-data-scientist-ch01-section01.pdf#page=3" target="_blank" rel="noopener">
      <img src="/assets/images/agentic-data-scientist/ch01-section01/page-3.png" width="1399" height="1966" alt="《Agentic Data Scientist》第 1 章第 1 节第 3 页：定义与四种一级能力" loading="lazy" decoding="async">
    </a>
    <figcaption>第 3 页 / 共 5 页</figcaption>
  </figure>

  <figure class="pdf-book-page">
    <a href="/assets/files/agentic-data-scientist-ch01-section01.pdf#page=4" target="_blank" rel="noopener">
      <img src="/assets/images/agentic-data-scientist/ch01-section01/page-4.png" width="1399" height="1966" alt="《Agentic Data Scientist》第 1 章第 1 节第 4 页：Agentic 发现闭环" loading="lazy" decoding="async">
    </a>
    <figcaption>第 4 页 / 共 5 页</figcaption>
  </figure>

  <figure class="pdf-book-page">
    <a href="/assets/files/agentic-data-scientist-ch01-section01.pdf#page=5" target="_blank" rel="noopener">
      <img src="/assets/images/agentic-data-scientist/ch01-section01/page-5.png" width="1399" height="1966" alt="《Agentic Data Scientist》第 1 章第 1 节第 5 页：系统边界" loading="lazy" decoding="async">
    </a>
    <figcaption>第 5 页 / 共 5 页</figcaption>
  </figure>
</div>

<div class="pdf-book-citation" markdown="1">

## Citation

```bibtex
@misc{liu2026agenticdatascientist,
  author       = {Liu, Fan},
  title        = {What Is an Agentic Data Scientist? From Kepler's Eight Arcminutes to the Validation Bottleneck},
  year         = {2026},
  month        = aug,
  howpublished = {Personal blog and book draft},
  url          = {https://luckyfan-cs.github.io/posts/2026/08/what-is-an-agentic-data-scientist/}
}
```

</div>
