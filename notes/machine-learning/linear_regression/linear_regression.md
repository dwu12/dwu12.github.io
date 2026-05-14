# Linear Regression

## Definition

Linear Regression is a parametric supervised machine learning algorithm where the model finds the best fit linear line between the independent variables $X$ and dependent variable $y$. It has the form:
$$y = wx + b$$
or for multiple variables:
$$y = w_1x_1 + w_2x_2 + ... + w_nx_n + b$$

## How it Works

Linear regression finds the weights $w$ and bias $b$ that minimize the Mean Squared Error (MSE):
$$MSE = \frac{1}{N} \sum_{i=1}^{N} (y_i - \hat{y}_i)^2$$

1. Closed-form Solution:
$$\theta = (X^T X)^{-1} X^T y$$

2. Or solved iteratively using gradient descent to minimize the cost function.

$$\sum(y-(mx + b))^2$$   


## Assumption (Key 4 Assumptions)

1. **Linear relationship** between X and Y
   - If violated: residuals show pattern instead of random distribution
   - Solutions: non-linear transformation on X, add polynomial features ($X^2$)

2. **No multicollinearity** between features
   - If violated: residuals show cone-shaped pattern
   - Solutions: L1 regularization (Lasso), L2 regularization (Ridge)

3. **Homoscedasticity** - residuals are normally distributed with mean 0 and constant variance
   - If violated: residuals form cone-shape
   - Solutions: transform Y, use weighted regression

4. **No autocorrelation** between errors
   - If violated: pattern in consecutive residuals
   - Solutions: add lags of dependent/independent variables, add seasonal dummy variables

5. X, Y are normally distributed (often not strictly required)

## Pros / Advantages

1. Simple model, easy to interpret, understand and implement
2. Computationally efficient (especially with closed-form solution)
3. Provides coefficient interpretation (direction and magnitude of relationships)
4. Works well when assumptions are met
5. Foundation for more complex models

## Cons / Disadvantages

1. The assumptions often don't hold in real data
2. Hard to determine which feature is important when features are correlated
3. Cannot capture non-linear relationships without feature engineering
4. Sensitive to outliers
5. Requires feature scaling for gradient descent implementation

## Code Link

Linear Regression has a closed-form solution, so no notebook link provided.