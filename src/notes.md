# Layout Systems

* Box object model
* Flex Box
* Position

## Box object model

The heigh/width of an element + space around it.

use this to affect the positioning of a single element.

## Flex box

How some number of sibling elements get lad out inside a parent.

Use this to position multiple elements with a common parent.

## Position

How a single element gest laid out inside of a parent.

Use this to override Box object model + flex box.

## Flex properties

* alignItems: default: stretch.
* other values: flex-start, flex-end, center.

* flexDirection: default: column.
* row, from top to bottom.

* justifyContent: default: flex-start
* space-around, space-between.

## Parent prop

* alignItems
* justifyContent
* flexDirection

## Child

* flex // child try to take up as much space as posible
* alignSelf //overwrites the value of alignItems in the parent component.

### Position rule

* posibilites: relative and absolutes
* absolutes: ignores by sibling
* obey child properties like alignItems and others of the father

## extra properties

* top, bottom, right and left
* move the box and is not part of the box object model
* so its more beyond a margin
* its most use it with absolute

## Steps to take a decision

```javascript

//1. Apply box object model rules

if('Is position absolute'){
    // apply flex box rules, ignore siblings
    // apply top, left right, bottom
} else {
    // apply flex box rules, ignore siblings
    // place element inside parent
    // apply top, left right, bottom
}

```
