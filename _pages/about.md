---
permalink: /
title: "Autonomous Data Science with LLM Agents"
excerpt: "LLM agents for autonomous data science"
author_profile: true
github_stars: true
redirect_from: 
  - /about/
  - /about.html
---

<style>
.page__title {
  display: none;
}
.home-intro {
  margin: 0 0 2rem;
  padding: 2rem 2.1rem;
  border: 1px solid #dce7ed;
  border-radius: 12px;
  background: linear-gradient(145deg, #f7fbfd 0%, #eef6fa 100%);
  box-shadow: 0 12px 30px rgba(35, 71, 92, 0.07);
}
.home-intro__eyebrow {
  margin-bottom: 0.55rem;
  color: #39789f;
  font-size: 0.76rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}
.page__content .home-intro h1 {
  margin: 0 0 0.8rem;
  color: #1f2e37;
  font-family: Georgia, serif;
  font-size: 2.25rem;
  line-height: 1.2;
}
.home-intro__summary {
  max-width: 760px;
  margin: 0 0 1.15rem !important;
  color: #40535f;
  font-size: 1.06rem;
  line-height: 1.72;
}
.home-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.55rem;
  margin-top: 1.1rem;
}
.page__content .home-action {
  display: inline-flex;
  align-items: center;
  padding: 0.42rem 0.78rem;
  border: 1px solid #bdd2df;
  border-radius: 999px;
  color: #2d678b;
  background: rgba(255, 255, 255, 0.72);
  font-size: 0.86rem;
  font-weight: 600;
  text-decoration: none;
}
.page__content .home-action:hover {
  color: #fff;
  background: #39789f;
}
.home-status {
  display: inline-flex;
  margin-top: 1.1rem;
  padding: 0.38rem 0.7rem;
  border-radius: 6px;
  color: #8a4c08;
  background: #fff3df;
  font-size: 0.86rem;
  font-weight: 650;
}
.home-section-title {
  margin: 2.6rem 0 1rem;
  padding-bottom: 0.42rem;
  border-bottom: 1px solid #e1e7ea;
  color: #283a45;
  font-size: 1.55rem;
}
.research-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.8rem;
  margin-bottom: 1.8rem;
}
.research-card {
  padding: 1.05rem;
  border: 1px solid #e0e7eb;
  border-radius: 9px;
  background: #fff;
  box-shadow: 0 7px 18px rgba(35, 71, 92, 0.05);
}
.research-card__index {
  color: #5a8aa6;
  font-size: 0.73rem;
  font-weight: 700;
  letter-spacing: 0.1em;
}
.page__content .research-card h3 {
  margin: 0.35rem 0 0.55rem;
  color: #244f68;
  font-size: 1.08rem;
}
.research-card p {
  margin-bottom: 0.7rem !important;
  color: #56656e;
  font-size: 0.88rem;
  line-height: 1.58;
}
.research-card__links {
  font-size: 0.78rem;
  line-height: 1.65;
}
.home-project,
.home-writing {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 1.2rem;
  align-items: center;
  margin: 1.25rem 0;
  padding: 1.15rem 1.25rem;
  border-left: 4px solid #4b8db5;
  border-radius: 7px;
  background: #f5f9fb;
}
.home-project strong,
.home-writing strong {
  display: block;
  margin-bottom: 0.25rem;
  color: #244f68;
  font-size: 1.03rem;
}
.home-project p,
.home-writing p {
  margin: 0 !important;
  color: #5a6870;
  font-size: 0.88rem;
  line-height: 1.55;
}
.home-stats {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem 1.1rem;
  margin: 1.2rem 0 0;
  color: #64717a;
  font-size: 0.82rem;
}
@media (max-width: 780px) {
  .home-intro {
    padding: 1.45rem;
  }
  .page__content .home-intro h1 {
    font-size: 1.8rem;
  }
  .research-grid {
    grid-template-columns: 1fr;
  }
  .home-project,
  .home-writing {
    grid-template-columns: 1fr;
  }
}
</style>

<section class="home-intro">
  <div class="home-intro__eyebrow">Fan Liu · HKUST(GZ)</div>
  <h1>Autonomous Data Science with LLM Agents</h1>
  <p class="home-intro__summary">I build autonomous data science agents that can perceive and reason over data, make effective modeling decisions, and operate reliably in real-world environments. My current work focuses on LLM agents for data science, particularly code generation and self-evolving agent systems.</p>
  <div class="home-actions">
    <a class="home-action" href="https://scholar.google.com/citations?hl=en&user=w_T6VSsAAAAJ&view_op=list_works">Google Scholar</a>
    <a class="home-action" href="https://github.com/usail-hkust/DataNova">DataNova</a>
    <a class="home-action" href="/posts/2026/08/ai-data-scientist-recursive-self-improvement/">Latest Blog</a>
  </div>
  <div class="home-stats">
    <span>10+ publications</span>
    <span>1,000+ citations</span>
    <span>ICLR · NeurIPS · KDD · WWW</span>
    <span>Email: liufanuestc AT DOT com</span>
  </div>
  <div class="home-status">Open to postdoctoral and industry opportunities.</div>
