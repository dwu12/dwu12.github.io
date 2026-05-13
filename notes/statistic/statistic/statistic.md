# Statistic 

1. **Central Limit Theorem:** If we sample from a population using a sufficiently large sample size, the mean of the samples (also known as the sample population) will be normally distributed (assuming true random sampling).  
   1. The mean tends to the mean of the population   
   2. The variance equal to the variance of the population divided by the size of the sampling.  
   3. Regardless of the distribution of the original population   
        
2. **Probability Sampling:**  
   1. **Simple Random Sampling:** Software is used to randomly select subjects from the whole population.  
        
   2. **Stratified Sampling:** Subsets of the data sets or population are created based on a common factor, and samples are randomly collected from each subgroup. A sample is drawn from each strata (using a random sampling method like simple random sampling or systematic sampling).  
        
   3. **Cluster Sampling:** The larger data set is divided into subsets (clusters) based on a defined factor, then a random sampling of clusters is analyzed. The sampling unit is the whole cluster; Instead of sampling individuals from within each group, a researcher will study whole clusters.  
        
   4. **Multistage Sampling:** A more complicated form of cluster sampling, this method also involves dividing the larger population into a number of clusters. Second-stage clusters are then broken out based on a secondary factor, and those clusters are then sampled and analyzed. This staging could continue as multiple subsets are identified, clustered and analyzed.  
        
   5. **Systematic Sampling:** A sample is created by setting an interval at which to extract data from the larger population – for example, selecting every 10th row in a spreadsheet of 200 items to create a sample size of 20 rows to analyze.

3. **Non-probability Sampling:**  
   1. **Convenience Sampling:** Data is collected from an easily accessible and available group.  
        
   2. **Consecutive Sampling:** Data is collected from every subject that meets the criteria until the predetermined sample size is met.  
        
   3. **Purposive or Judgmental Sampling:** The researcher selects the data to sample based on predefined criteria.  
   4. **Quota Sampling:** The researcher ensures equal representation within the sample for all subgroups in the data set or population (random sampling is not used).  
        
4. **Type I and Type II error**

	

| <div style="width: 200px;">Null Hypothesis is </div> | True | False |
| :---- | :---- | :---- |
| Reject | <ul> <li>Type I error</li>  <li>False Positive</li> <li>Probability \= alpha</li></ul>  | <ul><li>Correct Decision</li> <li>True Positive</li> <li> Probability \= 1 \- beta</li></ul>|
| Not Reject  | <ul><li>Correct Decision</li><li>True Negative</li><li>Probability \= 1 \- alpha</li></ul>  | <ul><li>Type II error</li> <li>False Negative</li> <li> Probability \= beta</li></ul>  |

1. **Selection Bias:** Selection (or ‘sampling’) bias occurs when the sample data that is gathered and prepared for modeling has characteristics that are not representative of the true, future population of cases the model will see. That is, active selection bias occurs when a subset of the data is systematically (i.e., non-randomly) excluded from analysis.

2. **Non-Gaussian Distribution**  
   1. **Binomial Distribution:** The probabilities of each of the possible numbers of successes in **n trials** for independent events that **each have a probability of p** of occurring  
        
   2. **Bernoulli Distribution:** Single trial version Binomial Distribution  
        
   3. **Poisson Distribution:** The probability of a given number of events occurring in a **fixed interval of time or space** if these events occur with a known **constant mean rate** and independently of the time since the last event.  
        
3. **P-value:** When you perform a hypothesis test in statistics, a p-value can help you determine the strength of your results. p-value is the minimum significance level at which you can reject the null hypothesis. The lower the p-value, the more likely you reject the null hypothesis.  
     
4. **Law of Large Numbers:** According to the law, the average of the results obtained from **a large number of trials** should be close to the expected value and will tend to become closer to the expected value as more trials are performed.  
     
5. **Confounding Variables:** a confounder is a variable that influences both the dependent variable and independent variable.  
    
6.  **Variance Inflation Factor (VIF):** A variance inflation factor (VIF) is a measure of the amount of multicollinearity in regression analysis. Multicollinearity exists when there is a correlation between multiple independent variables in a multiple regression model.  
    1. VIF equal to 1 \= variables are not correlated   
    2. VIF between 1 and 5 \= variables are moderately correlated   
    3. VIF greater than 5 \= variables are highly correlated   
    4. VIF is higher than 10, there is significant multicollinearity that needs to be corrected

	  
    In particular, the variance inflation factor for the *jth* predictor is: 
    $$VIF_{j} = \frac{1}{1-R_{j}^2}$$

  			
    where $R^2$ value obtained by regressing the *jth* predictor on the remaining predictors. 
