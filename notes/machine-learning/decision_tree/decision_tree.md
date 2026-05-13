# Decision Tree

## Definition

Decision Tree is a **non-parametric, greedy supervised learning model** with a flowchart-like tree structure. Each internal node denotes a test on an attribute, each branch represents an outcome of the test, and each leaf holds a class label.

## How it Works

Decision Tree is a greedy algorithm that works as follows:

1. Calculate information gain (or Gini impurity reduction) for each possible split
2. Divide the set with the feature and value that gives the most Information Gain / smallest Gini Impurity
3. Recursively divide created branches until stopping criteria are reached

**Key Metrics:**

**Information Gain (IG):**
$$IG = Entropy(parent) - [weighted \ avg] Entropy(children)$$

**Entropy:**
$$H(X) = -\sum p(x) \log_2 p(x)$$

**Gini Impurity:**
$$Gini = 1 - \sum p(x)^2$$

![Gini Impurity placeholder](./images/gini_impurity.png)

**Stopping Criteria:**
1. Maximum depth
2. Minimum number of samples per leaf
3. Minimum impurity decrease
4. Minimum samples required to split

## Assumption

1. In the beginning, the whole training set is considered as the root
2. Feature values are preferred to be categorical. If continuous, they are discretized prior to building
3. Records are distributed recursively on the basis of attribute values
4. Order to place attributes as root or internal node is determined by statistical approach

## Pros / Advantages

1. Flexible - non-parametric model, no assumptions about data distribution
2. No need for data preparation (feature scaling, normalization)
3. Easy to interpret, understand and implement ("white box" model)
4. Can handle both numerical and categorical features
5. Can capture non-linear relationships
6. Built-in feature selection (most important features appear at top)

## Cons / Disadvantages

1. Can create complex trees leading to overfitting
   - Solution: Pruning - set min samples at leaf node, set max depth
2. Data hungry - needs a lot of data for reliable splits
3. Computation cost is high (searching for best split is expensive)
4. Unstable - small variation in data can create completely different tree
   - Solution: Ensemble methods
5. Hard to find optimal solution (greedy algorithm is locally optimal, not globally optimal)
   - Solution: Ensemble methods
6. May struggle with certain data patterns:
   - XOR problems
   - Multiplexer problems
7. If dataset is imbalanced, can create biased trees

## Code Link

[Decision Tree Notebook](https://github.com/dwu12/Machine-Learning-Project/blob/main/machine%20learning/Decision%20Tree.ipynb)

## Additional Notes

### Pruning Techniques

To prevent overfitting:
- **Pre-pruning:** Set constraints during tree growth (max depth, min samples, etc.)
- **Post-pruning:** Grow full tree then remove branches that don't contribute significantly

### CART Algorithm

Classification and Regression Tree (CART) is the most common decision tree algorithm, using Gini impurity for classification and MSE for regression.