# WhenZhou Kean University Learning Notes
This is the notes that aims at recording my learning process, and helping me to review the knowledge.

# index
- [General Learning Skill](GenralLearningSkill.md)
- [Markdown 语法指南](Markdown/README.md)
- [git & github](git_github_Notes/README.md)
- [NumPy 笔记](NumPy_Notes/README.md)
- [Pandas 笔记](Pandas_Notes/readme.md)
- [Matplotlib 笔记](Matplotlib_Notes/readme.md)
- [Seaborn 笔记](Seaborn_Notes/readme.md)
- [Scikit-learn 笔记](Scikit-learn_Notes/readme.md)
- [PyTorch 笔记](PyTorch_Notes/readme.md)
- [TensorFlow 笔记](TensorFlow_Notes/readme.md)
- [Deployment of Deepseek](Deepseek_Notes/readme.md)
- [Docker notes](Docker_Notes/readme.md)
# 学习路径规划

## 1. 基础准备阶段（1-2个月）

### 数学基础
- 线性代数（矩阵运算、向量空间）
- 概率论与统计（条件概率、贝叶斯定理）
- 微积分（梯度、导数、链式法则）

**推荐资源：**
- 《深度学习》第1章（Ian Goodfellow）
- Khan Academy 数学课程

### 编程基础
- Python 编程（重点掌握 NumPy、Pandas）
- PyTorch/TensorFlow 基础

**推荐资源：**
- 《Python Crash Course》
- PyTorch 官方教程

### 深度学习基础
- 神经网络基础（前向传播、反向传播）
- 常见模型（MLP、CNN、RNN）

**推荐资源：**
- 吴恩达《深度学习专项课程》
- 《动手学深度学习》

## 2. 自然语言处理（NLP）入门（1-2个月）

### NLP 基础
- 词嵌入（Word2Vec、GloVe）
- 序列模型（RNN、LSTM、GRU）
- 注意力机制（Attention）

**推荐资源：**
- 《Speech and Language Processing》第3版
- Hugging Face NLP 教程

### Transformer 架构
- 学习 Transformer 的编码器-解码器结构
- Self-Attention、Positional Encoding

**推荐资源：**
- 《The Illustrated Transformer》（图文解析）
- 原始论文《Attention Is All You Need》

## 3. 大语言模型（LLM）专项学习（3-6个月）

### 核心理论
- 模型架构（GPT、BERT、T5 等）
- 预训练（Pretraining）与微调（Fine-tuning）
- 提示工程（Prompt Engineering）

**推荐资源：**
- 《预训练语言模型》综述
- OpenAI GPT 文档

### 实践项目
- 使用 Hugging Face 库调用预训练模型（如 GPT-2、BERT）
- 微调模型完成特定任务（文本生成、分类）

**推荐工具：**
- Hugging Face Transformers
- Google Colab（免费 GPU）

### 高阶技术
- 模型压缩（蒸馏、量化）
- 强化学习与人类反馈（RLHF）
- 多模态 LLM（如 GPT-4、Flamingo）

**推荐资源：**
- 《Language Models are Few-Shot Learners》（GPT-3 论文）
- DeepSeek 技术博客

# 高效学习技巧

## 1. 边学边做（Learn by Doing）
**小项目驱动：**
从简单任务开始（如文本生成、情感分析），逐步增加复杂度。

**示例项目：**
- 用 GPT-2 生成短故事
- 微调 BERT 做新闻分类
- 构建一个问答机器人

**参与开源社区：**
- 贡献 Hugging Face 模型或数据集
- 复现经典论文代码（GitHub 搜索 LLM implementation）

## 2. 刻意练习
- 代码调试：逐行理解模型代码，尝试修改超参数观察效果。
- 论文精读：每周精读 1 篇论文，整理核心思想和代码复现。

## 3. 善用工具
**调试工具：**
- PyTorch 的 torchsummary
- TensorBoard

**效率工具：**
- Notion（知识管理）
- Anki（记忆卡片）

# 避坑指南

## 1. 避免过早深入细节
初期不必纠结数学公式的严格推导，先理解核心思想。

**例如：**先搞懂 Transformer 的注意力机制流程，再研究矩阵运算细节。

## 2. 不要忽视基础
如果发现对反向传播或梯度下降不熟悉，及时回补基础。

**推荐测试：**能否手写一个简单的全连接神经网络？

## 3. 警惕“教程陷阱”
不要盲目跟随教程，尝试修改代码并观察结果。

**例如：**在文本生成任务中调整温度（temperature）参数，观察输出变化。

# 学习资源整合

## 1. 书籍
- 《Natural Language Processing with Transformers》
- 《Deep Learning for Coders with fastai & PyTorch》

## 2. 在线课程
- Stanford CS224N（NLP with Deep Learning）
- Full Stack LLM Bootcamp

## 3. 社区与平台
- Hugging Face 论坛
- Kaggle 竞赛（搜索 NLP 相关比赛）

# 保持动力的方法

**设定里程碑：**
每月完成一个小项目，并记录进展（如 GitHub 仓库）。

**加入学习小组：**
参与 Discord/Reddit 的 AI 社群（如 r/MachineLearning）。

**关注行业动态：**
- 订阅 The Batch（Andrew Ng 的简报）
- 关注 ArXiv 最新论文（关键词：llm、nlp）。

# 总结
**核心路径：**基础 → NLP → Transformer → LLM → 实践 → 高阶。

**关键点：**代码实操 > 理论背诵，项目驱动 > 被动学习。

**最终目标：**能独立完成 LLM 微调、部署，并理解技术趋势。