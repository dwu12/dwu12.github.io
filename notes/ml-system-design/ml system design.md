## **ML System Design Template** 

1. Ask Questions as detail as possible   
   1. What do you want to achieve with this problem? (Business Goals)   
      1. Success (Monetization, Engagement, Growth)   
      2. Health   
      3. Growth  
   2. Users Experience (Use cases)   
   3. Performance constraints  
      1. How fast (Latency requirement)  
      2. Scale of the data (How many requests per second)   
      3. How good   
   4. How to evaluate both during the training and inference   
      1. Training: some loss function   
      2. Inference: might from users’ reactions   
   5. How personalized does your model need to be?   
   6. Project constraints:  
      1. How much time we have until deployment   
      2. How much computer power is available  
      3. What available system to be used   
   7. Translate the abstract problem into ML problems:  
      1. ML Objective   
      2. ML I/O  
      3. ML Categories ( supervised learning / unsupervised learning)   
           
2. Define the Metric  
   1. Offline metrics (e.g. classification, relevance metrics)  
      1. Classification metrics  
         1. Precision, Recall, F1, ROC AUC, P/R AUC, mAP, log-loss, etc  
            1. Imbalanced data  
      2. Retrieval and ranking metrics  
         1. Precision@k, Recall@k (do not consider ranking quality)  
         2. mAP, MRR, nDCG  
      3. Regression metrics: MSE, MAE,  
      4. Problem specific metrics  
         1. Language: BLEU, BERT, GLUE, ROUGE, etc  
         2. ads: CPE, etc  
      5. Latency  
      6. Computational cost (in particular for on-device)  
   2. Online metrics  
      1. CTR  
      2. Task/session success/failure rate,  
      3. Task/session total (e.g. watch) times,  
      4. Engagement rate (like rate, comment rate)  
      5. Conversion rate  
      6. Revenue lift  
      7. Reciprocal rank of first click, etc,  
      8. Counter metrics: direct negative feedback (hide, report)  
   3. Trade-offs b/w metrics  
        
3. Architecture Discussion  
   1. Non-ML components:  
      1. user, app server, DBs, KGs, etc and their interactions  
   2. ML components:  
      1. Modeling modules (e.g. candidate generator, ranker, ect)  
      2. Train data generator  
   3. Model Selection   
      1. Random Baseline   
      2. Human Baseline   
      3. Simple Heuristic   
      4. Previous work   
   4. Start with simple model and gradual add more complex component or change to complex model   
      1. We can use linear model at the high level 100,000 raw data   
      2. Use more complex model at the concise level 1000 curate data   
           
4. Data Pipeline   
   1. Input / output   
   2. Data availability and collection   
      1. User’s interaction with pre-existing system   
         1. Netflix can use user watched / ignored as the interaction   
      2. Human labelers (super costly, bias issues)   
         1. Crowdsourcing  
            1. Amazon Mechanical Turk   
            2. Need specific labeler   
            3. Privacy issues  
         2. Targeted data gathering   
            1. Focusing on those cannot perform well on your model   
         3. Open source dataset   
         4. GANs   
   3. User data   
   4. Data Storage  
   5. Data preparation and representation   
   6. Challenges   
   7. Privacy   
   8. Bias   
        
5. Feature Engineering   
6. Model Development and Model training and Metric Evaluation   
7. Prediction Service   
   1. Data processing and verification  
   2. Web app and serving system  
   3. Prediction service  
   4. Batch vs Online prediction  
      1. Batch: periodic, pre-computed and stored, retrieved as needed \- high throughput  
      2. Online: predict as request arrives \- low latency  
      3. Hybrid: e.g. Netflix: batch for titles, online for rows  
   5. Nearest Neighbor Service  
      1. Approximate NN  
         1. Tree based, LSH, Clustering based  
   6. ML on the Edge (on-device AI)  
      1. Network connection/latency, privacy, cheap  
      2. Memory, compute power, energy constraints  
      3. Model Compression  
         1. Quantization  
         2. Pruning  
         3. Knowledge distillation  
         4. Factorization  
8. Online model execution and evaluation   
   1. A/B testing   
   2. Bandits   
   3. Canary Release   
   4. Shadow deployment   
        
9. Iterative model Performance   
   1. Debugging   
   2. Feature Distribution Changes   
   3. Scaling (SW and ML systems)  
   4. Monitoring  
   5. Updates

# 

