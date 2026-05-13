# GBoost (Gradient Boosting)

## Definition

Gradient Boost is a **non-parametric supervised learning algorithm**. It is a type of boosting algorithm that combines multiple weak learners into a strong learner using the **gradient of the loss function**.

Unlike AdaBoost, Gradient Boost uses larger stumps (usually with max depth of 8 or 32).

## How it Works (Implementation Details)

### For Regression:

1. Start with a tree leaf that predicts the average value
2. Calculate the residual between observed and predicted data
3. Fit a new tree for the residual
   - If a leaf has multiple different values, use the average
4. The final prediction is: `node + learning_rate × tree_1 + … + learning_rate × tree_n`

### For Classification:

1. Start with a tree leaf that predicts the sigmoid (log odds) → to get the probability
2. Label: Yes = 1, No = 0. Calculate the residual between observed and predicted data
3. Fit a new tree for the residual
   - If a leaf has multiple different values, use weighted average
4. The final prediction is: `node + learning_rate × tree_1 + … + learning_rate × tree_n`
5. Once you calculate the prediction (log odds), make it a probability and return to step 2

## Assumption

1. Loss function should be differentiable

## Advantages

1. Often provides predictive accuracy that cannot be trumped
2. Lots of flexibility — can optimize on different loss functions and provides several hyperparameter tuning options
3. No data pre-processing required — often works great with categorical and numerical values as is
4. Handles missing data — imputation not required

## Disadvantages

1. Gradient Boosting Models will continue improving to minimize all errors. This can overemphasize outliers and cause overfitting
2. Computationally expensive — often require many trees (>1000) which can be time and memory exhaustive
3. The high flexibility results in many parameters that interact and influence heavily the behavior of the approach (number of iterations, tree depth, regularization parameters, etc.). This requires a large grid search during tuning
4. Less interpretative in nature, although this is easily addressed with various tools

## Code Link

[Sklearn GBoost](https://scikit-learn.org/stable/modules/ensemble.html#gradient-boosting)

## Additional References

1. [GB Video Explanation (Regression Part 1)](https://www.youtube.com/watch?v=3CC4N4z3GJc)
2. [GB Video Explanation (Regression Detail Part 2)](https://www.youtube.com/watch?v=2xudPOBz-vs)
3. [GB Video Explanation (Classification Part 3)](https://www.youtube.com/watch?v=jxuNLH5dXCs)
4. [GB Video Explanation (Classification Detail Part 4)](https://www.youtube.com/watch?v=StWY5QWMXCw)
