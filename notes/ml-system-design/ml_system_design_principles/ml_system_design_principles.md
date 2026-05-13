> Original Post from: [Chip Huyen](https://huyenchip.com/machine-learning-systems-design/design-a-machine-learning-system.html)

# ML System Design Principles

> Original Post from: [Chip Huyen](https://huyenchip.com/machine-learning-systems-design/design-a-machine-learning-system.html)

## Iterative Process

Designing a machine learning system is an **iterative process** that contains:

1. Project Setup
2. Data Pipeline
3. Modeling (selecting, training, and debugging your model)
4. Serving (testing, deploying, and maintaining)

The output from one step might be used to update previous steps, for example:

- After examining the available data, you realize it's impossible to get the data needed to solve the problem you previously defined, so you have to frame the problem differently *(From data pipeline to project setup)*
- After training, you realized that you need more data or need to re-label your data *(From modeling & training to data pipeline)*
- After serving your model to initial users, you realize that the way they use your product is very different from the assumptions you made when training the model, so you have to update the model *(Serving to modeling & training)*

---

## Reference

- [Chip Huyen — Machine Learning Systems Design](https://huyenchip.com/machine-learning-systems-design/design-a-machine-learning-system.html)
