# SQL

## **Basic Functions**

For some cases, if there is no record then return a null:

```sql
COALESCE(MAX(your_column), NULL) as column_name
-- Since your_column is null, MAX(your_column) returns null
```

| Function | Description | Example |
|----------|-------------|---------|
| `COALESCE` | Return the first non-null value in a list | `COALESCE(val1, val2, ..., val_n)` |
| `LENGTH` | Return the length of a string | `LENGTH('HI')` |
| `DATEDIFF` | Return the date difference | `DATEDIFF(Date1, Date2)` |
| `SUBDATE` | Return the date subtraction | `SUBDATE(Date, 1)` |
| `CTE` | Create a common table expression | `WITH CTE AS (SELECT ...) SELECT * FROM CTE` |
| `IF` | If condition is true, return A, else B | `IF(condition, A, B)` |
| `%` (MOD) | Get the remainder | `A % 2 = 0` |
| `CASE WHEN` | Multiple if statement | `CASE WHEN cond1 THEN result1 WHEN cond2 THEN result2 ... ELSE result END` |
| `MONTH / DAY / YEAR` | Get month / day / year from a date | `MONTH('2017/08/25')` |
| `DATE` | Extract date from datetime | `DATE('2021-4-3 15:57:28')` |
| `LEFT` | Select first N characters | `LEFT('HAHA', 3)` |
| `UNION / UNION ALL` | Union two tables (ALL allows duplicates) | `SELECT ... FROM t1 UNION SELECT ... FROM t2` |
| `LIMIT OFFSET` | Limit number of rows; OFFSET starts at row offset+1 | `SELECT * FROM t LIMIT 1000 OFFSET 6` |
| `CONCAT` | Concatenate two or more strings | `CONCAT("SQL ", "Tutorial ", "is ", "fun!")` |
| `GROUP_CONCAT` | Concatenate data from multiple rows into one field | `GROUP_CONCAT(col ORDER BY col SEPARATOR ',')` |
| `SUBSTRING` | Extract substring (SQL starts from 1, not 0) | `SUBSTRING(string, start, length)` |
| `UPPER / LOWER` | Convert to uppercase / lowercase | `UPPER(string)` / `LOWER(string)` |
| `LIKE` | Pattern matching: `%` = 0+ chars, `_` = 1 char | `WHERE name LIKE '%name%'` |
| `REGEXP` | Regular expression matching | `WHERE mail REGEXP '^[a-zA-Z]...@leetcode.com'` |
| `DELETE` | Delete records from a table | `DELETE FROM table_name WHERE condition` |
| `LEAST / GREATEST` | Find the least / greatest element | `LEAST(arg1, arg2, ...)` / `GREATEST(arg1, arg2, ...)` |
| `RECURSIVE` | Recursive common table expression | `WITH RECURSIVE cte AS (SELECT 1 UNION ALL SELECT n+1 FROM cte WHERE n < 5) SELECT * FROM cte` |

## **Window Functions**

1. Window Function Format: `rank() over(partition by xxx order by xxx)`
2. When asked for consecutive days, use `LEAD()`
3. If result asks "must contain all three categories. If there are no accounts in a category, return 0", consider use `UNION` - For example `(select "A" as category)`

| Function | Description | Syntax |
|----------|-------------|--------|
| `LEAD` | Get value from the row that succeeds the current row | `LEAD(expr, N, default) OVER (Window_specification)` |
| `LAG` | Get value from the row that precedes the current row | `LAG(expr, N, default) OVER (Window_specification)` |
| `row_number()` | Rank: 1, 2, 3, 4, 5, 6, 7 | `row_number() OVER (Window_specification)` |
| `rank()` | Rank: 1, 2, 3, 3, 5, 6, 7 (gaps) | `rank() OVER (Window_specification)` |
| `dense_rank()` | Rank: 1, 2, 3, 3, 4, 5, 6 (no gaps) | `dense_rank() OVER (Window_specification)` |
| `ROWS` | Window frame bounds | `ROWS BETWEEN lower_bound AND upper_bound` |

**ROWS Window Frame Options:**
- `UNBOUNDED PRECEDING` – All rows before the current row
- `n PRECEDING` – n rows before the current row
- `CURRENT ROW` – Just the current row
- `n FOLLOWING` – n rows after the current row
- `UNBOUNDED FOLLOWING` – All rows after the current row

**ROWS vs RANGE:**
- `ROWS`: Physical rows (e.g., [1,2,3,5,6] for current row)
- `RANGE`: Logical range (e.g., [1,2,3,4,5,6] for current row)