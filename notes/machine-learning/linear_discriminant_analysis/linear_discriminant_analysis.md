# Linear Discriminant Analysis (LDA)

## Definition

Linear Discriminant Analysis is a **parametric supervised machine learning algorithm** for dimensionality reduction. It is used for modeling differences in groups i.e. separating two or more classes. It is used to project the features in higher dimension space into a lower dimension space.

LDA is like PCA, but it focuses on maximizing the separability among known categories. Also, LDA creates LD1 accounts for the most variation between classes and LD2 for second most variation, and so on.

## How it Works

LDA works by creating a new axis and projecting the data onto this new axis in a way to maximize the separation of the two categories. The new axis is created according to two criteria (simultaneously):

1. Maximize the distance between the means (μ₁, μ₂)
2. Minimize the variance (which LDA calls scatter) within each category (s₁², s₂²)

**For binary classification:**

LDA creates a single axis that best separates the two classes.

**What if we have more than 2 classes?**

1. Instead of measuring the distance between two means, we need to compute the center mean for all clusters
2. Formula: $\frac{(\mu_1 - \mu)^2 + (\mu_2 - \mu)^2 + (\mu_3 - \mu)^2}{s_1^2 + s_2^2 + s_3^2}$
3. Instead of drawing 1 axis, we will draw 2 axes for 3 classes

## Assumptions

1. **Multivariate normality:** Independent variables are normal for each level of the grouping variable.
2. **Homogeneity of variance/covariance (homoscedasticity):** Variances among group variables are the same across levels of predictors. Can be tested with Box's M statistic. LDA is used when covariances are equal, and QDA may be used when covariances are not equal.
3. **Multicollinearity:** Predictive power can decrease with an increased correlation between predictor variables.
4. **Independence:** Participants are assumed to be randomly sampled, and a participant's score on one variable is assumed to be independent of scores on that variable for all other participants.

## Advantages

1. It is a simple, fast and portable algorithm. It still beats some algorithms (logistic regression) when its assumptions are met.

## Disadvantages

1. Sensitive to outliers
2. Requires # of observations > # of features
3. Use QDA if assumption doesn't hold

## Code Link

[LDA Video Explanation](https://www.youtube.com/watch?v=azXCzI57Yfc)
