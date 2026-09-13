import { useEffect, useRef } from 'react'
import Matter from 'matter-js'
import MatterAttractors from 'matter-attractors'
import MatterWrap from 'matter-wrap'

Matter.use(MatterAttractors)
Matter.use(MatterWrap)

/**
 * Faithful port of the original vanilla `matter.js` file:
 * a central invisible body that smoothly follows the mouse via the
 * matter-attractors plugin, attracting 60 sets of layered polygon+circle
 * shapes scattered across the viewport.
 */
export default function useMatterBackground(containerRef) {
  useEffect(() => {
    if (!containerRef.current) return

    const { Engine, Events, Runner, Render, World, Body, Mouse, Common, Bodies } = Matter

    const width = containerRef.current.clientWidth
    const height = containerRef.current.clientHeight

    const engine = Engine.create()
    engine.world.gravity.y = 0
    engine.world.gravity.x = 0
    engine.world.gravity.scale = 0.1

    const render = Render.create({
      element: containerRef.current,
      engine,
      options: {
        showVelocity: false,
        width,
        height,
        wireframes: false,
        background: 'transparent',
      },
    })

    const runner = Runner.create()

    const world = engine.world
    world.gravity.scale = 0

    const attractiveBody = Bodies.circle(
      width / 2,
      height / 2,
      Math.max(width / 25, height / 25) / 2,
      {
        render: {
          fillStyle: '#000',
          strokeStyle: '#000',
          lineWidth: 0,
        },
        isStatic: true,
        plugin: {
          attractors: [
            function (bodyA, bodyB) {
              return {
                x: (bodyA.position.x - bodyB.position.x) * 1e-6,
                y: (bodyA.position.y - bodyB.position.y) * 1e-6,
              }
            },
          ],
        },
      }
    )

    World.add(world, attractiveBody)

    for (let i = 0; i < 60; i += 1) {
      const x = Common.random(0, width)
      const y = Common.random(0, height)
      const s = Common.random() > 0.6 ? Common.random(10, 80) : Common.random(4, 60)
      const polygonNumber = Common.random(3, 6)

      const body = Bodies.polygon(x, y, polygonNumber, s, {
        mass: s / 20,
        friction: 0,
        frictionAir: 0.02,
        angle: Math.round(Math.random() * 360),
        render: {
          fillStyle: '#222222',
          strokeStyle: '#000000',
          lineWidth: 2,
        },
      })
      World.add(world, body)

      const r = Common.random(0, 1)

      const circleA = Bodies.circle(x, y, Common.random(2, 8), {
        mass: 0.1,
        friction: 0,
        frictionAir: 0.01,
        render: {
          fillStyle: r > 0.3 ? '#27292d' : '#444444',
          strokeStyle: '#000000',
          lineWidth: 2,
        },
      })
      World.add(world, circleA)

      const circleB = Bodies.circle(x, y, Common.random(2, 20), {
        mass: 6,
        friction: 0,
        frictionAir: 0,
        render: {
          fillStyle: r > 0.3 ? '#334443' : '#222222',
          strokeStyle: '#111111',
          lineWidth: 4,
        },
      })
      World.add(world, circleB)

      const circleC = Bodies.circle(x, y, Common.random(2, 30), {
        mass: 0.2,
        friction: 0.6,
        frictionAir: 0.8,
        render: {
          fillStyle: '#191919',
          strokeStyle: '#111111',
          lineWidth: 3,
        },
      })
      World.add(world, circleC)
    }

    const mouse = Mouse.create(render.canvas)

    const handleAfterUpdate = () => {
      if (!mouse.position.x) return
      Body.translate(attractiveBody, {
        x: (mouse.position.x - attractiveBody.position.x) * 0.12,
        y: (mouse.position.y - attractiveBody.position.y) * 0.12,
      })
    }
    Events.on(engine, 'afterUpdate', handleAfterUpdate)

    Runner.run(runner, engine)
    Render.run(render)

    const handleResize = () => {
      if (!containerRef.current || !render.canvas) return
      render.canvas.width = containerRef.current.clientWidth
      render.canvas.height = containerRef.current.clientHeight
    }
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      Events.off(engine, 'afterUpdate', handleAfterUpdate)
      Render.stop(render)
      Runner.stop(runner)
      World.clear(engine.world)
      Engine.clear(engine)
      if (render.canvas) render.canvas.remove()
      render.textures = {}
    }
  }, [containerRef])
}
