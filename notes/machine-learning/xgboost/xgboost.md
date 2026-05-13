# XGBoost (Extreme Gradient Boosting)

## Definition

XGBoost stands for **Extreme Gradient Boost**, is a supervised machine learning algorithm that inherits from GDBoost (Gradient Boosting).

## How it Works

**Step 1:** Make an Initial Prediction and Calculate Residuals (0.5 for both classification and regression)

**Step 2:** Build an XGBoost Tree by using Gain. The feature and value split is based on the **Greatest Gain**

- **For Regression:**
  - Similarity = (sum of the residual)² / (number of residual + lambda)

- **For Classification:**
  - Exact same as Regular Gradient Boost with additional lambda
  - Similarity = (sum of residuals)² / (number of residuals + lambda)

- **Gain** = Left Similarity Score + Right Similarity Score − Root Similarity Score
- **Lambda** is a regularization term to reduce prediction sensitivity

**Step 3:** Prune the tree by using Gain − gamma. If positive then keep the split, otherwise remove it.

> Note: Setting gamma equal to 0 doesn't mean it will stop pruning — think about when gain is less than 0.

**Step 4:** Calculate the leaf value. If a tree leaf has multiple values, then the value is:
- For regression: `sum(all) / count(all) + lambda`
- For classification: `sum(residuals) / (count(residuals) + lambda)`

**Step 5:** The new model is: `initial prediction + learning_rate × tree`

**Step 6:** Calculate Residuals and repeat until coverage conditions satisfied.

## Convergence Conditions

1. Reach maximum iteration
2. Residual threshold (e.g., if residual reaches 0.1 then you consider it converged — early stopping)

## Assumption

1. Encoded integer value for each variable has ordinal relation

## Advantages

1. Can work in parallel — the nature of the process cannot be parallel, but data processing and calculating similarity score could be in parallel
2. Can handle missing values
3. No need for scaling or normalizing data
4. Fast to interpret
5. Great execution speed

## Disadvantages

1. Can easily overfit if parameters are not tuned properly
2. Hard to tune

## Parameters

1. **Lambda** — L2 regularization term
2. **Alpha** — L1 regularization term
3. **Eta** — Learning Rate

## Code Link

[XGBoost Reference](https://xgboost.readthedocs.io/en/stable/python/python_intro.html)
