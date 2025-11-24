import { Stat } from '@/app/stat'
import { Avatar } from '@/components/avatar'
import { Heading, Subheading } from '@/components/heading'
import { Select } from '@/components/select'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, } from '@/components/table'
import { Metadata } from 'next'
import { Button } from '@/components/button'
import { getQueueMetrics } from '@/data'


export const metadata: Metadata = {
  title: 'Queues',
}
export default async function Home() {

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
      <Heading>Good afternoon, User</Heading>
      <div className="mt-8 flex flex-row items-end justify-between">
        <Heading>Queue Metrics</Heading>

        {/* <div className='flex w-100 flex-row items-end space-between'> */}
         <Button >Refresh Data</Button>
        {/* </div> */}
      </div>

  <div className=" mt-10 flex items-end justify-between gap-4">
      </div>
          <div className="mt-4 grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
                      {queues.map((queue,i) => (

              <Stat key={i} title={nameShortener(queue.queue)} value={(queue.size).toString()} change="+4.5%" />
              
                        ))}

            </div>



    </>
  )
}
