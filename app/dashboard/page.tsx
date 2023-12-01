

import DropZone from '@/components/DropZone';
import TableWrapper from '@/components/table/TableWrapper';
import { db } from '@/firebase';
import { FileType } from '@/typings';
import { auth } from '@clerk/nextjs'
import { collection, getDocs } from 'firebase/firestore';
import Dropzone from 'react-dropzone';


async function page() {

    const { userId } = auth();

    const docsResults = await getDocs(collection(db, 'users', userId!, "files"))

    const skeletonFiles: FileType[] = docsResults.docs.map(doc => ({
        id: doc.id,
        filename: doc.data().filename || doc.id,
        timestamp: new Date(doc.data().timestamp?.seconds * 1000) || undefined,
        fullname: doc.data().fullname,
        downloadURL: doc.data().downloadURL,
        type: doc.data().type,
        size: doc.data().size,


    }))

    // console.log(skeletonFiles);



    return (
        <div className='border-t'>
            <DropZone />

            <section className='container space-y-5'>
                <h2 className='font-bold'>All Files</h2>

                <div>
                    {/* Tabble wrapper */}
                    <TableWrapper
                        skeletonFiles={skeletonFiles}
                    />

                </div>
            </section>
        </div>
    )
}

export default page
