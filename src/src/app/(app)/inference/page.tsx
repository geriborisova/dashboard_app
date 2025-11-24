import { Badge } from '@/components/badge'
import { Button } from '@/components/button'
import { Divider } from '@/components/divider'
import { Dropdown, DropdownButton, DropdownItem, DropdownMenu } from '@/components/dropdown'
import { Heading } from '@/components/heading'
import { Input, InputGroup } from '@/components/input'
import { Link } from '@/components/link'
import { Select } from '@/components/select'
import { getEvents } from '@/data'
import { getInferanceExhaust } from '@/data'
import { EllipsisVerticalIcon, MagnifyingGlassIcon } from '@heroicons/react/16/solid'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/table'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title:'Inference'
}

export default async function Inference() {
  let inferances = await getInferanceExhaust();

//   const handleSearch=(e)=>{
//     setSearchItem(e.target.value)

//   }
  

  return (
    <>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div className="max-sm:w-full sm:flex-1">
          <Heading>Inference Exhausted Job Counts (24h)</Heading>
          <div className="mt-4 flex max-w-xl gap-4">
            <div className="flex-1">
              <InputGroup>
                <MagnifyingGlassIcon />
                <Input name="search" placeholder="Search App or Tenant&hellip;" />
              </InputGroup>
            </div>
            <div>
              <Select name="sort_by">
                <option value="name">Sort by name</option>
                <option value="date">Sort by date</option>
                <option value="status">Sort by status</option>
              </Select>
            </div>
          </div>
        </div>
        <Button>Refresh</Button>
      </div>
        <Table className="mt-8 [--gutter:--spacing(6)] lg:[--gutter:--spacing(10)]">
               <TableHead>
                 <TableRow>
                   <TableHeader>Tenant Id</TableHeader>
                   <TableHeader>Tenant Name</TableHeader>
                    <TableHeader>App Id</TableHeader>
                   <TableHeader>App Name</TableHeader>
                    <TableHeader>#Requests</TableHeader>
                    <TableHeader>Class</TableHeader>

                 </TableRow>
               </TableHead>
               <TableBody>
                 {inferances.map((inferance, index) => (
                    
                    inferance.map((metric, index) => (
                   <TableRow key={index} title={`Metric #`}>
                     <TableCell>{metric.tenant_id}</TableCell>
                     <TableCell>{metric.tenant_name}</TableCell>
                     <TableCell>{metric.app_id}</TableCell>
                     <TableCell>{metric.app_name}</TableCell>
                     <TableCell>{metric.count}</TableCell>
                     <TableCell>{metric.class}</TableCell>
                   </TableRow>
                    ))
                 ))}
               </TableBody>
             </Table>
    </>
  )
};