</section>

<h2 class="home-section-title">Research Directions</h2>

<div class="research-grid">
  <article class="research-card">
    <div class="research-card__index">01 · DATA</div>
    <h3>Data-centric Agents</h3>
    <p>Perception, interpretation, adaptation, and governance mechanisms that give autonomous agents a reliable understanding of data.</p>
    <div class="research-card__links"><a href="https://openreview.net/forum?id=kZHSvETWdi">Multimodal Scientific Discovery</a><br><a href="https://doi.org/10.1145/3696410.3714821">Subgraph Federated Unlearning</a></div>
  </article>

  <article class="research-card">
    <div class="research-card__index">02 · MODEL</div>
    <h3>Model-centric Agents</h3>
    <p>Reasoning, mathematical modeling, and inference-time methods that improve how agents formulate and solve data-science problems.</p>
    <div class="research-card__links"><a href="https://openreview.net/forum?id=o8n5oNDsiq">MM-Agent</a> · <a href="https://github.com/usail-hkust/LLM-MM-Agent">Code</a><br><a href="https://openreview.net/forum?id=c6OvkQTV2D">Inference-time Computation</a></div>
  </article>

  <article class="research-card">
    <div class="research-card__index">03 · SYSTEM</div>
    <h3>Systems-centric Agents</h3>
    <p>Execution, control, evaluation, and platform infrastructure for reliable long-horizon data-science agents.</p>
    <div class="research-card__links"><a href="https://github.com/usail-hkust/dslighting">DSLighting</a> · <a href="https://pypi.org/project/dslighting/">PyPI</a></div>
  </article>
</div>

<div class="home-project">
  <div>
    <strong>DataNova</strong>
    <p>A family of autonomous and self-evolving data-science agents for mathematical modeling, multimodal scientific discovery, and end-to-end data analysis.</p>
  </div>
  <a href="https://github.com/usail-hkust/DataNova" class="btn btn--primary">Explore DataNova</a>
</div>

<div class="home-writing">
  <div>
    <strong>Latest Writing · AI Data Scientist 的下一步</strong>
    <p>A bilingual essay on moving from automated data-science workflows toward verifiable recursive self-improvement.</p>
  </div>
  <a href="/posts/2026/08/ai-data-scientist-recursive-self-improvement/" class="btn">Read</a>
</div>


## Selected Works
<div class="featured-publications">
  <article class="featured-publication-card">
    <a class="featured-publication-card__media" href="https://openreview.net/forum?id=o8n5oNDsiq">
      <img src="{{ site.baseurl }}/assets/papers/MM-agent.png" alt="MM-Agent teaser image" loading="lazy">
    </a>
    <div class="featured-publication-card__body">
      <div class="featured-publication-card__meta">NeurIPS 2025</div>
      <h3 class="featured-publication-card__title"><a href="https://openreview.net/forum?id=o8n5oNDsiq">MM-Agent: LLM as Agents for Real-world Mathematical Modeling Problem</a></h3>
      <p class="featured-publication-card__description">MM-Agent is an LLM agent framework for real-world mathematical modeling. It decomposes open-ended modeling into problem analysis, model formulation, computational solving, and report generation, enabling end-to-end solutions for real-world mathematical modeling tasks.</p>
      <div class="featured-publication-card__links">
        <a class="featured-publication-card__link" href="https://openreview.net/forum?id=o8n5oNDsiq">Paper</a>
        <a class="featured-publication-card__link" href="https://github.com/usail-hkust/LLM-MM-Agent">Code</a>
        <a class="featured-publication-card__link" href="https://huggingface.co/spaces/MathematicalModelingAgent/MathematicalModelingAgent">Demo</a>
        <span class="featured-publication-card__stat" data-github-stars="usail-hkust/LLM-MM-Agent" aria-label="652 GitHub stars for MM-Agent"><i class="fas fa-star" aria-hidden="true"></i> <span data-github-star-count>652</span> stars</span>
      </div>
    </div>
  </article>

  <article class="featured-publication-card">
    <a class="featured-publication-card__media" href="https://github.com/usail-hkust/dslighting">
      <img src="{{ site.baseurl }}/assets/papers/dslighting.png" alt="DSLighting teaser image" loading="lazy">
    </a>
    <div class="featured-publication-card__body">
      <div class="featured-publication-card__meta">Data Science Agent Harness</div>
      <h3 class="featured-publication-card__title"><a href="https://github.com/usail-hkust/dslighting">DSLighting</a></h3>
      <p class="featured-publication-card__description">DSLighting is an LLM-driven autonomous data science execution engine that turns task descriptions and datasets into iterative code generation, execution, evaluation, and refinement workflows.</p>
      <div class="featured-publication-card__links">
        <a class="featured-publication-card__link" href="https://github.com/usail-hkust/dslighting">Code</a>
        <a class="featured-publication-card__link" href="https://luckyfan-cs.github.io/dslighting-web/api/getting-started.html">Docs</a>
        <span class="featured-publication-card__stat" data-github-stars="usail-hkust/dslighting" aria-label="53 GitHub stars for DSLighting"><i class="fas fa-star" aria-hidden="true"></i> <span data-github-star-count>53</span> stars</span>
      </div>
    </div>
  </article>
