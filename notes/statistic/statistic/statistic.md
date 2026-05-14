# Statistics

## Central Limit Theorem (CLT)

If we sample from a population using a sufficiently large sample size, the mean of the samples will be **normally distributed** (assuming true random sampling).

- The mean tends to the mean of the population
- The variance equals the variance of the population divided by the size of the sampling
- Regardless of the distribution of the original population

---

## Probability Sampling

| Method | Description |
|--------|-------------|
| **Simple Random Sampling** | Software is used to randomly select subjects from the whole population |
| **Stratified Sampling** | Subsets are created based on a common factor, and samples are randomly collected from each subgroup (strata) |
| **Cluster Sampling** | The larger dataset is divided into clusters, then a random sampling of clusters is analyzed. The sampling unit is the whole cluster |
| **Multistage Sampling** | A more complicated form of cluster sampling where second-stage clusters are broken out based on a secondary factor |
| **Systematic Sampling** | Setting an interval at which to extract data — e.g., selecting every 10th row in a spreadsheet of 200 items |

---

## Non-Probability Sampling

| Method | Description |
|--------|-------------|
| **Convenience Sampling** | Data is collected from an easily accessible and available group |
| **Consecutive Sampling** | Data is collected from every subject that meets the criteria until the predetermined sample size is met |
| **Purposive / Judgmental Sampling** | The researcher selects the data to sample based on predefined criteria |
| **Quota Sampling** | The researcher ensures equal representation within the sample for all subgroups (random sampling is not used) |

---

## Type I and Type II Error

|                   | Null Hypothesis is True | Null Hypothesis is False |
|-------------------|------------------------|--------------------------|
| **Reject H₀**     | Type I Error (False Positive, α) | Correct Decision (True Positive, 1−β) |
| **Fail to Reject**| Correct Decision (True Negative, 1−α) | Type II Error (False Negative, β) |

- **Type I Error (False Positive)**: Rejecting a null hypothesis when it is actually true. Probability = α
- **Type II Error (False Negative)**: Failing to reject a null hypothesis when it is actually false. Probability = β

---

## Selection Bias

Selection (or sampling) bias occurs when the sample data that is gathered and prepared for modeling has characteristics that are **not representative** of the true, future population of cases the model will see. That is, active selection bias occurs when a subset of the data is systematically (i.e., non-randomly) excluded from analysis.

---

## Common Distributions

### Binomial Distribution

The probabilities of each of the possible numbers of successes in **n trials** for independent events that **each have a probability of p** of occurring.

### Bernoulli Distribution

Single trial version of Binomial Distribution.

### Poisson Distribution

The probability of a given number of events occurring in a **fixed interval of time or space** if these events occur with a known **constant mean rate** and independently of the time since the last event.

---

## P-value

When you perform a hypothesis test in statistics, a **p-value** can help you determine the strength of your results. The p-value is the minimum significance level at which you can reject the null hypothesis. The lower the p-value, the more likely you reject the null hypothesis.

---

## Law of Large Numbers

According to the law, the average of the results obtained from **a large number of trials** should be close to the expected value and will tend to become closer to the expected value as more trials are performed.

---

## Confounding Variables

A **confounder** is a variable that influences both the **dependent variable** and **independent variable**.

---

## Variance Inflation Factor (VIF)

A **VIF** is a measure of the amount of multicollinearity in regression analysis. Multicollinearity exists when there is a correlation between multiple independent variables in a multiple regression model.

| VIF Value | Interpretation |
|-----------|----------------|
| VIF = 1 | Variables are not correlated |
| 1 < VIF < 5 | Variables are moderately correlated |
| VIF > 5 | Variables are highly correlated |
| VIF > 10 | Significant multicollinearity that needs to be corrected |

**Formula:**

$$VIF_j = \frac{1}{1 - R_j^2}$$

where $R_j^2$ is obtained by regressing the *jth* predictor on the remaining predictors. 
