'use strict'

const ListUtils = (function () {
  function append (a, b) {
    return [...a, ...b]
  }

  function concat (a, b) {
    return [...a, ...b]
  }

  function filter ([head, ...tail], fn, filtered = []) {
    if (!head) {
      return filtered
    }
    return filter(tail, fn, [
      ...filtered,
      ...(fn(head) ? [head] : [])
    ])
  }

  function map ([head, ...tail], fn, mapped = []) {
    if (!head) {
      return mapped
    }
    return map(tail, fn, [...mapped, fn(head)])
  }

  function length ([head, ...tail], len = 0) {
    if (!head) {
      return len
    }
    return length(tail, len + 1)
  }

  function foldl ([head, ...tail], fn, accum) {
    if (!head) {
      return accum
    }
    return foldl(tail, fn, fn(head, accum))
  }

  function foldr (list, fn, accum) {
    return foldl(reverse(list), fn, accum)
  }

  function reverse ([head, ...tail], reversed = []) {
    if (!head) {
      return reversed
    }
    return reverse(tail, [head, ...reversed])
  }

  return {
    append,
    concat,
    filter,
    map,
    length,
    foldl,
    foldr,
    reverse,
  }
})()

class List {
  constructor (values) {
    this.values = values || []
  }

  append (other) {
    this.values = ListUtils.append(this.values, other.values)
    return this
  }

  concat (other) {
    this.values = ListUtils.concat(this.values, other.values)
    return this
  }

  filter (fn) {
    this.values = ListUtils.filter(this.values, fn)
    return this
  }

  map (fn) {
    this.values = ListUtils.map(this.values, fn)
    return this
  }

  length () {
    return ListUtils.length(this.values)
  }

  foldl (fn, initial) {
    return ListUtils.foldl(this.values, fn, initial)
  }

  foldr (fn, initial) {
    return ListUtils.foldr(this.values, fn, initial)
  }

  reverse () {
    this.values = ListUtils.reverse(this.values)
    return this
  }
}

module.exports = List
