# ML System Design Template

## 1. Ask Questions in Detail

1. **What do you want to achieve with this problem?** (Business Goals)
   - Success: Monetization, Engagement, Growth
   - Health
   - Growth

2. **User Experience** (Use cases)

3. **Performance constraints**
   - How fast (Latency requirement)
   - Scale of the data (How many requests per second)
   - How good

4. **How to evaluate both during training and inference**
   - Training: some loss function
   - Inference: might come from users' reactions

5. **How personalized does your model need to be?**

6. **Project constraints**
   - How much time we have until deployment
   - How much compute power is available
   - What available systems to be used

7. **Translate the abstract problem into ML problems**
   - ML Objective
   - ML I/O
   - ML Categories (supervised learning / unsupervised learning)

---

## 2. Define the Metric

### Offline Metrics

1. **Classification metrics**
   - Precision, Recall, F1, ROC AUC, P/R AUC, mAP, log-loss, etc.
   - Imbalanced data considerations

2. **Retrieval and ranking metrics**
   - Precision@k, Recall@k (do not consider ranking quality)
   - mAP, MRR, nDCG

3. **Regression metrics**: MSE, MAE

4. **Problem-specific metrics**
   - Language: BLEU, BERT, GLUE, ROUGE, etc.
   - Ads: CPE, etc.

5. Latency
6. Computational cost (in particular for on-device)

### Online Metrics

1. CTR
2. Task/session success/failure rate
3. Task/session total (e.g. watch) times
4. Engagement rate (like rate, comment rate)
5. Conversion rate
6. Revenue lift
7. Reciprocal rank of first click, etc.
8. Counter metrics: direct negative feedback (hide, report)

### Trade-offs Between Metrics

---

## 3. Architecture Discussion

### Non-ML Components
- User, app server, DBs, KGs, etc. and their interactions

### ML Components
- Modeling modules (e.g. candidate generator, ranker, etc.)
- Train data generator

### Model Selection
1. Random Baseline
2. Human Baseline
3. Simple Heuristic
4. Previous work

### Progression
Start with a simple model and gradually add more complex components:
- Use a linear model at the high level (100,000 raw data)
- Use a more complex model at the concise level (1,000 curate data)

---

## 4. Data Pipeline

1. Input / output
2. **Data availability and collection**
   - User's interaction with pre-existing system
     - Netflix can use user watched / ignored as the interaction
   - Human labelers (super costly, bias issues)
     - Crowdsourcing (Amazon Mechanical Turk, need specific labeler)
     - Privacy issues
     - Targeted data gathering (focusing on those who cannot perform well on your model)
     - Open source datasets
     - GANs
3. User data
4. Data Storage
5. Data preparation and representation
6. Challenges
7. Privacy
8. Bias

---

## 5. Feature Engineering

---

## 6. Model Development and Training and Metric Evaluation

---

## 7. Prediction Service

1. Data processing and verification
2. Web app and serving system
3. Prediction service
4. **Batch vs Online prediction**
   - **Batch**: periodic, pre-computed and stored, retrieved as needed — high throughput
   - **Online**: predict as request arrives — low latency
   - **Hybrid**: e.g. Netflix — batch for titles, online for rows
5. **Nearest Neighbor Service**
   - Approximate NN: Tree based, LSH, Clustering based
6. **ML on the Edge** (on-device AI)
   - Network connection/latency, privacy, cheap
   - Memory, compute power, energy constraints
   - **Model Compression**
     - Quantization
     - Pruning
     - Knowledge distillation
     - Factorization

---

## 8. Online Model Execution and Evaluation

1. A/B Testing
2. Bandits
3. Canary Release
4. Shadow Deployment

---

## 9. Iterative Model Performance

1. Debugging
2. Feature Distribution Changes
3. Scaling (SW and ML systems)
4. Monitoring
5. Updates

