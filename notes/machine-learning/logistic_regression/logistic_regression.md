# Logistic Regression

## Definition

Logistic Regression is also a parametric supervised machine learning algorithm like linear regression but with discrete target variables, usually used for binary classification. It maps all the independent variables linearly to the log odds of certain events happening.  Unlike linear regression, the **logit / log odds** (success / failure)  will form a linear regression line, where y is the probability that is: 

$$log(\frac{y}{1-y}) = wx + b$$

By Transformation we have Sigmoid Function:
$$y = \frac{e^{wx+b}}{1 + e^{-(wx+b)}} = sigmoid(wx+b)$$

Unlike linear regression that has closed form, logistic regression doesn’t have a closed form solution. Instead, cross-entropy loss will be used:

$$
\begin{align*}
    J(w) &= -\frac{1}{m}\sum_{i=1}^m y_i logP(1|x_i,w) + (1 - y_i) log(1- P(0|x_i,w)) \\
        &=-\frac{1}{m}\sum_{i=1}^m y_i log\sigma(w^Tx_i) + (1 - y_i) log(1- \sigma(w^Tx_i))
\end{align*}
$$

## How it Works

1. Compute linear combination: $z = wx + b$
2. Apply sigmoid function to get probability: $y = sigmoid(z)$
3. If $y \geq 0.5$, predict class 1; otherwise predict class 0

**Loss Function:** Cross-Entropy Loss (Log Loss)
$$L = -\frac{1}{N} \sum [y \log(\hat{y}) + (1-y) \log(1-\hat{y})]$$

Unlike linear regression, logistic regression **does not have a closed-form solution**. It must be solved using gradient descent or similar optimization methods.

## Assumption

1. All assumptions from Linear Regression apply
2. Discrete (binary) target variable
3. Usually requires large dataset
4. Features should be linearly separable
5. No multicollinearity between features

## Pros / Advantages

1. Easy to interpret, understand and implement
2. Can easily extend to multi-class (one-vs-all or softmax)
3. Provides the direction of association (positive / negative relationship)
4. Performs well when data is linearly separable
5. Coefficients can be treated as feature importance
6. Outputs probabilistic predictions

## Cons / Disadvantages

1. When # of observations < # of features, easy to overfit
2. Assumptions often don't hold in practice
3. Requires feature scaling
4. Cannot capture complex non-linear relationships without feature engineering
5. Sensitive to outliers

## Multi-class Extension

For multi-class Logistic Regression: Use weighted sum of the one-vs-all (OvA) model.

## Code Link

[Logistic Regression Notebook](https://github.com/dwu12/Machine-Learning-Project/blob/main/machine%20learning/Logistic%20Regression.ipynb)