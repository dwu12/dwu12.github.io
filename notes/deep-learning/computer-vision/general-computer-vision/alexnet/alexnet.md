# AlexNet (2012)

AlexNet was the winning model in the 2012 ImageNet competition.

## Architecture

- 8 layers (5 convolutional, 3 fully connected)
- Used ReLU activation
- Introduced dropout for regularization

```python
# Simplified architecture
model = nn.Sequential(
    nn.Conv2d(3, 96, kernel_size=11, stride=4),
    nn.ReLU(),
    nn.MaxPool2d(kernel_size=3, stride=2),
    # ... more layers
)
```
