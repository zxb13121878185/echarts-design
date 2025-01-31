define([
  './Matrix2-47e98d76',
  './defaultValue-81eec7ed',
  './EllipseOutlineGeometry-9911deb7',
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
  './IndexDatatype-f1dcdf35',
], function (e, t, r, i, n, o, l, a, s, c, d, u, b, m) {
  'use strict'
  return function (i, n) {
    return (
      t.defined(n) && (i = r.EllipseOutlineGeometry.unpack(i, n)),
      (i._center = e.Cartesian3.clone(i._center)),
      (i._ellipsoid = e.Ellipsoid.clone(i._ellipsoid)),
      r.EllipseOutlineGeometry.createGeometry(i)
    )
  }
})
