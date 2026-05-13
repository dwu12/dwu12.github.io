# Latent Dirichlet Allocation (LDA)

## Definition

LDA (Latent Dirichlet Allocation) is an unsupervised machine learning algorithm used for **topic modeling**. It discovers abstract topics in a collection of documents.

## How it Works

1. For each document, randomly initialize each word to a topic amongst the K topics where K is the number of predefined topics.
2. For each document d:
   - For each word w in the document, compute:
     - P(topic t | document d): Proportion of words in document d that are assigned to topic t
     - P(word w | topic t): Proportion of assignments to topic t across all documents from words that come from w
3. Reassign topic T' to word w with probability p(t'|d) × p(w|t') considering all other words and their topic assignments
4. The last step is repeated multiple times till we reach a steady state where the topic assignments do not change further. The proportion of topics for each document is then determined from these topic assignments.

## References

1. [LDA Explanation](https://towardsdatascience.com/latent-dirichlet-allocation-lda-9d1cd064ffa2)
2. [LDA with Python Code](https://towardsdatascience.com/topic-modeling-and-latent-dirichlet-allocation-in-python-9bf156893c24)
3. [LDA with Python Code V2](https://www.askpython.com/python/examples/latent-dirichlet-allocation-lda)
