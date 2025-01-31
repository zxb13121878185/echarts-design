define([
  './defaultValue-81eec7ed',
  './Transforms-08771371',
  './Matrix2-47e98d76',
  './RuntimeError-8952249c',
  './ComponentDatatype-a15c9a19',
  './GeometryAttribute-64b853f6',
  './GeometryAttributes-32b29525',
  './commonjsHelpers',
  './combine-3c023bda',
  './WebGLConstants-508b9636',
], function (e, t, n, r, a, i, o, u, c, s) {
  'use strict'
  function m() {
    this._workerName = 'createPlaneOutlineGeometry'
  }
  ;(m.packedLength = 0),
    (m.pack = function (e, t) {
      return t
    }),
    (m.unpack = function (t, n, r) {
      return e.defined(r) ? r : new m()
    })
  const y = new n.Cartesian3(-0.5, -0.5, 0),
    p = new n.Cartesian3(0.5, 0.5, 0)
  return (
    (m.createGeometry = function () {
      const e = new o.GeometryAttributes(),
        r = new Uint16Array(8),
        u = new Float64Array(12)
      return (
        (u[0] = y.x),
        (u[1] = y.y),
        (u[2] = y.z),
        (u[3] = p.x),
        (u[4] = y.y),
        (u[5] = y.z),
        (u[6] = p.x),
        (u[7] = p.y),
        (u[8] = y.z),
        (u[9] = y.x),
        (u[10] = p.y),
        (u[11] = y.z),
        (e.position = new i.GeometryAttribute({
          componentDatatype: a.ComponentDatatype.DOUBLE,
          componentsPerAttribute: 3,
          values: u,
        })),
        (r[0] = 0),
        (r[1] = 1),
        (r[2] = 1),
        (r[3] = 2),
        (r[4] = 2),
        (r[5] = 3),
        (r[6] = 3),
        (r[7] = 0),
        new i.Geometry({
          attributes: e,
          indices: r,
          primitiveType: i.PrimitiveType.LINES,
          boundingSphere: new t.BoundingSphere(n.Cartesian3.ZERO, Math.sqrt(2)),
        })
      )
    }),
    function (t, n) {
      return e.defined(n) && (t = m.unpack(t, n)), m.createGeometry(t)
    }
  )
})
