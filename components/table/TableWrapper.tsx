'use client'


import { FileType } from '@/typings'
import React, { useEffect, useState } from 'react'
import { Skeleton } from "@/components/ui/skeleton"
import { query, collection, orderBy } from 'firebase/firestore';


import { Button } from '../ui/button'
import { DataTable } from './Table'
import { columns } from './Columns'
import { useUser } from '@clerk/nextjs'

import { db } from '@/firebase'
import { useCollection } from 'react-firebase-hooks/firestore';



function TableWrapper({ skeletonFiles }: { skeletonFiles: FileType[] }) {

    const [initialFile, setInitialFile] = useState<FileType[]>([])
    const { user } = useUser();
    const [sort, setSort] = useState<'asc' | 'desc'>('desc');




    const [docs] = useCollection(
        user &&
        query(
            collection(db, "users", user.id, "files"),
            orderBy("timestamp", sort)
        )
    );



    useEffect(() => {
        if (!docs) return;

        const files: FileType[] = docs.docs.map(doc => ({
            id: doc.id,
            filename: doc.data().filename || doc.id,
            timestamp: new Date(doc.data().timestamp?.seconds * 1000) || undefined,
            fullname: doc.data().fullname,
            downloadURL: doc.data().downloadURL,
            type: doc.data().type,
            size: doc.data().size,

        }))
        setInitialFile(files)

    }, [docs])

    if (docs?.docs.length === undefined) {
        return (
            <div className='text-center'>
                <p>Loading...</p>
            </div>
        )
    }



    return (
        <div className='flex flex-col space-y-5 pb-10'>
            {/* Button */}
            <Button variant='outline' className='w-fit ml-auto' onClick={() => setSort(sort === 'desc' ? 'asc' : 'desc')}> Sort By {sort === 'desc' ? 'newest' : 'oldest'}</Button>
            {/* Data Table */}
            <DataTable columns={columns} data={initialFile} />
        </div>
    )
}

export default TableWrapper
