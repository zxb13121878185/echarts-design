define([
  './defaultValue-81eec7ed',
  './FrustumGeometry-baede727',
  './Transforms-08771371',
  './Matrix2-47e98d76',
  './RuntimeError-8952249c',
  './ComponentDatatype-a15c9a19',
  './WebGLConstants-508b9636',
  './commonjsHelpers',
  './combine-3c023bda',
  './GeometryAttribute-64b853f6',
  './GeometryAttributes-32b29525',
  './Plane-3f01019d',
  './VertexFormat-a0b706b0',
], function (e, t, r, a, n, o, u, m, b, s, c, i, d) {
  'use strict'
  return function (r, a) {
    return e.defined(a) && (r = t.FrustumGeometry.unpack(r, a)), t.FrustumGeometry.createGeometry(r)
  }
})
