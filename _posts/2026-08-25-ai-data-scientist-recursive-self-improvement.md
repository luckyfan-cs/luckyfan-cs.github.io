---
title: "AI Data Scientist 的下一步：从自动化工作流到可验证的递归自我改进"
date: 2026-08-25
permalink: /posts/2026/08/ai-data-scientist-recursive-self-improvement/
tags:
  - AI Data Scientist
  - Recursive Self-Improvement
  - LLM Agents
  - AI for AI
---

<style>
.lang-toggle {
  display: inline-flex;
  gap: 6px;
  margin: 0.5rem 0 1.25rem;
}
.lang-toggle button {
  border: 1px solid #b8b8b8;
  background: #fff;
  color: #333;
  padding: 0.3rem 0.75rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9rem;
}
.lang-toggle button.active {
  background: #333;
  color: #fff;
  border-color: #333;
}
.lang-panel[hidden] {
  display: none;
}
</style>

<div class="lang-toggle" aria-label="Language switcher">
  <button type="button" class="active" data-lang-target="zh">中文</button>
  <button type="button" data-lang-target="en">English</button>
</div>

<div class="lang-panel" data-lang-panel="zh" markdown="1">

## AI Data Scientist 的下一步：从自动化工作流到可验证的递归自我改进

AI Data Scientist 不应该只被理解成一类替代企业数据工作流的垂直 Agent（如 Text-to-SQL、Data Analysis、MLE Agent 等）。它可能是提升通用 LLM 智力的下一个关键试验场：任务足够复杂、反馈相对可验证、场景又足够开放，可以把“复杂交互能力”推进到“提出问题、完成研究、改进研究方法”的闭环能力。

过去两年，AI Data Scientist 的主线进展是把数据分析流程逐步自动化：读取数据、探索、建模、调参、运行实验、生成报告。系统越来越像一个高效的数据科学工程师，但还不像一个真正的科学家。原因并不在于它不会写代码，而在于它通常只是在优化一个由人类预先定义好的问题。

科学家的核心能力不是完成任务清单，而是决定**什么问题值得问、需要什么证据、什么结果足以推翻当前认识，以及下一轮研究应该改变什么**。因此，AI Data Scientist 的下一步不只是更长的工作流或更多工具，而是从自动化工作流迈向一种可验证的递归自我改进（Recursive Self-Improvement, RSI）：系统不仅改进答案，还逐步改进问题、研究策略和评价机制。

## 自动完成数据科学任务，还不是“科学家”

一个典型的数据科学 Agent 接收任务描述、数据集和评分函数，然后搜索更好的代码或实验方案。即使它能自主调试数百轮，也仍然处在一个封闭世界中：目标是人给的，数据边界是人给的，成功标准也是人给的。

这类系统解决的是“如何把给定任务做得更好”。科学研究还多出至少三个环节：

1. **Problem discovery：** 从冲突、异常和未知中识别值得研究的问题。
2. **Evidence design：** 决定需要收集什么数据、设计什么实验，才能区分竞争性解释。
3. **Criterion revision：** 当现有指标不能反映真实进步时，能够审计并更新 evaluator。

> 自动化回答已知问题，是工程效率；持续发现可验证的新问题，并让解决问题的方法随证据进化，才接近科学能力。

## AI Data Scientist 和通用 LLM：垂直应用，还是下一座“智力健身房”？

通用 LLM 提供语言、代码、推理和知识先验；AI Data Scientist 则把这些能力放入一个长期运行、需要调用工具并接受现实反馈的环境。二者不是“基础模型与一个普通下游应用”的单向关系，更可能形成双向循环：

```text
通用 LLM → 数据科学 Agent → 可验证研究轨迹
         → 训练数据 / evaluator / curriculum → 更强的通用 LLM
```

为什么数据科学可能成为提升 LLM 智力的关键场景？因为它同时具备四种难得的性质：

- **足够复杂：** 任务跨越问题理解、数据质量、统计推断、代码执行、实验设计和沟通，不是单一技能测试。
- **长时程：** 早期的数据选择或假设错误，常常在几十步之后才暴露，迫使模型学习信用分配与回溯。
- **相对可验证：** 代码能运行，预测可在留出集上评分，统计结论可复算，实验产物可审计。
- **部分开放：** 同一数据可以支持多个有效问题，真实任务也不存在唯一标准答案。

这正好处于传统 benchmark 与完全开放世界之间。数学和代码验证很强，但问题空间偏窄；聊天与写作足够开放，但 evaluator 容易主观化。数据科学提供了一个中间地带：既能让 Agent 在开放空间中探索，又能用数据、执行和反事实测试约束它。

