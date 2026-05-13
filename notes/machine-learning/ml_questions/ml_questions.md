# ML Questions

## 1. Bias and Variance Trade-off

- **High Variance:** Your model not only learns the internal pattern but also learns from the noise
  - Variance: The amount the target model will change when trained with different data
- **High Bias:** Your model is not complex enough to follow the trend of the data
  - Bias: How different your predicted value is from the true value

**Overfitting:** Low Bias but High Variance
- Try simple model
- Feature Selection (interpretable)
- PCA (less interpretable, may lose some information)
- Regularization (interpretable)

**Underfitting:** High Bias but Low Variance
- Try more data
- Change to complex model
- Add more features

## 2. How to Make Your Machine Learning Model More Reliable?

### Data Quality
1. Clean, diverse, consistent, balanced
2. Distribution, missing value, outliers, correlation
3. Normalization, standardization, encoding
4. Data augmentation:
   - Cropping
   - Add noise
   - Flipping
5. Data sampling:
   - Stratified K-fold
   - K-fold

### Model Selection
1. Complexity, Flexibility, Scalability, Ease of Training and Deployment
2. Based on task type (regression, classification)
3. Based on data type (tabular, image, text, audio, video)
4. Balanced between performance and efficiency

### Model Evaluation
1. Precision, Recall, AUC, Accuracy, etc.
2. MSE, RMSE, R²
3. Regularization:
   - Dropout
   - Batch normalization
   - Ensemble

### Model Optimization
1. Gradient descent, SGD, Adam, RMSprop
2. Grid search, random search
3. Data compression: pruning, quantization, distillation

### Model Monitoring
1. Dashboard, Log
2. Online learning or active learning

### Model Validation
1. A/B Test
2. Usability Test
3. User feedback
