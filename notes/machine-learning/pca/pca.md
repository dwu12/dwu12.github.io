# PCA (Principal Component Analysis)

## Definition

PCA is an **unsupervised machine learning algorithm** that attempts to reduce the dimensionality or the number of features within a dataset while still retaining as much information as possible. This is accomplished by linearly transforming the data into a new coordinate system where (most of) the variation in the data can be described with fewer dimensions than the initial data.

## Steps

1. **Standardize (center) the data points**
   - If this doesn't hold, then when calculating the covariance, the variance will be extremely large for data with large scale and small for data with small scale. The model might think large scale would have more information but in fact it might not.
2. **Find covariance matrix** from the given data points
3. **Perform eigenvalue decomposition** of the covariance matrix
4. **Sort eigenvalues and eigenvectors**
5. **Keep the m feature vectors** from the sorted eigenvector matrix
6. **Transform the data** for new basis
7. The importance of the feature vector is proportional to the magnitude of eigenvalue

## Assumptions

1. There is correlation between features
2. Linear relationship between features
3. No outliers
4. No missing values
5. Features are scaled

## Advantages

1. Easy to compute and understand
2. Solve the curse of dimensionality

## Disadvantages

1. Less interpretability
2. There is a trade-off between information loss and dimensionality reduction

## Code Link

[PCA Notebook](https://github.com/dwu12/Machine-Learning-Project/blob/main/machine%20learning/PCA.ipynb)
