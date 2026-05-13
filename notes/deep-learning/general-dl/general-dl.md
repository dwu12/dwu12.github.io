# General Deep Learning

## Feedforward Neural Networks

A feedforward neural network is the simplest type of artificial neural network.

```python
import torch.nn as nn
model = nn.Sequential(
    nn.Linear(784, 128),
    nn.ReLU(),
    nn.Linear(128, 10)
)
```

## Mathematical Notation

The sigmoid function is defined as:

$$\sigma(x) = \frac{1}{1 + e^{-x}}$$

The loss function for binary classification:

$$L = -(y \log(\hat{y}) + (1 - y) \log(1 - \hat{y}))$$

Inline math works too: $a^2 + b^2 = c^2$

Or display math:

\[
\mathbf{w}^* = \arg\min_{\mathbf{w}} \sum_{i=1}^{n} (y_i - \mathbf{w}^T \mathbf{x}_i)^2
\]
