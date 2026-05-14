# Scaling

> Original Post from: [Chip Huyen](https://huyenchip.com/machine-learning-systems-design/design-a-machine-learning-system.html)

As models are getting bigger and more resource-intensive, companies care a lot more about training at scale. Scalability is an elaborate topic that merits its own book. This section covers some common issues, but scratches only the surface.

## Data That Doesn't Fit in Memory

It's not uncommon to train a model with a dataset that can't be fit into main memory. This is especially common when dealing with medical data such as CT scans or genome sequences. If you run into this situation, you should know how to preprocess (e.g. zero-centering, normalizing, whitening), shuffle, and batch your data when it doesn't fit into memory. When each sample of your data is too large, your model can handle a very small batch size, which can lead to instability for stochastic gradient descent based optimization.

In extreme cases where a single sample can't even fit into memory, you will have to use techniques such as **gradient checkpointing** — a technique that leverages the memory footprint/computation tradeoff to make your system do more computation but require less memory. You can use the open-source package [`gradient-checkpointing`](https://github.com/cybertronai/gradient-checkpointing) developed by Tim Salimans and Yaroslav Bulatov. According to the authors, "*for the feed-forward model, we were able to fit more than 10x larger models onto our GPU, at only a 20% increase in computation time.*"

## Distributed Training

It's almost the norm now for machine learning engineers and researchers to train their models on multiple machines (CPUs, GPUs, TPUs). Modern machine learning frameworks make it easy to do distributed training. The most common parallelization method with multiple workers is **data parallelism**: you split your data on multiple machines, train your model on all of them, and accumulate gradients.

### Gradient Accumulation Challenges

The most challenging problem is how to accurately and effectively accumulate gradients from different machines:

- **Synchronous SGD (SSGD)**: Your model waits for all machines to finish before updating weights. Stragglers will cause the entire model to slow down.
- **Asynchronous SGD (ASGD)**: Your model updates the weight using gradients from each machine separately. This causes **gradient staleness** because the gradients from one machine has caused the weights to change before the gradients from another machine have come in. How to mitigate gradient staleness is an active area of research.

### Batch Size Scaling

Spreading your model on multiple machines can cause your batch size to be very big. If a machine processes a batch of size 128, then 128 machines process a batch of size 16,384. An intuitive approach is to scale the learning rate on multiple machines to account for more learning at each step, but you can't make the learning rate too big as it will lead to unstable convergence.

### Workload Balancing

With the same model setup, the master worker will use a lot more resources than other workers. The easiest way (but not the most effective) is to use a smaller batch size on the master worker and a larger batch size on other workers.

## Model Parallelism

With **data parallelism**, each worker has its own copy of the model and does all the computation necessary for the model. **Model parallelism** is when different components of your model can be evaluated on different machines. For example, machine 0 handles the computation for the first two layers while machine 1 handles the next two layers. In theory, nothing stops you from using both data parallelism and model parallelism. However, in practice, it can pose a massive engineering challenge.

## Mixed Precision Training

A scaling approach that has gained increasing popularity is to **reduce the precision** during training. Instead of using full 32 bits to represent a floating point number, you can use less bits while maintaining a model's predictive power.

The paper [*Mixed Precision Training*](https://arxiv.org/abs/1710.03740) by Paulius Micikevicius et al. at NVIDIA showed that by alternating between full floating point precision (32 bits) and half floating point precision (16 bits), we can reduce the memory footprint of a model by half, which allows us to double our batch size. Less precision also speeds up computation.

Most modern hardware for deep learning take advantage of mixed and/or reduced precision training:
- **NVIDIA GPUs** (Volta and Turing architecture): Feature Tensor Cores that support mixed precision training — up to 12x higher peak TFLOPS during training compared to standard FP32 on P100.
- **Google TPUs**: Support training with Bfloat16 (16-bit Brain Floating Point Format) — dubbed as "*the secret to high performance on Cloud TPUs.*"

---

## Reference

- [Chip Huyen — Machine Learning Systems Design](https://huyenchip.com/machine-learning-systems-design/design-a-machine-learning-system.html)
