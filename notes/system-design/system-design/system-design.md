# System Design

## Core Concepts

### Scaling

**Vertical Scaling** — Use bigger servers with bigger capacity. However, you still have a single point of failure.

**Horizontal Scaling** — Easier if your web servers are “stateless”.

| Aspect | Stateless | Stateful |
|--------|------------|----------|
| **Scalability** | Each request is independent and can be handled by any available server | May require more complex mechanisms for load balancing and session management |
| **Fault Tolerance** | Loss of a server doesn’t impact user sessions | Loss of a server can result in loss of session data unless additional measures are in place |
| **Resource Utilization** | Lower — no need to store session data | Higher — requires memory and processing to handle session information |
| **Development Complexity** | Simpler to develop and maintain | Requires careful handling of session data and state management |

### Standby Types

- **Cold Standby**: Periodic backup only
- **Warm Standby**: Has replication in place
- **Hot Standby**: Fully duplicated and ready to take over instantly

### Caching

A cache’s primary purpose is to **increase data retrieval performance** by reducing the need to access the underlying slower storage layer. Trading off capacity for speed, a cache typically stores a subset of data transiently, in contrast to databases whose data is usually complete and durable.

### Content Delivery Networks (CDNs)

Geographic distribution of content, mainly useful for static content.

---

## Interview Strategy

### 1. Clarify Requirements

Think out loud. Start from the customer experience to define your requirements.

**Build YouTube Example:**
- How will users discover videos?
- Do we need a search engine? A recommender engine? An advertising engine?
- Use this to limit the scope of what you’re being asked to do

### 2. Walk Backwards

1. Identify who are the customers
2. What are their use cases
3. Which use cases do you need to concern yourself with

### 3. Define Scaling Requirements

- **Nail down the scale of the system** — Is it hundreds of users? Millions?
  - Horizontal partitioning?
  - How often are users coming? What transaction rate do you need to support?
- **Define the scale of the data** — Hundreds of videos? Millions?
  - YouTube example: Millions of users, millions of videos → horizontally scaled servers and data storage
  - Some internal services might not need this level of complexity — vertical scaling still has its place

### 4. Define Latency

How fast is fast enough? This informs the need for caching and CDN usage.

> Note: Caching is also a tool for scaling, however it reduces load on services & data stores.

**YouTube Example:**
- Caching video recommendations
- Caching video metadata, descriptions

### 5. Define Availability Requirements

- How much downtime can you tolerate?
- Is being down a threat to the business? Or just an inconvenience?
- If being down is a threat to the business, you need to **design for high availability**:
  - Opt for redundancy across many regions/racks/data centers rather than simplicity or frugality

---

## Sketching Out Your Design

1. Start with high-level components
2. Work backwards if you can
3. Then flesh out each component as time permits
4. Identify bottlenecks, maintenance, and cost concerns as you go 

