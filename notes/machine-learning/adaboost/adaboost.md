# AdaBoost (Adaptive Boosting)

## Definition

AdaBoost is a **non-parametric supervised learning algorithm**. It is a type of boosting algorithm that combines multiple weak learners into a strong learner. In AdaBoost, the weak learner is a **decision stump** (a decision tree with only one node and two leaves with depth = 1), which primarily reduces bias.

## How it Works

Boosting works by learning n weak learners sequentially. At step i:

1. Train a weak learner $h_i$
2. Evaluate its error $\epsilon_t$
3. Resample data according to $\epsilon_t$ to focus on wrongly predicted samples

**Detail for AdaBoost:**

1. Initialize weight for each sample
2. For t in T:
   - Train weak classifier (greedy search to find best feature and threshold)
   - Calculate error
     - Flip error occurs when error > 0.5
   - Calculate $\alpha_t = \frac{1}{2} \ln\left(\frac{1 - \epsilon_t}{\epsilon_t}\right)$
   - Update weights for all samples

## Assumption

We assume that our Weak Learning Algorithm (Weak Learner) can consistently find weak classifiers (rules of thumb which classify the data correctly at better than 50%). Given this assumption, we can use boosting to generate a single weighted classifier which correctly classifies our training data at 99%-100%.

## Advantages

1. Not prone to overfit (reduces bias)
2. Easy to use because we don't have much hyperparameter to tune

## Disadvantages

1. Boosting technique learns progressively
2. Sensitive to Noisy data and outliers

## Code Link

[AdaBoost Notebook](https://github.com/dwu12/Machine-Learning-Project/blob/main/machine%20learning/AdaBoost.ipynb)