</div>



## Recent Works
<details class="collapsible-section recent-works">
  <summary><strong>Expand / collapse list</strong></summary>
  <p><em>(* Equal contribution)</em></p>
  <ul>
    <li>[EMNLP Findings] <strong>Fan Liu</strong>, Tianyu Pang, Chao Du, and Hao Liu. DSFlow: Evolutionary Workflow Optimization for Generalizable LLM-Based Data Science Automation. EMNLP 2026 Findings. <a href="https://openreview.net/group?id=EMNLP/2026/Conference#tab-findings">[Findings]</a></li>
    <li>[Arxiv] Zherui Yang, <strong>Fan Liu</strong>, Hao Liu*. DSWorld: A Data Science World Model for Efficient Autonomous Agents. arXiv, 2026. <a href="https://arxiv.org/abs/2607.15901">[arXiv]</a>, <a href="https://arxiv.org/pdf/2607.15901v1">[pdf]</a>, <a href="https://anonymous.4open.science/r/DSWorld">[Code]</a></li>
    <li>[KDD] Zherui Yang, <strong>Fan Liu</strong>, Yansong Ning and Hao Liu*. EvoDS: Self-Evolving Autonomous Data Science Agent with Capability Learning and Context Management. In Proceedings of the 32nd SIGKDD Conference on Knowledge Discovery and Data Mining, Jeju, South Korea, 2026. <a href="https://arxiv.org/abs/2606.03841">[arXiv]</a>, <a href="https://github.com/usail-hkust/EvoDS">[Code]</a> <strong>(CCF A)</strong></li>
    <li>[ICLR] <strong>Fan Liu</strong>, Xiaozhao Zeng and Hao Liu. Towards Multimodal Data-Driven Scientific Discovery Powered by LLM Agents. In Proceedings of the Fourteenth International Conference on Learning Representations, Rio de Janeiro, Brazil, 2026. <a href="https://openreview.net/forum?id=kZHSvETWdi">[OpenReview]</a></li>
    <li>[NeurIPS] <strong>Fan Liu</strong>, Jindong Han, Tengfei Lyu, Weijia Zhang, Zhe-Rui Yang, Lu Dai, Cancheng Liu, Hao Liu, <em>Foundation Models for Scientific Discovery: From Paradigm Enhancement to Paradigm Transition</em>, NeurIPS, 2025. <a href="https://www.researchgate.net/publication/395899358_Foundation_Models_for_Scientific_Discovery_From_Paradigm_Enhancement_to_Paradigm_Transition">[pdf]</a>, <a href="https://github.com/usail-hkust/Awesome-Foundation-Models-for-Scientific-Discovery">[Project]</a> <strong>(CCF A)</strong> <span style="color:red;">Position, Acceptance rate~6%</span></li>
    <li>[NeurIPS] <strong>Fan Liu</strong>*, Zherui Yang*, Cancheng Liu, Tianrui Song, Xiaofeng Gao, Hao Liu, MM-Agent: LLM as Agents for Real-world Mathematical Modeling Problem, NeurIPS, 2025. <a href="https://openreview.net/forum?id=o8n5oNDsiq">[OpenReview]</a>, <a href="https://arxiv.org/pdf/2505.14148">[pdf]</a>, <a href="https://github.com/usail-hkust/LLM-MM-Agent">[Code]</a>, <a href="https://huggingface.co/spaces/MathematicalModelingAgent/MathematicalModelingAgent">[Demo]</a> <strong>(CCF A)</strong> <span style="color:red;">🔥🚀 Our MM-Agent system assists two undergraduate teams awarded F Award in 2025 MCM/ICM (top 2.0% among 27,456 human teams)</span></li>
    <li>[NeurIPS] <strong>Fan LIU</strong>, Wenshuo Chao, Naiqiang Tan, Hao Liu, Bag of Tricks for Inference-time Computation of LLM Reasoning, NeurIPS D&amp;B, 2025. <a href="https://openreview.net/forum?id=c6OvkQTV2D">[OpenReview]</a>, <a href="https://arxiv.org/pdf/2502.07191">[pdf]</a>, <a href="https://github.com/usail-hkust/benchmark_inference_time_computation_LLM">[Code]</a> <strong>(CCF A)</strong></li>
    <li>[WWW] <strong>Fan LIU</strong>, Hao Liu, Subgraph Federated Unlearning, WWW, 2025. <a href="https://doi.org/10.1145/3696410.3714821">[DOI]</a>, <a href="https://openreview.net/forum?id=hhYYo249sE">[OpenReview]</a> <strong>(CCF A, Oral)</strong></li>
    <li>[Arxiv] <strong>Fan LIU</strong>, Yue Feng, Zhao Xu, Lixin Su, Xinyu Ma, Dawei Yin, Hao Liu, JAILJUDGE: A Comprehensive Jailbreak Judge Benchmark with Multi-Agent Enhanced Explanation Evaluation Framework, Arxiv, 2024. <a href="https://usail-hkust.github.io/Jailjudge/">[Project Page]</a>, <a href="https://openreview.net/forum?id=cLYvhd0pDY">[OpenReview]</a>, <a href="https://arxiv.org/pdf/2410.12855">[pdf]</a>, <a href="https://github.com/usail-hkust/Jailjudge/">[Code]</a>, <a href="https://huggingface.co/datasets/usail-hkust/JailJudge">[Dataset]</a>, <a href="https://huggingface.co/usail-hkust/JailJudge-guard">[Model]</a>, <a href="https://mp.weixin.qq.com/s/eu9GLk_MNjPe80R5FrV_tg">[Coverage]</a> <span style="color:red;">🔥🚀 Model 6000+ Downloads</span></li>
    <li>[NeurIPS] Zhao Xu, <strong>Fan LIU</strong>, Hao Liu, Bag of Tricks: Benchmarking of Jailbreak Attacks on LLMs, NeurIPS D&amp;B, 2024. <a href="https://proceedings.neurips.cc/paper_files/paper/2024/file/38c1dfb4f7625907b15e9515365e7803-Paper-Datasets_and_Benchmarks_Track.pdf">[pdf]</a>, <a href="https://github.com/usail-hkust/Bag_of_Tricks_for_LLM_Jailbreaking">[Code]</a>, <a href="https://mp.weixin.qq.com/s/KulCxJm1wgz2fqorfuJ3Iw">[Coverage]</a> <strong>(CCF A)</strong></li>
    <li>[KDD] <strong>Fan LIU</strong>, Weijia Zhang, Hao Liu, Robust Spatiotemporal Traffic Forecasting with Reinforced Dynamic Adversarial Training, KDD, 2023. <a href="https://arxiv.org/abs/2306.14126">[arXiv]</a> <strong>(CCF A)</strong></li>
    <li>[NeurIPS] <strong>Fan LIU</strong>, Hao Liu, Wenzhao Jiang, Practical Adversarial Attacks on Spatiotemporal Traffic Forecasting Models, NeurIPS, 2022. <a href="https://proceedings.neurips.cc/paper_files/paper/2022/file/79081c95482707d2db390542614e29cd-Paper-Conference.pdf">[pdf]</a>, <a href="https://hackmd.io/@tungsomot/H1CtgXDEo">[Blog]</a>, <a href="https://github.com/usail-hkust/Adv-ST">[Code]</a> <strong>(CCF A)</strong></li>
  </ul>
