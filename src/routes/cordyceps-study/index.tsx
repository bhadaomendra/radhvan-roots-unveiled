import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/cordyceps-study/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/cordyceps-study/"!</div>
}
