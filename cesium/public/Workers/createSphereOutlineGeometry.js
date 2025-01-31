define([
  './defaultValue-81eec7ed',
  './Matrix2-47e98d76',
  './RuntimeError-8952249c',
  './EllipsoidOutlineGeometry-a0c6c90f',
  './ComponentDatatype-a15c9a19',
  './WebGLConstants-508b9636',
  './GeometryOffsetAttribute-8c5e10db',
  './Transforms-08771371',
  './commonjsHelpers',
  './combine-3c023bda',
  './GeometryAttribute-64b853f6',
  './GeometryAttributes-32b29525',
  './IndexDatatype-f1dcdf35',
], function (e, i, t, n, o, r, s, a, d, l, c, u, m) {
  'use strict'
  function p(t) {
    const o = e.defaultValue(t.radius, 1),
      r = {
        radii: new i.Cartesian3(o, o, o),
        stackPartitions: t.stackPartitions,
        slicePartitions: t.slicePartitions,
        subdivisions: t.subdivisions,
      }
    ;(this._ellipsoidGeometry = new n.EllipsoidOutlineGeometry(r)),
      (this._workerName = 'createSphereOutlineGeometry')
  }
  ;(p.packedLength = n.EllipsoidOutlineGeometry.packedLength),
    (p.pack = function (e, i, t) {
      return n.EllipsoidOutlineGeometry.pack(e._ellipsoidGeometry, i, t)
    })
  const y = new n.EllipsoidOutlineGeometry(),
    G = {
      radius: void 0,
      radii: new i.Cartesian3(),
      stackPartitions: void 0,
      slicePartitions: void 0,
      subdivisions: void 0,
    }
  return (
    (p.unpack = function (t, o, r) {
      const s = n.EllipsoidOutlineGeometry.unpack(t, o, y)
      return (
        (G.stackPartitions = s._stackPartitions),
        (G.slicePartitions = s._slicePartitions),
        (G.subdivisions = s._subdivisions),
        e.defined(r)
          ? (i.Cartesian3.clone(s._radii, G.radii),
            (r._ellipsoidGeometry = new n.EllipsoidOutlineGeometry(G)),
            r)
          : ((G.radius = s._radii.x), new p(G))
      )
    }),
    (p.createGeometry = function (e) {
      return n.EllipsoidOutlineGeometry.createGeometry(e._ellipsoidGeometry)
    }),
    function (i, t) {
      return e.defined(t) && (i = p.unpack(i, t)), p.createGeometry(i)
    }
  )
})
