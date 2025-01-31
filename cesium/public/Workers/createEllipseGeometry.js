define([
  './Matrix2-47e98d76',
  './defaultValue-81eec7ed',
  './EllipseGeometry-d0240c57',
  './RuntimeError-8952249c',
  './ComponentDatatype-a15c9a19',
  './WebGLConstants-508b9636',
  './GeometryOffsetAttribute-8c5e10db',
  './Transforms-08771371',
  './commonjsHelpers',
  './combine-3c023bda',
  './EllipseGeometryLibrary-ab838696',
  './GeometryAttribute-64b853f6',
  './GeometryAttributes-32b29525',
  './GeometryInstance-4fbf16ba',
  './GeometryPipeline-7ffd77ba',
  './AttributeCompression-80665726',
  './EncodedCartesian3-d9f5c4a4',
  './IndexDatatype-f1dcdf35',
  './IntersectionTests-bc78300e',
  './Plane-3f01019d',
  './VertexFormat-a0b706b0',
], function (e, t, r, n, a, o, i, s, c, l, b, d, m, f, p, u, y, G, E, C, _) {
  'use strict'
  return function (n, a) {
    return (
      t.defined(a) && (n = r.EllipseGeometry.unpack(n, a)),
      (n._center = e.Cartesian3.clone(n._center)),
      (n._ellipsoid = e.Ellipsoid.clone(n._ellipsoid)),
      r.EllipseGeometry.createGeometry(n)
    )
  }
})
