---
permalink: /
title: "Bio"
excerpt: "About me"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

I am Fan LIU, a graduate student at HKUST(GZ). My research focuses on LLM agents for data science, particularly code generation for data science. Broadly, I study how to build autonomous data science agents that can perceive and reason over data, make effective modeling decisions, and operate reliably in real-world environments. My work spans three main directions:

- Data-centric: methods that improve how agents perceive, interpret, reason over, and adapt to data, providing the perceptual foundation for autonomous data science agents. Representative examples include multimodal data perception for scientific discovery ([ICLR 2026] [Towards Multimodal Data-Driven Scientific Discovery Powered by LLM Agents](https://openreview.net/forum?id=kZHSvETWdi)) and data governance mechanisms such as unlearning in graph-structured environments ([WWW 2025] [Subgraph Federated Unlearning](https://doi.org/10.1145/3696410.3714821), [OpenReview](https://openreview.net/forum?id=hhYYo249sE)).

- Model-centric: methods that strengthen the modeling, reasoning, and decision-making capabilities of autonomous data science agents. Representative examples include agentic mathematical modeling ([NeurIPS 2025] [MM-Agent: LLM as Agents for Real-world Mathematical Modeling Problem](https://openreview.net/forum?id=o8n5oNDsiq), [arXiv](https://arxiv.org/abs/2505.14148), [Code](https://github.com/usail-hkust/LLM-MM-Agent)) and improving inference-time computation for LLM reasoning ([NeurIPS 2025] [Bag of Tricks for Inference-time Computation of LLM Reasoning](https://openreview.net/forum?id=c6OvkQTV2D), [arXiv](https://arxiv.org/abs/2502.07191), [Code](https://github.com/usail-hkust/benchmark_inference_time_computation_LLM)).

- Systems-centric: infrastructure that enables autonomous data science agents to operate reliably in real-world environments, including execution infrastructure for data and environment interaction, control infrastructure for long-horizon task execution, and platform infrastructure for scalable training, deployment, and governance. A representative system is [DSLighting](https://github.com/usail-hkust/dslighting), an end-to-end data science agent platform ([PyPI](https://pypi.org/project/dslighting/)).

I have published over 10 papers at top-tier venues, including NeurIPS, KDD, WWW, ECML PKDD, ICMLW, and TFS. For more details, please refer to [[Google Scholar](https://scholar.google.com/citations?hl=en&user=w_T6VSsAAAAJ&view_op=list_works&gmla=AJsN-F6dCU5T7zqsidfpbWQ8dM-gnrcr_B7HR2Al0KB-Da0O4rcUVdg50B8s5frd_M45ZL6BePe8-CSTML8ov3F66_cbUYBgM835uoGWaepf8tveijtCUcc)]. If you are interested in my research, **feel free to reach out for discussions, collaborations, internship opportunities, or related inquiries**.  

Email: liufanuestc AT DOT com


Featured Works
======
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
        <a class="featured-publication-card__link" href="https://arxiv.org/abs/2505.14148">arXiv</a>
        <a class="featured-publication-card__link" href="https://github.com/usail-hkust/LLM-MM-Agent">Code</a>
        <a class="featured-publication-card__link" href="https://huggingface.co/spaces/MathematicalModelingAgent/MathematicalModelingAgent">Demo</a>
        <a class="featured-publication-card__stars" href="https://github.com/usail-hkust/LLM-MM-Agent/stargazers">
          <img alt="GitHub stars for MM-Agent" src="https://img.shields.io/github/stars/usail-hkust/LLM-MM-Agent?style=social">
        </a>
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
        <a class="featured-publication-card__link" href="https://pypi.org/project/dslighting/">PyPI</a>
        <a class="featured-publication-card__link" href="https://luckyfan-cs.github.io/dslighting-web/api/getting-started.html">Docs</a>
        <a class="featured-publication-card__stars" href="https://github.com/usail-hkust/dslighting/stargazers">
          <img alt="GitHub stars for DSLighting" src="https://img.shields.io/github/stars/usail-hkust/dslighting?style=social">
        </a>
      </div>
    </div>
  </article>
</div>



Recent Works
======
<details class="collapsible-section recent-works">
  <summary><strong>Expand / collapse list</strong></summary>
  <p><em>(* Equal contribution)</em></p>
  <ul>
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


Education and Experience
======
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


Awards, Acknowledgements, and Services
------
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
