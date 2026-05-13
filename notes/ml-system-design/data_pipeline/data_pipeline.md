> Original Post from: [Chip Huyen](https://huyenchip.com/machine-learning-systems-design/design-a-machine-learning-system.html)

# Data Pipeline

> Original Post from: [Chip Huyen](https://huyenchip.com/machine-learning-systems-design/design-a-machine-learning-system.html)

As machine learning is driven more by data than by algorithms, for every formulation of the problem that you propose, you should also tell your interviewer what kind of data and how much data you need: both for training and for evaluating your systems.

You need to specify the **input and output** of your system. There are many different ways to frame a problem.

Consider the app prediction problem:
- **Naive approach:**
  - Input: user profile (age, gender, ethnicity, occupation, income, technical savviness, etc.) + environment profile (time, location, previous apps used, etc.)
  - Output: a probability distribution for every single app available
  - Problem: too many apps, and when a new app is added, you have to retrain your model.

- **Better approach:**
  - Input: user profile, environment, and app profile
  - Output: binary classification — whether it's a match or not.

## Data Questions to Ask

### Data Availability and Collection

- What kind of data is available?
- How much data do you already have? Is it annotated and if so, how good is the annotation?
- How expensive is it to get the data annotated?
- How many annotators do you need for each sample?
- How to resolve annotators' disagreements?
- What's their data budget?
- Can you utilize weakly supervised or unsupervised methods to automatically create new annotated data from a small amount of humanly annotated data?

### User Data

- What data do you need from users?
- How do you collect it?
- How do you get users' feedback on the system, and if you want to use that feedback to improve the system online or periodically?

### Storage

- Where is the data currently stored: on the cloud, local, or on users' devices?
- How big is each sample?
- Does a sample fit into memory?
- What data structures are you planning on using for the data and what are their tradeoffs?
- How often does the new data come in?

### Data Preprocessing & Representation

- How do you process the raw data into a form useful for your models?
- Will you have to do any feature engineering or feature extraction?
- Does it need normalization?
- What to do with missing data?
- If there's class imbalance in the data, how do you plan on handling it?
- How to evaluate whether your train set and test set come from the same distribution, and what to do if they don't?
- If you have data of different types (texts, numbers, and images), how are you planning on combining them?

### Challenges

Handling user data requires extra care, as any of the many companies that have gotten into trouble for user data mishandling can tell you.

### Privacy

- What privacy concerns do users have about their data?
- What anonymizing methods do you want to use on their data?
- Can you store users' data back to your servers or can only access their data on their devices?

### Biases

- What biases might be present in the data?
- How would you correct the biases?
- Are your data and your annotation inclusive?
- Will your data reinforce current societal biases?

---

## Reference

- [Chip Huyen — Machine Learning Systems Design](https://huyenchip.com/machine-learning-systems-design/design-a-machine-learning-system.html)
