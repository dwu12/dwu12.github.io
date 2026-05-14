# DBSCAN 

## Definition

DBSCAN (Density-Based Spatial Clustering of Applications with Noise) is a **density-based clustering technique** that groups data points based on their density and proximity to each other. It forms clusters by identifying **core points** (has at least a specified number of points (MinPts) within Eps) and expanding them to reach neighboring points. Points not part of any cluster are classified as **noise or outliers**.

## Key Terms

- **Epsilon**: The radius of the circle to be created around each data point to check the density
- **MinPoints**: The minimum number of data points required inside that circle for that data point to be classified as a Core point

## How It Works

DBSCAN creates a circle of epsilon radius around every data point and classifies them into three categories:

- **Core Point**: If the circle around it contains at least 'minPoints' number of points
- **Border Point**: If the number of points is less than minPoints, but still reachable from a core point
- **Noise**: If there are no other data points around any data point within epsilon radius


<p align="center">
  <img src="/notes/machine-learning/dbscan/images/dbscan.png" alt="SMOTE" />
</p>

## Steps for DBSCAN

1. Find all the neighbor points within eps and identify the core points (visited with more than MinPts neighbors)
2. For each core point if it is not already assigned to a cluster, create a new cluster
3. Find recursively all its density-connected points and assign them to the same cluster as the core point
   - A point a and b are said to be **density connected** if there exists a point c which has a sufficient number of points in its neighbors and both points a and b are within the eps distance
   - This is a chaining process — if b is a neighbor of c, c is a neighbor of d, and d is a neighbor of e, which in turn is a neighbor of a, then b is a neighbor of a
4. Iterate through the remaining unvisited points in the dataset. Those points that do not belong to any cluster are **noise**.

## Assumptions

1. When data is **not spherical** in shape
2. When the **number of classes is not known** beforehand

## Advantages

1. No need to specify the number of clusters
2. Clusters formed in DBSCAN can be of **any arbitrary shape**
3. Works well with datasets having **noise and outliers**

## Disadvantages

1. Not quite good for **convex data**
2. Need hyperparameter tuning for **Epsilon and MinPoints**

## DBSCAN Hyperparameters

| Hyperparameter | Description |
|----------------|-------------|
| **Epsilon (eps)** | The radius of the circle around each data point |
| **MinPoints** | Minimum number of points required within eps to be a core point |

> Tip: The value of minPoints should be at least one greater than the number of dimensions of the dataset — `minPoints >= dimensions + 1`


## Code

**Input:** Core Points, Neighborhood Radius ($Eps$)
**Initialization:** `current_cluster_label` = 1

```code
# Initial cluster state
current_cluster_label = 1 

# Iterate through every identified core point
for core_point in all_core_points:
    
    # If the point is "fresh" (unlabeled), start a new cluster
    if not core_point.has_label:
        current_cluster_label += 1
        core_point.label = current_cluster_label
    
    # Expand the label to all neighbors within the Eps-radius
    for neighbor in get_neighbors(core_point, radius=Eps):
        if neighbor != core_point and not neighbor.has_label:
            neighbor.label = current_cluster_label
```