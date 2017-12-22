'use strict'

const ANNOTATION_ENUM = {
  '@notNull': 0,
  '@isNull': 1,
  '@notEmpty': 2,
  '@min': 3,
  '@max': 4,
  '@range': 5,
  '@pattern': 6,
  '@email': 7,
  '@objectId': 8,
  '@String': 9,
  '@Integer': 10,
  '@Array': 11
}

/**
* Parse a str annotation
* ex: '@range(1,2)' ; '@min(5)' ; '@notEmpty'
*
* @name parseAnnotation
* @param {String} strAnnotation - str modeling an annotation
* @return {Object} annotation name, integer value and params
*/
let parseAnnotation = function (strAnnotation) {
  const regex = /(^@[a-zA-Z]+)(\(\s*([^)]+?)\s*\)){0,1}/
  let match = regex.exec(strAnnotation)

  if (!match) throw new Error('Annotation syntaxe is incorrect')
  
  let [, annotationName, , strParams] = match
  let annotation = ANNOTATION_ENUM[annotationName]
  if (annotation === undefined) throw new Error('Annotation is unknown')

  let params = []
  if (strParams) {
    params = strParams.split(/\s*,\s*/)
  }

  return {
    name: annotationName,
    id: annotation,
    params: params
  }
}

module.exports = {
  enum: ANNOTATION_ENUM,
  parse: parseAnnotation
}
