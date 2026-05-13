> Original Post from: [Chip Huyen](https://huyenchip.com/machine-learning-systems-design/design-a-machine-learning-system.html)

# Modeling and Training

> Original Post from: [Chip Huyen](https://huyenchip.com/machine-learning-systems-design/design-a-machine-learning-system.html)

Modeling, including model selection, training, debugging and hyper-parameter tuning, is what's often covered in most machine learning courses. However, it's only a small component of the entire process. Some might even argue that it's the easiest component.

---

## Model Selection

Most problems can be framed as one of the common machine learning tasks. You should first figure out the **category of the problem**:

- Is it supervised or unsupervised?
- Is it regression or classification?
- Does it require generation or only prediction?
  - If generation, your models will have to learn the latent space of your data, which is a much harder task than just prediction.

Note: These "or" aren't mutually exclusive. An income prediction task can be regression if we output raw numbers, but if we quantize the income into different brackets and predict the bracket, it becomes a classification problem. Similarly, you can use unsupervised learning to learn labels for your data, then use those labels for supervised learning.

Then you can frame the question as a specific task:
- Object recognition
- Text classification
- Time series analysis
- Recommender systems
- Dimensionality reduction

Keep in mind that there are many ways to frame a problem, and you might not know which way works better until you've tried to train some models.

### Starting Simple

When searching for a solution, your goal isn't to show off your knowledge of the latest buzzwords but to use the **simplest solution that can do the job**. Simplicity serves two purposes:
1. Gradually adding more complex components makes it easier to debug step by step.
2. The simplest model serves as a baseline to which you can compare your more complex models.

### Baselines

There are three different baselines you should think about:

- **Random baseline**: If your model just predicts everything at random, what's the expected performance?
- **Human baseline**: How well would humans perform on this task?
- **Simple heuristic**: For example, for the task of recommending the next app to use on your phone, the simplest model would be to recommend your most frequently used app. If this simple heuristic can predict the next app accurately 70% of the time, any model you build has to outperform it significantly to justify the added complexity.

> "If you think that machine learning will give you a 100% boost, then a heuristic will get you 50% of the way there." — Martin Zinkevich, Google

However, resist the trap of increasingly complex heuristics. If your system has more than 100 nested if-else, it's time to switch to machine learning.

### Non-Deep Learning Models Exist

Don't forget that non-deep learning models exist. Deep learning models are often expensive to train and hard to explain. Most of the time, in production, they are only useful if their performance is unquestionably superior. For example:
- For classification, before using a transformer-based model with 300 million parameters, see if a decision tree works.
- For fraud detection, before wielding complex neural networks, try one of the many popular non-neural network approaches such as k-nearest neighbor classifier.

Most real world problems might not even need deep learning. Deep learning needs data, and to gather data, you might first need users. To avoid the catch, you might want to launch your product without deep learning to gather user data to train your system.

---

## Training

You should be able to anticipate what problems might arise during training and address them. Common problems include:

1. The training loss doesn't decrease
2. Overfitting
3. Underfitting
4. Fluctuating weight values
5. Dead neurons

These problems are covered in Regularization, Training Techniques, Optimization, and Activations.

---

## Debugging

There are many reasons that can cause a model to perform poorly:

- **Theoretical constraints**: e.g. wrong assumptions, poor model/data fit.
- **Poor model implementation**: The more components a model has, the more things that can go wrong.
- **Snobby training techniques**: e.g. call `model.train()` instead of `model.eval()` during evaluation.
- **Poor choice of hyperparameters**: With the same implementation, a set of hyperparameters can give you state-of-the-art results but another set might never converge.
- **Data problems**: Mismatched inputs/labels, over-preprocessed data, noisy data, etc.

Most of the bugs in deep learning are invisible. Your code compiles, the loss decreases, but your model doesn't learn anything or might never reach the performance it's supposed to. Having a procedure for debugging and the discipline to follow that principle are crucial.

### Debugging Techniques

1. **Start simple and gradually add more components**
   - Start with the simplest model, then slowly add more components to see if it helps or hurts performance.
   - If you want to use a BERT-like model, you might want to use only the MLM loss before adding NSP loss.
   - Many people start by cloning an open-source implementation of a state-of-the-art model and plugging in their own data. On the off-chance that it works, it's great. But if it doesn't, it's very hard to debug the system because the problem could have been caused by any of the many components in the model.

2. **Overfit a single batch**
   - Try to overfit a small amount of training data and run evaluation on the same data to make sure it gets to the smallest possible loss.
   - If it's for image recognition, overfit on 10 images and see if you can get the accuracy to be 100%.
   - If it can't overfit a small amount of data, there's something wrong with your implementation.

3. **Set a random seed**
   - There are many factors that contribute to the randomness of your model: weight initialization, dropout, data shuffling, etc.
   - Randomness makes it hard to compare results across different experiments — you have no idea if the change in performance is due to a change in the model or a different random seed.
   - Setting a random seed ensures consistency between different runs. It also allows you to reproduce errors and for other people to reproduce your results.

---

## Hyper-parameter Tuning

With different sets of hyperparameters, the same model can give drastically different performance on the same dataset. Melis et al. showed in their 2018 paper *On the State of the Art of Evaluation in Neural Language Models* that weaker models with well-tuned hyperparameters can outperform stronger, more recent models.

Despite knowing its importance, people without real-world experience often ignore systematic approaches to hyperparameter tuning in favor of manual, gut-feeling approaches. The most popular method is arguably **Graduate Student Descent (GSD)**, a technique in which a graduate student plays around with the hyperparameters until the model works.

Popular methods for hyperparameter search:
1. Random search
2. Grid search
3. Bayesian optimization
4. AutoML (see [*AutoML: Methods, Systems, Challenges*](https://www.automl.org/wp-content/uploads/2018/09/chapter1-hpo.pdf))

The performance of each set of hyperparameters is evaluated on the validation set. Keep in mind that not all hyperparameters are created equal. A model's performance might be more sensitive to the change in one hyperparameter.

---

## Reference

- [Chip Huyen — Machine Learning Systems Design](https://huyenchip.com/machine-learning-systems-design/design-a-machine-learning-system.html)
