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