因此，AI Data Scientist 的意义可能不只是“让企业少写一些 SQL 和 notebook”。它可以成为通用模型学习研究能力的环境：模型在这里产生高质量问题、失败轨迹、实验记录与评价器；这些产物再反哺后训练和下一代模型。真正重要的对象不再只是 Agent，而是**模型—研究环境—评价系统**的共同进化。

## 当前研究已经进化到了哪一步：五层路径

目前还没有一条清晰且得到共识的技术路线，大家仍处于探索阶段。相关工作并不是从“普通 Agent”突然跳到完整 RSI；下面的五层是一个潜在的研究路径。

| 层级 | 代表工作 | 系统改变了什么 | 距离 RSI 的差距 |
| --- | --- | --- | --- |
| L1：任务内自我改进 | [AIDE](https://arxiv.org/abs/2502.13138)、[R&D-Agent](https://arxiv.org/abs/2505.14738)、[AlphaEvolve](https://arxiv.org/abs/2506.13131) | 搜索、修改代码和实验方案 | 目标、任务与 evaluator 由人给定；改进通常不跨任务沉淀 |
| L2：假设进化 | [AI co-scientist](https://arxiv.org/abs/2502.18864)、[Kosmos](https://arxiv.org/abs/2511.02824)、[POPPER](https://arxiv.org/abs/2502.09858) | 生成、竞争、证伪并更新科学假设 | 研究方向仍由人指定，真实实验和专家判断仍是最终裁判 |
| L3：持久学习 | [SEAL](https://arxiv.org/abs/2506.10943)、[ML-Agent](https://arxiv.org/abs/2505.23723)、[Pioneer Agent](https://arxiv.org/abs/2604.09791)、[Q-Evolve](https://arxiv.org/abs/2606.07367)、[PAST-Bench](https://huggingface.co/papers/2608.04003) | 更新权重、数据、策略、技能或过程奖励 | 通常局限于特定分布，容易遗忘、数据污染或奖励过拟合 |
| L4：自我设计 | [ADAS](https://arxiv.org/abs/2408.08435)、[Gödel Agent](https://huggingface.co/papers/2410.04444)、[Darwin Gödel Machine](https://huggingface.co/papers/2505.22954)、[Recursive Harness Self-Improvement](https://huggingface.co/papers/2607.15524)、[MetaSkill-Evolve](https://huggingface.co/papers/2607.05297) | 修改 prompt、工具、控制流、技能文件乃至自身代码 | 基础模型、总体目标和验收 benchmark 多数仍固定 |
| L5：递归研究系统 | [AREX](https://huggingface.co/papers/2607.21461)、[Frontis-MA1 / OpenMLE](https://huggingface.co/papers/2607.28568)、[Red Queen Gödel Machine](https://huggingface.co/papers/2606.26294)、[2026 RSI Survey](https://huggingface.co/papers/2607.07663) | 递归审计研究状态、发起下一轮研究，并开始让研究者与 evaluator 共同变化 | 尚未实现问题、研究者与 evaluator 在开放世界中的可靠共同进化 |

这条路径说明，研究前沿已经从“让模型反思答案”推进到“让 Agent 修改自身研究流程”。但绝大多数成果仍然依赖固定 benchmark 来确认进步。一旦 evaluator 也开放，系统就会面临最根本的问题：它是在变聪明，还是只是在学会赢过自己的裁判？

## Ideation–Execution Gap：为什么“提出问题”比“生成想法”更难

LLM 很擅长生成大量听起来新颖的研究想法，但科学价值不等于语言上的新颖。一个值得研究的问题至少要同时满足：

- 它指向一个真实存在且重要的不确定性；
- 它与已有知识有清楚关系，而不是重复已有结论；
- 它能够转化成可区分的预测、实验或证据需求；
- 在成本、伦理、隐私和资源约束下可以执行；
- 无论结果支持还是否定假设，都能更新我们的认识。

生成一句假设的成本很低，证明它值得执行的成本很高。这里存在一个 Ideation–Execution Gap：系统可以在语言空间无限发散，却很难判断哪个问题能通过真实执行产生信息增益。

因此，“问题提出器”不能只是另一个 prompt。它需要从异常、失败案例、模型分歧和证据缺口中提出候选问题，再通过可识别性分析、最小实验设计、预期信息增益和资源预算进行筛选。提出问题本身也必须被评价。

## Evaluator 才是自我进化的真正瓶颈

在封闭 benchmark 中，evaluator 往往是一个隐藏测试集或评分脚本。随着系统进入开放任务，这种单一分数会失效：

- 预测分数提高，可能来自数据泄漏而不是真实泛化；
- 论文式答案更像专家，并不意味着结论正确；
- Agent 可以优化 evaluator 的表面偏好，产生 reward hacking；
- 固定测试集最终会饱和，无法继续提供学习信号；
- 如果系统同时修改研究者与裁判，两者可能共同漂移。

因此，RSI 所需的 evaluator 不是一个模型打分器，而是一个证据组合，例如下面的：

1. **执行验证：** 代码、查询、实验和产物能否复现。
2. **统计验证：** 结论是否经得住留出集、重采样、消融和敏感性分析。
3. **对抗验证：** 由独立 critic 主动寻找泄漏、替代解释和失败边界。
4. **时间验证：** 改进能否跨任务、跨数据、跨版本保持，而不是单轮偶然收益。
5. **外部验证：** 在高风险领域由专家、真实实验或真实结果提供最终锚点。

[Red Queen Gödel Machine](https://huggingface.co/papers/2606.26294) 把 evaluator 的变化纳入演化过程，是一个重要信号；但 evaluator 共进化并不等于可以取消外部锚点。恰恰相反，评价越能自我修改，越需要冻结测试、独立审计和不可由研究 Agent 访问的证据通道。

## 从单 Agent 到“问题—研究者—评价者”三元共进化

如果只优化研究 Agent，系统最终会受制于固定问题与固定 evaluator。更完整的结构应该包含三个相互制衡的角色：

1. **Problem Generator：** 发现异常与知识缺口，提出可检验问题，并为问题分配优先级。
2. **Researcher：** 检索证据、处理数据、设计实验、运行代码、更新假设并形成可复现产物。
3. **Evaluator：** 检查执行、统计、因果和领域有效性，生成反例，并决定改进是否进入长期记忆。

这里的“共同进化”不是三组 Agent 互相点赞，而是三种能力在外部证据约束下相互制造压力：

- 研究者的进步迫使问题生成器提出更难、更有信息量的问题；
- 新问题暴露旧 evaluator 的盲区，推动评价协议升级；
- 更强 evaluator 揭示研究者的投机行为，推动工具、策略和模型更新；
- 每一次更新都保留 lineage、对照组和可回退版本，从而区分真实进步与共同漂移。

这时，AI Data Scientist 不再是一条固定 pipeline，而是一套持续生产问题、证据、失败经验和改进候选的研究生态。

## 潜在应用领域

完全开放地研究“一切问题”既难以验证，也难以安全启动。RSI 需要在任务空间足够大、反馈能够获得、实验成本可以控制、失败能够隔离的具体领域中接受检验。下面三个领域是可能的应用方向，它们不是预设的发展顺序，而是分别代表不同类型的复杂性与验证条件。

### AI4AI：用 AI 改进 AI

**AI4AI** 更具体地说，是“用 AI Data Scientist 改进模型研发”。它可以覆盖数据策划、数据质量分析、训练配方搜索、benchmark 诊断、能力与安全评估、推理成本优化、Agent 轨迹分析和失败聚类。训练损失、留出集表现、代码测试和推理成本可以被测量，实验也可以在固定算力、版本化数据和沙盒环境中复现。更重要的是，系统产生的数据、工具、研究轨迹与 evaluator 可以直接反哺下一代通用 LLM。

[MLE-bench](https://arxiv.org/abs/2410.07095)、[DataSciBench](https://arxiv.org/abs/2502.13897)、[ScienceAgentBench](https://arxiv.org/abs/2410.05080)，以及更新的 [OpenMLE / Frontis-MA1](https://huggingface.co/papers/2607.28568)，都在把机器学习工程和数据驱动研究变成可执行试验场。它们还不是完整 RSI，但提供了一个关键接口：让模型不只回答关于 AI 的问题，而是参与改进 AI 的过程。

### AI for Healthcare：医疗与生命科学

**AI for Healthcare** 提供了足够复杂且具有真实科学价值的任务空间，包括临床数据分析、队列发现、风险建模、生物标志物探索、药物发现和真实世界证据研究。这个领域可以检验系统是否能够处理异构数据、缺失与偏差、因果混杂、分布迁移以及高风险结论。

医疗场景中的 evaluator 不能只是预测指标，还需要外部验证、敏感性分析、专家审查与伦理约束。潜在实验可以从公开或脱敏数据、回顾性研究和可审计的生命科学任务开始；涉及真实患者的诊断和治疗决策，仍必须保留人类专家的最终判断权。

### AI for Business Decision-Making：商业决策

**AI for Business Decision-Making** 可以覆盖需求预测、定价、营销、供应链、产品实验、客户运营和资源配置。在这些任务中，目标通常是多维的：收入、增长、成本、风险、公平性和用户体验可能相互冲突；环境也会随市场、竞争者与策略本身持续变化。

商业决策适合检验 AI Data Scientist 能否从“生成分析”迈向“形成可行动且可验证的决策”。其反馈可以来自随机实验、准实验、因果推断、长期业务结果和明确的 guardrail；同时也必须警惕系统只优化局部指标、忽略长期影响或把相关性误当成因果关系。

这三个潜在领域提供了互补的检验环境：AI4AI 强调可执行和可回滚的模型改进，医疗强调科学有效性与高风险约束，商业决策强调动态环境和多目标权衡。它们可以共同回答一个关键问题：系统学到的究竟是某个 benchmark 的策略，还是能够跨任务迁移的研究与决策能力。

## References

1. [AIDE](https://arxiv.org/abs/2502.13138) · [Hugging Face Papers](https://huggingface.co/papers/2502.13138)
2. [R&D-Agent](https://arxiv.org/abs/2505.14738) · [Hugging Face Papers](https://huggingface.co/papers/2505.14738)
3. [AlphaEvolve](https://arxiv.org/abs/2506.13131) · [Hugging Face Papers](https://huggingface.co/papers/2506.13131)
4. [Towards an AI Co-Scientist](https://arxiv.org/abs/2502.18864) · [Hugging Face Papers](https://huggingface.co/papers/2502.18864)
5. [Kosmos](https://arxiv.org/abs/2511.02824) · [Hugging Face Papers](https://huggingface.co/papers/2511.02824)
6. [POPPER](https://arxiv.org/abs/2502.09858) · [Hugging Face Papers](https://huggingface.co/papers/2502.09858)
7. [SEAL](https://arxiv.org/abs/2506.10943) · [Hugging Face Papers](https://huggingface.co/papers/2506.10943)
8. [ML-Agent](https://arxiv.org/abs/2505.23723) · [Hugging Face Papers](https://huggingface.co/papers/2505.23723)
9. [Pioneer Agent](https://arxiv.org/abs/2604.09791) · [Hugging Face Papers](https://huggingface.co/papers/2604.09791)
10. [Q-Evolve](https://arxiv.org/abs/2606.07367) · [Hugging Face Papers](https://huggingface.co/papers/2606.07367)
11. [PAST-Bench](https://arxiv.org/abs/2608.04003) · [Hugging Face Papers](https://huggingface.co/papers/2608.04003)
12. [Automated Design of Agentic Systems (ADAS)](https://arxiv.org/abs/2408.08435) · [Hugging Face Papers](https://huggingface.co/papers/2408.08435)
13. [Gödel Agent](https://arxiv.org/abs/2410.04444) · [Hugging Face Papers](https://huggingface.co/papers/2410.04444)
14. [Darwin Gödel Machine](https://arxiv.org/abs/2505.22954) · [Hugging Face Papers](https://huggingface.co/papers/2505.22954)
15. [Recursive Harness Self-Improvement](https://arxiv.org/abs/2607.15524) · [Hugging Face Papers](https://huggingface.co/papers/2607.15524)
16. [MetaSkill-Evolve](https://arxiv.org/abs/2607.05297) · [Hugging Face Papers](https://huggingface.co/papers/2607.05297)
17. [AREX](https://arxiv.org/abs/2607.21461) · [Hugging Face Papers](https://huggingface.co/papers/2607.21461)
18. [Frontis-MA1 / OpenMLE](https://arxiv.org/abs/2607.28568) · [Hugging Face Papers](https://huggingface.co/papers/2607.28568)
19. [The Red Queen Gödel Machine](https://arxiv.org/abs/2606.26294) · [Hugging Face Papers](https://huggingface.co/papers/2606.26294)
20. [Recursive Self-Improvement in AI: From Bounded Self-Refinement to Autonomous Research Loops](https://arxiv.org/abs/2607.07663) · [Hugging Face Papers](https://huggingface.co/papers/2607.07663)
21. [Mendel Gödel Machine](https://arxiv.org/abs/2608.07645) · [Hugging Face Papers](https://huggingface.co/papers/2608.07645)
22. [MLE-bench](https://arxiv.org/abs/2410.07095) · [Hugging Face Papers](https://huggingface.co/papers/2410.07095)
23. [DataSciBench](https://arxiv.org/abs/2502.13897) · [Hugging Face Papers](https://huggingface.co/papers/2502.13897)
24. [ScienceAgentBench](https://arxiv.org/abs/2410.05080) · [Hugging Face Papers](https://huggingface.co/papers/2410.05080)

</div>

<div class="lang-panel" data-lang-panel="en" hidden markdown="1">

## What Comes Next for AI Data Scientists: From Automated Workflows to Verifiable Recursive Self-Improvement

AI Data Scientists should not be understood merely as vertical agents that replace enterprise data workflows such as Text-to-SQL, data analysis, and MLE agents. They may become a key testbed for the next leap in general LLM intelligence: the tasks are sufficiently complex, the feedback is relatively verifiable, and the environment is open enough to advance “complex interaction capabilities” toward a closed loop that can pose questions, conduct research, and improve its own research methods.

Over the past two years, the main direction of progress in AI Data Scientists has been the gradual automation of the data-science workflow: reading data, exploring it, building models, tuning parameters, running experiments, and generating reports. These systems increasingly resemble efficient data-science engineers, but they still do not resemble scientists. The limitation is not that they cannot write code. It is that they usually optimize a problem already defined by humans.

The core capability of a scientist is not completing a task list. It is deciding **which questions are worth asking, what evidence is needed, what result would overturn the current belief, and what the next research cycle should change**. The next step for AI Data Scientists is therefore not simply a longer workflow or a larger toolset. It is a move from workflow automation toward verifiable recursive self-improvement (RSI), in which the system gradually improves not only its answers, but also its questions, research strategies, and evaluation mechanisms.

## Automating Data-Science Tasks Does Not Yet Make a Scientist

A typical data-science agent receives a task description, a dataset, and a scoring function, and then searches for better code or experimental plans. Even if it can debug autonomously for hundreds of iterations, it still operates in a closed world: humans provide the objective, the data boundary, and the definition of success.

Such systems solve the problem of “how to perform a given task better.” Scientific research contains at least three additional stages:

1. **Problem discovery:** Identify worthwhile questions from contradictions, anomalies, and unknowns.
2. **Evidence design:** Decide what data to collect and what experiments can distinguish competing explanations.
3. **Criterion revision:** Audit and update the evaluator when existing metrics no longer reflect genuine progress.

> Automatically answering known questions improves engineering efficiency. Continuously discovering new, verifiable questions—and allowing methods to evolve with the evidence—comes closer to scientific capability.

## AI Data Scientists and General LLMs: A Vertical Application or the Next “Intelligence Gym”?

General LLMs provide language, coding, reasoning, and knowledge priors. AI Data Scientists place those capabilities in a long-running environment that requires tool use and accepts feedback from data and execution. The relationship is not merely a one-way path from a foundation model to an ordinary downstream application. It may form a two-way loop:

```text
General LLM → Data-Science Agent → Verifiable Research Trajectories
            → Training Data / Evaluators / Curricula → Stronger General LLM
```

Why might data science become a key environment for improving LLM intelligence? It combines four uncommon properties:

- **Sufficient complexity:** Tasks span problem interpretation, data quality, statistical inference, code execution, experimental design, and communication rather than a single skill.
- **Long horizons:** An early mistake in data selection or assumptions may become visible only dozens of steps later, forcing the model to learn credit assignment and backtracking.
- **Relative verifiability:** Code can be executed, predictions can be scored on held-out data, statistical claims can be recomputed, and experimental artifacts can be audited.
- **Partial openness:** The same data can support multiple valid questions, and real tasks rarely have a single canonical answer.

This places data science between traditional benchmarks and the fully open world. Mathematics and coding provide strong verification but relatively narrow problem spaces. Conversation and writing are highly open, but their evaluators are often subjective. Data science offers a middle ground: an agent can explore an open space while remaining constrained by data, execution, and counterfactual tests.

The significance of AI Data Scientists may therefore extend beyond helping companies write fewer SQL queries and notebooks. They can become environments in which general models learn research capabilities. Models can generate high-quality questions, failure trajectories, experiment records, and evaluators; those artifacts can then support post-training and the next generation of models. The real object of improvement is no longer the agent alone, but the co-evolution of the **model, research environment, and evaluation system**.

## How Far Has Current Research Evolved? A Five-Level Path

There is not yet a clear, widely accepted technical roadmap, and the community is still exploring. Related work is not jumping directly from an “ordinary agent” to complete RSI. The following five levels describe one potential research path.

| Level | Representative Work | What the System Changes | Remaining Gap to RSI |
| --- | --- | --- | --- |
| L1: Within-task self-improvement | [AIDE](https://arxiv.org/abs/2502.13138), [R&D-Agent](https://arxiv.org/abs/2505.14738), [AlphaEvolve](https://arxiv.org/abs/2506.13131) | Searches and modifies code and experimental plans | Humans still specify the objective, task, and evaluator; improvements usually do not persist across tasks |
| L2: Hypothesis evolution | [AI co-scientist](https://arxiv.org/abs/2502.18864), [Kosmos](https://arxiv.org/abs/2511.02824), [POPPER](https://arxiv.org/abs/2502.09858) | Generates, competes, falsifies, and updates scientific hypotheses | Humans still define the research direction, while real experiments and expert judgment remain the final arbiters |
| L3: Persistent learning | [SEAL](https://arxiv.org/abs/2506.10943), [ML-Agent](https://arxiv.org/abs/2505.23723), [Pioneer Agent](https://arxiv.org/abs/2604.09791), [Q-Evolve](https://arxiv.org/abs/2606.07367), [PAST-Bench](https://huggingface.co/papers/2608.04003) | Updates weights, data, policies, skills, or process rewards | Often limited to particular distributions and vulnerable to forgetting, data contamination, or reward overfitting |
| L4: Self-design | [ADAS](https://arxiv.org/abs/2408.08435), [Gödel Agent](https://huggingface.co/papers/2410.04444), [Darwin Gödel Machine](https://huggingface.co/papers/2505.22954), [Recursive Harness Self-Improvement](https://huggingface.co/papers/2607.15524), [MetaSkill-Evolve](https://huggingface.co/papers/2607.05297) | Modifies prompts, tools, control flow, skill files, or its own code | The foundation model, overall objective, and acceptance benchmark usually remain fixed |
| L5: Recursive research systems | [AREX](https://huggingface.co/papers/2607.21461), [Frontis-MA1 / OpenMLE](https://huggingface.co/papers/2607.28568), [Red Queen Gödel Machine](https://huggingface.co/papers/2606.26294), [2026 RSI Survey](https://huggingface.co/papers/2607.07663) | Recursively audits research state, launches the next research cycle, and begins to evolve both researcher and evaluator | Reliable co-evolution of problems, researchers, and evaluators in an open world has not yet been achieved |

This path suggests that the frontier has moved from “making the model reflect on an answer” toward “allowing the agent to modify its own research process.” Yet most results still rely on fixed benchmarks to certify improvement. Once the evaluator also becomes open to change, the system faces a more fundamental question: is it becoming more intelligent, or merely learning how to defeat its own judge?

## The Ideation–Execution Gap: Why Posing Problems Is Harder Than Generating Ideas

LLMs are good at producing many research ideas that sound novel, but scientific value is not the same as linguistic novelty. A worthwhile research problem should satisfy several requirements:

- It targets a real and important uncertainty.
- It has a clear relationship to existing knowledge rather than repeating a known conclusion.
- It can be translated into distinguishable predictions, experiments, or evidence requirements.
- It is executable under cost, ethical, privacy, and resource constraints.
- Whether the evidence supports or rejects the hypothesis, it updates what we know.

Generating a one-sentence hypothesis is cheap; demonstrating that it is worth executing is expensive. This is the Ideation–Execution Gap: a system can diverge almost without limit in language space, yet struggle to determine which question will produce information gain through real execution.

A “problem proposer” therefore cannot be just another prompt. It must derive candidate questions from anomalies, failure cases, model disagreement, and evidence gaps, and then filter them through identifiability analysis, minimal experiment design, expected information gain, and resource budgets. The act of posing a question must itself be evaluated.

## The Evaluator Is the Real Bottleneck of Self-Evolution

In closed benchmarks, the evaluator is often a hidden test set or scoring script. As a system moves into open-ended tasks, a single score stops being sufficient:

- A higher prediction score may result from data leakage rather than genuine generalization.
- An answer that sounds more like a scientific paper is not necessarily correct.
- An agent can optimize superficial evaluator preferences and produce reward hacking.
- A fixed test set eventually saturates and stops providing useful learning signals.
- If the system modifies both the researcher and the judge, the two can drift together.

The evaluator required for RSI is therefore not a single model judge, but a bundle of evidence, for example:

1. **Execution validation:** Can the code, queries, experiments, and artifacts be reproduced?
2. **Statistical validation:** Do the conclusions survive held-out evaluation, resampling, ablations, and sensitivity analysis?
3. **Adversarial validation:** Can an independent critic uncover leakage, alternative explanations, and failure boundaries?
4. **Temporal validation:** Does the improvement persist across tasks, datasets, and versions instead of appearing as a one-run gain?
5. **External validation:** In high-risk domains, can experts, real experiments, or real-world outcomes provide the final anchor?

The [Red Queen Gödel Machine](https://huggingface.co/papers/2606.26294) brings evaluator change into the evolutionary process, which is an important signal. But evaluator co-evolution does not eliminate the need for external anchors. On the contrary, the more freely an evaluator can modify itself, the more the system needs frozen tests, independent audits, and evidence channels inaccessible to the research agent.

## From a Single Agent to the Co-Evolution of Problem, Researcher, and Evaluator

If we optimize only the research agent, the system will eventually be constrained by fixed problems and a fixed evaluator. A more complete structure contains three roles that check and pressure one another:

1. **Problem Generator:** Finds anomalies and knowledge gaps, proposes testable questions, and prioritizes them.
2. **Researcher:** Retrieves evidence, processes data, designs experiments, runs code, updates hypotheses, and produces reproducible artifacts.
3. **Evaluator:** Checks execution, statistical, causal, and domain validity; generates counterexamples; and decides whether an improvement enters persistent memory.

“Co-evolution” does not mean three groups of agents endorsing one another. It means that the three capabilities create pressure on one another under constraints from external evidence:

- A stronger researcher pushes the problem generator toward harder, more informative questions.
- New questions expose blind spots in the old evaluator and force the evaluation protocol to improve.
- A stronger evaluator reveals opportunistic behavior by the researcher and drives changes to tools, strategies, and models.
- Every update preserves lineage, controls, and rollback points so that real progress can be separated from joint drift.

At this point, an AI Data Scientist is no longer a fixed pipeline. It becomes a research ecosystem that continuously produces problems, evidence, failure experience, and candidate improvements.

## Potential Application Domains

Trying to research “everything” in a fully open setting is difficult to verify and difficult to launch safely. RSI needs to be tested in concrete domains with sufficiently large task spaces, obtainable feedback, controllable experimental cost, and isolatable failures. The following three domains are possible applications. They do not imply a predetermined order; each represents a different kind of complexity and verification condition.

### AI4AI: Using AI to Improve AI

More specifically, **AI4AI** means using AI Data Scientists to improve model development. The task space can include data curation, data-quality analysis, training-recipe search, benchmark diagnosis, capability and safety evaluation, inference-cost optimization, agent-trajectory analysis, and failure clustering. Training loss, held-out performance, code tests, and inference cost can be measured, while experiments can be reproduced with fixed compute, versioned data, and sandboxed environments. More importantly, the resulting data, tools, research trajectories, and evaluators can directly feed back into the next generation of general LLMs.

[MLE-bench](https://arxiv.org/abs/2410.07095), [DataSciBench](https://arxiv.org/abs/2502.13897), [ScienceAgentBench](https://arxiv.org/abs/2410.05080), and the more recent [OpenMLE / Frontis-MA1](https://huggingface.co/papers/2607.28568) are turning machine-learning engineering and data-driven research into executable testbeds. They are not complete RSI systems, but they provide a critical interface: the model no longer merely answers questions about AI; it participates in the process of improving AI.

### AI for Healthcare: Medicine and Life Sciences

**AI for Healthcare** offers a task space that is sufficiently complex and scientifically meaningful, including clinical data analysis, cohort discovery, risk modeling, biomarker exploration, drug discovery, and real-world evidence studies. This domain tests whether a system can deal with heterogeneous data, missingness and bias, causal confounding, distribution shift, and high-stakes conclusions.

An evaluator in healthcare cannot be only a prediction metric. It also needs external validation, sensitivity analysis, expert review, and ethical constraints. Potential experiments can begin with public or de-identified data, retrospective studies, and auditable life-science tasks. Decisions that affect real patients' diagnosis or treatment must retain final human expert authority.

### AI for Business Decision-Making

**AI for Business Decision-Making** can cover demand forecasting, pricing, marketing, supply chains, product experiments, customer operations, and resource allocation. Objectives in these settings are usually multidimensional: revenue, growth, cost, risk, fairness, and user experience may conflict, while the environment changes with the market, competitors, and the strategy itself.

Business decision-making tests whether an AI Data Scientist can move from “generating analysis” to “forming an actionable and verifiable decision.” Feedback can come from randomized experiments, quasi-experiments, causal inference, long-term business outcomes, and explicit guardrails. At the same time, the system must be prevented from optimizing only a local metric, ignoring long-term effects, or confusing correlation with causation.

These three potential domains provide complementary test environments. AI4AI emphasizes executable and reversible model improvement; healthcare emphasizes scientific validity and high-stakes constraints; business decision-making emphasizes dynamic environments and multi-objective trade-offs. Together, they can help answer a crucial question: has the system learned a strategy for a particular benchmark, or a research and decision capability that transfers across tasks?

## References

1. [AIDE](https://arxiv.org/abs/2502.13138) · [Hugging Face Papers](https://huggingface.co/papers/2502.13138)
2. [R&D-Agent](https://arxiv.org/abs/2505.14738) · [Hugging Face Papers](https://huggingface.co/papers/2505.14738)
3. [AlphaEvolve](https://arxiv.org/abs/2506.13131) · [Hugging Face Papers](https://huggingface.co/papers/2506.13131)
4. [Towards an AI Co-Scientist](https://arxiv.org/abs/2502.18864) · [Hugging Face Papers](https://huggingface.co/papers/2502.18864)
5. [Kosmos](https://arxiv.org/abs/2511.02824) · [Hugging Face Papers](https://huggingface.co/papers/2511.02824)
6. [POPPER](https://arxiv.org/abs/2502.09858) · [Hugging Face Papers](https://huggingface.co/papers/2502.09858)
7. [SEAL](https://arxiv.org/abs/2506.10943) · [Hugging Face Papers](https://huggingface.co/papers/2506.10943)
8. [ML-Agent](https://arxiv.org/abs/2505.23723) · [Hugging Face Papers](https://huggingface.co/papers/2505.23723)
9. [Pioneer Agent](https://arxiv.org/abs/2604.09791) · [Hugging Face Papers](https://huggingface.co/papers/2604.09791)
10. [Q-Evolve](https://arxiv.org/abs/2606.07367) · [Hugging Face Papers](https://huggingface.co/papers/2606.07367)
11. [PAST-Bench](https://arxiv.org/abs/2608.04003) · [Hugging Face Papers](https://huggingface.co/papers/2608.04003)
12. [Automated Design of Agentic Systems (ADAS)](https://arxiv.org/abs/2408.08435) · [Hugging Face Papers](https://huggingface.co/papers/2408.08435)
13. [Gödel Agent](https://arxiv.org/abs/2410.04444) · [Hugging Face Papers](https://huggingface.co/papers/2410.04444)
14. [Darwin Gödel Machine](https://arxiv.org/abs/2505.22954) · [Hugging Face Papers](https://huggingface.co/papers/2505.22954)
15. [Recursive Harness Self-Improvement](https://arxiv.org/abs/2607.15524) · [Hugging Face Papers](https://huggingface.co/papers/2607.15524)
16. [MetaSkill-Evolve](https://arxiv.org/abs/2607.05297) · [Hugging Face Papers](https://huggingface.co/papers/2607.05297)
17. [AREX](https://arxiv.org/abs/2607.21461) · [Hugging Face Papers](https://huggingface.co/papers/2607.21461)
18. [Frontis-MA1 / OpenMLE](https://arxiv.org/abs/2607.28568) · [Hugging Face Papers](https://huggingface.co/papers/2607.28568)
19. [The Red Queen Gödel Machine](https://arxiv.org/abs/2606.26294) · [Hugging Face Papers](https://huggingface.co/papers/2606.26294)
20. [Recursive Self-Improvement in AI: From Bounded Self-Refinement to Autonomous Research Loops](https://arxiv.org/abs/2607.07663) · [Hugging Face Papers](https://huggingface.co/papers/2607.07663)
21. [Mendel Gödel Machine](https://arxiv.org/abs/2608.07645) · [Hugging Face Papers](https://huggingface.co/papers/2608.07645)
22. [MLE-bench](https://arxiv.org/abs/2410.07095) · [Hugging Face Papers](https://huggingface.co/papers/2410.07095)
23. [DataSciBench](https://arxiv.org/abs/2502.13897) · [Hugging Face Papers](https://huggingface.co/papers/2502.13897)
24. [ScienceAgentBench](https://arxiv.org/abs/2410.05080) · [Hugging Face Papers](https://huggingface.co/papers/2410.05080)

</div>

<script>
(function () {
  var buttons = document.querySelectorAll('[data-lang-target]');
  var panels = document.querySelectorAll('[data-lang-panel]');
  function showLanguage(lang) {
    panels.forEach(function (panel) {
      panel.hidden = panel.getAttribute('data-lang-panel') !== lang;
    });
    buttons.forEach(function (button) {
      button.classList.toggle('active', button.getAttribute('data-lang-target') === lang);
    });
  }
  buttons.forEach(function (button) {
    button.addEventListener('click', function () {
      showLanguage(button.getAttribute('data-lang-target'));
    });
  });
}());
</script>
