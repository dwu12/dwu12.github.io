# Regularization

## Definition

Regularization is a technique to prevent overfitting by adding a penalty term to the loss function that constrains/regularizes the model coefficients.

## Types of Regularization

### L1 Regularization (Lasso Regression)

Adds sum of absolute values of coefficients as penalty:
$$L = MSE + \lambda \sum|w_i|$$

**Effect:** Can force coefficients to exactly 0, performing feature selection.

### L2 Regularization (Ridge Regression)

Adds sum of squared values of coefficients as penalty:
$$L = MSE + \lambda \sum w_i^2$$

**Effect:** Shrinks coefficients toward 0 but rarely exactly 0. Better when dealing with multicollinearity.

### Elastic Net

Combination of L1 and L2:
$$L = MSE + \lambda_1 \sum|w_i| + \lambda_2 \sum w_i^2$$

**Effect:** Combines benefits of both L1 and L2 regularization.

## How it Works

$\lambda$ (lambda) is a tuning parameter that controls how much we penalize the flexibility of the model:
- Large $\lambda$ → more regularization → smaller coefficients
- Small $\lambda$ → less regularization → coefficients approach OLS estimates

## Visual Interpretation

![Regularization placeholder](./images/regularization_contour.png)

**What do the shapes mean?**
- **Square (L1)**: $|beta_1| + |beta_2| < C$ - corners can touch contour at axes (coefficients become 0)
- **Circle (L2)**: $beta_1^2 + beta_2^2 < C$ - smooth curve, rarely touches axes
- **Contour**: Each line represents equal SSE values; center is the OLS estimate

## When to Use

| Type | Use Case |
|------|----------|
| L1 (Lasso) | Feature selection, when you suspect many irrelevant features |
| L2 (Ridge) | When dealing with multicollinearity, all features somewhat relevant |
| Elastic Net | When you want both feature selection and handling multicollinearity |

## Key Difference Between L1 and L2

1. **L1**: Can force coefficient to exactly 0 (sparse solution)
2. **L2**: Only shrinks coefficients as small as possible (dense solution)
3. **L1 + Elastic Net**: Combines feature selection with stability when features are correlated