</details>


## Education and Experience
<details class="collapsible-section">
  <summary><strong>Expand / collapse list</strong></summary>
  <ul>
    <li>2022: Graduate student at HKUST(GZ)</li>
    <li>2021: Intern at HKUST(GZ)</li>
    <li>2020: Intern at MSRA (<a href="https://www.msra.cn/zh-cn/connections/academic-programs/xingqiao">StarBridge Program</a>)</li>
    <li>2020: B.S. from UESTC</li>
    <li>2019: Research visit at UBC</li>
  </ul>
</details>


## Awards, Acknowledgements, and Services
<details class="collapsible-section">
  <summary><strong>Expand / collapse list</strong></summary>
  <ul>
    <li>Reviewer for Conference: ICLR 2024-2025, NeurIPS 2023-2024, KDD 2023-2025, WWW 2025, AISTATS 2025, AdvML-Frontiers (ICML 2023 Workshop), FL4Data-Mining (KDD 2023 Workshop)</li>
    <li>Reviewer for Journal: ITS, Transactions On SMC: Systems, Physica A, TFS, TII</li>
    <li>TPC member: FL4Data-Mining (KDD 2023 Workshop)</li>
    <li>KDD Student Travel Award (2023)</li>
    <li>RBM Student Travel Grant (2023)</li>
    <li>Outstanding Undergraduate Thesis Award</li>
    <li>Outstanding Undergraduate Student</li>
    <li>Excellent Student Scholarship (2017-2020)</li>
  </ul>
</details>
