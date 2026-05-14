# SVM (Support Vector Machine)

## Definition

SVM is a parametric supervised machine learning algorithm that tries to find a **linear decision boundary (hyperplane)** that best separates the data. The best hyperplane is the one that yields **the largest separation (margin)** between both classes.

**Key Terms:**
- **Margin:** Shortest distance between the observations and the threshold (hyperplane)
- **Support Vectors:** Data points that are closest to the hyperplane; only these points influence the hyperplane
- **Maximum Margin Classifier:** Maximizes distance and keeps both classes equidistant

## How it Works

1. Find the hyperplane that maximizes the margin between two classes
2. Support vectors are the data points that define the margin
3. For non-linearly separable data, use soft margin (allow some misclassification)

**Soft Margin Trade-off:**
- **Hard Margin (C = large):** No misclassification allowed → low bias, high variance
- **Soft Margin (C = small):** Allow misclassification → high bias, low variance
- C is inversely proportional to λ (regularization strength)

**Cost Function (Hinge Loss):** $L(y) = \max(0, 1-ty)$

$$J(w) = \frac{1}{2}||w||^2 + C \left[ \frac{1}{N} \sum \max(0, 1 - y_i(wx_i+b)) \right]$$

$$J(w) = \frac{\lambda}{2}||w||^2 +  \frac{1}{N} \sum \max(0, 1 - y_i(wx_i+b)) $$

Where:
$$\lambda = \frac{1}{c}$$ 
A large $\lambda$ gives large margin and vice versa.

## Kernel Trick (Handling Non-Separable Data)

When data is not linearly separable:

1. Start with data in low dimension
2. Move to higher dimension using a kernel function
3. Find a hyperplane to separate in higher dimension

**Kernel Functions:**
- Polynomial Kernel
- Gaussian Radial Basis Function (RBF)
- Gaussian Kernel
- Sigmoid Kernel

![SVM](/notes/machine-learning/svm/images/svm.png)

## Assumption

1. Assume data is independently and identically distributed
2. $wx + b \geq 1$ if $y = 1$
3. $wx + b \leq -1$ if $y = -1$

**Why 1 and -1?**
- Distance between H1 and H2 is $\frac{2}{||w||}$
- Only depends on $w$, so using ±1 as unit for convenience

## Pros / Advantages

1. Works well on high dimensional data
2. Efficient when # of dimensions > # of samples
3. Memory efficient (only uses support vectors)
4. Versatile through kernel trick for non-linear boundaries
5. Robust to outliers (especially with soft margin)

## Cons / Disadvantages

1. Not suitable for large datasets (computationally expensive)
2. Doesn't work well when dataset has noise
3. Slow to train
4. No probabilistic explanation for classification (unless using Platt scaling)
5. Requires careful choice of kernel and hyperparameters
6. Sensitive to feature scaling

## Code Link

[SVM Notebook](https://github.com/dwu12/Machine-Learning-Project/blob/main/machine%20learning/SVM.ipynb)

----

## Maximum Margin Classifier

The goal is to find the hyperplane equidistant from both classes, maximizing the margin. This is sensitive to outliers - only support vectors matter.

## Hard vs Soft Margin

- **Hard Margin:** No misclassification allowed (assumes linearly separable data)
- **Soft Margin:** Allow some misclassification inside the margin (bias-variance trade-off)

The amount of misclassification allowed can be determined via cross-validation.