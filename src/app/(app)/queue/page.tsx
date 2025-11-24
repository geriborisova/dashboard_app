import { getQueueMetrics } from '@/data'
import { Metadata } from 'next'
import { Heading } from '@/components/heading'
import { Button } from '@headlessui/react'
import { Stat } from '@/app/stat'
import { Table, TableHead, TableHeader, TableRow, TableCell, TableBody } from '@/components/table'




export const metadata: Metadata = {
  title: 'Queues',
}

export default async function Queues() {
  let queues = await getQueueMetrics()
  const lowQueue= 'Low Priority Queue';
  const queue= 'Queue';
  const queueParis='QueueParis';

 const nameShortener=(name:string)=>{
    switch(name){
        case 'usage-metrics-request-low-prio-queue':
            return 'Low Priority Queue';
        case 'usage-metrics-request-queue':
            return 'Queue';
        case 'usage-metrics-request-queue-paris':
            return 'Queue Paris';
        case 'usage-metrics-request-special-queue':
            return 'Special Queue';
        case 'models_released':
            return 'Models Released';
        case 'model_val_perf':
            return 'Performance Eval';
        default:
            return name;
    }
  }


  return (
    <>
      <div className="flex items-end justify-between gap-4">
        <Heading>Queue Metrics</Heading>
        <Button className="-my-0.5">Refresh Data</Button>
      </div>
          <div className="mt-4 grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
                      {queues.map((queue,i) => (

              <Stat key={i} title={nameShortener(queue.queue)} value={(queue.size).toString()} change="+4.5%" />
              
                        ))}

            </div>
    </>
  )
}




