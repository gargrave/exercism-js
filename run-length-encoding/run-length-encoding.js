'use strict'

const splitRawStr = (str) => str.match(/(.)\1*/g)
const splitEncodedStr = (str) => str.match(/((\d+)?[\w\s])/g)
const splitEncodedChunk = (chunk) => chunk.match(/(\d+)|[\w\s]/g)

const Encoder = (function () {
  const encodeChunk = (chunk) => (
    chunk.length === 1
      ? chunk
      : `${chunk.length}${chunk.slice(-1)}`
  )
  
  const encodeAll = ([head, ...tail], encoded = []) => (
    !head
      ? encoded
      : encodeAll(tail, [...encoded, encodeChunk(head)])
  )
  
  const encodeString = (str) => encodeAll(splitRawStr(str)).join('')

  return { 
    encodeString,
  }
})()

const Decoder = (function () {
  const decodeAll = ([head, ...tail], decoded = []) => {
    if (!head) {
      return decoded
    }
    const chunk = splitEncodedChunk(head)
    const decodedChunk = chunk.length === 1
      ? chunk[0]
      : chunk[1].repeat(chunk[0])
    return decodeAll(tail, [...decoded, decodedChunk])
  }
  
  const decodeString = (str) => decodeAll(splitEncodedStr(str)).join('')

  return {
    decodeString,
  }
})()


const RLE = {
  encode (str) {
    if (!str.length) {
      return str
    }
    return Encoder.encodeString(str)
  },

  decode (str) {
    if (!str.length) {
      return str
    }
    return Decoder.decodeString(str)
  }
}

module.exports = RLE
