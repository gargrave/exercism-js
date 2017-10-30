'use strict'

class Node {
  constructor (value, prev = null, next = null) {
    this.value = value
    this.prev = prev
    this.next = next
  }

  is (other) {
    return this.value === other.value
  }
}

class LinkedList {
  constructor () {
    this.first = null
    this.last = null
  }

  count () {
    let node = this.first
    let count = 0
    while (node) {
      count += 1
      node = node.next
    }
    return count
  }

  print () {
    let node = this.first
    let values = []
    while (node) {
      values.push(node.value)
      node = node.next
    }
    console.log(values.join(' : '))
  }

  push (value) {
    const node = new Node(value, this.last)
    this.first = this.first ? this.first : node
    if (this.last) {
      this.last.next = node
    }
    this.last = node
    return node
  }

  unshift (value) {
    const node = new Node(value, null, this.first)
    if (this.first) {
      this.first.prev = node
    }
    this.last = this.last ? this.last : node
    this.first = node
    return node
  }

  pop () {
    const node = this.last
    if (node) {
      this.last.next = null
      this.last = node.prev
    }
    return node ? node.value : null
  }

  shift () {
    const node = this.first
    if (node) {
      this.first = node.next
      node.next = null
    }
    return node ? node.value : null
  }

  delete (value) {
    let node = this.first
    while (node) {
      if (node.value === value) {
        if (node.prev) {
          node.prev.next = node.next
        }
        if (node.next) {
          node.next.prev = node.prev
        }
        if (node.is(this.first)) {
          this.first = null
        }
        if (node.is(this.last)) {
          this.last = null
        }
        return node
      }
      node = node.next
    }
    return null
  }
}

module.exports = LinkedList
