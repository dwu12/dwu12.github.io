# ML Metrics

## Regression Metrics

### 1. MSE (Mean Squared Error)

- Measures the variance of the residuals
- Shrinks smaller errors and expands bigger errors
- More sensitive to outliers
- Use MSE when you want to penalize larger errors more heavily than smaller errors
- MSE is differentiable, making it suitable for optimization using gradient-based methods

### 2. MAE (Mean Absolute Error)

- Measures the average residual of the dataset
- Use MAE when you want to treat all errors equally regardless of their magnitude
- Less sensitive to outliers compared to MSE
- Easier to interpret since it represents the average absolute deviation

### 3. RMSE (Root Mean Squared Error)

- The standard deviation of the residuals
- Use RMSE when you want to evaluate the performance in the original scale of the problem
- Provides a measure of the average magnitude of the errors in the original unit of the target variable

### 4. R Square

- Formula: $R^2 = 1 - \frac{SSR}{SST}$
- SSR = Sum of Squared Residuals
- SST = Total Sum of Squares
- Measures how much variance of the dependent variable is explained by the independent variables
- R² = 0.6 means 60% of the variance could be explained by the model
- R Square **could be negative** when SSR > SST (model is worse than predicting the average)

### 5. Adjusted R Square

- Formula: $\bar{R}^2 = 1 - \frac{(1 - R^2)(n - 1)}{n - k - 1}$
- K is the number of parameters
- Always less than or equal to R square
- Solves the problem of R² always increasing with additional variables

## Classification Metrics

### Confusion Matrix

|               | Pred Positive | Pred Negative |
|---------------|---------------|---------------|
| **Real Positive** | TP           | FN            |
| **Real Negative** | FP           | TN            |

- **TP** — True Positive
- **FP** (Type 1 Error) — False Positive
- **TN** — True Negative
- **FN** (Type 2 Error) — False Negative

### Accuracy

- How accurate is your model: ratio of correct predictions to the total number of predictions
- Formula: $(TP + TN) / (TP + TN + FP + FN)$

### Precision

- The proportion of positive predictions that are actually correct
- How precise can your model predict all the positive in the dataset (model perspective)
- Formula: $TP / (TP + FP)$

### Recall / Sensitivity / TPR

- The proportion of correct sets that are identified as positive
- How good can the model recall all the positive in the dataset (dataset perspective)
- Formula: $TP / (TP + FN)$

### F1 Score

- Formula: $2 \times Precision \times Recall / (Precision + Recall)$

### Specificity / TNR

- How good can the model recall all the negative in the dataset
- Formula: $TN / (TN + FP)$

### Balanced Accuracy

- Formula: $(Sensitivity + Specificity) / 2$

### ROC-AUC

- **ROC** (Receiver Operating Characteristic): A plot of TPR vs FPR — tells you which threshold is better
- **AUC** (Area Under the Curve): Tells you which model is better
- **TPR**: $TP / (TP + FN)$
- **FPR**: $FP / (FP + TN)$

**Note:** When we increase the threshold:
- TP and FP decrease because less data is classified as positive
- TN and FN increase since more data is classified as negative

## Conclusion

1. MSE and RMSE penalize larger prediction errors than MAE. RMSE is more widely used because it has the same units as the dependent variable.
2. MAE is easier to interpret because it directly takes the average of offsets, while RMSE penalizes higher differences more.
3. MSE is a differentiable function, making it easy to perform mathematical operations. Therefore, RMSE is often used as the default metric for loss functions.
4. R Squared & Adjusted R Squared are used for explaining how well the independent variables explain the variability in the dependent variable.
5. Adjusted R squared takes into account the number of predictor variables and decreases if the increase in R square by the additional variable isn't significant enough.
