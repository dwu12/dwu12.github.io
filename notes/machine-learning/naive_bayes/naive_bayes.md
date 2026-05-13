# Naive Bayes

## Definition

Naive Bayes is a **probabilistic supervised model** based on Bayes theorem with **strong independent (naive) assumption** between features.

**Bayes Theorem:**
$$P(y|X) = \frac{P(x|y) P(y)}{P(x)}$$

Where:
- $P(y|X)$ : Posterior probability
- $P(x|y)$ : Likelihood probability
- $P(y)$ : Prior probability
- $P(x)$ : Evidence probability

Given a class variable $y$ and dependent feature vector $x_1$ to $x_n$:
$$P(y|x_1, ..., x_n) = \frac{P(y) P(x_1, ..., x_n|y)}{P(x_1, ..., x_n)}$$

With the naive independent assumption:
$$P(x_i|y)$ for all $i$ are mutually independent

## How it Works

1. Calculate prior probability $P(y)$ for each class
2. Calculate likelihood $P(x|y)$ for each feature given each class
3. For prediction: combine prior and likelihood using Bayes theorem
4. Choose class with highest posterior probability

## Assumption

- **Conditional Independence**: All features X are mutually independent given the class label
- $P(x|y)$ could follow Bernoulli, Binomial, or Gaussian distribution
- This assumption rarely holds in real data (hence "naive")

## Pros / Advantages

1. Easy and fast to understand, implement, and train
2. Performs well when independence assumption holds
3. Requires less data compared to other algorithms
4. Works well with categorical input; assumes normal distribution for numerical input
5. Provides probabilistic predictions

## Cons / Disadvantages

1. The independence assumption usually doesn't hold in real data
2. Requires larger dataset when features are highly correlated
3. If a class has 0 frequency, the whole probability becomes 0 (use Laplace smoothing)
4. Feature values must be categorical or discretized
5. Cannot learn interactions between features

## Code Link

[Naive Bayes Notebook](https://github.com/dwu12/Machine-Learning-Project/blob/main/machine%20learning/Naive%20Bayes.ipynb)