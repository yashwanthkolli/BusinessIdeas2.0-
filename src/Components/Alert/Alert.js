import React from 'react';

import { toast } from 'react-toastify';
import 'react-toastify/dist/react-toastify.esm'

toast.configure()
export default function Alert() {
    return (
        <div>
          {toast('Basic Not')}  
        </div>
    )
}
