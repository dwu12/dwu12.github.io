# Serving

> Original Post from: [Chip Huyen](https://huyenchip.com/machine-learning-systems-design/design-a-machine-learning-system.html)

Before serving your trained models to users, you need to think of experiments you need to run to make sure that your models meet all the constraints outlined in the problem setup. You need to think of what feedback you'd like to get from your users, whether to allow users to suggest better predictions, and from user reactions, how to defer whether your model does a good job.

Training and serving aren't two isolated processes. Your model will continuously improve as you get more user feedback.

## Online vs Periodic Training

- Do you want to train your model online with each new data point?
- Do you need to personalize your model to each user?
- How often should you update your machine learning model?

Some changes to your model require more effort than others:
- Adding more training samples: you can continue training your existing model on the new samples.
- Adding a new label class to a neural classification model: you'll likely need to retrain the entire system.

## Model Confidence

If it's a prediction model, you might want to measure your **model's confidence** with each prediction so that you can show only predictions that your model is confident about. You might also want to think about what to do in case of low confidence — e.g. would you refer your user to a human specialist or collect more data from them?

## Inferencing: Device vs Server

**On the user device:**
- Consumes the phone's memory and battery
- Makes it harder to collect user feedback

**On the cloud:**
- Increases the product latency
- Requires you to set up a server to process all user requests
- Might scare away privacy-conscious users

## Interpretability

If your model predicts that someone shouldn't get a loan, that person deserves to know the reason why. You need to consider the performance/interpretability tradeoffs. Making a model more complex might increase its performance but make the results harder to interpret.

## Ablation Studies

For complex models with many different components, it's especially important to conduct **ablation studies** — removing each component while keeping the rest — to determine the efficiency of each component. You might find components whose removals don't significantly reduce the model's performance but significantly reduce its complexity.

## Biases and Misuses

You also need to think about the **potential biases** and **misuses** of your model:
- Does it propagate any gender and racial biases from the data, and if so, how will you fix it?
- What happens if someone with malicious intent has access to your system?

---

## Model Assumptions

The statistician George Box said in 1976 that "*all models are wrong, but some are useful.*" Every single model comes with its own assumptions. It's important to think about what assumptions your model makes and whether your data satisfies those assumptions.

- **Prediction assumption**: Every model that aims to predict an output Y from an input X makes the assumption that it's possible to predict Y based on X.
- **IID**: Neural networks assume that the data points are independent and identically distributed.
- **Smoothness**: Every supervised machine learning method assumes that there's a set of functions that can transform inputs into outputs such that similar inputs are transformed into similar outputs.
- **Tractability**: Let X be the input and Z be the latent representation of X. Every generative model makes the assumption that it's tractable to compute the probability P(Z | X).
- **Boundaries**: A linear classifier assumes that decision boundaries are linear.
- **Conditional independence**: A Naive Bayes classifier assumes that the attribute values are independent of each other given the class.
- **Normally distributed**: Many statistical methods assume that data is normally distributed.

---

## Resources

- [Rules of Machine Learning: Best Practices for ML Engineering](http://martin.zinkevich.org/rules_of_ml/rules_of_ml.pdf) — Martin Zinkevich, 2017
- [How to build scalable Machine Learning systems — Part II: Architecting a Machine Learning Pipeline](https://towardsdatascience.com/architecting-a-machine-learning-pipeline-a847f094d1c7) — Semi Koen, 2017
- [A Brief History of Machine Learning Models Explainability](https://medium.com/@Zelros/a-brief-history-of-machine-learning-models-explainability-f1c3301be9dc) — Zelros AI, 2018
- [The Malicious Use of Artificial Intelligence: Forecasting, Prevention, and Mitigation](https://img1.wsimg.com/blobby/go/3d82daa4-97fe-4096-9c6b-376b92c619de/downloads/MaliciousUseofAI.pdf) — Miles Brundage et al., 2018
- [Fairness in Machine Learning Engineering crash course](https://developers.google.com/machine-learning/crash-course/fairness/video-lecture) — Google

---

## Reference

- [Chip Huyen — Machine Learning Systems Design](https://huyenchip.com/machine-learning-systems-design/design-a-machine-learning-system.html)
