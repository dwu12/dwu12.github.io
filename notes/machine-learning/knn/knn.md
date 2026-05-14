# KNN (K-Nearest Neighbor)

## Definition

KNN (K-Nearest Neighbor) is a **non-parametric supervised learning algorithm**. It is also considered a lazy learner because KNN doesn't have a `fit()` method. KNN can be used for both classification and regression. The way it works is the new outcome values are assigned by **majority vote or average value** around the K nearest neighbors with respect to classification and regression, and the hyperparameter K is defined by us. Normally the closest neighbors are defined by the Euclidean Distance.

## How it Works

1. Choose K (number of nearest neighbors)
2. Calculate distance between the new point and all existing points
3. Find the K nearest neighbors
4. For classification: assign by majority vote among neighbors
5. For regression: take the average value of K neighbors

**Distance Metrics:**
- **Euclidean Distance**: Most common, straight-line distance
- **Manhattan Distance**: Sum of absolute differences
- **Hamming Distance**: For categorical/binary data

Example Hamming Distance:
- `11011001 ⊕ 10011101 = 01000100`
- Since this contains two 1s, the Hamming distance = 2

## Assumption

- Doesn't have strong assumptions related to the data
- Assumes data that are close to each other share similarities

## Pros / Advantages

1. Easy to interpret, understand and implement
2. Non-parametric (distribution-free model) - can be used for variety of problems
3. Few parameters (only K and Distance metric)
4. Works well for multi-class classification

## Cons / Disadvantages

1. Does not work efficiently in large datasets (distance computation is expensive)
2. Doesn't do well on high dimensional data (curse of dimensionality)
3. Easy to overfit:
   - Small K → overfit
   - Large K → underfit
4. Feature Scaling (standardization / normalization) is required
5. Slow prediction for large datasets

## Code Link

[KNN Notebook](https://github.com/dwu12/Machine-Learning-Project/blob/main/machine%20learning/KNN.ipynb)

----

## SMOTE (Synthetic Minority Oversampling Technique)

SMOTE is used to address class imbalance by generating synthetic minority samples.

![SMOTE](/notes/machine-learning/knn/images/smote.png)

**Note:** SMOTE can violate multicollinearity assumption for linear regression because the new generated points lie on the line of existing points.

**How SMOTE works:**
1. Randomly select a minority class sample $x_i$
2. Find the K-nearest neighbors ($x_j$) of $x_i$
3. Draw a line between $x_j$ and $x_i$
4. Generate synthetic minority instance from the line
