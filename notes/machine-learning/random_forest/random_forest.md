# Random Forest

## Definition

Random Forest is a **non-parametric supervised learning algorithm**. It is a type of **bagging (Bootstrap Aggregating)** algorithm that trains N decision trees in parallel, where each tree is trained on a different subset of data.

The key innovation is the introduction of **two sources of randomness**:
1. **Bootstrap Sampling:** Each tree uses sample with replacement
2. **Feature Randomness:** Only a subset of features is used for each tree split

## How it Works

1. **Bootstrap Sampling:** Create N training sets by sampling with replacement
2. **Train N Decision Trees:** In parallel, each on its own bootstrap sample
3. **Feature Randomness:** At each split, only randomly selected subset of features is considered
4. **Aggregation:** For classification: majority vote; for regression: average

**Why It Works:**
Since each tree is created using different features on different datasets, each tree is different. By averaging predictions across many trees, variance is reduced while bias remains low.

## Bagging (Bootstrap Aggregating)

1. Train N base learners in parallel
2. Each base learner is trained on a bootstrap sample
3. Combine predictions (majority vote for classification, average for regression)

## Assumption

1. Features should be categorical or discretized (like decision trees)
2. More trees generally improve performance (but with diminishing returns)
3. Each tree should be as uncorrelated as possible (achieved through feature randomness)

## Pros / Advantages

1. **Reduces Overfitting:** Averaging across trees reduces variance without increasing bias
2. **Handles Missing Data:** Can handle missing values by using surrogate splits
3. **No Feature Scaling Required:** Works with raw features
4. **Feature Importance:** Can extract feature importance from the model
5. **Robust to Outliers:** Individual trees may be affected but ensemble is robust
6. **Parallel Training:** Trees can be trained in parallel
7. **Less Overfitting than Decision Trees:** More trees = more stable predictions

## Cons / Disadvantages

1. **Computationally Intensive:** Training many trees takes longer than single decision tree
2. **Memory Intensive:** Need to store all trees
3. **Less Interpretable:** Harder to explain than single decision tree
4. **May Overfit on Certain Types of Data:** Can still overfit if random sampling isn't diverse enough
5. **Slow for Real-Time Prediction:** Need to run all trees for each prediction

## Code Link

[Random Forest Notebook](https://github.com/dwu12/Machine-Learning-Project/blob/main/machine%20learning/Random%20Forest.ipynb)

## Additional Notes

### Difference from Decision Tree

| Aspect | Decision Tree | Random Forest |
|--------|--------------|---------------|
| Trees | Single tree | Multiple trees |
| Training | Whole dataset | Bootstrap samples |
| Features | All features | Subset of features |
| Variance | High | Reduced through averaging |
| Overfitting | Easy to overfit | More robust |

### Extra Trees (Extremely Randomized Trees)

Similar to Random Forest but with even more randomization:
- Uses entire dataset (no bootstrap)
- Splits are chosen randomly (not based on best split)
- Faster but may have higher variance