# refactoring-exercise
A set of code in need of refactoring

## 1. Refactoring
  * **What is it?** Changing code without changing its behaviour
  * **Why?** Usually to improve code quality in some way
  * **Why?** To make it easier/faster to change/extend the code later
  * Refactoring is an investment - spend time now to gain more later
  * If it's an investment, be aware of cost/benefit ratios
  
## 2. Code smells
 * **What are they?** A sign that something might be wrong in a codebase
 * **Key point:** It's not necessarily a problem, just a signal. Trust your instincts
 * Not going to give away the list of smells - we'll discover some together in just a moment
 * These are good triggers for refactoring
 
## 3. How to refactor
 * Remember TDD & Red, Green, Refactor
 * In this case - Green, Refactor
 * Work in very small increments
 * Keep the tests passing as much as possible
 * If the tests are failing for more than 5 minutes, consider undoing and retrying (especially if you don't really know why
 they're failing!)
 * This is yet another example of why tests are so important - refactoring is really scary without a safety harness!

## 4. DEMO!!!
Here are some common code smells (not a complete list!):
 * Long methods/classes/modules
 * Long parameter lists
 * Tiny classes
 * Magic numbers
 * Duplicate code
 * Unclear method/variable/parameter names
 * Excessive case/if-else statements
 * Excessive comments
 * Deep nesting (of branches, loops, etc)
 * Many return statements (great example of something that is sometimes *good* practice. But it can also smell)
 * Feature envy - A class that accesses another one over and over
 * Util class/module
 * 'Speculative Generality'
 * Dead code
 
The above lists are quite specific, but in general there are two principles:
* **When I *read* this code, is it hard to follow?**
* **When I *edit* this code, is it hard to change?**

### How to refactor in the context of a project?
* It should be part of day-to-day work. Remember Red, Green, **Refactor**
* When writing new code, refactor it as you go
* If you have a codebase with lots of tech debt, do it incrementally
* When touching old code, take the opportunity to refactor it too
* Refer to this article which explains it really well, in a visual way: http://ronjeffries.com/xprog/articles/refactoring-not-on-the-backlog/
* Tracking tech debt - use a radar


Final takeaway: **Always leave the codebase in a better state than you found it!**
