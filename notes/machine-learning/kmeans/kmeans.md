# K-Means Clustering

## Definition

K-means is an unsupervised **machine learning algorithm** that separates data into K different clusters. It aims to minimize the within-cluster sum of squares (WCSS).

## How it Works

1. Randomly initialize K cluster centers (centroids)
2. Repeat until converge or reach maximum iteration:
   - **Update cluster labels**: Assign points to the nearest cluster center (centroid)
   - **Update cluster centers**: Set center to the mean of each cluster

**How to Find Optimal K:**
1. **Elbow Method** - Uses SSD (Inertia) or MSD (Distortion), sum of squared distance within cluster as criterion
2. **Bayesian Information Criterion (BIC)** - Higher computation cost

## Assumption

1. Limited to spherical shaped clusters
2. Clusters are similar in size
3. Similar density across clusters
4. Works poorly for non-globular shapes


<div style="text-align: center;">
  Size 
</div>

![Cluster Size](/notes/machine-learning/kmeans/images/size.png)

<div style="text-align: center;">
  Density 
</div>

![Cluster Density](/notes/machine-learning/kmeans/images/density.png)

<div style="text-align: center;">
  Non-Globular Shape
</div>

![Cluster non-globular](/notes/machine-learning/kmeans/images/non-globular.png)

## Pros / Advantages

1. Easy to interpret, understand and implement
2. Guarantees convergence
3. Computationally efficient compared to hierarchical clustering when K is small
4. Scales well to large datasets

## Cons / Disadvantages

1. Local optimal (depends on centroid initialization - use K-Means++ to improve)
2. Cannot learn which K to choose (must specify manually)
3. As dataset size increases, algorithm becomes slow
4. Even if there is no logical cluster in the dataset, algorithm will still cluster
5. Centroids can be dragged by outliers, or outliers might get their own cluster

## Code Link

[K-Means Notebook](https://github.com/dwu12/Machine-Learning-Project/blob/main/machine%20learning/k-means.ipynb)

----

## Fuzzy-C-Means

Instead of placing samples in the shortest distance cluster, Fuzzy-C uses probability to indicate all clusters.

For example, sample A may have probability `(97%, 1%, 2%)` with respect to cluster A, B, and C.

This is useful when data points can belong to multiple clusters with different degrees of membership.