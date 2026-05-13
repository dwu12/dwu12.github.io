# Python Questions

1. **Generate an array of ‘100’ random numbers sampled from a standard normal distribution using Numpy**  
     
   np.random.rand(100) will create 100 random numbers generated from standard normal distribution with mean 0 and standard deviation 1\.

2. **How to count the occurrence of each value in a numpy array?**  
     
   Use numpy.bincount()   
   \>\>\> arr \= numpy.array(\[0, 5, 5, 0, 2, 4, 3, 0, 0, 5, 4, 1, 9, 9\])   
   \>\>\> numpy.bincount(arr)   
   The argument to bincount() must consist of booleans or positive integers. Negative integers are invalid.

3. **What does ravel() function in numpy do?**

	  
	It combines multiple arrays into a single array

4. **What is the meaning of axis=0 and axis=1?** 

	  
	Axis \= 0 is meant for reading rows, Axis \= 1 is meant for reading columns

5. **Feature Engineering:**   
   1. Selection  
      1. Feature Importance Report (AWS Sagemaker Wranglering)  
   2. Creation (Existing data points into new features, new attributes)  
      1. Combine multiple columns to one column  
   3. Transformation   
      1. Missing Feature Values (Imputation)   
      2. Scaling Numerical features (standardization / normalization)  
      3. Converting Non-numerical features into numerical features (One-hot, label encoder, word2vec, etc)  
   4. [Feature Engineering](https://towardsdatascience.com/feature-engineering-for-machine-learning-3a5e293a5114)

6. **Shuffle the data:** df \= df.sample(frac \= 1\)