---
sidebar_position: 3
---

# CalculatorModel.java
(generated using [Javadoc to Markdown](https://delight-im.github.io/Javadoc-to-Markdown/))

## `public class CalculatorModel`

This is the model of this MVC implementation of a calculator. It performs the functions of the calculator and keeps track of what the user has entered.

* **Author:** Tom Bylander

## `private double displayValue`

This is the numeric value of the number the user is entering, or the number that was just calculated.

## `private double internalValue`

This is the previous value entered or calculated.

## `private String displayString`

This is the String corresponding to what the user. is entering

## `private String operation`

This is the last operation entered by the user.

## `private boolean start`

This is true if the next digit entered starts a new value.

## `private boolean dot`

This is true if a decimal dot has been entered for the current value.

## `public CalculatorModel()`

Initializes the instance variables.

## `public String getValue()`

* **Returns:** the String value of what was just calculated

  or what the user is entering

## `public void update(String text)`

Updates the values maintained by the calculator based on the button that the user has just clicked.

* **Parameters:** `text` — is the name of the button that the user has just clicked

## `public double operationAdd(double rhs, double lhs)`

Operation to add two numbers. <pre> operationAdd(3,2); // should equal 5.0 </pre>

* **Parameters:**
  * `rhs` — `double` representing the right hand side of the operator
  * `lhs` — `double` representing the left hand side of the operator
* **Returns:** `double`
