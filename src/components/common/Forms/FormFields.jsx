import React from 'react';

export const customFormFields = ({meta, input, ...props}) => {
    return (
        <div>
            <div>
                <textarea {...input} {...props}/>
            </div>
            {meta.touched && meta.error && <span>{meta.error}</span>}
        </div>
    )

}