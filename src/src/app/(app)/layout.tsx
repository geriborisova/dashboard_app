import { getEvents } from '@/data'
import { ApplicationLayout } from './application-layout'
import { getQueueMetrics } from '@/data'

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  let events = await getEvents()
  let queueMetrics= await getQueueMetrics();

  return <ApplicationLayout events={events} >{children}</ApplicationLayout>
  
}

