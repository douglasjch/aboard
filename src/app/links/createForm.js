'use client'

import {useState} from 'react'
import { Alert, Button, Label, TextInput } from 'flowbite-react';
//  import { stringify } from 'postcss';

export default function LinksCreateForm ({didSubmit}) {
    const [results, setResults] = useState(null)
    const [message, setMessage] = useState(null)

    const handleForm = async (event) => {
        event.preventDefault()
        const formData = new FormData(event.target)
        const data = Object.fromEntries(formData)
        console.log(data)
        const JSONData = JSON.stringify(data)
        console.log(JSONData)
        const endpoint = "/api/links/"
            const options = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSONData
            }           
        const response = await fetch(endpoint, options)

        const result = await response.json()
        console.log(result)

        setResults(result)
        if (didSubmit) {
            didSubmit(result)
        }
        if (result.message) {
            setMessage(result.message)
        }        
    };

    return <>
        {message && <Alert color="warning">{message}</Alert>}

         <form className="flex flex-col max-w-md gap-4" onSubmit={handleForm}>

         <div>
            <div className="block mb-2">
            <Label
                htmlFor="url"
                value="Enter a link to shorten"
            />
            </div>
            <TextInput
            id="url"
            placeholder="Your url to shorten"
            required
            name="url"
            type="text"
            />
        </div>
       
        <Button type="submit">
            Shorten
        </Button>

        </form>
               {results && JSON.stringify(results)}
    </>
};
