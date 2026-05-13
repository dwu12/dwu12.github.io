> Original Post from: [Chip Huyen](https://huyenchip.com/machine-learning-systems-design/design-a-machine-learning-system.html)

# Project Setup

> Original Post from: [Chip Huyen](https://huyenchip.com/machine-learning-systems-design/design-a-machine-learning-system.html)

Before you even say neural network, you should first figure out as much detail about the problem as possible.

## Goals

What do you want to achieve with this problem?

For example, if you're asked to create a system to rank what activities to show first in one's newsfeed on Facebook, some of the possible goals are:
- Minimize the spread of misinformation
- Maximize revenue from sponsored content
- Maximize user's engagement

## User Experience

Ask your interviewer for a step-by-step walkthrough of how end users are supposed to use the system.

For example, if you are asked to predict what app a phone user wants to use next, you might want to know when and how the predictions are used. Do you only show predictions when a user unlocks their phone or during the entire time they are on their phone?

## Performance Constraints

- How fast/good does the prediction have to be?
- What's more important: precision or recall?
- What's more costly: false negative or false positive?

For example, if you build a system to predict whether someone is vulnerable to certain medical problems, your system must not have false negatives. However, if you build a system to predict what word a user will type next on their phone, it doesn't need to be perfect to provide value to users.

## Evaluation

How would you evaluate the performance of your system, during both training and inferencing?

During inferencing, a system's performance might be inferred from users' reactions, e.g. how many times they choose the system's suggestions. If this metric isn't differentiable, you need another metric to use during training, e.g. the loss function to optimize.

Evaluation can be very difficult for generative models. For example, if you're asked to build a dialogue system, how do you evaluate your system's responses?

## Personalization

- How personalized does your model have to be?
- Do you need one model for all users, for a group of users, or for each user individually?
- If you need multiple models, is it possible to train a base model on all the data and finetune it for each group or each user?

## Project Constraints

These are the constraints that you have to worry about in the real world but less so during interviews:
- How much time you have until deployment
- How much compute power is available
- What kind of talents work on the project
- What available systems can be used, etc.

---

## Reference

- [Chip Huyen — Machine Learning Systems Design](https://huyenchip.com/machine-learning-systems-design/design-a-machine-learning-system.html)
