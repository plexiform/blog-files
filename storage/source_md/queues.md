---
title: "Stacks & Queues"
date: "1969-06-09"
tags: ["algorithms", "cs"]
published:true
---
to do:
- compare to resizing array
- implement iterables
- write up "deque" and talk about that
  
```java
public class LinkedQueue<Item> {
    // Node is one of:
    // - null
    // - String Node
    
    // initialize first & last nodes
    Node<Item> first, last;

    private static class Node<Item> {
        private Item item;
        Node<Item> next;
    }
    
    // Queues are First In, First Out (FIFO)
    // So enqueueing a node means we initialize that node, then tack it onto the previously last (oldlast) node
    // ofc, last has no next node
    public Item enqueue(Item item) {
        Node<Item> oldlast = last;
        last = new Node<Item>();
        last.item = item;
        last.next = null;
        if (isEmpty()) first = last;
        else oldlast.next = last;
    }
    
    // We're getting rid of the first node, but saving its item so we can return it
    // We reassign the second-to-*first* node as the first node

    public Item dequeue() {
        Item item = first.item;
        first = first.next;
        
        return item;
    }

    
}

```
