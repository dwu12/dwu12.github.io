# Bayesian Optimization

## Definition

Bayesian optimization is a technique used for the **global (optimum) optimization of black-box functions**.

## Steps

1. Begin by selecting a limited set of sample points randomly.
2. Utilize these points to calculate a **surrogate function** (proxy for the true objective function).
3. Iterate:
   - Use the **acquisition function** and get the next point.
     - Acquisition functions determine the next point or set of points to evaluate in the search space. It quantifies the potential utility or desirability of sampling a particular point based on the current state of the optimization process.
     - **Expected Improvement (EI)** selects points that have the potential to improve upon the best-observed value. It quantifies the expected improvement over the current best value and considers both the mean prediction of the surrogate model and its uncertainty.
   - Re-evaluate the surrogate function.
   - Verify whether the surrogate function remains stable or if the variance falls below a predetermined threshold, or if f is exhausted, depending on your specific design objective.
